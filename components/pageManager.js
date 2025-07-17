class PageManager {
    constructor() {
        this.currentPage = 'home';
        this.pages = {
            home: () => this.renderHomePage(),
            projects: () => this.renderProjectsPage(),
            experience: () => this.renderExperiencePage(),
            blog: () => this.renderBlogPage(),
            misc: () => this.renderMiscPage()
        };
        this.showPage('home');
    }

    showPage(pageId) {
        this.currentPage = pageId;
        const pageContainer = document.getElementById('page-container');
        pageContainer.innerHTML = this.pages[pageId]();
        this.addPageAnimation();
        this.scrollToTop();
    }

    renderHomePage() {
        return `
            <div class="page active" id="home">
                <div class="hero">
                    <h1>Rong Mu</h1>
                    <p class="subtitle">Aspiring Software Engineer | Computer Science Student</p>
                </div>
                
                <div class="section">
                    <h2>About Me 👋</h2>
                    <p>Hello! I'm a passionate computer science student...</p>
                </div>

                <div class="section">
                    <h2>Technical Skills 💻</h2>
                    ${this.renderSkillsSection()}
                </div>
            </div>
        `;
    }

    renderSkillsSection() {
        return `
            <div class="skills-section">
                <h3>Programming Languages</h3>
                <div class="skills-list">
                    ${skillsData.programming.map(skill => 
                        `<span class="skill-tag">${skill}</span>`
                    ).join('')}
                </div>
            </div>
        `;
    }

    renderProjectsPage() {
        return `
            <div class="page active" id="projects">
                <div class="section">
                    <h1>Projects 🍵</h1>
                    <p>Here are some of the projects I've worked on...</p>
                </div>
                ${projectsData.map(project => `
                    <div class="project-item">
                        <div class="project-title">${project.title}</div>
                        <div class="project-description">${project.description}</div>
                        <div class="project-tech">
                            ${project.technologies.map(tech => 
                                `<span class="tech-tag">${tech}</span>`
                            ).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    addPageAnimation() {
        const pageContainer = document.getElementById('page-container');
        pageContainer.style.opacity = '0';
        pageContainer.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            pageContainer.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            pageContainer.style.opacity = '1';
            pageContainer.style.transform = 'translateY(0)';
        }, 50);
    }

    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}