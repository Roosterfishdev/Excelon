# Excelon Website - Deployment Guide

## 🚀 Despliegue en Netlify (Recomendado)

### Opción 1: Drag & Drop
1. Ve a [netlify.com/drop](https://app.netlify.com/drop)
2. Arrastra toda la carpeta `Excelon`
3. Tu sitio estará en línea en segundos

### Opción 2: CLI
```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Desde la carpeta del proyecto
netlify deploy --prod
```

### Configuración de Netlify
Crear archivo `netlify.toml`:
```toml
[build]
  publish = "."
  
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

## 🔵 Despliegue en Vercel

```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

## 📄 GitHub Pages

1. Crear repositorio en GitHub
2. Push del código:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tu-usuario/excelon.git
git push -u origin main
```
3. Ve a Settings > Pages
4. Selecciona branch `main` y carpeta `/ (root)`
5. Guarda y espera el deploy

## ☁️ Cloudflare Pages

1. Conecta tu repositorio de GitHub
2. Configuración:
   - Build command: (dejar vacío)
   - Build output directory: `/`
3. Deploy

## 🌐 Hosting Tradicional (cPanel/FTP)

1. Conectar vía FTP/SFTP
2. Subir todos los archivos a `public_html/` o carpeta raíz
3. Asegurar permisos correctos (644 para archivos, 755 para carpetas)

### Estructura en servidor:
```
public_html/
├── index.html
├── css/
├── js/
├── images/
├── robots.txt
├── sitemap.xml
└── ...
```

## ⚙️ Configuración DNS

### Para dominio personalizado:
1. **Registros A** (si usas IP):
   ```
   @    A    xxx.xxx.xxx.xxx
   www  A    xxx.xxx.xxx.xxx
   ```

2. **CNAME** (si usas hosting):
   ```
   www  CNAME  tu-sitio.netlify.app
   ```

## 🔒 SSL/HTTPS

- **Netlify/Vercel**: SSL automático incluido
- **Cloudflare Pages**: SSL automático
- **cPanel**: Usar Let's Encrypt (gratuito)

## 📊 Configuración de Analytics

### Google Analytics
Agregar antes del cierre de `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Google Search Console
1. Verificar propiedad del sitio
2. Enviar sitemap: `https://www.exceloncr.com/sitemap.xml`

## ✅ Checklist Pre-Deployment

- [ ] Todas las imágenes optimizadas y subidas
- [ ] URLs actualizadas en meta tags
- [ ] Google Analytics configurado (opcional)
- [ ] Formulario de contacto conectado a backend
- [ ] Probar en móvil, tablet y desktop
- [ ] Revisar enlaces internos
- [ ] Verificar logos de marcas
- [ ] SSL activo
- [ ] robots.txt y sitemap.xml configurados
- [ ] Verificar velocidad en PageSpeed Insights

## 🔄 Actualizar el Sitio

### Con Git (Netlify/Vercel/Cloudflare):
```bash
git add .
git commit -m "Actualización del sitio"
git push
```
El deploy se hace automáticamente.

### Con FTP:
1. Conectar vía FTP
2. Subir archivos modificados
3. Limpiar caché del navegador

## 📈 Monitoreo

- **Uptime**: [UptimeRobot](https://uptimerobot.com/)
- **Performance**: [PageSpeed Insights](https://pagespeed.web.dev/)
- **SEO**: [Google Search Console](https://search.google.com/search-console)

## 🆘 Troubleshooting

### El CSS no carga
- Verificar rutas en `<link>` tag
- Limpiar caché del navegador
- Verificar permisos de archivos

### Imágenes no se ven
- Verificar rutas en `src`
- Verificar nombres de archivo (case-sensitive)
- Verificar formato de imagen soportado

### Formulario no funciona
- Configurar endpoint de API
- Descomentar código de fetch en `main.js`
- Verificar CORS si usas API externa

---

¿Dudas? Contacta al equipo de desarrollo.
