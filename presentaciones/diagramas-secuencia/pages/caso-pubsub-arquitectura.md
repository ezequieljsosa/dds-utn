---
class: zoom-diagram-16
---

## 📬 Caso de Estudio 3: Comunicación Asíncrona (Pub-Sub)

```mermaid
graph LR
  Cron["Cron Job (Disparador)"] -->|HTTP / POST| Procesador["Procesador de Pedidos Fallidos"]
  
  subgraph interno [Interno]
    Procesador -->|AMQP / Publish| Queue[(Broker de Mensajería <br> «publisher/subscriber»)]
    Procesador -->|TCP / SQL| DB[(Base de Datos Local)]
  end
  
  subgraph consumidores [Consumidores Asíncronos]
    Queue -.->|Suscripción| Devoluciones["Servicio de Devoluciones"]
    Queue -.->|Suscripción| Contabilidad["Servicio de Contabilidad (SAP)"]
    Queue -.->|Suscripción| Giftcards["Servicio de Gift Cards"]
  end
```

<div class="mt-4 text-sm text-slate-300">
  <strong>¿Qué estamos viendo?</strong><br>
  Un disparador temporal (Cron) inicia el proceso de limpieza y conciliación. El <em>Procesador de Pedidos Fallidos</em> consulta su <em>Base de Datos Local</em> para obtener la lista de transacciones fallidas de ayer. Luego, en lugar de acoplarse con cada sistema destinatario, publica los eventos en el Broker de Mensajería para que los suscriptores los procesen asíncronamente.
</div>
