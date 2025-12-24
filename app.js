document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const searchInput = document.getElementById('searchInput');
    const categoryContainer = document.getElementById('categoryContainer');
    const resourceGrid = document.getElementById('resourceGrid');
    const noResults = document.getElementById('noResults');

    // State
    let currentCategory = 'all';
    let searchTerm = '';

    // Initialize
    init();
    registerServiceWorker();

    function registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('./sw.js')
                    .then(registration => {
                        console.log('ServiceWorker registration successful with scope: ', registration.scope);
                    })
                    .catch(err => {
                        console.log('ServiceWorker registration failed: ', err);
                    });
            });
        }
    }

    function init() {
        renderCategories();
        renderResources();
        setupEventListeners();
    }

    function getUniqueCategories() {
        const categories = new Set(resources.map(r => r.category));
        return Array.from(categories).sort();
    }

    function renderCategories() {
        const categories = getUniqueCategories();
        // Keep 'All' button, add others
        categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = 'category-chip';
            btn.textContent = cat;
            btn.dataset.category = cat;
            btn.addEventListener('click', () => handleCategoryClick(cat, btn));
            categoryContainer.appendChild(btn);
        });
    }

    function handleCategoryClick(category, btnElement) {
        currentCategory = category;

        // Update UI
        document.querySelectorAll('.category-chip').forEach(b => b.classList.remove('active'));
        btnElement.classList.add('active');

        // Render
        renderResources();
    }

    function setupEventListeners() {
        // Search
        searchInput.addEventListener('input', (e) => {
            searchTerm = e.target.value.toLowerCase();
            renderResources();
        });

        // Delegate 'All' click since it's hardcoded
        const allBtn = document.querySelector('.category-chip[data-category="all"]');
        if (allBtn) {
            allBtn.addEventListener('click', () => handleCategoryClick('all', allBtn));
        }
    }

    function filterResources() {
        return resources.filter(resource => {
            // Category Match
            const categoryMatch = currentCategory === 'all' || resource.category === currentCategory;

            // Search Match
            const searchString = `
                ${resource.name}
                ${resource.services}
                ${resource.notes}
                ${resource.address}
                ${resource.category}
            `.toLowerCase();

            const searchMatch = searchString.includes(searchTerm);

            return categoryMatch && searchMatch;
        });
    }

    function renderResources() {
        const filtered = filterResources();
        resourceGrid.innerHTML = '';

        if (filtered.length === 0) {
            noResults.classList.remove('hidden');
        } else {
            noResults.classList.add('hidden');
            filtered.forEach(resource => {
                const card = createResourceCard(resource);
                resourceGrid.appendChild(card);
            });
        }
    }

    function createResourceCard(resource) {
        const div = document.createElement('div');
        div.className = 'resource-card';

        // Icons
        const locationIcon = `<svg class="info-icon" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`;
        const phoneIcon = `<svg class="info-icon" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>`;
        const clockIcon = `<svg class="info-icon" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`;

        // Build address link
        let addressLink = '#';
        let addressDisplay = resource.address;
        if (resource.address && resource.address.toLowerCase() !== 'confidential' && resource.address.toLowerCase() !== 'multiple locations') {
            addressLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(resource.address)}`;
        }

        // Build phone link
        let phoneLink = '#';
        let phoneDisplay = resource.phone;
        if (resource.phone && resource.phone !== 'Various') {
             // Basic clean of phone number for link
             const cleanPhone = resource.phone.replace(/[^0-9]/g, '');
             if (cleanPhone.length >= 10) {
                 phoneLink = `tel:${cleanPhone}`;
             }
        }

        // Services Text
        const services = resource.services ? `<div class="detail-text">${resource.services}</div>` : '';
        const notes = resource.notes ? `<div class="detail-text"><span class="detail-label">Notes:</span>${resource.notes}</div>` : '';
        const transport = resource.transportation ? `<div class="detail-text"><span class="detail-label">Transportation:</span>${resource.transportation}</div>` : '';

        div.innerHTML = `
            <div class="card-category">${resource.category}</div>
            <h3 class="card-title">${resource.name}</h3>

            <div class="card-info">
                ${resource.address ? `
                    <div class="info-row">
                        ${locationIcon}
                        <span>${resource.address}</span>
                    </div>
                ` : ''}

                ${resource.phone ? `
                    <div class="info-row">
                        ${phoneIcon}
                        <span>${resource.phone}</span>
                    </div>
                ` : ''}

                ${resource.hours ? `
                    <div class="info-row">
                        ${clockIcon}
                        <span>${resource.hours}</span>
                    </div>
                ` : ''}
            </div>

            <div class="card-details">
                <span class="detail-label">Services</span>
                ${services}
                ${notes}
                ${transport}
            </div>

            <div class="action-row">
                ${addressLink !== '#' ? `<a href="${addressLink}" target="_blank" class="btn btn-secondary" aria-label="View map for ${resource.name}">Map</a>` : ''}
                ${phoneLink !== '#' ? `<a href="${phoneLink}" class="btn btn-primary" aria-label="Call ${resource.name}">Call</a>` : ''}
            </div>
        `;

        return div;
    }
});
