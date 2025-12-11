/**
 * SEIND - Equipos de Seguridad Industrial
 * JavaScript Principal
 */

// ========================================
// 1. DOM CONTENT LOADED
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Load components
    loadHeader();
    loadFooter();

    // Initialize mobile menu
    initMobileMenu();

    // Initialize dropdowns for mobile
    initMobileDropdowns();

    // Smooth scroll
    initSmoothScroll();

    // Active nav on scroll
    initActiveNavOnScroll();
});

// ========================================
// 2. LOAD HEADER AND FOOTER
// ========================================

function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
            // Reinitialize mobile menu after header is loaded
            initMobileMenu();
            initMobileDropdowns();
        })
        .catch(error => console.error('Error loading header:', error));
}

function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}

// ========================================
// 3. MOBILE MENU
// ========================================

function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (!menuToggle || !navMenu) {
        return;
    }

    // Toggle menu
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');

        // Toggle animation for hamburger
        const spans = menuToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);

        if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');

            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('a:not(.has-dropdown > a)');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');

                const spans = menuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });
}

// ========================================
// 4. MOBILE DROPDOWNS
// ========================================

function initMobileDropdowns() {
    const dropdownItems = document.querySelectorAll('.has-dropdown');

    dropdownItems.forEach(item => {
        const link = item.querySelector('a');
        const dropdownIcon = item.querySelector('.dropdown-icon');

        if (!link || !dropdownIcon) return;

        // Only for mobile
        if (window.innerWidth <= 768) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                item.classList.toggle('active');

                // Rotate icon
                if (item.classList.contains('active')) {
                    dropdownIcon.style.transform = 'rotate(180deg)';
                } else {
                    dropdownIcon.style.transform = 'rotate(0deg)';
                }
            });
        }
    });

    // Reset dropdowns on resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            dropdownItems.forEach(item => {
                item.classList.remove('active');
                const dropdownIcon = item.querySelector('.dropdown-icon');
                if (dropdownIcon) {
                    dropdownIcon.style.transform = 'rotate(0deg)';
                }
            });
        }
    });
}

// ========================================
// 5. SMOOTH SCROLL
// ========================================

function initSmoothScroll() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Skip if it's just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hero scroll button
    const heroScroll = document.querySelector('.hero-scroll');
    if (heroScroll) {
        heroScroll.addEventListener('click', function() {
            const trustSection = document.querySelector('.trust-section');
            if (trustSection) {
                trustSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

// ========================================
// 6. ACTIVE NAV ON SCROLL
// ========================================

function initActiveNavOnScroll() {
    // Get all sections that have an ID
    const sections = document.querySelectorAll('section[id]');

    if (sections.length === 0) return;

    function updateActiveNav() {
        const scrollPosition = window.scrollY + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active class from all nav links
                document.querySelectorAll('.nav-menu a').forEach(link => {
                    link.classList.remove('active');
                });

                // Add active class to corresponding nav link
                const activeLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);
}

// ========================================
// 7. HEADER SCROLL EFFECT
// ========================================

let lastScroll = 0;
const header = document.querySelector('.site-header');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    // Add shadow on scroll
    if (currentScroll > 50) {
        header?.classList.add('scrolled');
    } else {
        header?.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ========================================
// 8. FORM VALIDATION (for future use)
// ========================================

function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }

        // Email validation
        if (input.type === 'email' && input.value.trim()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value.trim())) {
                isValid = false;
                input.classList.add('error');
            }
        }

        // Phone validation (basic)
        if (input.type === 'tel' && input.value.trim()) {
            const phoneRegex = /^[\d\s\-\+\(\)]+$/;
            if (!phoneRegex.test(input.value.trim())) {
                isValid = false;
                input.classList.add('error');
            }
        }
    });

    return isValid;
}

// ========================================
// 9. UTILITIES
// ========================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ========================================
// 10. LAZY LOADING IMAGES (for future use)
// ========================================

function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ========================================
// 11. WHATSAPP CONTACT FORM
// ========================================

function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (!contactForm) return;

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const nombre = document.getElementById('nombre').value.trim();
        const empresa = document.getElementById('empresa').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const email = document.getElementById('email').value.trim();
        const interes = document.getElementById('interes').value;
        const mensaje = document.getElementById('mensaje').value.trim();

        // Validate form
        if (!validateForm(contactForm)) {
            alert('Por favor, completa todos los campos correctamente.');
            return;
        }

        // Build WhatsApp message
        const whatsappMessage = `
*Nuevo contacto desde SEIND.com.mx*

*Nombre:* ${nombre}
*Empresa:* ${empresa}
*Teléfono:* ${telefono}
*Email:* ${email}
*Interés:* ${interes}

*Mensaje:*
${mensaje}
        `.trim();

        // Encode message for URL
        const encodedMessage = encodeURIComponent(whatsappMessage);

        // WhatsApp number (change to your actual number)
        const whatsappNumber = '5215512345678'; // Format: country code + number without + or spaces

        // Build WhatsApp URL
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        // Open WhatsApp
        window.open(whatsappURL, '_blank');

        // Optional: Reset form after sending
        contactForm.reset();

        // Show success message
        alert('¡Gracias! Te redirigiremos a WhatsApp para completar tu mensaje.');
    });
}

// Initialize contact form when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initContactForm();
});

// ========================================
// 12. FAQS ACCORDION
// ========================================

function initFaqsAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    if (faqQuestions.length === 0) return;

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const faqAnswer = faqItem.querySelector('.faq-answer');
            const isExpanded = this.getAttribute('aria-expanded') === 'true';

            // Close all other FAQs
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    otherQuestion.setAttribute('aria-expanded', 'false');
                    const otherAnswer = otherQuestion.parentElement.querySelector('.faq-answer');
                    otherAnswer.classList.remove('active');
                }
            });

            // Toggle current FAQ
            if (isExpanded) {
                this.setAttribute('aria-expanded', 'false');
                faqAnswer.classList.remove('active');
            } else {
                this.setAttribute('aria-expanded', 'true');
                faqAnswer.classList.add('active');
            }
        });
    });
}

// Initialize FAQs accordion when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initFaqsAccordion();
});

// ========================================
// 13. CONSOLE MESSAGE
// ========================================

console.log('%c SEIND - Seguridad Industrial ', 'background: #1E3A8A; color: white; font-size: 16px; padding: 10px;');
console.log('%c Diseñado y desarrollado con atención al detalle ', 'color: #6B7280; font-size: 12px;');
