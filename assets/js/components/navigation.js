class Navigation {
    constructor() {
        this.navItems = [
            { id: 'home', label: 'Home', active: true },
            { id: 'projects', label: 'Projects', active: false },
            { id: 'experience', label: 'Experience', active: false },
            { id: 'blog', label: 'Notes', active: false },
            { id: 'misc', label: 'Misc', active: false }
        ];
        this.render();
        this.bindEvents();
    }

    render() {
        const navHTML = `
            <div class="nav-container">
                <div class="logo">Rong's Portfolio</div>
                <ul class="nav-menu">
                    ${this.navItems.map(item => `
                        <li class="nav-item ${item.active ? 'active' : ''}" 
                            data-page="${item.id}">
                            ${item.label}
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
        
        document.getElementById('navigation-container').innerHTML = navHTML;
    }

    bindEvents() {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const pageId = e.target.getAttribute('data-page');
                this.setActive(pageId);
                if (window.pageManager) {
                    window.pageManager.showPage(pageId);
                }
            });
        });
    }

    setActive(pageId) {
        this.navItems.forEach(item => {
            item.active = item.id === pageId;
        });
        
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        
        const activeItem = document.querySelector(`[data-page="${pageId}"]`);
        if (activeItem) {
            activeItem.classList.add('active');
        }
    }
}