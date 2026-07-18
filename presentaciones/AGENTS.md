# Instrucciones de Contexto para Agentes de IA (AGENTS.md)

Este archivo contiene directivas obligatorias para cualquier agente de Inteligencia Artificial (IA) que colabore, modifique o cree archivos en este repositorio.

---

## 📖 1. Lectura Obligatoria Inicial
Antes de realizar cualquier propuesta o modificar código, debes leer los siguientes archivos en la raíz de este directorio:
* **[README.md](./README.md):** Para comprender la estructura de las diapositivas modularizadas y cómo correr la CLI.
* **[TROUBLESHOOTING.md](./TROUBLESHOOTING.md):** Para conocer las restricciones de sintaxis en gráficos Mermaid, problemas de caché, formato y manejo de imágenes.

---

## ⚡ 2. Directivas de Comportamiento del Agente
* **No solicitar confirmación de edición:** No preguntes al usuario si puedes crear, renombrar o modificar archivos de código dentro de la carpeta de trabajo (`presentaciones/`). Procede a editarlos de forma directa e interactiva.
* **Compatibilidad de Node.js:** Todo comando de Slidev o Vite (`dev`, `build`, `export`) debe ejecutarse especificando el PATH a Node.js v26:
  `PATH=$HOME/.nvm/versions/node/v26.5.0/bin:$PATH pnpm ...`
* **Validación obligatoria:** Antes de dar por finalizado tu turno, debes ejecutar la compilación de la filmina modificada para certificar que compila sin errores ni advertencias en la terminal:
  `PATH=$HOME/.nvm/versions/node/v26.5.0/bin:$PATH pnpm slidev build <archivo-modificado>.md`

---

## 🎨 3. Reglas de Estructura, Imagen y Estética (Resumen)
Para mantener la consistencia y evitar errores del compilador, debes adherirte estrictamente a:
* Las **Reglas de Diseño y Estilo** detalladas en [README.md](./README.md#🎨-tipografía-y-estilo-de-diseño-gamma-icebreaker) (tema Gamma "Icebreaker", fuentes, tarjetas glassmorphic, badges).
* La **Restricción de imágenes binarias:** Está estrictamente prohibido agregar archivos de imágenes binarias (`.png`, `.jpg`, `.odp`, etc.). Si necesitas diagramas o ilustraciones, diséñalos en código usando **Mermaid** o sube recursos vectoriales **SVG** en la carpeta `public/`.
* Las **Reglas de Sintaxis Mermaid** detalladas en [TROUBLESHOOTING.md](./TROUBLESHOOTING.md#📊-3-reglas-críticas-para-diagramas-mermaid-en-slidev) (colores hexadecimales de 8 dígitos sin comas en CSS, uso de comillas dobles, evitar HTML anidado y enlaces invisibles de ordenamiento).
