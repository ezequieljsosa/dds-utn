---
class: zoom-diagram-16
---

## 🛠️ Resolución: Arquitectura de la Solución (ProtegePro)

```mermaid
graph LR
  User(["👤 Usuario Profesional"]) -->|Interactúa| App["Mobile/Web App"]
  
  subgraph cliente [Lado Cliente]
    App
  end
  
  subgraph interno [Arquitectura Interna]
    S4["Servicio IV - Contrataciones"] -->|TCP| DB4[(DB Contrataciones PostgreSQL)]
    
    S4 -->|REST / Sync| S1["Servicio I - Usuarios e Inv."]
    S1 -->|TCP| DB1[(DB Usuarios MongoDB)]
    
    S4 -->|REST / Sync| S2["Servicio II - Motor de Riesgo"]
    
    S4 -->|AMQP / Queue| Broker[(Message Broker)]
    Broker -.->|AMQP / Work Queue| S3["Servicio III - Validación"]
    
    Broker -.->|AMQP / Suscripción| Notificador["Servicio Notificador Web"]
  end
  
  App -->|HTTPS / REST| S4
  
  subgraph ext [Servicios Externos]
    S2 -->|REST / HTTPS| Clima["API Clima"]
    S2 -->|REST / HTTPS| Seguridad["API Seguridad"]
    S3 -->|REST / HTTPS| IA["API IA Reconocimiento (>1 min)"]
    S4 -->|REST / HTTPS| Payment["Gateway de Pago"]
    Notificador -->|HTTP / Webhook| SAP["SAP / Siniestros / Giftcards"]
  end
```

<div class="mt-4 text-xs text-slate-300">
  <strong>Seguridad e Integraciones:</strong><br>
  No se permite la suscripción directa de sistemas externos (SAP, Siniestros) a nuestro Message Broker interno. En su lugar, el <strong>Servicio Notificador Web</strong> se suscribe al broker local y se encarga de empujar (push) las notificaciones hacia las pasarelas externas mediante <strong>HTTP/Webhooks</strong>.
</div>
