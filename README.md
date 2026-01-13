#  TuReseña - Crítica de Películas

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=flat&logo=sass&logoColor=white)](https://sass-lang.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Bootstrap](https://img.shields.io/badge/Bootstrap_5.3-7952B3?style=flat&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)

Aplicación web interactiva para explorar, buscar y visualizar información detallada de películas. Incluye sistema de búsqueda, filtrado por año, visualización de trailers, sinopsis y detalles de cada película.

---

##  Características principales

-  **Búsqueda de películas**: Sistema de búsqueda en tiempo real por título
-  **Filtrado por año**: Filtra películas por año de lanzamiento (2024, 2025)
-  **Visualización de trailers**: Integración con YouTube para ver trailers
-  **Diseño responsivo**: Compatible con dispositivos móviles, tablets y desktop
-  **Interfaz moderna**: Diseño limpio con Bootstrap 5.3 y SCSS personalizado
-  **Rendimiento optimizado**: JavaScript vanilla para máxima velocidad
-  **Tema oscuro**: Interfaz con paleta de colores oscuros y modernos

---

## 🛠️ Tecnologías utilizadas

### Frontend
- **HTML5**: Estructura semántica de la aplicación
- **CSS3 / SCSS**: Estilos personalizados con preprocesador Sass
- **JavaScript ES6+**: Lógica de la aplicación (37.5%)
- **Bootstrap 5.3**: Framework CSS para diseño responsivo

### Herramientas
- **Git & GitHub**: Control de versiones
- **Sass/SCSS**: Preprocesador CSS para estilos modulares

---

##  Estructura del proyecto

```
Critica_Peliculas/
├── img/                     # Imágenes y posters de películas
│   ├── Av.jpg
│   ├── Bat.jpg
│   ├── Dead.jpg
│   └── ...
├── js/
│   └── script.js            # Lógica principal de la aplicación
├── scss/                    # Archivos SCSS fuente
│   └── styles.scss
├── index.html               # Página principal (listado de películas)
├── movie.html               # Página de detalle de película
├── style.css                # Estilos principales compilados
├── style-movie.css          # Estilos para página de detalle
└── README.md
```

---

##  Funcionalidades detalladas

### 1. Catálogo de películas
- Listado de películas con poster, título, año y género
- Cards interactivas con efecto hover
- Información organizada y visualmente atractiva

### 2. Sistema de búsqueda
- Búsqueda en tiempo real sin recargar página
- Filtrado por título de película
- Resultados instantáneos mientras el usuario escribe

### 3. Filtrado por año
- Selector desplegable para filtrar por año
- Opciones: Todos, 2025, 2024
- Combinable con búsqueda por texto

### 4. Página de detalle
- Información completa de cada película:
  - Título y año
  - Género
  - Sinopsis detallada
  - Elenco de actores
  - Trailer integrado de YouTube
  - Poster de alta calidad

### 5. Diseño responsivo
- Adaptable a diferentes tamaños de pantalla
- Grid system de Bootstrap para layouts flexibles
- Navegación optimizada para móviles

---

##  Instalación y uso

### Requisitos previos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- (Opcional) Servidor web local para desarrollo

### Opción 1: Uso directo

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Kronus2812/Critica_Peliculas.git
   cd Critica_Peliculas
   ```

2. **Abrir en el navegador**
   - Simplemente abre `index.html` con doble clic
   - O arrastra el archivo a tu navegador

### Opción 2: Con servidor local

1. **Usando Python**
   ```bash
   python -m http.server 8000
   ```
   Luego visita: `http://localhost:8000`

2. **Usando Node.js (http-server)**
   ```bash
   npx http-server
   ```

3. **Usando Live Server (VS Code)**
   - Instala la extensión "Live Server"
   - Click derecho en `index.html` → "Open with Live Server"

---

##  Base de datos de películas

El proyecto incluye información de las siguientes películas:

| Película | Año | Género |
|----------|-----|--------|
| Avatar | 2025 | Ciencia ficción |
| Batman Part II | 2025 | Acción |
| Deadpool x Wolverine | 2024 | Acción / Comedia |
| _...y más_ | | |

*La información de las películas está almacenada en un array JavaScript (`MOVIES`) en `js/script.js`.*

---

##  Personalización de estilos

### Editar colores y temas

Los estilos están organizados en archivos SCSS. Para personalizar:

1. Edita los archivos `.scss` en la carpeta `scss/`
2. Compila SCSS a CSS:
   ```bash
   sass scss/styles.scss style.css
   ```

### Variables principales (ejemplo)

```scss
$primary-color: #your-color;
$background-dark: #your-background;
$text-color: #your-text-color;
```

---

## 👨‍💻 Autor

**Tomas Martinez** ([@Kronus2812](https://github.com/Kronus2812))  
📧 tomasmartinez2006@gmail.com  
🌐 [Portafolio](https://tomascode.urbanlens.com.co/)

Full Stack Developer | Frontend | Backend | JavaScript | React | PHP | SQL

---

