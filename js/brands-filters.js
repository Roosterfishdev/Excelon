/**
 * Filtros y búsqueda en la página de marcas (/productos/).
 * Depende de: window.EXCELON_BRANDS, EXCELON_BRAND_CATEGORIES, EXCELON_BRAND_TAG_OPTIONS (brands-catalog.js)
 */
(function () {
    'use strict';

    function initBrandFilters() {
    var brands = typeof window.EXCELON_BRANDS !== 'undefined' ? window.EXCELON_BRANDS : null;
    var categories = typeof window.EXCELON_BRAND_CATEGORIES !== 'undefined' ? window.EXCELON_BRAND_CATEGORIES : [];
    var tagOptions = typeof window.EXCELON_BRAND_TAG_OPTIONS !== 'undefined' ? window.EXCELON_BRAND_TAG_OPTIONS : [];

    var grid = document.getElementById('brand-grid');
    var searchInput = document.getElementById('brand-search');
    var emptyEl = document.getElementById('brand-empty-state');
    var catContainer = document.getElementById('brand-cat-chips');
    var tagContainer = document.getElementById('brand-tag-chips');
    var clearBtn = document.getElementById('brand-clear-filters');

    if (!brands || !brands.length || !grid || !searchInput || !catContainer || !tagContainer) {
        return;
    }

    var byId = {};
    brands.forEach(function (b) {
        byId[b.id] = b;
    });

    var selectedCategory = '';
    var selectedTags = {};

    function stripDiacritics(s) {
        try {
            return String(s)
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '');
        } catch (e) {
            return String(s);
        }
    }

    function norm(s) {
        return stripDiacritics(String(s || '').toLowerCase());
    }

    function brandSearchBlob(b) {
        return norm(
            [b.name, b.description, b.category, (b.tags || []).join(' ')].join(' ')
        );
    }

    function matchesSearch(b, q) {
        if (!q) return true;
        return brandSearchBlob(b).indexOf(q) !== -1;
    }

    function matchesCategory(b) {
        if (!selectedCategory) return true;
        return b.category === selectedCategory;
    }

    /** Varias etiquetas: la marca debe cumplir todas (AND), como refinamientos en e-commerce */
    function matchesTags(b) {
        var keys = Object.keys(selectedTags);
        if (!keys.length) return true;
        var tags = b.tags || [];
        for (var i = 0; i < keys.length; i++) {
            if (tags.indexOf(keys[i]) === -1) return false;
        }
        return true;
    }

    function applyFilters() {
        var q = norm(searchInput.value.trim());
        var cards = grid.querySelectorAll('.exc-brand-card[data-brand-id]');
        var visible = 0;

        cards.forEach(function (card) {
            var id = card.getAttribute('data-brand-id');
            var b = byId[id];
            if (!b) {
                card.classList.add('exc-brand-card--filter-hidden');
                card.setAttribute('aria-hidden', 'true');
                card.setAttribute('tabindex', '-1');
                return;
            }
            var ok = matchesSearch(b, q) && matchesCategory(b) && matchesTags(b);
            if (ok) {
                card.classList.remove('exc-brand-card--filter-hidden');
                card.removeAttribute('aria-hidden');
                card.setAttribute('tabindex', '0');
                visible += 1;
            } else {
                card.classList.add('exc-brand-card--filter-hidden');
                card.setAttribute('aria-hidden', 'true');
                card.setAttribute('tabindex', '-1');
            }
        });

        if (emptyEl) {
            emptyEl.hidden = visible !== 0;
        }
    }

    function setCategory(cat) {
        selectedCategory = cat || '';
        catContainer.querySelectorAll('.exc-brand-chip').forEach(function (chip) {
            var c = chip.getAttribute('data-category') || '';
            var on = c === selectedCategory;
            chip.classList.toggle('is-active', on);
            chip.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        applyFilters();
    }

    function toggleTag(tag) {
        if (selectedTags[tag]) {
            delete selectedTags[tag];
        } else {
            selectedTags[tag] = true;
        }
        tagContainer.querySelectorAll('.exc-brand-chip').forEach(function (chip) {
            var t = chip.getAttribute('data-tag');
            if (!t) return;
            var on = !!selectedTags[t];
            chip.classList.toggle('is-active', on);
            chip.setAttribute('aria-pressed', on ? 'true' : 'false');
        });
        applyFilters();
    }

    function clearFilters() {
        searchInput.value = '';
        selectedTags = {};
        tagContainer.querySelectorAll('.exc-brand-chip[data-tag]').forEach(function (chip) {
            chip.classList.remove('is-active');
            chip.setAttribute('aria-pressed', 'false');
        });
        setCategory('');
        searchInput.focus();
    }

    function buildCategoryChips() {
        var frag = document.createDocumentFragment();
        var allBtn = document.createElement('button');
        allBtn.type = 'button';
        allBtn.className = 'exc-brand-chip is-active';
        allBtn.setAttribute('data-category', '');
        allBtn.setAttribute('aria-pressed', 'true');
        allBtn.textContent = 'Todas';
        frag.appendChild(allBtn);

        categories.forEach(function (cat) {
            var btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'exc-brand-chip';
            btn.setAttribute('data-category', cat);
            btn.setAttribute('aria-pressed', 'false');
            btn.textContent = cat;
            frag.appendChild(btn);
        });

        catContainer.appendChild(frag);

        catContainer.addEventListener('click', function (e) {
            var chip = e.target.closest('.exc-brand-chip');
            if (!chip || !catContainer.contains(chip)) return;
            var cat = chip.getAttribute('data-category') || '';
            setCategory(cat);
        });
    }

    function buildTagChips() {
        var frag = document.createDocumentFragment();
        tagOptions.forEach(function (tag) {
            var btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'exc-brand-chip exc-brand-chip--tag';
            btn.setAttribute('data-tag', tag);
            btn.setAttribute('aria-pressed', 'false');
            btn.textContent = tag;
            frag.appendChild(btn);
        });
        tagContainer.appendChild(frag);

        tagContainer.addEventListener('click', function (e) {
            var chip = e.target.closest('.exc-brand-chip[data-tag]');
            if (!chip || !tagContainer.contains(chip)) return;
            var tag = chip.getAttribute('data-tag');
            if (tag) toggleTag(tag);
        });
    }

    searchInput.addEventListener('input', applyFilters);
    searchInput.addEventListener('search', applyFilters);

    if (clearBtn) {
        clearBtn.addEventListener('click', clearFilters);
    }

    buildCategoryChips();
    buildTagChips();
    applyFilters();
    initBrandFilterDrawer(applyFilters);
    }

    function initBrandFilterDrawer(applyFilters) {
        var toggle = document.getElementById('brand-filter-toggle');
        var panel = document.getElementById('brand-filters-panel');
        var closeBtn = document.getElementById('brand-filters-close');
        var backdrop = document.getElementById('brand-filters-backdrop');
        if (!toggle || !panel) {
            return;
        }

        var mq = window.matchMedia('(max-width: 899px)');

        function brandModalOpen() {
            var m = document.getElementById('brand-modal');
            return m && m.classList.contains('is-open');
        }

        function syncPanelA11y() {
            if (!mq.matches) {
                panel.removeAttribute('aria-hidden');
                return;
            }
            panel.setAttribute('aria-hidden', panel.classList.contains('is-open') ? 'false' : 'true');
        }

        function syncBodyScroll() {
            if (!mq.matches) {
                document.body.style.overflow = '';
                return;
            }
            if (panel.classList.contains('is-open') && !brandModalOpen()) {
                document.body.style.overflow = 'hidden';
            } else if (!brandModalOpen()) {
                var navMenu = document.getElementById('nav-menu');
                if (!navMenu || !navMenu.classList.contains('show-menu')) {
                    document.body.style.overflow = '';
                }
            }
        }

        function closePanel() {
            panel.classList.remove('is-open');
            toggle.setAttribute('aria-expanded', 'false');
            if (backdrop) {
                backdrop.classList.remove('is-visible');
                backdrop.setAttribute('aria-hidden', 'true');
            }
            syncPanelA11y();
            syncBodyScroll();
        }

        function openPanel() {
            if (!mq.matches) return;
            panel.classList.add('is-open');
            toggle.setAttribute('aria-expanded', 'true');
            if (backdrop) {
                backdrop.classList.add('is-visible');
                backdrop.setAttribute('aria-hidden', 'false');
            }
            syncPanelA11y();
            syncBodyScroll();
        }

        toggle.addEventListener('click', function () {
            if (!mq.matches) return;
            if (panel.classList.contains('is-open')) {
                closePanel();
            } else {
                openPanel();
            }
        });

        if (backdrop) {
            backdrop.addEventListener('click', closePanel);
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', closePanel);
        }

        var applyBtn = document.getElementById('brand-filters-apply');
        if (applyBtn) {
            applyBtn.addEventListener('click', function () {
                if (typeof applyFilters === 'function') {
                    applyFilters();
                }
                closePanel();
            });
        }

        document.addEventListener('keydown', function (e) {
            if (e.key !== 'Escape' || !mq.matches) return;
            if (panel.classList.contains('is-open')) {
                closePanel();
            }
        });

        function onViewportChange() {
            if (!mq.matches) {
                panel.classList.remove('is-open');
                toggle.setAttribute('aria-expanded', 'false');
                if (backdrop) {
                    backdrop.classList.remove('is-visible');
                    backdrop.setAttribute('aria-hidden', 'true');
                }
                syncBodyScroll();
            }
            syncPanelA11y();
        }

        if (typeof mq.addEventListener === 'function') {
            mq.addEventListener('change', onViewportChange);
        } else if (typeof mq.addListener === 'function') {
            mq.addListener(onViewportChange);
        }

        syncPanelA11y();
        syncBodyScroll();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initBrandFilters);
    } else {
        initBrandFilters();
    }
})();
