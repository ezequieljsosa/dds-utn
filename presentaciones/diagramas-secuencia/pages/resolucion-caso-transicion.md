---
layout: center
---

## 🧐 ¿Qué problema tiene la secuencia anterior?

El diagrama de secuencia unificado cumple con la lógica de negocio, pero **no respeta la directiva de diseño que recomendamos**:

<div class="gamma-card p-6 mt-4 max-w-xl mx-auto text-left space-y-4">
  <p class="text-slate-300">
    🔴 <strong>Acoplamiento visual excesivo:</strong> Mezcla interacciones sincrónicas inmediatas, procesamiento asíncrono de IA en segundo plano y pasarelas de pago en una sola pantalla gigante de 22 pasos difícil de leer en producción.
  </p>
  <p class="text-slate-300">
    🟢 <strong>La Solución (Refactor):</strong> Separar el flujo en dos fases lógicas y temporales independientes para simplificar y modularizar los diagramas.
  </p>
</div>
