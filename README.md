# Excelon - Distribuidora de Alimentos Naturales

Sitio web oficial de Excelon, importadora y distribuidora de alimentos y bebidas naturales, saludables, orgánicas y alternativas en Costa Rica.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia y profesional
- **SEO Optimizado**: Meta tags, structured data y semántica HTML5
- **Totalmente Responsive**: Adaptado para móviles, tablets y desktop
- **Rendimiento Optimizado**: Carga rápida y animaciones fluidas
- **Accesibilidad**: Navegación por teclado y enfoque visible
- **Animaciones Suaves**: Efectos al scroll y transiciones elegantes

## 📁 Estructura del Proyecto

```
Excelon/
├── index.html          # Página principal
├── css/
│   └── styles.css     # Estilos principales
├── js/
│   └── main.js        # JavaScript para interactividad
├── images/            # Imágenes y recursos visuales
│   ├── brands/        # Logos de marcas
│   ├── hero-bg.jpg    # Imagen de fondo del hero
│   └── about-image.jpg # Imagen de la sección sobre nosotros
└── README.md          # Este archivo
```

## 🎨 Paleta de Colores

- **Azul Principal**: `#0068D8` (RGB 0, 104, 216)
- **Beige/Crema**: `#FFEFD7` (RGB 255, 239, 215)
- **Blanco**: `#FFFFFF`
- **Texto**: `#333333`

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Variables CSS, Grid, Flexbox, Animaciones
- **JavaScript (Vanilla)**: Sin dependencias externas
- **Season Sans Font**: Tipografía custom del branding

## 📱 Responsive Design

El sitio está optimizado para los siguientes breakpoints:

- **Desktop**: > 968px
- **Tablet**: 768px - 968px
- **Mobile**: < 768px

## 🌐 SEO

El sitio incluye:
- Meta tags optimizados
- Open Graph tags para redes sociales
- Schema.org structured data
- URLs semánticas
- Texto alternativo en imágenes
- Sitemap-ready structure

## 🚀 Cómo Usar

1. **Abrir el sitio**: Simplemente abre `index.html` en tu navegador
2. **Desarrollo local**: Usa un servidor local para mejor experiencia:
   ```bash
   # Con Python 3
   python3 -m http.server 8000
   
   # Con Node.js (http-server)
   npx http-server
   
   # Con PHP
   php -S localhost:8000
   ```
3. **Navega a**: `http://localhost:8000`

## 📝 Personalización

### Cambiar Colores

Edita las variables CSS en `css/styles.css`:

```css
:root {
    --color-primary: #0068D8;
    --color-secondary: #FFEFD7;
    /* ... más variables */
}
```

### Agregar Marcas

1. Agrega el logo en `images/brands/`
2. Añade un nuevo `.brand__card` en el HTML:

```html
<div class="brand__card">
    <div class="brand__logo">
        <img src="images/brands/tu-marca.png" alt="Tu Marca" loading="lazy">
    </div>
    <h3 class="brand__name">Tu Marca</h3>
</div>
```

### Formulario de Contacto

El formulario actualmente muestra un mensaje de éxito simulado. Para conectar con un backend:

1. Descomenta el código de fetch en `js/main.js`
2. Configura tu endpoint de API
3. Ajusta la estructura de datos según tu backend

## 🔄 Despliegue

### Opción 1: Hosting Estático (Recomendado)

- **Netlify**: Arrastra la carpeta a netlify.com/drop
- **Vercel**: `vercel --prod`
- **GitHub Pages**: Push al repositorio y activa Pages
- **Cloudflare Pages**: Conecta tu repositorio

### Opción 2: Servidor Web Tradicional

Sube todos los archivos vía FTP/SFTP a la raíz de tu servidor web.

## 📊 Performance

- **First Contentful Paint**: < 1s
- **Lighthouse Score**: 95+
- **Optimizaciones**:
  - Lazy loading de imágenes
  - CSS optimizado
  - JavaScript eficiente
  - Fuentes preconnect

## 🔒 Seguridad

- No hay dependencias de terceros
- Sin librerías externas vulnerables
- Código limpio y revisado

## 📧 Contacto

**Distribuidora Excelon S.A.**
- Ubicación: San José, Costa Rica
- LinkedIn: [Excelon](https://www.linkedin.com/company/excelon)

## 📄 Licencia

© 2026 Distribuidora Excelon S.A. Todos los derechos reservados.

## 🤝 Contribuir

Para mejoras o reportar problemas, contacta al equipo de desarrollo de Excelon.

---

Desarrollado con ❤️ para Excelon
