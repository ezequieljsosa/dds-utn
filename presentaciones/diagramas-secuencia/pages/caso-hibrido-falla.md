## Caso 2 - Escenario B: Falla externa y reintentos

La API externa está caída. Registramos el estado pendiente y encolamos un reintento.

```mermaid
sequenceDiagram
  autonumber
  actor Usuario
  participant Service as Servicio IV (Contrataciones)
  participant DB as PostgreSQL
  actor Cobros as Sistema Cobros (Externo)
  participant Queue as Cola de Mensajería

  Usuario->>Service: Pagar Pedido
  activate Service
  
  Service->>DB: Registrar contrato (PENDIENTE)
  activate DB
  DB-->>Service: OK
  deactivate DB

  Service->>Cobros: POST /cobros (ContratacionID, Monto)
  activate Cobros
  Cobros-->>Service: 503 Service Unavailable / Timeout
  deactivate Cobros

  Service->>DB: Registrar estado PENDING_PAYMENT_RETRY
  activate DB
  DB-->>Service: OK
  deactivate DB

  Service->>Queue: Publicar mensaje (ReintentarPagoEvent)
  activate Queue
  Queue-->>Service: ACK (Mensaje Guardado)
  deactivate Queue
  
  Service-->>Usuario: Pago en procesamiento (Diferido)
  deactivate Service
```

<div class="mt-2 text-xs opacity-60">
  ⚠️ <strong>Pregunta disparadora:</strong> ¿Qué pasa si el servidor se apaga justo antes de enviar el mensaje a la cola? <br>
  * Para profundizar en consistencia y resiliencia ver: <strong>Patrón Retry</strong> y <strong>Patrón Transactional Outbox (Doble Escritura)</strong>.
</div>
