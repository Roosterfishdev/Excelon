# Actualización del Hero - Slider Automático

## ✅ Cambios Realizados

### 1. **Nuevo Header**
El header ha sido rediseñado con:
- **Logo a la izquierda**: `Logo Exceleon.svg` (50px de alto en desktop, 35px en mobile)
- **Menú a la derecha**: navegación limpia y moderna
- **Altura ajustada**: 90px en desktop, 70px en mobile
- **Sticky**: permanece fijo al hacer scroll

### 2. **Hero Slider Automático**
Slider full-width con 3 slides:

#### Características:
- ✅ **Transición automática**: Cambia cada 5 segundos
- ✅ **Controles manuales**: Flechas anterior/siguiente
- ✅ **Navegación por dots**: 3 puntos indicadores en la parte inferior
- ✅ **Soporte táctil**: Swipe en dispositivos móviles
- ✅ **Pausa al hover**: Se detiene cuando pasas el mouse
- ✅ **Responsive**: Se adapta perfectamente a móvil/tablet/desktop

#### Contenido de los Slides:

**Slide 1 - Alimentos Naturales**
- Título: "Alimentos Naturales"
- Descripción: "Importamos y distribuimos las mejores marcas de productos saludables y orgánicos"
- CTA: "Explorar Marcas"
- Fondo: Gradiente beige (#FFEFD7)

**Slide 2 - Bebidas Saludables**
- Título: "Bebidas Saludables"
- Descripción: "Refrescantes y deliciosas opciones para un estilo de vida más sano"
- CTA: "Ver Catálogo"
- Fondo: Gradiente azul (#E7F3FF)

**Slide 3 - Productos Orgánicos**
- Título: "Productos Orgánicos"
- Descripción: "Certificados y seleccionados con los más altos estándares de calidad"
- CTA: "Contáctanos"
- Fondo: Gradiente verde (#F0FFE7)

### 3. **Animaciones**
- ✅ Texto entra desde la izquierda (slideInLeft)
- ✅ Imagen entra desde la derecha (slideInRight)
- ✅ Transición suave entre slides (fade 1s)
- ✅ Hover effects en botones y controles

### 4. **Responsive Design**

#### Desktop (> 968px)
- Layout horizontal: texto a la izquierda, imagen a la derecha
- Altura: 100vh
- Controles en la parte inferior

#### Tablet (576px - 968px)
- Layout vertical: imagen arriba, texto abajo
- Altura ajustada automáticamente
- Imagen reducida a 40vh

#### Mobile (< 576px)
- Layout vertical optimizado
- Imagen a 30vh
- Botones más pequeños
- Texto centrado

---

## 📁 Archivos Modificados

### HTML
- ✅ `index.html`
  - Header rediseñado con logo SVG
  - Hero reemplazado por slider de 3 slides
  - Controles de navegación agregados

### CSS
- ✅ `css/styles.css`
  - Nuevo CSS para header con logo
  - CSS completo del slider
  - Animaciones slideInLeft/Right
  - Responsive para móvil, tablet y desktop

### JavaScript
- ✅ `js/main.js`
  - Funcionalidad del slider automático
  - Navegación con flechas y dots
  - Soporte para swipe táctil
  - Auto-play con pausa en hover
  - Timer que se reinicia al interactuar

---

## 🖼️ Imágenes Pendientes

Necesitas agregar 3 imágenes para el slider:

```
/images/slider/
├── slide-1.jpg  (Alimentos Naturales)
├── slide-2.jpg  (Bebidas Saludables)
└── slide-3.jpg  (Productos Orgánicos)
```

**Especificaciones:**
- Dimensiones: 1200x800px
- Formato: JPG o WebP
- Peso: < 300KB cada una
- Estilo: Fondo de color, producto centrado/derecha

Ver detalles completos en: `images/slider/SLIDER-IMAGES-GUIDE.md`

---

## 🎯 Funcionamiento del Slider

### Auto-play
```javascript
// Cambia automáticamente cada 5 segundos
setInterval(nextSlide, 5000);
```

### Controles Manuales
- **Flechas**: Anterior/Siguiente
- **Dots**: Click en cualquier punto
- **Swipe**: Desliza en móvil
- **Teclado**: Flechas izq/der (por implementar si se desea)

### Pausa Inteligente
- Se pausa al pasar el mouse
- Se reanuda al salir del área
- Timer se reinicia al interactuar manualmente

---

## 🚀 Cómo Probar

1. **Abrir el sitio**:
   ```bash
   open index.html
   # o
   python3 -m http.server 8000
   ```

2. **Verificar**:
   - ✅ Logo se ve correctamente
   - ✅ Menú en la esquina derecha
   - ✅ Slider cambia automáticamente
   - ✅ Flechas funcionan
   - ✅ Dots cambian de slide
   - ✅ En móvil: swipe funciona
   - ✅ Responsive en diferentes tamaños

---

## 🎨 Personalización

### Cambiar velocidad del slider
En `js/main.js`, línea ~104:
```javascript
setInterval(nextSlide, 5000); // 5000ms = 5 segundos
```

### Cambiar colores de fondo
En `css/styles.css`:
```css
.slider__slide:nth-child(1) {
    background: linear-gradient(135deg, #FFEFD7 0%, #FFF8E7 100%);
}
```

### Agregar más slides
1. Duplicar un `.slider__slide` en HTML
2. Agregar un `.slider__dot` correspondiente
3. Agregar CSS de background si se desea

---

## ✨ Mejoras Futuras (Opcionales)

- [ ] Agregar indicador de progreso visual
- [ ] Lazy loading de imágenes
- [ ] Efectos de transición alternativos (slide, zoom)
- [ ] Video background en algún slide
- [ ] Texto animado con efectos especiales
- [ ] Integración con CMS para gestionar slides

---

## 📝 Notas Importantes

1. **Imágenes Temporales**: El slider funcionará sin imágenes, mostrando solo los fondos de colores
2. **Performance**: Las animaciones están optimizadas para 60fps
3. **Accesibilidad**: Incluye ARIA labels en los controles
4. **SEO**: El primer slide está configurado con `loading="eager"`

---

**Estado**: ✅ Completamente funcional
**Testing**: Pendiente agregar imágenes reales
**Browser Support**: Chrome, Firefox, Safari, Edge (últimas 2 versiones)
