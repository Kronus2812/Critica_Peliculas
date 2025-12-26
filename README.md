# TuReseña - Plataforma de Críticas de Películas

![Movie Review App](https://via.placeholder.com/1200x300/2d3436/ffffff?text=TuRese%C3%B1a+-+Movie+Reviews)

## Descripción

Aplicación web de reseñas cinematográficas donde los usuarios pueden explorar catálogos de películas, ver detalles completos, reproducir trailers y publicar sus propias críticas con calificaciones. Todo funciona 100% client-side con persistencia en LocalStorage.

**Objetivo educativo:** Proyecto frontend para practicar JavaScript vanilla, manipulación del DOM, almacenamiento local, APIs de YouTube y preprocesadores CSS.

---

## Características Principales

### Catálogo de Películas

- Grid responsive con 8 películas precargadas
- Cards con póster, título, año, género y sinopsis
- Ordenamiento automático por año (más recientes primero)
- Diseño adaptable a móviles y desktop

### Sistema de Búsqueda y Filtros

- Búsqueda en tiempo real por título, género o palabras en sinopsis
- Filtro por año de estreno
- Botón para limpiar filtros
- Sin necesidad de presionar "Buscar" (actualización inmediata)

### Página de Detalle

- Vista completa de información de la película
- Integración de trailer de YouTube embebido
- Lista de actores principales
- Botón para regresar al catálogo

### Sistema de Reseñas

- Publicación de reseñas con nombre, comentario y calificación (1-5 estrellas)
- Persistencia en LocalStorage (las reseñas quedan guardadas localmente)
- Visualización en orden cronológico inverso (más recientes arriba)
- Contador de estrellas visual (★/☆)
- Sin límite de reseñas por película

---

## Demo de Películas Incluidas

- Avatar (2025)
- Batman Part II (2025)
- Deadpool x Wolverine (2024)
- Duna: Parte 2 (2024)
- Formula 1 (2025)
- Inside Out 2 (2024)
- Tron: Ares (2025)
- Godzilla vs Kong (2024)

---

## Arquitectura Técnica

### Stack Frontend

**HTML5**
- Estructura semántica con dos páginas principales
- `index.html`: catálogo con grid de películas
- `movie.html`: vista detallada individual

**SASS/SCSS**
- Variables para colores y espaciados
- Anidación de selectores
- Interpolación de valores
- Compilación a CSS vanilla
- Dos hojas de estilo:
  - `style.scss`: estilos del catálogo
  - `style-movie.scss`: estilos de detalle

**JavaScript Vanilla (ES6+)**
- Sin frameworks ni librerías externas
- Módulo único `script.js` con:
  - Array de películas (fuente de datos)
  - Renderizado dinámico del DOM
  - Lógica de filtros y búsqueda
  - Manejo de LocalStorage para reseñas
  - Integración con YouTube API

### Estructura de Archivos

```
Critica_Peliculas/
├── img/                    # Pósters de películas
│   ├── Av.jpg
│   ├── Bat.jpg
│   ├── Dead.jpg
│   └── ...
├── index.html              # Página principal (catálogo)
├── movie.html              # Página de detalle
├── script.js               # Lógica de la aplicación
├── style.scss              # Estilos catálogo (source)
├── style.css               # Estilos catálogo (compilado)
├── style-movie.scss        # Estilos detalle (source)
├── style-movie.css         # Estilos detalle (compilado)
└── README.md
```

---

## Instalación y Uso

### Opción 1: Servidor Local Simple

```bash
# Clonar repositorio
git clone https://github.com/Kronus2812/Critica_Peliculas.git
cd Critica_Peliculas

# Abrir con Live Server (VS Code) o cualquier servidor local
# O simplemente abrir index.html en el navegador
```

### Opción 2: Con Compilación de SASS

Si quieres modificar los estilos SCSS:

```bash
# Instalar Sass (si no lo tienes)
npm install -g sass

# Compilar SASS en modo watch (auto-recompila al guardar)
sass --watch style.scss:style.css style-movie.scss:style-movie.css

# O compilar manualmente
sass style.scss style.css
sass style-movie.scss style-movie.css
```

### Acceso

Abrir `index.html` en cualquier navegador moderno (Chrome, Firefox, Edge, Safari).

---

## Cómo Funciona

### Flujo de Navegación

1. **Index (Catálogo)**
   - Usuario ve grid de películas
   - Puede buscar por texto o filtrar por año
   - Click en "Ver detalle" navega a `movie.html?id=<id-pelicula>`

2. **Movie Detail**
   - Script lee parámetro `id` de la URL
   - Busca película en array `MOVIES`
   - Renderiza información completa
   - Carga trailer de YouTube
   - Lee reseñas de LocalStorage y las muestra

3. **Publicar Reseña**
   - Usuario completa formulario (nombre, texto, rating)
   - Script valida campos
   - Guarda en LocalStorage con clave `reviews_<id-pelicula>`
   - Actualiza lista de reseñas sin recargar página

### Estructura de Datos

**Objeto Película:**

```javascript
{
  id: 'avatar-2025',
  title: 'Avatar',
  year: 2025,
  genre: 'Ciencia ficción',
  synopsis: 'Secuela épica...',
  actors: ['Sam Worthington', 'Zoe Saldana'],
  trailer: 'nb_fFj_0rq8',  // YouTube video ID
  poster: 'img/Av.jpg'
}
```

**Objeto Reseña (LocalStorage):**

```javascript
{
  name: 'Juan Pérez',
  text: 'Excelente película...',
  rating: 5,
  date: '2024-10-25T10:30:00.000Z'
}
```

### Lógica de Filtros

```javascript
// Búsqueda: coincidencia en título, sinopsis o género
const matchesQ = m.title.toLowerCase().includes(query) || 
                 m.synopsis.toLowerCase().includes(query) || 
                 m.genre.toLowerCase().includes(query);

// Filtro año: comparación exacta
const matchesY = year ? String(m.year) === year : true;

// Resultado: películas que cumplen ambas condiciones
const filtered = MOVIES.filter(m => matchesQ && matchesY);
```

---

## Tecnologías y Conceptos

### JavaScript

- Manipulación del DOM (`createElement`, `innerHTML`, `addEventListener`)
- LocalStorage API para persistencia
- URLSearchParams para leer query strings
- Array methods (`filter`, `find`, `forEach`, `slice`, `reverse`)
- Template literals para HTML dinámico
- Escape de HTML para prevenir XSS

### CSS/SASS

- Variables SASS (`$primary-color`, `$spacing`)
- Anidación de selectores
- Mixins para reutilización
- Media queries para responsive design
- Flexbox y CSS Grid
- Bootstrap 5 para componentes base

### HTML

- Estructura semántica
- Formularios con validación
- Iframes para embeds de YouTube
- Atributos data-* para pasar información

---

## Casos de Uso

### Usuario Casual

María busca una película para ver. Entra a TuReseña, filtra por año 2024, ve las opciones disponibles. Click en "Inside Out 2", ve el trailer, lee reseñas de otros usuarios y decide verla.

### Cinéfilo Activo

Carlos acaba de ver "Duna: Parte 2" en el cine. Entra a TuReseña, busca la película, deja una reseña detallada con 5 estrellas. Su reseña queda guardada y aparece para otros visitantes de su navegador.

### Explorador de Catálogo

Ana no sabe qué ver. Usa la búsqueda para encontrar películas de "acción", explora varias opciones, ve trailers de 3 películas diferentes antes de decidirse.

---

## Limitaciones Actuales

### Persistencia Local

- Las reseñas se guardan en LocalStorage del navegador
- No hay sincronización entre dispositivos o usuarios
- Si se borran datos del navegador, se pierden las reseñas

### Catálogo Estático

- Solo 8 películas hardcodeadas en el código
- No hay backend ni base de datos
- No se pueden agregar películas sin modificar el código

### Autenticación

- No hay sistema de usuarios
- Cualquiera puede dejar reseñas con cualquier nombre
- No hay edición o eliminación de reseñas

---

## Mejoras Futuras

### Corto Plazo

- Promedio de calificaciones visible en el catálogo
- Ordenamiento por rating o alfabético
- Paginación para catálogos grandes
- Modo oscuro

### Mediano Plazo

- Integración con TMDB API (The Movie Database) para datos reales
- Backend con Node.js + Express + MongoDB
- Sistema de usuarios con autenticación
- Edición y eliminación de reseñas propias

### Largo Plazo

- Sistema de likes en reseñas
- Recomendaciones personalizadas
- Compartir reseñas en redes sociales
- PWA (Progressive Web App) para instalación
- Notificaciones de nuevas películas

---

## Desarrollo y Personalización

### Agregar Nueva Película

Editar `script.js`, agregar objeto al array `MOVIES`:

```javascript
{
  id: 'nueva-pelicula-2025',
  title: 'Nueva Película',
  year: 2025,
  genre: 'Drama',
  synopsis: 'Descripción...',
  actors: ['Actor 1', 'Actor 2'],
  trailer: 'YOUTUBE_VIDEO_ID',
  poster: 'img/nueva.jpg'
}
```

Agregar imagen en carpeta `img/`.

### Modificar Estilos

Editar archivos `.scss` y recompilar:

```bash
sass --watch style.scss:style.css
```

Variables útiles en SCSS:

```scss
$primary-color: #007bff;
$text-color: #333;
$bg-color: #f8f9fa;
```

### Cambiar Comportamiento de Filtros

Modificar función `applyFilters()` en `script.js`.

---

## Seguridad

### Prevención de XSS

Función `escapeHtml()` sanitiza input de usuarios antes de mostrarlo:

```javascript
function escapeHtml(s) {
  return String(s)
    .replaceAll('&','&amp;')
    .replaceAll('<','&lt;')
    .replaceAll('>','&gt;')
    .replaceAll('"','&quot;')
    .replaceAll("'",'&#039;');
}
```

### Recomendaciones

- No usar en producción sin backend
- Validar inputs en servidor si se implementa backend
- Implementar rate limiting para reseñas
- Agregar CAPTCHA para prevenir spam

---

## Aprendizajes del Proyecto

### Habilidades Desarrolladas

- Arquitectura client-side completa
- Manejo de estado con LocalStorage
- Integración de APIs de terceros (YouTube)
- Preprocesadores CSS (SASS)
- Diseño responsive sin frameworks pesados
- Manipulación avanzada del DOM

### Desafíos Resueltos

- Sincronización entre URL y contenido mostrado
- Persistencia de datos sin backend
- Filtrado reactivo en tiempo real
- Sanitización de inputs de usuario
- Compilación de SASS a CSS

---

## Stack Tecnológico

- HTML5
- SASS/SCSS → CSS3
- JavaScript ES6+ (Vanilla)
- Bootstrap 5 (grid y componentes)
- YouTube Embed API
- LocalStorage API

---

## Desarrollador

**Kronus2812**

Stack: Frontend, Backend, Python, JavaScript, SQL, PHP, React, CSS, HTML

Repositorio: [github.com/Kronus2812/Critica_Peliculas](https://github.com/Kronus2812/Critica_Peliculas)

---

## Licencia

MIT License - Proyecto educativo para aprendizaje de desarrollo web frontend.