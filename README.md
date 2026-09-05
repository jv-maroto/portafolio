# Javier Maroto · Portfolio

Portfolio personal de **Javier Maroto / jv-maroto**, desarrollador full-stack Python y administrador de sistemas en Tenerife.

## Diseño y navegación

Paisaje original de primavera con colinas verdes y nubes de estética anime. El panel central muestra cinco capítulos: Sobre mí, Proyectos, Servidor, Trayectoria y Contacto.

- Entrada secuencial de presentación, título, descripción, acciones y tarjeta de perfil.
- Navegación libre por capítulos y enlace al siguiente, con URLs por fragmento y soporte para atrás/adelante.
- Cielo con desplazamiento suave, botón para pausar animaciones y respeto a `prefers-reduced-motion`.
- Diseño adaptable sin scroll interno de tarjeta: el contenido largo utiliza el scroll normal de la página.
- Tema claro de primavera por defecto; modo oscuro y preferencia de idioma ES/EN conservados.
- Se mantienen los nueve proyectos, casos de estudio desplegables, CV en ambos idiomas, enlaces de contacto, stack y tablero GitHub.

## Stack

React 19, Vite 8, Tailwind CSS 4 e i18next. Sin nuevas dependencias de ejecución ni librerías de animación.
IBM Plex Sans y Mono autoalojadas, con Georgia para los titulares. La ilustración se sirve localmente.

## Desarrollo y comprobaciones

Requiere Node 22.12+ (o Node 20.19+), npm y el lockfile incluido.

```sh
npm ci
npm run dev
npm run lint
npm run build
npm run check
```

Vista local: http://127.0.0.1:5173/portafolio/

`npm run check` renderiza los cinco capítulos en ES/EN y comprueba identidad, capítulo activo, presencia de proyectos, CV y recursos locales del build. Requiere ejecutar `npm run build` primero. No sustituye una revisión visual en navegador.

Después de actualizar dependencias en Windows, regenerar el lockfile con `npx npm@10 install --package-lock-only` y verificar `npx npm@10 ci --dry-run`. Esto incluye las dependencias opcionales de Linux que utiliza GitHub Actions.

## Archivos principales

- `src/App.jsx`: navegación por fragmentos, panel central, progreso, foco y pausa de movimiento.
- `src/components/Hero.jsx`: presentación y tarjeta de perfil con entradas escalonadas.
- `src/components/Header.jsx`: marca personal, idioma, tema y contacto.
- `src/components/FeaturedProject.jsx`: proyectos con capturas reales y casos desplegables.
- `src/components/Section.jsx`: títulos y presentación común de capítulos.
- `src/index.css`: paisaje, cielo, colores, tipografía, animaciones y breakpoints.
- `src/data/profile.js`: identidad pública del propietario.
- `src/data/projects.js`, `stack.js`, `socials.js`: proyectos, habilidades y contacto.
- `src/locales/es.json`, `en.json`: textos visibles; el nuevo diseño está en `spring`.
- `public/images/spring-landscape.png`: ilustración original anime, 1672 × 941.
- `public/fonts/`, `public/cv/`, `public/screenshots/`: recursos existentes conservados.
- `.mailmap`: unifica los alias Git del mismo propietario sin cambiar autorías.
- `scripts/check-site.mjs`: comprobaciones de renderizado y recursos.
- `scripts/prepare-history.py`: preparación local de una rama sin atribuciones adicionales; conserva cada árbol de archivos, crea un respaldo Git y nunca modifica el remoto. Requiere Python 3 y Git, solo para mantenimiento del historial.

Ejemplo de secuencia:

```jsx
<p className="reveal" style={{ '--delay': '180ms' }}>
  {t('spring.description')}
</p>
```

Las animaciones solo se activan con `prefers-reduced-motion: no-preference`; el contenido permanece visible sin animación.

## Datos del tablero

La API pública de GitHub aporta repositorios, lenguaje y último push.
`public/now.json` mantiene lo que estoy aprendiendo. Se consulta la versión remota en la rama `main` y se usa el archivo local como respaldo.
Las fuentes y la ilustración no dependen de servicios externos.

## Autoría y contribuciones

La interfaz, los datos de contacto y los metadatos muestran únicamente a Javier Maroto.
El historial recibido contiene alias del mismo autor y atribuciones adicionales en mensajes de commits.
La normalización de nombres en `.mailmap` no elimina atribuciones históricas de GitHub.

Para cambiar los contribuidores calculados a partir del historial, se prepara una rama local con las atribuciones adicionales retiradas y se conserva la historia original. Su publicación exige revisar y autorizar la sustitución de la rama remota. No eliminar permisos de colaboradores ni atribuciones legales de dependencias para conseguir un cambio visual.

Referencia: [Contribuidores de un proyecto — GitHub](https://docs.github.com/en/repositories/viewing-activity-and-data-for-your-repository/viewing-a-projects-contributors).

## Publicación

Se conserva el despliegue existente a GitHub Pages: un push a `main` activa `.github/workflows/deploy.yml`, que instala, comprueba y publica `dist/`.
La base de Vite sigue siendo `/portafolio/`. El favicon, las precargas de fuentes, las capturas, los CV y el paisaje usan esa base correctamente.

Para otro alojamiento bajo la raíz del dominio:

```sh
npm run build -- --base=/
```

Servir únicamente `dist/`. No publicar `node_modules`, archivos de entorno, respaldos Git ni herramientas locales de limpieza de historial.
No se han añadido autoarranques ni tareas programadas.
