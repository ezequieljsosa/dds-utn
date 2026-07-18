## Caso 3: Secuencia de Publicación Asíncrona

El proceso disparado por el Cron se comunica indirectamente con los consumidores mediante la cola.

```mermaid
sequenceDiagram
  autonumber
  participant Cron as Cron Job (Disparador)
  participant Procesador as Procesador de Pedidos Fallidos
  participant DB as Base de Datos Local
  participant Queue as Broker de Mensajería

  Cron->>Procesador: POST /process-failed
  activate Procesador
  
  Procesador->>DB: Obtener fallidos de ayer (SQL)
  activate DB
  DB-->>Procesador: Lista de pedidos fallidos
  deactivate DB
  
  Procesador->>Queue: Publicar evento (PedidoFallidoEvent)
  activate Queue
  Queue-->>Procesador: ACK (Mensaje recibido)
  deactivate Queue
  
  Procesador-->>Cron: 202 Accepted
  deactivate Procesador
```

<div class="mt-2 text-xs text-slate-400">
  <strong>Explicación del flujo:</strong><br>
  El Cron envía un POST al Procesador. Éste realiza una consulta SQL a la Base de Datos Local para traer los pedidos fallidos del día de ayer. Luego, para cada pedido fallido, publica un evento en el Broker de Mensajería. Al recibir el ACK de confirmación del broker, el Procesador responde de inmediato al Cron con un 202 Accepted.
</div>
