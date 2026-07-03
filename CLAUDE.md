# David Ribas — Web del artista

Portfolio del pintor David Ribas (davidribas367@gmail.com). SPA estática sin backend: todo el contenido está escrito directamente en los componentes y las imágenes se sirven desde `public/`.

**Todo el contenido visible de la web está en catalán.** El título del sitio y las rutas también (`/espai`, `/treball`, `/publicacions`, `/contacte`).

## Stack

- React 19 + Vite 7
- Tailwind CSS 4 (vía `@tailwindcss/vite`; el tema se define en `src/index.css` con `@theme`)
- React Router 7 (`BrowserRouter`; `vercel.json` contiene las rewrites de SPA para Vercel)
- Iconos: `lucide-react`

## Comandos

- `npm run dev` — servidor de desarrollo
- `npm run build` — build de producción (a `dist/`)
- `npm run lint` — ESLint

## Estructura

- `src/App.jsx` — rutas. `/obres` redirige a `/treball`; hay página 404 (`NotFound`).
- `src/components/Layout.jsx` — cabecera, navegación y pie comunes.
- `src/components/GalleryGrid.jsx` + `Lightbox.jsx` — galerías de imágenes reutilizables.
- `src/pages/` — una página por ruta. `Home.jsx` contiene la biografía y el currículum completo (exposiciones).
- `public/` — imágenes organizadas por sección: `Artista/`, `Espai/`, `Obres/{Pintura,Grafit,Fotografia}/`, `Publicacions/`.

## Convenciones

- Estética: minimalista, blanco/negro, tipografía Inter, mayúsculas con tracking en títulos. Mantener esa línea.
- Las listas de obras/imágenes se definen como arrays dentro de cada página (p. ej. `categories` en `Obres.jsx`).
- Los cambios de contenido (textos, CV) suelen llegar de la correctora (Pilar) en catalán; aplicarlos literalmente, incluida la puntuación.

## SEO

- La URL base (`https://david-ribas-website.vercel.app`) está en `src/components/Seo.jsx` (`BASE_URL`), `public/robots.txt`, `public/sitemap.xml` e `index.html`. **Al pasar a dominio propio hay que cambiarla en los cuatro sitios.**
- Cada página monta `<Seo title description path>` que actualiza title/description/canonical/OG por ruta (SPA, sin SSR).
- `index.html` lleva los OG/Twitter/JSON-LD (Person) estáticos y el favicon `public/favicon.svg`.

## Estado / pendientes

- Despliegue: Vercel (entorno de pruebas). Aún no está en producción.
- El formulario de contacto no envía nada todavía (pendiente conectar a un servicio).
- Imágenes sin optimizar (varios JPEG/PNG de 2-3 MB) — pendiente conversión a WebP.
- `Pintura5.jpeg` y varias pinturas más son de muy baja resolución (~205 px) — el usuario decidió dejarlo así de momento (2026-07-03).
- La "portada" de Publicacions es la foto de los grafitos del Molí Vinyals sin el texto del título del libro — confirmar con Pilar si es la portada real.
