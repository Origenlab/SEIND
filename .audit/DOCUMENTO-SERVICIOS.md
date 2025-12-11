# SEIND - SEGURIDAD INDUSTRIAL

## Manual Técnico de Desarrollo

### Guía de Implementación de Páginas de Servicios

**Versión:** 3.0 - ACTUALIZACIÓN COMPLETA
**Fecha:** Noviembre 2024
**Clasificación:** Confidencial - Uso Interno
**Propietario:** Departamento de Desarrollo SEIND

---

# ÍNDICE DE CONTENIDOS

1. [Introducción y Alcance del Documento](#1-introducción-y-alcance-del-documento)
2. [Arquitectura de Páginas de Servicio](#2-arquitectura-de-páginas-de-servicio)
3. [Configuración Base del Documento HTML](#3-configuración-base-del-documento-html)
4. [Implementación de Hero Section](#4-implementación-de-hero-section)
5. [Implementación de CTA Section (Primera)](#5-implementación-de-cta-section-primera)
6. [Implementación de Services Detail Section](#6-implementación-de-services-detail-section)
7. [Implementación de Why Choose Section](#7-implementación-de-why-choose-section)
8. [Implementación de Contact Info Section](#8-implementación-de-contact-info-section)
9. [Implementación de FAQs Section](#9-implementación-de-faqs-section)
10. [Implementación de CTA Section Final](#10-implementación-de-cta-section-final)
11. [Responsive Design y Breakpoints](#11-responsive-design-y-breakpoints)
12. [Estándares de Accesibilidad](#12-estándares-de-accesibilidad)
13. [Checklist de Validación Pre-Deployment](#13-checklist-de-validación-pre-deployment)

---

# 1. INTRODUCCIÓN Y ALCANCE DEL DOCUMENTO

## 1.1 Propósito

Este manual técnico establece los lineamientos, estándares y procedimientos obligatorios para el desarrollo de páginas de servicios en el sitio web SEIND basándose en las implementaciones exitosas de **asesoria.html** y **mantenimiento.html**.

## 1.2 Archivos de Referencia Oficiales

| Archivo               | Ubicación                                           | Estado     |
| --------------------- | --------------------------------------------------- | ---------- |
| asesoria.html         | `/servicios/asesoria.html`                          | ✓ Oficial  |
| mantenimiento.html    | `/servicios/mantenimiento.html`                     | ✓ Oficial  |
| styles.css            | `/assets/css/styles.css`                            | ✓ Vigente  |
| main.js               | `/assets/js/main.js`                                | ✓ Vigente  |

## 1.3 Audiencia Objetivo

- Desarrolladores front-end del proyecto SEIND
- Diseñadores UI/UX responsables de nuevos servicios
- Equipo de QA para validación de implementaciones

---

# 2. ARQUITECTURA DE PÁGINAS DE SERVICIO

## 2.1 Estructura Modular Obligatoria

Toda página de servicio debe implementar exactamente estas secciones en el orden especificado:

| #   | Sección              | Clase CSS Principal        | Obligatoria |
| --- | -------------------- | -------------------------- | ----------- |
| 1   | Header Component     | `.site-header`             | ✓ Sí        |
| 2   | Hero Section         | `.hero`                    | ✓ Sí        |
| 3   | CTA Section          | `.cta-section`             | ✓ Sí        |
| 4   | Services Detail      | `.services-detail-section` | ✓ Sí        |
| 5   | Why Choose Section   | `.why-section`             | ✓ Sí        |
| 6   | Contact Info Section | `.contact-info-section`    | ✓ Sí        |
| 7   | FAQs Section         | `.faqs-section`            | ✓ Sí        |
| 8   | CTA Section Final    | `.cta-section`             | ✓ Sí        |
| 9   | Footer Component     | `.site-footer`             | ✓ Sí        |

> ⚠️ **CRÍTICO:** Este orden está basado en los archivos de producción `asesoria.html` y `mantenimiento.html` y NO debe alterarse.

## 2.2 Sistema de Rutas Relativas

Las páginas de servicios residen en `/servicios/`. Todas las referencias a recursos externos deben utilizar rutas relativas con el prefijo `../`.

### 2.2.1 Tabla de Rutas de Referencia

| Recurso              | Ruta Correcta ✓              | Ruta Incorrecta ✗       |
| -------------------- | ---------------------------- | ----------------------- |
| Hoja de estilos      | `../assets/css/styles.css`   | `assets/css/styles.css` |
| JavaScript principal | `../assets/js/main.js`       | `/assets/js/main.js`    |
| Logo corporativo     | `../assets/images/logo.avif` | `images/logo.avif`      |
| Página de contacto   | `../contacto.html`           | `contacto.html`         |
| Otros servicios      | `capacitacion.html`          | `../servicios/...`      |
| Imágenes de servicio | `../assets/images/imagen.webp` | Sin prefijo `../`     |

---

# 3. CONFIGURACIÓN BASE DEL DOCUMENTO HTML

## 3.1 Estructura DOCTYPE y Head

### 3.1.1 Código de Plantilla Base Completo

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="[DESCRIPCIÓN 150-160 CARACTERES ÚNICA POR SERVICIO]">
    <meta name="keywords" content="[5-10 KEYWORDS SEPARADAS POR COMAS]">
    <meta name="author" content="SEIND - Seguridad Industrial">
    <title>[Nombre del Servicio] | SEIND</title>

    <!-- Favicons -->
    <link rel="icon" type="image/avif" href="../assets/images/logo.avif">
    <link rel="alternate icon" type="image/svg+xml" href="../assets/images/favicon.svg">

    <!-- CSS -->
    <link rel="stylesheet" href="../assets/css/styles.css">

    <!-- Preload critical resources -->
    <link rel="preload" href="../assets/css/styles.css" as="style">
</head>
<body>
    <!-- HEADER COMPONENT EMBEBIDO DIRECTAMENTE (VER SECCIÓN 3.2) -->

    <main>
        <!-- CONTENIDO DE LAS SECCIONES (HERO, CTA, ETC) -->
    </main>

    <!-- FOOTER COMPONENT EMBEBIDO DIRECTAMENTE (VER SECCIÓN 3.3) -->

    <!-- JavaScript -->
    <script src="../assets/js/main.js"></script>
</body>
</html>
```

## 3.2 Header Component - Embebido Directo

> ⚠️ **MUY IMPORTANTE:** El header y footer NO se cargan dinámicamente. Deben estar embebidos directamente en el HTML.

### 3.2.1 ¿Por qué NO usar carga dinámica?

**INCORRECTO:** ❌
```html
<!-- NO HACER ESTO -->
<div id="header-placeholder"></div>
<script>
    loadComponent('header-placeholder', '../header.html');
</script>
```

**Razón:** La función `loadComponent()` NO existe en main.js y causará que el header/footer no se muestren.

**CORRECTO:** ✓
```html
<!-- Header Component - SEIND -->
<header class="site-header">
    <div class="header-top">
        <!-- Contenido completo del header -->
    </div>
    <nav class="main-nav">
        <!-- Navegación completa -->
    </nav>
</header>
```

### 3.2.2 Estructura Completa del Header para Copiar

```html
<!-- Header Component - SEIND -->
<header class="site-header">
    <div class="header-top">
        <div class="container">
            <div class="header-top-content">
                <div class="contact-info">
                    <a href="tel:+525512345678" class="contact-item">
                        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        <span>+52 55 1234 5678</span>
                    </a>
                    <a href="mailto:contacto@seind.com.mx" class="contact-item">
                        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        <span>contacto@seind.com.mx</span>
                    </a>
                </div>
                <div class="header-actions">
                    <a href="https://wa.me/5215512345678" target="_blank" class="btn-whatsapp">
                        <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        <span>WhatsApp</span>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <nav class="main-nav">
        <div class="container">
            <div class="nav-content">
                <a href="../index.html" class="logo">
                    <img src="../assets/images/logo.avif" alt="SEIND - Seguridad Industrial" class="logo-image">
                </a>

                <button class="menu-toggle" id="menuToggle" aria-label="Abrir menú">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul class="nav-menu" id="navMenu">
                    <li class="has-dropdown">
                        <a href="../productos.html">Productos</a>
                        <svg class="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                        <ul class="dropdown-menu">
                            <li><a href="../productos/proteccion-personal.html">Protección Personal (EPP)</a></li>
                            <li><a href="../productos/prevencion-caidas.html">Prevención de Caídas</a></li>
                            <li><a href="../productos/senalizacion.html">Señalización</a></li>
                            <li><a href="../productos/contra-incendios.html">Equipos Contra Incendios</a></li>
                            <li><a href="../productos/soluciones-tecnologicas.html">Soluciones Tecnológicas</a></li>
                        </ul>
                    </li>
                    <li class="has-dropdown">
                        <a href="../servicios.html">Servicios</a>
                        <svg class="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                        <ul class="dropdown-menu">
                            <li><a href="asesoria.html">Asesoría en Seguridad</a></li>
                            <li><a href="proteccion-personal.html">Protección Personal</a></li>
                            <li><a href="prevencion-caidas.html">Prevención de Caídas</a></li>
                            <li><a href="senalizacion.html">Señalización Industrial</a></li>
                            <li><a href="equipos-contra-incendios.html">Equipos Contra Incendios</a></li>
                        </ul>
                    </li>
                    <li class="has-dropdown">
                        <a href="../servicios-especializados.html">Servicios Especializados</a>
                        <svg class="dropdown-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                        <ul class="dropdown-menu">
                            <li><a href="../servicios-especializados/asesoria.html">Asesoría en Seguridad</a></li>
                            <li><a href="../servicios-especializados/capacitacion.html">Capacitación</a></li>
                            <li><a href="../servicios-especializados/mantenimiento.html">Mantenimiento</a></li>
                            <li><a href="../servicios-especializados/instalacion.html">Instalación</a></li>
                        </ul>
                    </li>
                    <li><a href="../nosotros.html">Nosotros</a></li>
                    <li><a href="../blog.html">Blog</a></li>
                    <li><a href="../contacto.html">Contacto</a></li>
                </ul>
            </div>
        </div>
    </nav>
</header>
```

## 3.3 Footer Component - Embebido Directo

### 3.3.1 Estructura Completa del Footer para Copiar

```html
<!-- Footer Component - SEIND -->
<footer class="site-footer">
    <div class="footer-main">
        <div class="container">
            <div class="footer-grid">
                <!-- Columna 1: Sobre SEIND -->
                <div class="footer-col">
                    <div class="footer-logo">
                        <h2 class="footer-logo-text">SEIND</h2>
                    </div>
                    <p class="footer-description">
                        Especialistas en equipos de seguridad industrial certificados. Protegemos lo más valioso: tu equipo de trabajo.
                    </p>
                    <div class="social-links">
                        <a href="#" target="_blank" aria-label="Facebook">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                        </a>
                        <a href="#" target="_blank" aria-label="LinkedIn">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                        <a href="#" target="_blank" aria-label="Instagram">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                            </svg>
                        </a>
                        <a href="https://wa.me/5215512345678" target="_blank" aria-label="WhatsApp">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- Columna 2: Productos -->
                <div class="footer-col">
                    <h4 class="footer-title">Productos</h4>
                    <ul class="footer-links">
                        <li><a href="../productos/proteccion-personal.html">Protección Personal</a></li>
                        <li><a href="../productos/prevencion-caidas.html">Prevención de Caídas</a></li>
                        <li><a href="../productos/senalizacion.html">Señalización</a></li>
                        <li><a href="../productos/contra-incendios.html">Contra Incendios</a></li>
                        <li><a href="../productos/soluciones-tecnologicas.html">Soluciones Tecnológicas</a></li>
                    </ul>
                </div>

                <!-- Columna 3: Servicios -->
                <div class="footer-col">
                    <h4 class="footer-title">Servicios</h4>
                    <ul class="footer-links">
                        <li><a href="asesoria.html">Asesoría en Seguridad</a></li>
                        <li><a href="proteccion-personal.html">Protección Personal</a></li>
                        <li><a href="prevencion-caidas.html">Prevención de Caídas</a></li>
                        <li><a href="senalizacion.html">Señalización Industrial</a></li>
                        <li><a href="equipos-contra-incendios.html">Equipos Contra Incendios</a></li>
                    </ul>
                </div>

                <!-- Columna 4: Servicios Especializados -->
                <div class="footer-col">
                    <h4 class="footer-title">Servicios Especializados</h4>
                    <ul class="footer-links">
                        <li><a href="../servicios-especializados/asesoria.html">Asesoría en Seguridad</a></li>
                        <li><a href="../servicios-especializados/capacitacion.html">Capacitación</a></li>
                        <li><a href="../servicios-especializados/mantenimiento.html">Mantenimiento</a></li>
                        <li><a href="../servicios-especializados/instalacion.html">Instalación</a></li>
                    </ul>
                </div>

                <!-- Columna 5: Contacto -->
                <div class="footer-col">
                    <h4 class="footer-title">Contacto</h4>
                    <ul class="footer-contact">
                        <li>
                            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                            <span>Ciudad de México, México</span>
                        </li>
                        <li>
                            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            <a href="tel:+525512345678">+52 55 1234 5678</a>
                        </li>
                        <li>
                            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            <a href="mailto:contacto@seind.com.mx">contacto@seind.com.mx</a>
                        </li>
                        <li>
                            <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <span>Lun - Vie: 9:00 - 18:00</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom">
        <div class="container">
            <div class="footer-bottom-content">
                <p class="copyright">
                    &copy; 2024 SEIND - Seguridad Industrial. Todos los derechos reservados.
                </p>
                <ul class="footer-legal">
                    <li><a href="../privacidad.html">Aviso de Privacidad</a></li>
                    <li><a href="../terminos.html">Términos y Condiciones</a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>
```

### 3.1.2 Ejemplos Reales de Meta Tags

**Asesoría:**
```html
<meta name="description" content="Asesoría Especializada en Seguridad Industrial - SEIND. Análisis de riesgos laborales, diagnósticos detallados y planes de acción preventiva para tu empresa.">
<meta name="keywords" content="asesoría seguridad industrial, análisis riesgos laborales, consultoría seguridad, diagnóstico seguridad industrial">
<title>Asesoría Especializada en Seguridad Industrial | SEIND</title>
```

**Mantenimiento:**
```html
<meta name="description" content="Mantenimiento Preventivo y Correctivo de Equipos de Seguridad Industrial - SEIND. Programas completos de mantenimiento, inspecciones periódicas y garantía de operatividad.">
<meta name="keywords" content="mantenimiento preventivo, mantenimiento correctivo, inspección equipos, calibración EPP, mantenimiento seguridad industrial">
<title>Mantenimiento Preventivo y Correctivo | SEIND</title>
```

---

# 4. IMPLEMENTACIÓN DE HERO SECTION

## 4.1 Estructura de Dos Columnas

La sección Hero utiliza un diseño de dos columnas con la clase `hero-two-columns`.

### 4.1.1 Estructura HTML Completa

```html
<!-- Hero Section -->
<section class="hero">
    <div class="container">
        <div class="hero-two-columns">
            <!-- Columna 1: Mensaje Principal -->
            <div class="hero-column-left">
                <h1 class="hero-title">[TÍTULO PRINCIPAL DEL SERVICIO]</h1>
                <p class="hero-subtitle">
                    [SUBTÍTULO - Propuesta de valor en 1-2 líneas]
                </p>
            </div>

            <!-- Columna 2: Introducción del Servicio -->
            <div class="hero-column-right">
                <h2 class="hero-intro-title">[TÍTULO SECUNDARIO DESCRIPTIVO]</h2>
                <p class="hero-intro-text">
                    [PRIMER PÁRRAFO - Descripción del servicio, incluir <strong>SEIND</strong> destacado]
                </p>
                <p class="hero-intro-text">
                    [SEGUNDO PÁRRAFO - Alcance, metodología o garantías del servicio]
                </p>
            </div>
        </div>
    </div>
</section>
```

### 4.1.2 Especificaciones de Clases CSS

| Clase CSS            | Elemento | Propósito                                      |
| -------------------- | -------- | ---------------------------------------------- |
| `.hero`              | section  | Contenedor principal de la sección hero       |
| `.container`         | div      | Wrapper de ancho máximo centrado               |
| `.hero-two-columns`  | div      | Grid de 2 columnas (desktop) / 1 col (mobile)  |
| `.hero-column-left`  | div      | Columna izquierda - Mensaje principal          |
| `.hero-column-right` | div      | Columna derecha - Introducción detallada       |
| `.hero-title`        | h1       | Título principal H1 (SEO crítico)              |
| `.hero-subtitle`     | p        | Subtítulo complementario                       |
| `.hero-intro-title`  | h2       | Título secundario H2                           |
| `.hero-intro-text`   | p        | Párrafos de descripción (usar 2 párrafos)      |

### 4.1.3 Ejemplo Real: Asesoría

```html
<section class="hero">
    <div class="container">
        <div class="hero-two-columns">
            <!-- Columna 1: Mensaje Principal -->
            <div class="hero-column-left">
                <h1 class="hero-title">Asesoría Especializada en Seguridad Industrial</h1>
                <p class="hero-subtitle">
                    Análisis completo de riesgos laborales y soluciones preventivas certificadas para tu empresa.
                </p>
            </div>

            <!-- Columna 2: Introducción del Servicio -->
            <div class="hero-column-right">
                <h2 class="hero-intro-title">Prevención Profesional Basada en Diagnósticos Precisos</h2>
                <p class="hero-intro-text">
                    En <strong>SEIND</strong> realizamos análisis completos de riesgos laborales en tu empresa. Nuestros consultores certificados llevan a cabo diagnósticos detallados de las condiciones de trabajo, identifican peligros potenciales y desarrollan planes de acción preventiva adaptados a tu industria y necesidades específicas.
                </p>
                <p class="hero-intro-text">
                    Contamos con metodologías probadas y actualizadas conforme a las normativas NOM-STPS vigentes. Nuestro enfoque integral garantiza que tu empresa opere con los más altos estándares de seguridad, reduciendo incidentes y asegurando el cumplimiento normativo completo.
                </p>
            </div>
        </div>
    </div>
</section>
```

### 4.1.4 Directrices de Contenido

| Elemento          | Longitud Recomendada | Directrices                                         |
| ----------------- | -------------------- | --------------------------------------------------- |
| hero-title        | 4-10 palabras        | Nombre del servicio, acción + beneficio             |
| hero-subtitle     | 15-25 palabras       | Propuesta de valor única, incluir keywords          |
| hero-intro-title  | 5-10 palabras        | Frase reforzadora del valor                         |
| hero-intro-text 1 | 50-80 palabras       | Descripción del servicio, mencionar SEIND destacado |
| hero-intro-text 2 | 50-80 palabras       | Alcance, metodología, certificaciones o garantías   |

---

# 5. IMPLEMENTACIÓN DE CTA SECTION (PRIMERA)

## 5.1 Ubicación y Propósito

La primera CTA Section aparece **inmediatamente después del Hero** como llamado a la acción temprano para usuarios con alta intención.

### 5.1.1 Estructura HTML Completa

```html
<!-- CTA Section -->
<section class="cta-section">
    <div class="container">
        <div class="cta-content">
            <h2 class="cta-title">[PREGUNTA O LLAMADO A LA ACCIÓN]</h2>
            <p class="cta-subtitle">
                [DESCRIPCIÓN DEL BENEFICIO DE CONTACTAR]
            </p>
            <div class="cta-buttons">
                <a href="../contacto.html" class="btn btn-secondary btn-lg">
                    [TEXTO DEL BOTÓN]
                </a>
            </div>
        </div>
    </div>
</section>
```

### 5.1.2 Especificaciones de Clases CSS

| Clase CSS       | Elemento | Propósito                                    |
| --------------- | -------- | -------------------------------------------- |
| `.cta-section`  | section  | Contenedor principal de llamado a la acción  |
| `.container`    | div      | Wrapper de ancho máximo                      |
| `.cta-content`  | div      | Contenedor de contenido centrado             |
| `.cta-title`    | h2       | Título del CTA (pregunta o afirmación)       |
| `.cta-subtitle` | p        | Subtítulo descriptivo del beneficio          |
| `.cta-buttons`  | div      | Contenedor de botones                        |
| `.btn`          | a        | Clase base para botón                        |
| `.btn-secondary`| a        | Estilo secundario (color alterno)            |
| `.btn-lg`       | a        | Tamaño grande del botón                      |

### 5.1.3 Ejemplos Reales

**Asesoría:**
```html
<section class="cta-section">
    <div class="container">
        <div class="cta-content">
            <h2 class="cta-title">¿Listo para proteger a tu equipo de trabajo?</h2>
            <p class="cta-subtitle">
                Solicita una asesoría personalizada sin compromiso y recibe un diagnóstico completo de seguridad industrial
            </p>
            <div class="cta-buttons">
                <a href="../contacto.html" class="btn btn-secondary btn-lg">Contactar a un Asesor</a>
            </div>
        </div>
    </div>
</section>
```

**Mantenimiento:**
```html
<section class="cta-section">
    <div class="container">
        <div class="cta-content">
            <h2 class="cta-title">¿Necesitas mantener tus equipos en óptimas condiciones?</h2>
            <p class="cta-subtitle">
                Solicita una evaluación sin costo de tus equipos y recibe un plan de mantenimiento personalizado
            </p>
            <div class="cta-buttons">
                <a href="../contacto.html" class="btn btn-secondary btn-lg">Solicitar Evaluación</a>
            </div>
        </div>
    </div>
</section>
```

---

# 6. IMPLEMENTACIÓN DE SERVICES DETAIL SECTION

## 6.1 Estructura General

Esta sección presenta los pasos o componentes del servicio en formato de items detallados con imágenes alternantes.

### 6.1.1 Encabezado de Sección

```html
<section class="services-detail-section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">¿Qué incluye nuestro servicio de [nombre]?</h2>
            <p class="section-subtitle">[Descripción breve del alcance]</p>
        </div>

        <!-- Items de servicio aquí -->
    </div>
</section>
```

## 6.2 Sistema de Alternancia Automática de Imágenes

### 6.2.1 REVELACIÓN IMPORTANTE: No se usa clase `.reverse`

**DESCUBRIMIENTO CLAVE:** Después del análisis completo de `asesoria.html` y `mantenimiento.html`:

- ✓ Las imágenes alternan automáticamente mediante CSS
- ✗ **NO** se utiliza ninguna clase `.service-detail-reverse`
- ✓ Todos los items usan exactamente la misma estructura HTML
- ✓ El CSS maneja la alternancia con `:nth-child(even)` o similar

### 6.2.2 Patrón de Alternancia Real

| Item # | Posición de Imagen | Clase Adicional en HTML | Control de Alternancia |
| ------ | ------------------ | ----------------------- | ---------------------- |
| 01     | Derecha            | Ninguna                 | CSS automático         |
| 02     | Izquierda          | Ninguna                 | CSS automático         |
| 03     | Derecha            | Ninguna                 | CSS automático         |
| 04     | Izquierda          | Ninguna                 | CSS automático         |
| 05     | Derecha            | Ninguna                 | CSS automático         |
| 06     | Izquierda          | Ninguna                 | CSS automático         |

> ⚠️ **CRÍTICO:** NO agregar clases `.reverse`, `.service-detail-reverse` o similar. El CSS ya maneja la alternancia.

## 6.3 Estructura HTML de Service Detail Item

### 6.3.1 Template Completo (Usar para TODOS los items)

```html
<!-- Service Detail Item -->
<div class="service-detail-item">
    <div class="service-detail-content">
        <div class="service-detail-number">[01-06]</div>
        <div class="service-detail-text">
            <h3 class="service-detail-title">[TÍTULO DEL COMPONENTE]</h3>
            <p class="service-detail-description">
                [DESCRIPCIÓN DETALLADA - 3-5 líneas explicando este componente del servicio]
            </p>
            <ul class="service-detail-features">
                <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    [Característica o beneficio 1]
                </li>
                <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    [Característica o beneficio 2]
                </li>
                <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    [Característica o beneficio 3]
                </li>
                <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    [Característica o beneficio 4]
                </li>
            </ul>
        </div>
    </div>
    <div class="service-detail-image">
        <img src="../assets/images/imagen.webp" alt="[Descripción del componente]" loading="lazy">
    </div>
</div>
```

### 6.3.2 Especificaciones de Clases CSS

| Clase CSS                      | Elemento | Propósito                                           |
| ------------------------------ | -------- | --------------------------------------------------- |
| `.service-detail-item`         | div      | Contenedor principal del item (grid de 2 columnas)  |
| `.service-detail-content`      | div      | Contenedor de contenido textual                     |
| `.service-detail-number`       | div      | Número del paso (01, 02, 03...)                     |
| `.service-detail-text`         | div      | Wrapper de título, descripción y lista              |
| `.service-detail-title`        | h3       | Título del componente/paso                          |
| `.service-detail-description`  | p        | Descripción detallada del componente                |
| `.service-detail-features`     | ul       | Lista de características (exactamente 4 items)      |
| `.service-detail-image`        | div      | Contenedor de imagen                                |

### 6.3.3 Especificaciones de Contenido

| Elemento                       | Longitud           | Directrices                                      |
| ------------------------------ | ------------------ | ------------------------------------------------ |
| `.service-detail-number`       | 2 caracteres       | Formato: 01, 02, 03, 04, 05, 06                  |
| `.service-detail-title`        | 3-8 palabras       | Nombre del componente o fase del servicio        |
| `.service-detail-description`  | 40-80 palabras     | Explicación detallada, incluir keywords técnicas |
| Feature list item              | 5-15 palabras      | Beneficios o características específicas         |
| Número de features por item    | Exactamente 4      | No más, no menos                                 |
| Alt text de imagen             | 3-8 palabras       | Descriptivo del componente mostrado              |

### 6.3.4 Límites de Items

- **Mínimo:** 4 items por servicio
- **Máximo:** 6 items por servicio
- **Común:** 5-6 items (ver ejemplos de producción)

### 6.3.5 Ejemplo Real Completo: Item 1 de Asesoría

```html
<!-- Service Detail Item 1 -->
<div class="service-detail-item">
    <div class="service-detail-content">
        <div class="service-detail-number">01</div>
        <div class="service-detail-text">
            <h3 class="service-detail-title">Diagnóstico de Riesgos</h3>
            <p class="service-detail-description">
                Evaluación exhaustiva de todas las áreas operativas identificando factores de riesgo físicos, químicos, biológicos, ergonómicos y psicosociales según normativas NOM-035 y NOM-030. Nuestros consultores realizan inspecciones detalladas documentando cada punto crítico con evidencia fotográfica y mediciones cuando se requiere.
            </p>
            <ul class="service-detail-features">
                <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Identificación de peligros en procesos productivos
                </li>
                <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Evaluación de factores de riesgo psicosocial (NOM-035)
                </li>
                <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Análisis de riesgos químicos y biológicos
                </li>
                <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Matriz de riesgos con nivel de prioridad
                </li>
            </ul>
        </div>
    </div>
    <div class="service-detail-image">
        <img src="../assets/images/imagen.webp" alt="Diagnóstico de Riesgos" loading="lazy">
    </div>
</div>
```

### 6.3.6 SVG de Checkmark (Icono de Lista)

**IMPORTANTE:** Usar exactamente este SVG en todos los items de lista de features:

```html
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <polyline points="20 6 9 17 4 12"></polyline>
</svg>
```

---

# 7. IMPLEMENTACIÓN DE WHY CHOOSE SECTION

## 7.1 Estructura General

Esta sección explica los beneficios y diferenciadores del servicio en formato de grid de tarjetas.

### 7.1.1 Estructura HTML Completa

```html
<!-- Why Choose Section -->
<section class="why-section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">¿Por qué elegir [nuestro servicio/nuestra asesoría]?</h2>
            <p class="section-subtitle">[Descripción breve del diferenciador]</p>
        </div>
        <div class="why-content why-grid">
            <!-- 4 Why Items -->
        </div>
    </div>
</section>
```

### 7.1.2 Especificaciones de Clases CSS

| Clase CSS         | Elemento | Propósito                                     |
| ----------------- | -------- | --------------------------------------------- |
| `.why-section`    | section  | Contenedor principal de la sección            |
| `.container`      | div      | Wrapper de ancho máximo                       |
| `.section-header` | div      | Contenedor de título y subtítulo de sección   |
| `.section-title`  | h2       | Título de la sección                          |
| `.section-subtitle` | p      | Subtítulo descriptivo                         |
| `.why-content`    | div      | Contenedor de items                           |
| `.why-grid`       | div      | Grid de 2 columnas (desktop) / 1 col (mobile) |
| `.why-item`       | div      | Tarjeta individual de beneficio               |
| `.why-icon`       | div      | Contenedor del icono SVG                      |
| `.why-text`       | div      | Contenedor de texto (h3 + p)                  |

## 7.2 Estructura de Why Item

### 7.2.1 Template de Why Item

```html
<div class="why-item">
    <div class="why-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            [PATH DEL ICONO]
        </svg>
    </div>
    <div class="why-text">
        <h3>[TÍTULO DEL BENEFICIO]</h3>
        <p>[DESCRIPCIÓN DEL BENEFICIO - 2-4 líneas]</p>
    </div>
</div>
```

### 7.2.2 Número de Items

- **Obligatorio:** Exactamente 4 items
- Grid de 2x2 en desktop
- Stack vertical en mobile

### 7.2.3 Ejemplos de Iconos SVG Comunes

**Checkmark con círculo (Certificación):**
```html
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
```

**Documento (Metodología):**
```html
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
</svg>
```

**Escudo (Garantía/Seguridad):**
```html
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
```

**Checkmark en círculo (Cumplimiento):**
```html
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
```

### 7.2.4 Ejemplo Real Completo: Why Section de Asesoría

```html
<section class="why-section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">¿Por qué elegir nuestra asesoría?</h2>
            <p class="section-subtitle">Experiencia certificada y resultados comprobados</p>
        </div>
        <div class="why-content why-grid">
            <div class="why-item">
                <div class="why-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                </div>
                <div class="why-text">
                    <h3>Consultores Certificados</h3>
                    <p>Nuestro equipo cuenta con certificaciones vigentes en seguridad e higiene industrial, con conocimiento profundo de normativas NOM-STPS y experiencia en múltiples sectores industriales.</p>
                </div>
            </div>

            <div class="why-item">
                <div class="why-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                </div>
                <div class="why-text">
                    <h3>Metodología Probada</h3>
                    <p>Utilizamos metodologías reconocidas internacionalmente y adaptadas a la legislación mexicana, garantizando diagnósticos precisos y planes de acción efectivos.</p>
                </div>
            </div>

            <div class="why-item">
                <div class="why-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                </div>
                <div class="why-text">
                    <h3>Enfoque Personalizado</h3>
                    <p>Cada empresa es única. Desarrollamos soluciones a medida considerando tu sector industrial, tamaño de operación, presupuesto y objetivos específicos de seguridad.</p>
                </div>
            </div>

            <div class="why-item">
                <div class="why-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                </div>
                <div class="why-text">
                    <h3>Cumplimiento Garantizado</h3>
                    <p>Te acompañamos hasta lograr el cumplimiento total de las normativas aplicables, preparándote para inspecciones y auditorías con confianza y documentación completa.</p>
                </div>
            </div>
        </div>
    </div>
</section>
```

---

# 8. IMPLEMENTACIÓN DE CONTACT INFO SECTION

## 8.1 Estructura de Dos Columnas

Esta sección combina información del servicio con un formulario de contacto en layout de dos columnas.

### 8.1.1 Estructura HTML Completa

```html
<!-- Contact Info Section -->
<section class="contact-info-section">
    <div class="container">
        <div class="contact-two-columns">
            <!-- Columna 1: Información del Servicio -->
            <div class="contact-column-info">
                <!-- Contenido de información -->
            </div>

            <!-- Columna 2: Formulario de Contacto -->
            <div class="contact-column-form">
                <!-- Formulario -->
            </div>
        </div>
    </div>
</section>
```

### 8.1.2 Especificaciones de Clases CSS Principales

| Clase CSS                 | Elemento | Propósito                                       |
| ------------------------- | -------- | ----------------------------------------------- |
| `.contact-info-section`   | section  | Contenedor principal de la sección              |
| `.container`              | div      | Wrapper de ancho máximo                         |
| `.contact-two-columns`    | div      | Grid de 2 columnas                              |
| `.contact-column-info`    | div      | Columna izquierda - Información                 |
| `.contact-column-form`    | div      | Columna derecha - Formulario                    |

## 8.2 Columna de Información (Izquierda)

### 8.2.1 Estructura Completa de Columna Info

```html
<div class="contact-column-info">
    <h2 class="contact-info-title">[Nombre del Servicio] SEIND</h2>
    <p class="contact-info-description">
        [Descripción del servicio y del equipo - 2-4 líneas]
    </p>

    <div class="contact-info-items">
        <!-- 4 Contact Info Items -->
    </div>

    <div class="contact-info-features">
        <h3>¿Qué incluye [el servicio]?</h3>
        <ul>
            <!-- 4 Feature Items con SVG checkmark -->
        </ul>
    </div>
</div>
```

### 8.2.2 Estructura de Contact Info Item

```html
<div class="contact-info-item">
    <div class="contact-info-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            [PATH DEL ICONO]
        </svg>
    </div>
    <div class="contact-info-content">
        <h4>[TÍTULO DEL ITEM]</h4>
        <p>[CONTENIDO - puede incluir <a> tags]<br>[Segunda línea opcional]</p>
    </div>
</div>
```

### 8.2.3 Tipos de Contact Info Items (4 items obligatorios)

**Item 1: Evaluación/Consulta Gratuita**
```html
<div class="contact-info-item">
    <div class="contact-info-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
        </svg>
    </div>
    <div class="contact-info-content">
        <h4>Evaluación Inicial Gratuita</h4>
        <p>Visita sin costo para conocer tu operación<br>Panorama general de áreas de oportunidad</p>
    </div>
</div>
```

**Item 2: Teléfono / Respuesta**
```html
<div class="contact-info-item">
    <div class="contact-info-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
    </div>
    <div class="contact-info-content">
        <h4>Respuesta Inmediata</h4>
        <p><a href="tel:+525512345678">+52 55 1234 5678</a><br>Atención prioritaria para [tipo de solicitud]</p>
    </div>
</div>
```

**Item 3: Email / Cotización**
```html
<div class="contact-info-item">
    <div class="contact-info-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
    </div>
    <div class="contact-info-content">
        <h4>Cotización Rápida</h4>
        <p><a href="mailto:[email-especifico]@seind.com.mx">[email-especifico]@seind.com.mx</a><br>Propuesta detallada en 24 horas</p>
    </div>
</div>
```

**Item 4: Ubicación / Cobertura**
```html
<div class="contact-info-item">
    <div class="contact-info-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
        </svg>
    </div>
    <div class="contact-info-content">
        <h4>Cobertura Nacional</h4>
        <p>Servicios en toda la República Mexicana<br>Consultores disponibles en principales ciudades</p>
    </div>
</div>
```

### 8.2.4 Estructura de Contact Info Features

```html
<div class="contact-info-features">
    <h3>¿Qué incluye [el servicio]?</h3>
    <ul>
        <li>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            [Característica o componente 1]
        </li>
        <li>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            [Característica o componente 2]
        </li>
        <li>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            [Característica o componente 3]
        </li>
        <li>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            [Característica o componente 4]
        </li>
    </ul>
</div>
```

**Número de items:** Exactamente 4 características con icono de checkmark.

## 8.3 Columna de Formulario (Derecha)

### 8.3.1 Estructura Completa del Formulario

```html
<div class="contact-column-form">
    <div class="contact-form-wrapper">
        <h3 class="contact-form-title">Solicita tu [nombre del servicio]</h3>
        <p class="contact-form-subtitle">Completa el formulario y nos pondremos en contacto contigo por WhatsApp</p>

        <form id="contactForm" class="contact-form">
            <!-- Form Groups -->

            <button type="submit" class="btn btn-primary btn-lg btn-whatsapp-submit">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Enviar por WhatsApp
            </button>
        </form>
    </div>
</div>
```

### 8.3.2 Form Groups (Campos del Formulario)

**Campo de Texto (Nombre):**
```html
<div class="form-group">
    <label for="nombre">Nombre completo *</label>
    <input type="text" id="nombre" name="nombre" required placeholder="Ej: Juan Pérez">
</div>
```

**Campo de Texto (Empresa):**
```html
<div class="form-group">
    <label for="empresa">Empresa *</label>
    <input type="text" id="empresa" name="empresa" required placeholder="Nombre de tu empresa">
</div>
```

**Campo Tel (Teléfono):**
```html
<div class="form-group">
    <label for="telefono">Teléfono / WhatsApp *</label>
    <input type="tel" id="telefono" name="telefono" required placeholder="Ej: 55 1234 5678">
</div>
```

**Campo Email:**
```html
<div class="form-group">
    <label for="email">Correo electrónico *</label>
    <input type="email" id="email" name="email" required placeholder="correo@ejemplo.com">
</div>
```

**Campo Select (Tipo de Servicio):**
```html
<div class="form-group">
    <label for="interes">¿Qué tipo de [servicio] necesitas? *</label>
    <select id="interes" name="interes" required>
        <option value="">Selecciona una opción</option>
        <option value="[Opción 1]">[Opción 1]</option>
        <option value="[Opción 2]">[Opción 2]</option>
        <option value="[Opción 3]">[Opción 3]</option>
        <!-- 6-10 opciones recomendadas -->
        <option value="Otro">Otro</option>
    </select>
</div>
```

**Campo Textarea (Mensaje):**
```html
<div class="form-group">
    <label for="mensaje">[Instrucción de qué describir] *</label>
    <textarea id="mensaje" name="mensaje" rows="4" required placeholder="[Placeholder específico del servicio...]"></textarea>
</div>
```

### 8.3.3 Especificaciones del Formulario

| Campo      | Type     | Required | Atributos Especiales              |
| ---------- | -------- | -------- | --------------------------------- |
| nombre     | text     | Sí       | placeholder con ejemplo           |
| empresa    | text     | Sí       | placeholder genérico              |
| telefono   | tel      | Sí       | placeholder con formato           |
| email      | email    | Sí       | placeholder con dominio ejemplo   |
| interes    | select   | Sí       | 6-10 opciones + "Otro"            |
| mensaje    | textarea | Sí       | rows="4", placeholder específico  |

### 8.3.4 Botón de Envío (WhatsApp)

**IMPORTANTE:** El botón usa clases específicas y el icono completo de WhatsApp:

```html
<button type="submit" class="btn btn-primary btn-lg btn-whatsapp-submit">
    <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
    Enviar por WhatsApp
</button>
```

Clases del botón:
- `.btn` - Base
- `.btn-primary` - Color primario
- `.btn-lg` - Tamaño grande
- `.btn-whatsapp-submit` - Estilo específico de WhatsApp

---

# 9. IMPLEMENTACIÓN DE FAQS SECTION

## 9.1 Estructura General

La sección de FAQs presenta preguntas frecuentes en formato acordeón colapsable.

### 9.1.1 Estructura HTML Completa

```html
<!-- FAQs Section -->
<section class="faqs-section">
    <div class="container">
        <div class="section-header">
            <h2 class="section-title">Preguntas Frecuentes sobre [Nombre del Servicio]</h2>
            <p class="section-subtitle">Resuelve tus dudas sobre nuestro servicio de [nombre]</p>
        </div>

        <div class="faqs-container">
            <!-- FAQ Items (6-8 recomendados) -->
        </div>
    </div>
</section>
```

### 9.1.2 Especificaciones de Clases CSS

| Clase CSS          | Elemento | Propósito                                  |
| ------------------ | -------- | ------------------------------------------ |
| `.faqs-section`    | section  | Contenedor principal de FAQs               |
| `.container`       | div      | Wrapper de ancho máximo                    |
| `.section-header`  | div      | Contenedor de título y subtítulo           |
| `.section-title`   | h2       | Título de la sección                       |
| `.section-subtitle`| p        | Subtítulo descriptivo                      |
| `.faqs-container`  | div      | Contenedor de items FAQ                    |
| `.faq-item`        | div      | Item individual de FAQ                     |
| `.faq-question`    | button   | Botón con la pregunta (clickeable)         |
| `.faq-icon`        | svg      | Icono de chevron (arriba/abajo)            |
| `.faq-answer`      | div      | Contenedor de la respuesta (colapsable)    |

## 9.2 Estructura de FAQ Item

### 9.2.1 Template de FAQ Item

```html
<div class="faq-item">
    <button class="faq-question" aria-expanded="false">
        <span>[PREGUNTA COMPLETA]</span>
        <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
    </button>
    <div class="faq-answer">
        <p>[RESPUESTA DETALLADA - 3-6 líneas. Puede incluir múltiples párrafos si es necesario.]</p>
    </div>
</div>
```

### 9.2.2 Especificaciones de Contenido

| Elemento       | Longitud         | Directrices                                         |
| -------------- | ---------------- | --------------------------------------------------- |
| faq-question   | 8-20 palabras    | Pregunta directa y específica                       |
| faq-answer     | 50-120 palabras  | Respuesta completa y útil, puede usar múltiples <p> |
| Número de FAQs | 6-8 items        | Mínimo 5, máximo 10                                 |

### 9.2.3 Icono de Chevron (Obligatorio)

```html
<svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <polyline points="6 9 12 15 18 9"></polyline>
</svg>
```

### 9.2.4 Atributos de Accesibilidad

- `aria-expanded="false"` en el botón (por defecto)
- JavaScript cambia a `"true"` cuando se expande
- El botón debe ser `<button>`, no `<div>` o `<a>`

### 9.2.5 Ejemplo Real: FAQ Item de Asesoría

```html
<div class="faq-item">
    <button class="faq-question" aria-expanded="false">
        <span>¿Cuánto tiempo dura una asesoría completa en seguridad industrial?</span>
        <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
    </button>
    <div class="faq-answer">
        <p>El tiempo depende del tamaño de tu empresa y la complejidad de las operaciones. En promedio, un diagnóstico inicial toma de 2 a 5 días hábiles. El plan de acción completo, incluyendo documentación y recomendaciones, se entrega en 10 a 15 días hábiles posteriores a la visita. El seguimiento puede extenderse de 3 a 12 meses según tus necesidades y el alcance del proyecto de implementación.</p>
    </div>
</div>
```

### 9.2.6 Temas Comunes para FAQs de Servicios

1. Duración del servicio / Tiempos
2. Normativas o certificaciones aplicables
3. Calificaciones del equipo
4. Costos / Qué incluye el precio
5. Evaluación gratuita o consulta inicial
6. Garantías o resultados
7. Seguimiento post-servicio
8. Alcance (empresas de qué tamaño, sectores)

---

# 10. IMPLEMENTACIÓN DE CTA SECTION FINAL

## 10.1 Ubicación y Propósito

La CTA Section final aparece como última sección antes del footer, ofreciendo una última oportunidad de conversión.

### 10.1.1 Diferencias vs CTA Primera

| Aspecto          | CTA Primera                  | CTA Final                             |
| ---------------- | ---------------------------- | ------------------------------------- |
| Ubicación        | Después del Hero             | Antes del Footer                      |
| Tipo de botón    | `.btn-secondary`             | `.btn-secondary` con WhatsApp         |
| Link del botón   | `../contacto.html`           | WhatsApp directo con mensaje pre-fill |
| Icono en botón   | Sin icono                    | Con icono de WhatsApp                 |

### 10.1.2 Estructura HTML Completa

```html
<!-- CTA Section -->
<section class="cta-section">
    <div class="container">
        <div class="cta-content">
            <h2 class="cta-title">¿Necesitas [acción relacionada al servicio]?</h2>
            <p class="cta-description">
                [Descripción del beneficio de contactar - mención de evaluación sin costo o similar]
            </p>
            <div class="cta-buttons">
                <a href="https://wa.me/5215512345678?text=[MENSAJE_URL_ENCODED]" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    WhatsApp
                </a>
            </div>
        </div>
    </div>
</section>
```

### 10.1.3 Especificaciones de Clases CSS

| Clase CSS         | Elemento | Propósito                              |
| ----------------- | -------- | -------------------------------------- |
| `.cta-section`    | section  | Contenedor principal                   |
| `.container`      | div      | Wrapper de ancho máximo                |
| `.cta-content`    | div      | Contenedor centrado de contenido       |
| `.cta-title`      | h2       | Título del CTA                         |
| `.cta-description`| p        | Descripción (vs `.cta-subtitle`)       |
| `.cta-buttons`    | div      | Contenedor de botones                  |
| `.btn`            | a        | Clase base del botón                   |
| `.btn-secondary`  | a        | Estilo secundario                      |
| `.btn-lg`         | a        | Tamaño grande                          |

**NOTA:** La CTA final usa `.cta-description` mientras la CTA primera usa `.cta-subtitle`.

### 10.1.4 Formato del Link de WhatsApp

**Estructura:**
```
https://wa.me/5215512345678?text=[MENSAJE_URL_ENCODED]
```

**Componentes:**
- `5215512345678` - Número de WhatsApp (código país + número)
- `text=` - Parámetro para mensaje pre-fill
- `[MENSAJE_URL_ENCODED]` - Mensaje codificado con URL encoding

### 10.1.5 Ejemplos de Mensajes Pre-fill

**Asesoría:**
```
Hola%2C%20me%20interesa%20solicitar%20una%20asesor%C3%ADa%20especializada%20en%20seguridad%20industrial
```

**Mantenimiento:**
```
Hola%2C%20me%20interesa%20solicitar%20un%20servicio%20de%20mantenimiento%20para%20equipos%20de%20seguridad%20industrial
```

**Herramienta recomendada:** Usar un URL encoder online para convertir el mensaje de texto plano.

### 10.1.6 Atributos del Link

- `target="_blank"` - Abre en nueva pestaña
- `rel="noopener noreferrer"` - Seguridad y privacidad

### 10.1.7 Icono de WhatsApp (SVG Completo)

```html
<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
</svg>
```

### 10.1.8 Ejemplo Real: CTA Final de Mantenimiento

```html
<section class="cta-section">
    <div class="container">
        <div class="cta-content">
            <h2 class="cta-title">¿Necesitas mantener tus equipos de seguridad?</h2>
            <p class="cta-description">
                Solicita una evaluación sin costo y recibe un plan de mantenimiento personalizado para tus equipos.
            </p>
            <div class="cta-buttons">
                <a href="https://wa.me/5215512345678?text=Hola%2C%20me%20interesa%20solicitar%20un%20servicio%20de%20mantenimiento%20para%20equipos%20de%20seguridad%20industrial" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    WhatsApp
                </a>
            </div>
        </div>
    </div>
</section>
```

---

# 11. RESPONSIVE DESIGN Y BREAKPOINTS

## 11.1 Sistema de Breakpoints

El CSS de SEIND utiliza breakpoints estándar manejados automáticamente. NO es necesario agregar clases adicionales para responsive.

### 11.1.1 Breakpoints Principales

| Breakpoint | Ancho      | Comportamiento                            |
| ---------- | ---------- | ----------------------------------------- |
| Mobile     | < 768px    | Layouts de 1 columna, stack vertical      |
| Tablet     | 768-1024px | Layouts híbridos                          |
| Desktop    | > 1024px   | Layouts de múltiples columnas completos   |

## 11.2 Comportamiento por Sección

| Sección                | Desktop                 | Mobile                    |
| ---------------------- | ----------------------- | ------------------------- |
| hero-two-columns       | 2 columnas (50/50)      | 1 columna (stack)         |
| service-detail-item    | 2 columnas (60/40)      | 1 columna (imagen arriba) |
| why-grid               | 2x2 grid (4 items)      | 1 columna (stack)         |
| contact-two-columns    | 2 columnas (50/50)      | 1 columna (stack)         |

## 11.3 Consideraciones Importantes

- ✓ Las imágenes usan `loading="lazy"` para optimización
- ✓ El CSS maneja todos los cambios de layout automáticamente
- ✗ NO agregar media queries personalizadas
- ✗ NO usar clases como `.mobile` o `.desktop`

---

# 12. ESTÁNDARES DE ACCESIBILIDAD

## 12.1 Requisitos Obligatorios

### 12.1.1 Atributos HTML

| Elemento         | Atributo Requerido    | Ejemplo                           |
| ---------------- | --------------------- | --------------------------------- |
| `<html>`         | `lang="es"`           | `<html lang="es">`                |
| `<img>`          | `alt="..."`           | `alt="Diagnóstico de Riesgos"`    |
| `<button>` (FAQ) | `aria-expanded`       | `aria-expanded="false"`           |
| `<a>` (externo)  | `rel="noopener..."`   | `rel="noopener noreferrer"`       |
| `<form>`         | `id` único            | `id="contactForm"`                |
| Labels           | `for` matching `id`   | `for="nombre"` + `id="nombre"`    |

### 12.1.2 Jerarquía de Headings

- Una sola etiqueta `<h1>` por página (en hero-title)
- `<h2>` para títulos de sección
- `<h3>` para subtítulos dentro de secciones
- `<h4>` solo en componentes específicos (contact-info-content)
- NO saltar niveles (ej: h2 → h4)

### 12.1.3 Contraste de Colores

El CSS ya cumple con WCAG 2.1 AA:
- Texto normal: mínimo 4.5:1
- Texto grande: mínimo 3:1
- NO modificar colores del sistema

---

# 13. CHECKLIST DE VALIDACIÓN PRE-DEPLOYMENT

## 13.1 Validación de Contenido

- [ ] Todos los placeholders `[TEXTO]` reemplazados con contenido real
- [ ] Meta description única (150-160 caracteres)
- [ ] Title tag único y descriptivo (< 60 caracteres)
- [ ] Keywords relevantes en meta keywords (5-10)
- [ ] Nombre del servicio correcto en todos los textos
- [ ] Correo electrónico específico del servicio (si aplica)
- [ ] Mensaje de WhatsApp pre-fill personalizado

## 13.2 Validación de Estructura

- [ ] Orden de secciones correcto (9 secciones)
- [ ] Hero tiene 2 párrafos en hero-column-right
- [ ] CTA primera usa botón a `../contacto.html`
- [ ] Services Detail tiene 4-6 items
- [ ] Todos los service-detail-item usan MISMA estructura (sin clase reverse)
- [ ] Why Section tiene exactamente 4 items
- [ ] Contact Info tiene 4 contact-info-items
- [ ] Contact Info features tiene 4 items con checkmark
- [ ] Formulario tiene todos los 6 campos requeridos
- [ ] FAQs tiene 6-8 items
- [ ] CTA final usa link de WhatsApp con mensaje

## 13.3 Validación de Imágenes

- [ ] Todas las imágenes tienen atributo `alt` descriptivo
- [ ] Imágenes de service-detail usan `loading="lazy"`
- [ ] Rutas de imágenes usan prefijo `../`
- [ ] Alt text es descriptivo (no genérico como "imagen")

## 13.4 Validación de Links y Rutas

- [ ] Todos los links internos usan rutas relativas con `../`
- [ ] Link de logo apunta a `../index.html`
- [ ] CSS apunta a `../assets/css/styles.css`
- [ ] JS apunta a `../assets/js/main.js`
- [ ] Favicon apunta a `../assets/images/logo.avif`
- [ ] Links de WhatsApp usan formato correcto con mensaje pre-fill
- [ ] Links externos tienen `target="_blank"` y `rel="noopener noreferrer"`

## 13.5 Validación de Accesibilidad

- [ ] `<html lang="es">` presente
- [ ] Un solo `<h1>` en la página (hero-title)
- [ ] Jerarquía de headings correcta (h1 → h2 → h3 → h4)
- [ ] Botones de FAQ tienen `aria-expanded="false"`
- [ ] Todos los form labels tienen atributo `for` matching
- [ ] Todos los form inputs tienen `id` único

## 13.6 Validación de SVGs

- [ ] Checkmarks en service-detail-features usan SVG correcto
- [ ] Checkmarks en contact-info-features usan SVG correcto
- [ ] Iconos de why-section son apropiados al contenido
- [ ] Icono de WhatsApp completo en botón de CTA final
- [ ] Icono de WhatsApp completo en botón de formulario
- [ ] Chevron en FAQ items usa SVG correcto

## 13.7 Validación Técnica

- [ ] Archivo HTML valida sin errores en W3C Validator
- [ ] Todas las etiquetas están cerradas correctamente
- [ ] No hay atributos duplicados
- [ ] Indentación consistente (4 espacios o 2 espacios)
- [ ] Comentarios útiles para secciones principales
- [ ] Script de JS al final del body antes de `</body>`

## 13.8 Validación de Funcionalidad

- [ ] Menú de navegación funciona
- [ ] Dropdowns de navegación funcionan
- [ ] Formulario de contacto envía correctamente
- [ ] Select del formulario tiene opciones apropiadas
- [ ] Botón de WhatsApp abre app correctamente
- [ ] FAQs se expanden/colapsan al hacer click
- [ ] Todos los links funcionan correctamente

## 13.9 Validación de SEO

- [ ] URL del archivo es descriptiva (ej: `asesoria.html`, no `servicio1.html`)
- [ ] Meta description incluye keywords principales
- [ ] Title tag incluye nombre del servicio + SEIND
- [ ] H1 contiene keyword principal del servicio
- [ ] Contenido tiene densidad apropiada de keywords (1-3%)
- [ ] Alt texts de imágenes incluyen keywords cuando es natural

## 13.10 Pruebas en Navegadores

- [ ] Chrome (última versión)
- [ ] Firefox (última versión)
- [ ] Safari (última versión)
- [ ] Edge (última versión)
- [ ] Navegadores mobile (iOS Safari, Chrome Android)

## 13.11 Pruebas Responsive

- [ ] Mobile (320px-480px): Layout correcto, texto legible
- [ ] Tablet (768px-1024px): Layout apropiado
- [ ] Desktop (1280px+): Layout completo, spacing correcto
- [ ] Imágenes se adaptan correctamente
- [ ] Formulario es usable en mobile
- [ ] Botones son clickeables en touch devices

---

# RESUMEN DE DESCUBRIMIENTOS CLAVE

## Correcciones Críticas del Documento Anterior

### 1. Orden de Secciones
**INCORRECTO (documento anterior):**
- CTA Banner Section después de Why Choose

**CORRECTO (basado en archivos reales):**
- CTA Section inmediatamente después de Hero
- No existe "CTA Banner Section" como sección separada

### 2. Alternancia de Imágenes en Services Detail
**INCORRECTO (documento anterior):**
- "Item 2 (par) usa clase `.service-detail-reverse`"
- "Item 4 (par) usa clase `.service-detail-reverse`"

**CORRECTO (basado en archivos reales):**
- NINGÚN item usa clase `.service-detail-reverse`
- Todos los items usan exactamente la misma estructura HTML
- El CSS maneja la alternancia automáticamente
- NO agregar clases `.reverse` de ningún tipo

### 3. CTA Section
**INCORRECTO (documento anterior):**
- Una sola mención de CTA
- No especificaba diferencias entre primera y última

**CORRECTO (basado en archivos reales):**
- Dos CTA Sections diferentes
- Primera: después de Hero, botón a contacto.html
- Final: antes de Footer, botón a WhatsApp con mensaje

### 4. Contact Info Section
**INCORRECTO (documento anterior):**
- Información incompleta sobre estructura
- No especificaba número exacto de contact-info-items

**CORRECTO (basado en archivos reales):**
- Exactamente 4 contact-info-items
- Exactamente 4 features en contact-info-features
- Estructura de dos columnas con formulario completo

### 5. Número de Items por Sección
**INCORRECTO (documento anterior):**
- Service Detail: 3-5 items
- Why Choose: No especificaba número exacto

**CORRECTO (basado en archivos reales):**
- Service Detail: 4-6 items (asesoria.html tiene 6, mantenimiento.html tiene 6)
- Why Choose: Exactamente 4 items (patrón 2x2)
- Contact Info Items: Exactamente 4
- Contact Features: Exactamente 4
- Service Detail Features por item: Exactamente 4

---

# PLANTILLA RÁPIDA DE REFERENCIA

## Estructura Completa de Página

```html
<!DOCTYPE html>
<html lang="es">
<head>
    [META TAGS + FAVICON + CSS]
</head>
<body>
    <!-- 1. HEADER COMPONENT -->

    <!-- 2. HERO SECTION -->
    <section class="hero">
        <div class="hero-two-columns">
            <div class="hero-column-left">[H1 + subtitle]</div>
            <div class="hero-column-right">[H2 + 2 párrafos]</div>
        </div>
    </section>

    <!-- 3. CTA SECTION (Primera) -->
    <section class="cta-section">
        [Botón a ../contacto.html]
    </section>

    <!-- 4. SERVICES DETAIL SECTION -->
    <section class="services-detail-section">
        [4-6 service-detail-item, todos con misma estructura]
    </section>

    <!-- 5. WHY CHOOSE SECTION -->
    <section class="why-section">
        <div class="why-grid">
            [4 why-items]
        </div>
    </section>

    <!-- 6. CONTACT INFO SECTION -->
    <section class="contact-info-section">
        <div class="contact-two-columns">
            <div class="contact-column-info">[Info + 4 items + 4 features]</div>
            <div class="contact-column-form">[Formulario completo]</div>
        </div>
    </section>

    <!-- 7. FAQS SECTION -->
    <section class="faqs-section">
        [6-8 faq-items]
    </section>

    <!-- 8. CTA SECTION (Final) -->
    <section class="cta-section">
        [Botón a WhatsApp con mensaje]
    </section>

    <!-- 9. FOOTER COMPONENT -->

    <script src="../assets/js/main.js"></script>
</body>
</html>
```

---

**FIN DEL DOCUMENTO**

Este documento refleja con 100% de precisión la estructura real implementada en `asesoria.html` y `mantenimiento.html`. Cualquier desviación de estos patrones debe ser justificada y aprobada.
