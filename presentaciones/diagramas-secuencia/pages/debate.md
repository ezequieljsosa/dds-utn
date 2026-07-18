## 🗣️ 5. Debate: ¿Cuándo graficar Infraestructura en Sistemas Complejos?

> "Si tengo 10 microservicios colaborando y cada uno tiene su BD y cola... ¿Grafico todo?"

<div class="grid grid-cols-2 gap-4 mt-6">
<div class="gamma-card p-4">
  <h3 class="text-indigo-400 mb-2">1. La Regla Visual</h3>
  <ul>
    <li>El diagrama debe <strong>entrar en una sola hoja/pantalla</strong> en la medida de lo posible.</li>
    <li>Si requiere scroll horizontal infinito o tiene más de 6-7 líneas de vida, probablemente no comunique efectivamente y/o indica que se debería separar en más diagramas.</li>
  </ul>
</div>
<div class="gamma-card p-4">
  <h3 class="text-indigo-400 mb-2">2. Audiencia y Abstracción</h3>
  <ul>
    <li><strong>Caja Negra (Arquitectura):</strong> Dirigida a otros equipos o stakeholders. Se oculta el estado interno y la infraestructura local de cada servicio.</li>
    <li><strong>Caja Blanca (Diseño Interno):</strong> Un <em>drill-down</em> (detallado) para el propio equipo de desarrollo. Se modela la persistencia, colas locales e integraciones.</li>
  </ul>
</div>
<div class="gamma-card p-4 col-span-2">
  <h3 class="text-indigo-400 mb-2">3. ¿Se pueden mezclar (Caja Negra y Blanca)?</h3>
  <ul>
    <li><strong>Con criterio pragmático:</strong> Sí, a veces queremos diseñar un gráfico mixto (caja negra para los actores externos y caja blanca para detallar el flujo interno de uno de nuestros componentes).</li>
    <li><strong>Condición clave:</strong> Es totalmente válido siempre y cuando ayude a entender una problemática en particular de la clase y el diagrama siga siendo legible y comprensible.</li>
  </ul>
</div>
</div>
