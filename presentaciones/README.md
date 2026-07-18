# Presentaciones - Diseño de Sistemas (UTN)

Este proyecto contiene las diapositivas de la materia **Diseño de Sistemas de Información** de la Universidad Tecnológica Nacional (UTN). Está construido utilizando [Slidev](https://sli.dev/), una herramienta de creación de presentaciones basada en Markdown y diseñada para desarrolladores.

El diseño y estilo de las diapositivas está personalizado para emular la estética **"Icebreaker" de Gamma.app** (con un elegante fondo degradado radial oscuro, tipografías modernas y tarjetas con efecto de vidrio templado/glassmorphism).

---

## 🛠️ Estructura del Proyecto

Para evitar duplicar configuraciones por cada clase, el repositorio utiliza un **diseño monorepo centralizado**. Todas las presentaciones residen en este mismo directorio raíz y comparten los estilos, fuentes y dependencias:

```bash
presentaciones/
├── public/                 # Directorio de recursos estáticos comunes (logos, imágenes, diagramas)
├── pages/                  # Subcarpetas donde se modularizan y separan las diapositivas por archivo
│   ├── 1-portada.md
│   ├── 2-aspectos.md
│   └── 3-capas.md
├── style.css               # Estilos globales personalizados (Gamma Icebreaker theme)
├── package.json            # Dependencias del proyecto y scripts de ejecución
├── 01-intro.md             # Archivo de entrada de la presentación 1 (Clase de Introducción)
└── README.md               # Este archivo de documentación
```

---

## 🚀 Guía de Uso: Ver, Presentar y Modificar

### 1. Requisitos Previos

Antes de ejecutar o compilar, asegúrate de tener instalado [Node.js](https://nodejs.org/) y el gestor de paquetes [pnpm](https://pnpm.io/):

```bash
# Instalar las dependencias en la raíz del proyecto
pnpm install
```

### 2. Visualizar y Desarrollar en Vivo (Modo Dev)

Slidev cuenta con **HMR (Hot Module Replacement)**. Al ejecutar este comando, cualquier cambio que guardes en los archivos `.md` o en `style.css` se actualizará de inmediato en tu navegador.

* **Para la Clase de Introducción (`01-intro.md`):**
  ```bash
  pnpm run dev
  ```
* **Para cualquier otra clase nueva que crees (ej. `02-diseno.md`):**
  ```bash
  pnpm slidev --open 02-diseno.md
  ```
* Accede a la presentación en tu navegador en: [http://localhost:3030](http://localhost:3030)

### 3. Compilar para Producción (Build)

Si deseas subir la presentación compilada como una Single Page Application (SPA) estática para hosting (por ejemplo en Netlify, Vercel o GitHub Pages):

* **Compilar la Clase de Introducción:**
  ```bash
  pnpm run build
  ```
* **Compilar una clase específica:**
  ```bash
  pnpm slidev build 02-diseno.md
  ```
* La salida optimizada e interactiva quedará lista en la carpeta `dist/`.

### 4. Exportar a PDF o Imágenes

Para generar una copia estática de tus diapositivas en formato PDF, PPTX o secuencias de imágenes PNG:

* **Exportar la Clase de Introducción a PDF:**
  ```bash
  pnpm run export
  ```
* **Exportar a PDF una clase específica:**
  ```bash
  pnpm slidev export 02-diseno.md
  ```
* **Exportar a PowerPoint (PPTX):**
  ```bash
  pnpm slidev export 02-diseno.md --format pptx
  ```

---

## 📝 ¿Cómo agregar una nueva presentación?

Para crear la siguiente clase (por ejemplo, `02-diseno.md`), sigue estos pasos sencillos:

1. **Crear el archivo Markdown:** Crea un archivo `02-diseno.md` en el directorio raíz.
2. **Configurar el Frontmatter:** Agrega la configuración global al inicio del archivo:
   ```yaml
   ---
   theme: default
   title: Diseño de Sistemas - Clase 2
   transition: slide-left
   comark: true
   css: unocss
   fonts:
     sans: 'Inter'
     serif: 'Outfit'
     mono: 'Fira Code'
   ---
   ```
3. **Escribir el contenido (o modularizarlo):** Puedes escribir todo directamente en el archivo o separarlo por partes en la carpeta `pages/` (ej. creando `pages/2-portada.md`, `pages/2-contenido.md`) y enlazarlas en tu entrada principal:
   ```markdown
   ---
   src: ./pages/2-portada.md
   ---

   ---
   src: ./pages/2-contenido.md
   ---
   ```
4. **Ejecutar y ver cambios:**
   ```bash
   pnpm slidev --open 02-diseno.md
   ```

---

## 🎨 Tipografía y Estilo de Diseño (Gamma Icebreaker)

Para mantener una consistencia visual profesional, utiliza las clases CSS personalizadas configuradas en `style.css`:

* **Fondo degradado:** Aplicado por defecto a todos los slides (radial-gradient del slate al negro).
* **Fuentes:** Títulos principales en **Outfit** y cuerpo de lectura en **Inter**.
* **Efecto de Vidrio (Glassmorphic):** Envuelve tus contenedores con la clase `gamma-card` para lograr bordes sutiles y desenfoques elegantes.
* **Badges Temáticos:** Utiliza la clase `gamma-badge` combinada con su color correspondiente para etiquetas:
  * `badge-presentation` (púrpura)
  * `badge-data` (azul)
  * `badge-concurrency` (amarillo)
  * `badge-domain` (verde)
  * `badge-integration` (cian)
  * `badge-transversal` (rosa)

---

## 🛠️ Guía de Colaboración y Errores Comunes
Si vas a crear nuevas diapositivas, editar diagramas Mermaid o si experimentas algún error de compilación/caché al editar, por favor consulta la [Guía de Resolución de Problemas (Troubleshooting)](./TROUBLESHOOTING.md) en la raíz de este proyecto.
