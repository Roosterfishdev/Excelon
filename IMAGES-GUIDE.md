# Guía de Imágenes para Excelon Website

## Imágenes Requeridas

### 1. Hero Background (`images/hero-bg.jpg`)
- **Dimensiones**: 1920x1080px (mínimo)
- **Formato**: JPG o WebP
- **Contenido**: Foto estilo flat-lay de productos Excelon sobre mesa de madera
- **Estilo**: Similar a la imagen 4 del branding
- **Peso**: < 500KB (optimizado)

### 2. About Section Image (`images/about-image.jpg`)
- **Dimensiones**: 800x600px (mínimo)
- **Formato**: JPG o WebP
- **Contenido**: Productos en ambiente lifestyle (mesa con comida saludable)
- **Estilo**: Similar a la imagen 5 del branding (con productos RAD, etc.)
- **Peso**: < 300KB (optimizado)

### 3. Logos de Marcas (`images/brands/`)
Cada logo debe ser:
- **Formato**: PNG con fondo transparente
- **Dimensiones**: Variable, pero mantener proporción
- **Peso**: < 50KB cada uno
- **Nombres de archivo**:
  - `dash-water.png`
  - `hutchinsons.png`
  - `isola-bio.png`
  - `makaw.png`
  - `made-good.png`
  - `optp.png`
  - `stokes.png`
  - `tates.png`
  - `yogi-tea.png`

### 4. Favicon (`favicon.ico`)
- **Dimensiones**: 32x32px, 16x16px (multi-size)
- **Formato**: ICO
- **Contenido**: Logo de Excelon simplificado o letra "E"

## Dónde Conseguir las Imágenes

1. **Fotografías de productos**: Sesión de fotos profesional con productos reales
2. **Logos de marcas**: Solicitar a cada marca sus brand kits oficiales
3. **Favicon**: Crear desde el logo de Excelon usando herramientas online

## Optimización de Imágenes

Antes de subir las imágenes, optimízalas con:
- [TinyPNG](https://tinypng.com/) - Compresión de PNG/JPG
- [Squoosh](https://squoosh.app/) - Conversión a WebP
- [ImageOptim](https://imageoptim.com/) - Optimización general

## Imágenes Temporales (Placeholder)

Si necesitas placeholders mientras consigues las imágenes reales:
- Hero: Usar color sólido o gradiente en CSS
- About: Mostrar solo texto sin imagen
- Logos: Usar nombres de texto mientras tanto

## Notas Adicionales

- Todas las imágenes deben reflejar la identidad de marca (colores beige/azul)
- Preferir formato WebP para mejor rendimiento
- Incluir texto alternativo descriptivo en el HTML
- Usar `loading="lazy"` para imágenes debajo del fold
