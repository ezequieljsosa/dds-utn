## 🛠️ Resolución: Aspectos Teóricos (Punto 1.B y 1.C)

<div class="grid grid-cols-2 gap-4 mt-6">
<div class="gamma-card p-4 text-xs">
  <h3 class="text-indigo-400 mb-2 font-bold">1.B Demoras de la IA e Impacto en Usabilidad</h3>
  <ul class="list-disc pl-4 space-y-2 text-slate-300">
    <li><strong>Estrategia de cola de trabajo (Work Queue):</strong> Para mitigar la demora de más de 1 minuto de la IA externa, el <em>Servicio IV (Contrataciones)</em> recibe la foto, encola la tarea en el Message Broker y responde un <code>202 Accepted</code> de inmediato. Los workers (Servicio III) procesan la cola en segundo plano.</li>
    <li><strong>Impacto en usabilidad:</strong> Evita que la interfaz del usuario se bloquee en una pantalla de espera y previene caídas por timeouts HTTP. Al finalizar el análisis, el backend notifica al frontend mediante WebSockets o Push Notifications para continuar con el pago.</li>
  </ul>
</div>
<div class="gamma-card p-4 text-xs">
  <h3 class="text-indigo-400 mb-2 font-bold">1.C Interacciones Internas (Ejemplos)</h3>
  <ol class="list-decimal pl-4 space-y-2 text-slate-300">
    <li><strong>Servicio IV &rarr; Servicio I (Sync):</strong>
      <br><em>Llamada REST sincrónica</em> para validar el código QR de un equipamiento.
      <br><strong>Mensaje:</strong> <code>GET /equipos/QR-789</code>
      <br><strong>Retorno:</strong> <code>{ "id": "QR-789", "valor_ref": 3000, "tipo": "Vuelo" }</code>
    </li>
    <li><strong>Servicio IV &rarr; Broker &rarr; Servicio III (Async):</strong>
      <br><em>Desacoplado asíncrono</em> mediante Work Queue para encolar la validación inteligente de fotos.
      <br><strong>Mensaje (AMQP/JSON):</strong> <code>{ "solicitud_id": "REQ-101", "foto_url": "s3://docs/equip1.jpg" }</code>
    </li>
  </ol>
</div>
</div>
