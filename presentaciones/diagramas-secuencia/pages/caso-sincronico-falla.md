## Caso 1 - Escenario B: Falla y Compensación

El pago es rechazado y se ejecuta una compensación para liberar el estado de reserva del equipo.

```mermaid
sequenceDiagram
  autonumber
  actor Usuario
  participant Gateway as API Gateway
  participant Contrataciones as Servicio IV (Contrataciones)
  participant Inventario as Servicio I (Inventario)
  participant Riesgo as Servicio II (Motor Riesgo)

  Usuario->>Gateway: POST /seguros (Datos)
  activate Gateway
  Gateway->>Contrataciones: Iniciar contratación
  activate Contrataciones
  
  Contrataciones->>Inventario: POST /reserva (qr_code)
  activate Inventario
  Inventario-->>Contrataciones: 200 OK (Estado Reservado)
  deactivate Inventario

  Contrataciones->>Riesgo: POST /calcular-prima (Valor)
  activate Riesgo
  Riesgo-->>Contrataciones: 402 Payment Required (Rechazo de cobro)
  deactivate Riesgo

  Note over Contrataciones,Inventario: Compensación: Liberar el estado en Inventario
  Contrataciones->>Inventario: POST /reserva/release (qr_code)
  activate Inventario
  Inventario-->>Contrataciones: 200 OK (Reserva Liberada)
  deactivate Inventario

  Contrataciones-->>Gateway: 402 Payment Required
  deactivate Contrataciones
  Gateway-->>Usuario: 402 Payment Required (Pago Rechazado)
  deactivate Gateway
```

<div class="mt-2 text-xs opacity-60">
  ⚠️ <strong>Pregunta disparadora:</strong> ¿Qué pasa si falla la red al intentar liberar el stock? <br>
  * Para profundizar en consistencia distribuida ver: <strong>Patrón Saga (Compensaciones)</strong> e <strong>Idempotencia</strong>.
</div>
