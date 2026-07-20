# Presentaciones - Diseño de Sistemas (UTN)

Este proyecto contiene las diapositivas de la materia **Diseño de Sistemas de Información** de la Universidad Tecnológica Nacional (UTN). Está construido utilizando [Slidev](https://sli.dev/), una herramienta de creación de presentaciones basada en Markdown y diseñada para desarrolladores.

El diseño y estilo de las diapositivas está personalizado para emular la estética **"Icebreaker" de Gamma.app** (con un elegante fondo degradado radial oscuro, tipografías modernas y tarjetas con efecto de vidrio templado/glassmorphism).

---

## 🛠️ Estructura del Proyecto

Para mantener las presentaciones aisladas y evitar mezclar páginas de distintas filminas, cada presentación cuenta con su propia subcarpeta dentro de `presentaciones/`:

```bash
presentaciones/
├── public/                     # Directorio de recursos estáticos comunes (logos, imágenes, SVG)
│   └── utn-2.svg               # Favicon y logo vectorial oficial de la facultad
├── style.css                   # Estilos globales compartidos
├── build-all.js                # Script de compilación masiva local (idéntico al CI/CD)
├── build-index.js              # Script para generar la portada/hub de presentaciones
├── package.json                # Dependencias del proyecto y scripts de ejecución
├── AGENTS.md                   # Instrucciones obligatorias para Agentes de IA
├── TROUBLESHOOTING.md          # Guía de solución de problemas y sintaxis Mermaid
├── diagramas-secuencia/        # Subdirectorio de una presentación específica
│   ├── diagramas-secuencia.md  # Archivo principal de la presentación
│   ├── style.css               # Copia de estilos local requerida por Slidev
│   └── pages/                  # Diapositivas modularizadas exclusivas de esta presentación
│       ├── portada.md
│       ├── objetivos.md
│       └── ...
└── README.md                   # Este archivo de documentación
```

---

## 📌 Reglas de Estructura, Favicon y Nombres

1. **Aislamiento por Subdirectorio:** Cada presentación DEBE vivir en su propio subdirectorio dentro de `presentaciones/` con su propio archivo `.md`, su carpeta `pages/` dedicada y una copia de `style.css`.
2. **Sin Numeración:** Ni las carpetas, ni los archivos principales, ni las páginas en `pages/` deben llevar prefijos numéricos (evitar `01-intro`, `1-portada.md`). Utilizar siempre **kebab-case** semántico en minúsculas (ej: `diagramas-secuencia/diagramas-secuencia.md`).
3. **Favicon SVG de la Facultad:** Todas las presentaciones y la portada principal deben utilizar el favicon oficial SVG (`favicon: /utn-2.svg` en el frontmatter del Markdown de cada filmina y `<link rel="icon" type="image/svg+xml" href="./utn-2.svg">` en el hub).

---

## 🚀 Guía de Uso: Ver, Presentar y Modificar

### 1. Requisitos Previos

Antes de ejecutar o compilar, asegúrate de tener instalado [Node.js](https://nodejs.org/) (v20+ recomendado) y el gestor de paquetes [pnpm](https://pnpm.io/):

```bash
# Instalar las dependencias en el directorio presentaciones/
pnpm install
```

### 2. Visualizar y Desarrollar en Vivo (Modo Dev)

Slidev cuenta con **HMR (Hot Module Replacement)**. Al ejecutar este comando, cualquier cambio que guardes en los archivos `.md` o en `style.css` se actualizará de inmediato en tu navegador.

* **Para ejecutar una presentación específica:**
  ```bash
  pnpm slidev --open diagramas-secuencia/diagramas-secuencia.md
  ```
* Accede a la presentación en tu navegador en: [http://localhost:3030](http://localhost:3030)

### 3. Generar el Portal Hub Completo (Idéntico al CI/CD)

Para compilar **todas** las presentaciones locales y generar la página principal (`index.html`) con accesos directos y el favicon institucional (exactamente igual a lo que publica GitHub Pages):

* **Compilar todo e indexar:**
  ```bash
  pnpm run build:all
  ```
* **Compilar y previsualizar en el navegador:**
  ```bash
  pnpm run preview
  ```

### 4. Compilar una Presentación Individual

* **Compilar una presentación específica:**
  ```bash
  pnpm slidev build diagramas-secuencia/diagramas-secuencia.md --out dist/diagramas-secuencia
  ```
* **Generar el portal indexador:**
  ```bash
  node build-index.js
  ```

### 5. Exportar a PDF o Imágenes

* **Exportar a PDF:**
  ```bash
  pnpm slidev export diagramas-secuencia/diagramas-secuencia.md
  ```
* **Exportar a PowerPoint (PPTX):**
  ```bash
  pnpm slidev export diagramas-secuencia/diagramas-secuencia.md --format pptx
  ```

---

## 📝 ¿Cómo agregar una nueva presentación?

Para crear una nueva clase o tema (por ejemplo, `diseno-dominio`), sigue estos pasos:

1. **Crear la subcarpeta:** Crea el directorio `presentaciones/diseno-dominio/`.
2. **Copiar `style.css`:** Copia el archivo `style.css` global dentro de la nueva carpeta (`diseno-dominio/style.css`).
3. **Crear la subcarpeta `pages/`:** Crea `diseno-dominio/pages/` para colocar las filminas modularizadas.
4. **Crear el archivo principal:** Crea `diseno-dominio/diseno-dominio.md` declarando el favicon institucional en su frontmatter:
   ```yaml
   ---
   theme: default
   title: Diseño de Sistemas - Diseño de Dominio
   favicon: /utn-2.svg
   transition: slide-left
   comark: true
   css: unocss
   fonts:
     sans: 'Inter'
     serif: 'Outfit'
     mono: 'Fira Code'
   src: ./pages/portada.md
   ---

   ---
   src: ./pages/contenido.md
   ---
   ```
5. **Ejecutar y probar:**
   ```bash
   pnpm slidev --open diseno-dominio/diseno-dominio.md
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
