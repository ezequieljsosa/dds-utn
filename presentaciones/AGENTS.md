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
  `PATH=$HOME/.nvm/versions/node/v26.5.0/bin:$PATH pnpm slidev build <subcarpeta>/<archivo-modificado>.md`

---

## 🎨 3. Reglas de Estructura, Imagen y Estética (Resumen)
Para mantener la consistencia y evitar errores del compilador, debes adherirte estrictamente a:
* Las **Reglas de Diseño y Estilo** detalladas en [README.md](./README.md#🎨-tipografía-y-estilo-de-diseño-gamma-icebreaker) (tema Gamma "Icebreaker", fuentes, tarjetas glassmorphic, badges).
* **Estructura Aislada por Presentación (Subdirectorios):** Cada presentación DEBE residir dentro de su propio subdirectorio dedicado dentro de `presentaciones/` (ej. `presentaciones/<nombre-tema>/`). Está prohibido mezclar páginas de distintas presentaciones en un directorio `pages/` global o dejar archivos `.md` principales en la raíz. Cada subdirectorio contiene:
  1. `<nombre-tema>.md` (Archivo principal de la presentación).
  2. `pages/` (Directorio exclusivo con sus páginas modularizadas).
  3. `style.css` (Copia del archivo de estilos global en la raíz de la subcarpeta, requerido por Slidev).
* **Sin numeración en nombres de archivos:** Está estrictamente prohibido anteponer números en los nombres de carpetas, presentaciones o páginas (ej. NO usar `01-intro.md` ni `1-portada.md`). Nombra los directorios, archivos y páginas en `pages/` de forma semántica en **kebab-case** (ej. `intro/intro.md`, `clean-architecture/clean-architecture.md`, `portada.md`, `aspectos.md`). Esto permite reordenar e intercambiar clases y diapositivas libremente sin renombrar archivos.
* **Favicon Oficial de la Facultad:** Al crear o modificar una presentación, especifica siempre en el frontmatter principal la URL directa del favicon de la facultad (`favicon: https://www.frba.utn.edu.ar/favicon.ico`).
* La **Restricción de imágenes binarias:** Está estrictamente prohibido agregar archivos de imágenes binarias (`.png`, `.jpg`, `.odp`, etc.). Si necesitas diagramas o ilustraciones, diséñalos en código usando **Mermaid** o sube recursos vectoriales **SVG** en la carpeta `public/` global.
* Las **Reglas de Sintaxis Mermaid** detalladas en [TROUBLESHOOTING.md](./TROUBLESHOOTING.md#📊-3-reglas-críticas-para-diagramas-mermaid-en-slidev) (colores hexadecimales de 8 dígitos sin comas en CSS, uso de comillas dobles, evitar HTML anidado y enlaces invisibles de ordenamiento).
