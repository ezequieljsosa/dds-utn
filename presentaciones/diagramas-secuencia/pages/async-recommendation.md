## ⚡ ¿Cómo graficar Asincronismo?

### 2. Nuestra Recomendación: Separar los Diagramas
Aunque la sintaxis asíncrona oficial existe, en sistemas distribuidos complejos recomendamos **separar los diagramas** (por ejemplo, graficar la Submisión en un diagrama y el Procesamiento por el Worker en otro).

<div class="gamma-card p-6 mt-6">
  <h3 class="text-indigo-400 mb-2">💡 ¿Por qué separar?</h3>
  <ul>
    <li><strong>Sencillez y Legibilidad:</strong> Evita diagramas gigantes con demasiadas líneas de vida cruzadas.</li>
    <li><strong>Separación de Responsabilidades:</strong> Cada diagrama cuenta una historia completa y aislada (ej. cómo el cliente recibe respuesta inmediata vs. cómo el worker procesa en background).</li>
    <li><strong>Independencia Temporal:</strong> Clarifica visualmente que el proceso emisor no está atado en el tiempo a la ejecución del receptor.</li>
  </ul>
</div>
