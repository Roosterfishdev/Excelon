# Season Sans Font - Configuración

## ✅ Font Instalado

- **Archivo**: `SeasonSansTRIAL-Regular.ttf`
- **Peso**: 400 (Regular)
- **Tamaño**: 124KB
- **Ubicación**: `/fonts/`

## 📝 Configuración Actual

El font está configurado en `css/styles.css`:

```css
@font-face {
    font-family: 'Season Sans';
    src: url('../fonts/SeasonSansTRIAL-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
}
```

Y está aplicado globalmente:

```css
--font-family: 'Season Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```

## 📦 Variantes Adicionales (Opcional)

Si tienes más variantes de Season Sans, agrégalas aquí:

### Light (300)
```css
@font-face {
    font-family: 'Season Sans';
    src: url('../fonts/SeasonSansTRIAL-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}
```

### Medium (500)
```css
@font-face {
    font-family: 'Season Sans';
    src: url('../fonts/SeasonSansTRIAL-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}
```

### SemiBold (600)
```css
@font-face {
    font-family: 'Season Sans';
    src: url('../fonts/SeasonSansTRIAL-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}
```

### Bold (700)
```css
@font-face {
    font-family: 'Season Sans';
    src: url('../fonts/SeasonSansTRIAL-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}
```

## 🎨 Uso en el Sitio

El sitio utiliza los siguientes pesos:

- **Light (300)**: Actualmente simulado por el navegador
- **Regular (400)**: ✅ Disponible (archivo cargado)
- **Medium (500)**: Actualmente simulado por el navegador
- **SemiBold (600)**: Actualmente simulado por el navegador
- **Bold (700)**: Actualmente simulado por el navegador

## ⚠️ Nota sobre Font Rendering

Con solo la variante Regular, el navegador simulará los otros pesos automáticamente. Para mejor calidad visual, es recomendable agregar al menos:

1. **Regular (400)** - ✅ Ya incluido
2. **SemiBold (600)** - Para títulos
3. **Bold (700)** - Para encabezados importantes

## 📋 Checklist para Agregar Más Variantes

1. [ ] Conseguir archivos .ttf de Season Sans (Bold, SemiBold, etc.)
2. [ ] Colocar archivos en `/fonts/`
3. [ ] Agregar @font-face declarations en `css/styles.css`
4. [ ] Verificar que se carguen correctamente en el navegador

## 🔍 Cómo Verificar

1. Abre el sitio en el navegador
2. Abre DevTools (F12)
3. Ve a Network > Fonts
4. Verifica que `SeasonSansTRIAL-Regular.ttf` se cargue correctamente
5. Inspecciona cualquier texto y verifica que `font-family: "Season Sans"` esté aplicado

## 🚀 Performance

- Font Subsetting: No aplicado (usando archivo completo)
- Font Loading Strategy: `font-display: swap` (evita FOIT)
- Preload: No configurado (agregar si necesario)

### Para mejorar performance (opcional):

```html
<!-- En el <head> del HTML -->
<link rel="preload" href="fonts/SeasonSansTRIAL-Regular.ttf" as="font" type="font/ttf" crossorigin>
```
