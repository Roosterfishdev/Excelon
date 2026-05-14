(function initEntrySplash() {
    'use strict';

    /** Solo pantalla de entrada en el home (no en /productos/, /contacto/, etc.). */
    function excelonIsHomePage() {
        var p = window.location.pathname || '/';
        p = p.replace(/\/+$/, '') || '/';
        if (p === '/') return true;
        var parts = p.split('/').filter(Boolean);
        return parts.length === 1 && parts[0] === 'index.html';
    }

    function run() {
        if (!document.body) return;
        if (!excelonIsHomePage()) return;

        var skip =
            window.matchMedia &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        var splash = document.createElement('div');
        splash.id = 'exc-entry-splash';
        splash.className = 'exc-entry-splash';
        splash.setAttribute('role', 'progressbar');
        splash.setAttribute('aria-busy', 'true');
        splash.setAttribute('aria-label', 'Cargando');

        var inner = document.createElement('div');
        inner.className = 'exc-entry-splash__inner';
        var loader = document.createElement('div');
        loader.className = 'loader';
        inner.appendChild(loader);
        splash.appendChild(inner);

        document.body.appendChild(splash);

        var prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        function cleanup() {
            if (splash.parentNode) splash.parentNode.removeChild(splash);
            document.body.style.overflow = prevOverflow || '';
        }

        if (skip) {
            cleanup();
            return;
        }

        var proceededToSlide = false;

        function runExitSequence() {
            splash.classList.add('exc-entry-splash--loader-out');

            var loaderEl = splash.querySelector('.loader');

            function slideAway() {
                if (proceededToSlide) return;
                proceededToSlide = true;
                splash.setAttribute('aria-busy', 'false');
                splash.classList.add('exc-entry-splash--exit');

                function onSplashTransitionEnd(e) {
                    if (e.target !== splash || e.propertyName !== 'transform') return;
                    splash.removeEventListener('transitionend', onSplashTransitionEnd);
                    cleanup();
                }

                splash.addEventListener('transitionend', onSplashTransitionEnd);
                window.setTimeout(function () {
                    if (splash.parentNode) cleanup();
                }, 700);
            }

            if (loaderEl) {
                function onLoaderTransitionEnd(e) {
                    if (e.target !== loaderEl || e.propertyName !== 'opacity') return;
                    loaderEl.removeEventListener('transitionend', onLoaderTransitionEnd);
                    slideAway();
                }
                loaderEl.addEventListener('transitionend', onLoaderTransitionEnd);
            }
            window.setTimeout(slideAway, 450);
        }

        var loadOk = false;
        var minOk = false;
        var exitStarted = false;

        function tryStartExit() {
            if (!loadOk || !minOk || exitStarted) return;
            exitStarted = true;
            runExitSequence();
        }

        function onLoad() {
            loadOk = true;
            tryStartExit();
        }

        if (document.readyState === 'complete') {
            loadOk = true;
        } else {
            window.addEventListener('load', onLoad);
        }

        window.setTimeout(function () {
            minOk = true;
            tryStartExit();
        }, 1500);

        tryStartExit();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', run);
    } else {
        run();
    }
})();

