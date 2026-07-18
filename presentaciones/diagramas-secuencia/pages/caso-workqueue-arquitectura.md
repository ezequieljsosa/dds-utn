---
class: zoom-diagram-175
---

## 👥 Caso de Estudio 4: Cola de Trabajo (Work Queue)

```mermaid
graph LR
  Cliente["Usuario / Cliente"] -->|HTTP / POST| Gateway["API Gateway"]
  
  subgraph interno [Arquitectura Interna]
    Gateway -->|Guardar Foto| Service["Servicio III - Validación"]
    Service -->|Encolar Validación| Queue[(Work Queue <br> «work queue»)]
    Queue -.->|Repartir Trabajo| Workers["Workers (Instancias)"]
    Workers -->|SQL / Guardar| DB[(Base de Datos Compartida)]
  end
  
  subgraph ext [Externo]
    Workers -->|REST| AI["IA Reconocimiento Imágenes (1+ min)"]
    Workers -->|HTTP Webhook| Operador["Sistema Alertas Operador"]
  end
```

<div class="mt-2 text-xs text-slate-300">
  <strong>¿Qué estamos viendo?</strong><br>
  Dado que la validación por IA toma más de 1 minuto, el flujo se divide en dos fases: la <strong>Submisión</strong> (el Frontend recibe la foto y la encola de forma inmediata) y el <strong>Procesamiento</strong> (un pool de Workers asíncronos distribuidos toma los trabajos de la cola, llama al servicio de IA externa y guarda el resultado en la Base de Datos compartida, notificando si es necesario mediante un Webhook).
</div>
