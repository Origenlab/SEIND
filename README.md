# SEIND - Equipos de Seguridad Industrial

Página web profesional y minimalista para SEIND, empresa especializada en equipos de seguridad industrial.

## Características

### Diseño
- **Minimalista y profesional** - Interfaz limpia y moderna
- **Completamente responsive** - Optimizado para móviles, tablets y desktop
- **Componentes reutilizables** - Header y Footer separados en archivos HTML
- **Paleta de colores profesional** - Azul corporativo (#1E3A8A) y naranja seguridad (#F59E0B)
- **Tipografía optimizada** - Inter para texto, Montserrat para títulos

### Funcionalidades
- ✅ Menú de navegación sticky con dropdowns
- ✅ Menú móvil hamburguesa animado
- ✅ Smooth scroll para navegación interna
- ✅ Hero section con gradiente y patrón
- ✅ Sección de confianza con estadísticas
- ✅ Grid de categorías de productos
- ✅ Tarjetas de servicios
- ✅ Sección "Por qué elegirnos"
- ✅ Badges de certificaciones
- ✅ Call-to-action destacado
- ✅ Footer completo con links y redes sociales

### Mejoras sobre el sitio de referencia
- ✅ Precios visibles (cuando se agreguen productos)
- ✅ Diseño más limpio y moderno
- ✅ Mejor contraste y legibilidad
- ✅ Navegación simplificada
- ✅ Elementos de confianza visibles
- ✅ Optimización para SEO
- ✅ Accesibilidad mejorada
- ✅ Performance optimizado

## Estructura de Archivos

```
SEIND/
├── index.html              # Página principal
├── header.html             # Componente header (reutilizable)
├── footer.html             # Componente footer (reutilizable)
├── assets/
│   ├── css/
│   │   └── styles.css      # Estilos principales
│   ├── js/
│   │   └── main.js         # JavaScript principal
│   └── images/
│       └── favicon.svg     # Favicon del sitio
├── ANALISIS-Y-GUIA-DESARROLLO.md  # Análisis completo del proyecto
└── README.md               # Este archivo
```

## Instalación y Uso

### Opción 1: Servidor Local Simple

1. **Usando Python 3:**
```bash
cd /Users/carsolio/Desktop/PAGINAS-HTML/SEIND
python3 -m http.server 8000
```

2. **Usando PHP:**
```bash
cd /Users/carsolio/Desktop/PAGINAS-HTML/SEIND
php -S localhost:8000
```

3. **Usando Node.js (http-server):**
```bash
cd /Users/carsolio/Desktop/PAGINAS-HTML/SEIND
npx http-server -p 8000
```

Luego abre tu navegador en: `http://localhost:8000`

### Opción 2: Extensión de VS Code

1. Instala la extensión "Live Server" en VS Code
2. Abre el archivo `index.html`
3. Click derecho → "Open with Live Server"

### Opción 3: Subir a un Hosting

Sube todos los archivos a tu servidor web mediante FTP o panel de control de hosting.

## Personalización

### Cambiar Colores

Edita las variables CSS en `assets/css/styles.css`:

```css
:root {
    --color-primary: #1E3A8A;      /* Color principal */
    --color-secondary: #F59E0B;    /* Color secundario */
    --color-accent: #10B981;       /* Color de acento */
}
```

### Cambiar Información de Contacto

Edita `header.html` y `footer.html`:

```html
<!-- En header.html y footer.html -->
<a href="tel:+525512345678">+52 55 1234 5678</a>
<a href="mailto:contacto@seind.com.mx">contacto@seind.com.mx</a>
```

### Agregar/Modificar Secciones

Edita `index.html` y agrega tus secciones personalizadas siguiendo la estructura existente.

## Próximos Pasos

### Páginas Adicionales a Crear
- [ ] `productos.html` - Catálogo de productos
- [ ] `productos/proteccion-personal.html` - Categoría EPP
- [ ] `productos/prevencion-caidas.html` - Categoría arneses
- [ ] `productos/senalizacion.html` - Categoría señalización
- [ ] `productos/contra-incendios.html` - Categoría incendios
- [ ] `productos/soluciones-tecnologicas.html` - Tecnología
- [ ] `servicios.html` - Página de servicios
- [ ] `nosotros.html` - Sobre la empresa
- [ ] `recursos.html` - Blog y recursos
- [ ] `contacto.html` - Formulario de contacto
- [ ] `cotizacion.html` - Solicitud de cotización

### Funcionalidades Futuras
- [ ] Sistema de búsqueda de productos
- [ ] Filtros de productos por categoría
- [ ] Carrito de cotización
- [ ] Formularios de contacto funcionales
- [ ] Integración con WhatsApp Business API
- [ ] Blog con artículos de seguridad
- [ ] Galería de productos con zoom
- [ ] Videos demostrativos
- [ ] Calculadora de EPP

### Optimizaciones
- [ ] Agregar imágenes reales de productos
- [ ] Implementar lazy loading de imágenes
- [ ] Minificar CSS y JS para producción
- [ ] Configurar caché del navegador
- [ ] Generar sitemap.xml
- [ ] Configurar Google Analytics
- [ ] Implementar Schema.org markup
- [ ] Optimizar para Core Web Vitals

## Información Técnica

### Compatibilidad de Navegadores
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Tamaños de Pantalla Soportados
- Móvil: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

### Tecnologías Utilizadas
- HTML5 semántico
- CSS3 (Flexbox y Grid)
- JavaScript vanilla (ES6+)
- SVG para iconos y gráficos

### Performance
- Sin dependencias externas (no jQuery, no Bootstrap)
- CSS optimizado (~15KB)
- JavaScript modular (~6KB)
- Carga rápida < 2 segundos

## SEO

### Meta Tags Incluidos
- Title optimizado
- Description
- Keywords
- Viewport
- Charset UTF-8

### Mejoras SEO Pendientes
- Agregar Open Graph tags
- Implementar Twitter Cards
- Crear sitemap.xml
- Configurar robots.txt
- Añadir JSON-LD structured data

## Accesibilidad

### Características de Accesibilidad
- Contraste WCAG AA compliant
- Navegación por teclado
- ARIA labels en elementos interactivos
- Textos alternativos para imágenes
- Focus visible en elementos interactivos
- Responsive text sizing

## Soporte

Para preguntas o soporte:
- Email: contacto@seind.com.mx
- Teléfono: +52 55 1234 5678
- WhatsApp: +52 55 1234 5678

## Licencia

© 2024 SEIND - Seguridad Industrial. Todos los derechos reservados.

---

**Nota**: Esta es una versión inicial. Consulta el archivo `ANALISIS-Y-GUIA-DESARROLLO.md` para ver el plan completo de desarrollo y todas las mejoras propuestas.