(function () {
    'use strict';

    var header = document.getElementById('header');
    var navMenu = document.getElementById('nav-menu');
    var navToggle = document.getElementById('nav-toggle');
    var navClose = document.getElementById('nav-close');
    var scrollTop = document.getElementById('scroll-top');
    var contactForm = document.getElementById('contact-form');

    function closeMenu() {
        if (!navMenu) return;
        navMenu.classList.remove('show-menu');
        if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
        navMenu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    function closeBrandFiltersIfOpen() {
        var panel = document.getElementById('brand-filters-panel');
        var filterToggle = document.getElementById('brand-filter-toggle');
        var backdrop = document.getElementById('brand-filters-backdrop');
        if (!panel || !panel.classList.contains('is-open')) return;
        panel.classList.remove('is-open');
        if (backdrop) {
            backdrop.classList.remove('is-visible');
            backdrop.setAttribute('aria-hidden', 'true');
        }
        if (filterToggle) {
            filterToggle.setAttribute('aria-expanded', 'false');
        }
        if (window.matchMedia && window.matchMedia('(max-width: 899px)').matches) {
            panel.setAttribute('aria-hidden', 'true');
        } else {
            panel.removeAttribute('aria-hidden');
        }
        var brandModal = document.getElementById('brand-modal');
        if ((!brandModal || !brandModal.classList.contains('is-open')) && (!navMenu || !navMenu.classList.contains('show-menu'))) {
            document.body.style.overflow = '';
        }
    }

    function openMenu() {
        closeBrandFiltersIfOpen();
        if (!navMenu) return;
        navMenu.classList.add('show-menu');
        if (navToggle) navToggle.setAttribute('aria-expanded', 'true');
        navMenu.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    if (navToggle && navMenu) {
        navMenu.setAttribute('aria-hidden', 'true');
        navToggle.addEventListener('click', function () {
            if (navMenu.classList.contains('show-menu')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }

    if (navClose) {
        navClose.addEventListener('click', closeMenu);
    }

    if (navMenu) {
        navMenu.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', closeMenu);
        });
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('show-menu')) {
            closeMenu();
        }
    });

    function scrollHeader() {
        if (!header) return;
        if (window.scrollY >= 40) {
            header.classList.add('scroll-header');
        } else {
            header.classList.remove('scroll-header');
        }
    }

    function showScrollTop() {
        if (!scrollTop) return;
        if (window.scrollY >= 400) {
            scrollTop.classList.add('show-scroll');
        } else {
            scrollTop.classList.remove('show-scroll');
        }
    }

    if (scrollTop) {
        scrollTop.addEventListener('click', function (e) {
            var href = scrollTop.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                var target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var submitButton = contactForm.querySelector('.form__button');
            var originalText = submitButton.textContent;
            submitButton.textContent = 'Enviando...';
            submitButton.disabled = true;

            setTimeout(function () {
                var messageDiv = document.createElement('div');
                messageDiv.className = 'form__feedback form__feedback--success';
                messageDiv.textContent = '¡Gracias por escribirnos! Recibimos tu mensaje y te contactaremos en las próximas 24–48 horas.';
                contactForm.appendChild(messageDiv);
                contactForm.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                setTimeout(function () {
                    messageDiv.remove();
                }, 5000);
            }, 1200);
        });
    }

    window.addEventListener('scroll', function () {
        scrollHeader();
        showScrollTop();
    });

    scrollHeader();
    showScrollTop();

    /* Modal detalle de marca (productos) — fuente única: EXCELON_BRANDS en brands-catalog.js */
    var brandModal = document.getElementById('brand-modal');
    var brandModalLogo = document.getElementById('brand-modal-logo');
    var brandModalTitle = document.getElementById('brand-modal-title');
    var brandModalDesc = document.getElementById('brand-modal-desc');
    var brandModalSite = document.getElementById('brand-modal-site');
    var brandModalLastFocus = null;

    var BRAND_DETAIL_MAP = {};
    if (typeof window.EXCELON_BRANDS !== 'undefined' && window.EXCELON_BRANDS.length) {
        window.EXCELON_BRANDS.forEach(function (b) {
            BRAND_DETAIL_MAP[b.id] = {
                name: b.name,
                description: b.description,
                url: b.link,
                logo: b.logo
            };
        });
    }

    function openBrandModal(key, triggerEl) {
        if (!brandModal || !BRAND_DETAIL_MAP[key]) return;
        if (!brandModalLogo || !brandModalTitle || !brandModalDesc || !brandModalSite) return;
        var d = BRAND_DETAIL_MAP[key];
        var actionsRow = brandModal.querySelector('.brand-modal__actions');
        brandModalLastFocus = triggerEl || document.activeElement;
        brandModalLogo.src = d.logo;
        brandModalLogo.alt = d.name;
        brandModalTitle.textContent = d.name;
        brandModalDesc.textContent = d.description;
        var rawUrl = d.url && String(d.url).trim();
        if (!rawUrl) {
            if (actionsRow) actionsRow.hidden = true;
        } else {
            if (actionsRow) actionsRow.hidden = false;
            brandModalSite.href = rawUrl;
            var isExternal = /^https?:\/\//i.test(rawUrl);
            if (isExternal) {
                brandModalSite.target = '_blank';
                brandModalSite.rel = 'noopener noreferrer';
                brandModalSite.innerHTML =
                    'Visitar sitio de la marca <span class="btn-ghost__arrow" aria-hidden="true">↗</span>';
                brandModalSite.setAttribute(
                    'aria-label',
                    'Visitar sitio web de ' + d.name + ' (se abre en una pestaña nueva)'
                );
            } else {
                brandModalSite.target = '_self';
                brandModalSite.removeAttribute('rel');
                brandModalSite.innerHTML =
                    'Ir a contacto <span class="btn-ghost__arrow" aria-hidden="true">→</span>';
                brandModalSite.setAttribute('aria-label', 'Ir a la página de contacto de Excelon');
            }
        }
        brandModal.classList.add('is-open');
        brandModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        var closeBtn = brandModal.querySelector('.brand-modal__close');
        if (closeBtn) closeBtn.focus();
    }

    function closeBrandModal() {
        if (!brandModal || !brandModal.classList.contains('is-open')) return;
        brandModal.classList.remove('is-open');
        brandModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        if (brandModalLogo) {
            brandModalLogo.removeAttribute('src');
            brandModalLogo.alt = '';
        }
        if (brandModalLastFocus && typeof brandModalLastFocus.focus === 'function') {
            brandModalLastFocus.focus();
        }
        brandModalLastFocus = null;
    }

    if (brandModal) {
        document.querySelectorAll('.exc-brand-card[data-brand-key]').forEach(function (card) {
            card.addEventListener('click', function (e) {
                var key = card.getAttribute('data-brand-key');
                if (!key) return;
                openBrandModal(key, card);
            });
            card.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    var key = card.getAttribute('data-brand-key');
                    if (key) openBrandModal(key, card);
                }
            });
        });

        brandModal.querySelectorAll('[data-brand-modal-close]').forEach(function (el) {
            el.addEventListener('click', function (e) {
                e.preventDefault();
                closeBrandModal();
            });
        });

        if (brandModalSite) {
            brandModalSite.addEventListener('click', function () {
                window.setTimeout(closeBrandModal, 50);
            });
        }

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && brandModal.classList.contains('is-open')) {
                closeBrandModal();
            }
        });
    }

    function initScrollReveal() {
        var seen = new Set();
        var targets = [];

        function add(el) {
            if (!el || el.nodeType !== 1 || seen.has(el)) return;
            if (el.classList && el.classList.contains('exc-skip-reveal')) return;
            seen.add(el);
            el.setAttribute('data-reveal', '');
            targets.push(el);
        }

        function addFromContainerChild(child) {
            if (child.classList && child.classList.contains('exc-brand-page')) {
                Array.prototype.forEach.call(child.children, add);
            } else {
                add(child);
            }
        }

        document.querySelectorAll('main > section').forEach(function (sec) {
            var wrap = sec.querySelector(':scope > .container');
            if (wrap) {
                Array.prototype.forEach.call(wrap.children, addFromContainerChild);
            } else {
                Array.prototype.forEach.call(sec.children, add);
            }
        });

        document.querySelectorAll('footer .ml-footer__grid > div').forEach(add);
        document.querySelectorAll('footer .ml-footer__bottom').forEach(add);

        function revealAll() {
            targets.forEach(function (el) {
                el.classList.add('is-revealed');
            });
        }

        if (!targets.length) return;

        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            revealAll();
            return;
        }

        if (!('IntersectionObserver' in window)) {
            revealAll();
            return;
        }

        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-revealed');
                io.unobserve(entry.target);
            });
        }, { root: null, rootMargin: '0px 0px -6% 0px', threshold: 0.06 });

        targets.forEach(function (el) {
            io.observe(el);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initScrollReveal);
    } else {
        initScrollReveal();
    }
})();
