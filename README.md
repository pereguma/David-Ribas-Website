# Web de David Ribas — davidribas-website

Web-portfolio del pintor **David Ribas** (Barcelona, 1957), artista con casa-taller en Sant Pere de Riudebitlles (Barcelona). Sustituye a la antigua web del hotel HD Riudebitlles (hdriudebitlles.com), cerrado en 2025.

> **Si eres una IA asistiendo en este proyecto**: lee también `CLAUDE.md` (convenciones técnicas y pendientes). Este README da el contexto general.

## Qué es

- Portfolio estático de artista: biografía y currículum de exposiciones, galería de obra (pintura, grafito, fotografía), la casa-taller, el libro *Els grafits dels molins paperers* y contacto.
- **Todo el contenido visible está en catalán.** Rutas: `/` (inicio + CV), `/espai`, `/treball`, `/publicacions`, `/contacte`.
- Sin backend ni base de datos: los textos viven en los componentes y las imágenes en `public/`.

## Stack

React 19 + Vite 7 + Tailwind CSS 4 + React Router 7. Estética minimalista en blanco y negro, tipografía Inter, títulos en mayúsculas con tracking.

## Comandos

```bash
npm install       # primera vez
npm run dev       # desarrollo local
npm run build     # build de producción
npm run lint      # ESLint
```

## Despliegue

- **Producción (entorno de pruebas por ahora)**: https://david-ribas-website.vercel.app
- Vercel está conectado a este repo de GitHub: **cada merge a `main` publica automáticamente** (~1-2 min). Los pushes a ramas generan previews (protegidas con login de Vercel).
- Flujo de trabajo: cambios en rama → pull request → revisión humana → merge a `main`.

## Personas y flujo de contenido

- **Pere** (pereguma / pere.guma97@gmail.com): desarrollo y gestión técnica.
- **Pilar Esteve**: correctora; envía las esmenas de contenido en documentos Word con **tachados, resaltados amarillos y negritas**. ⚠️ Ese formato se pierde al copiar como texto plano: hay que leer los `.docx` originales (el tachado = eliminar, el resaltado = añadido, negritas/cursivas = reproducir en la web). Aplicar sus esmenas literalmente, puntuación incluida.
- **David Ribas**: el artista (davidribas367@gmail.com).

## Estado y pendientes (julio 2026)

- [x] Contenido corregido con las esmenas de Pilar, SEO completo (meta por página, Open Graph, JSON-LD, sitemap, robots, favicon), página 404.
- [ ] Confirmar con Pilar si la imagen de Publicacions debe ser la cubierta editorial del libro (con título); ahora es la foto de los grafitos del Molí Vinyals sin texto.
- [ ] Optimizar imágenes a WebP (hay JPEG/PNG de 2-3 MB; además varias pinturas son de ~205 px y se ven pixeladas — pedir originales).
- [ ] Conectar el formulario de contacto a un servicio de envío (ahora no envía nada).
- [ ] Producción definitiva: dominio propio + traspaso a la familia (ver abajo).

## Dominio y hosting (plan)

- El dominio antiguo **hdriudebitlles.com** está en Arsys y caduca el **13/12/2026**; aún sirve la web vieja del hotel.
- `davidribas.com` y `davidribas.es` están cogidos por terceros; **`davidribas.cat` estaba libre** (julio 2026).
- Recomendación acordada: hosting en **Vercel** (gratuito, deploy automático), registrar dominio nuevo a nombre de David/Pilar y redirigir el antiguo. Al cambiar de dominio, actualizar la URL base en: `src/components/Seo.jsx` (`BASE_URL`), `public/robots.txt`, `public/sitemap.xml` e `index.html`.

## Plan de traspaso (futuro)

El objetivo final es que la familia lo tenga todo a su nombre y pueda mantener la web sin ayuda técnica:

1. Cuenta de GitHub propia de Pilar y transferencia de este repositorio.
2. Cuenta de Vercel propia vinculada a su repo (deploy automático se mantiene).
3. Dominio a su nombre en su propio registrador.
4. Dejarle configurada una herramienta de IA (Claude Code, Codex, Mistral…) conectada al repo, con instrucciones simples, para que pueda editar la web en lenguaje natural: pedir el cambio → verlo publicado → validar.
