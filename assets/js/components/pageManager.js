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
        // Parse initial page from URL hash
        const initialPage = window.location.hash.replace('#', '') || 'home';
        this.showPage(initialPage);
    }

    showPage(pageId, pushState = true) {
        this.currentPage = pageId;
        const pageContainer = document.getElementById('page-container');
        if (pageContainer && this.pages[pageId]) {
            pageContainer.innerHTML = this.pages[pageId]();
            this.addPageAnimation();
            utils.scrollToTop();
        }
        // Highlight the correct nav item
        if (window.navigation) {
            window.navigation.setActive(pageId);
        }

        if (pushState && window.location.hash !== `#${pageId}`) {
            window.location.hash = pageId;
        }
    }

    renderHomePage() {
        return `
            <div class="page active" id="home">
                <div class="hero">
                    <h1>Rong Mu</h1>
                </div>
                
                <div class="section">
                    <h2>👋 About Me</h2>
                    <p>Hello! I'm an ECE Master student at Carnegie Mellon University, specialized in 
                    AI systems.</p>
                    <p>My academic interests primarily focus on ML/LLM, including agentic AI and inference optimization. I'm also 
                    interested in topics in distributed systems, database systems, and high performance computing. </p>

                    <p> Currently, I'm interning as a ML Application Engineer at PDF Solutions. I'm actively seeking New Grad 
                    opportunities for full-time Software Engineer and Machine Learning positions starting in early 2026.</p>
                </div>

                <div class="section">
                    <h2>💻 <a href="#" onclick="event.preventDefault(); window.pageManager.showPage('projects')" style="text-decoration: underline;"> Projects</a></h2>
                </div>

                <div class= "section">
                    <h2> 🎓 Education </h2>
                    ${this.renderEducationSection()}
                </div>

                <div class="section" style="margin-top: 3rem;">
                    <h2>📷 Last :)</h2>
                    <p>Live a life you will remember~<a href="https://www.instagram.com/rongm_?igsh=NTc4MTIwNjQ2YQ%3D%3D&utm_source=qr" style="text-decoration: underline;">rongm_</a></p>
                    <p>Thanks for visiting my website! Feel free to reach out if you'd like to connect or collaborate on interesting projects.</p>
                </div>

                
            </div>
        `;


    }

    renderEducationSection() {
        return `
            <div class="education-section">
                <h4>Carnegie Mellon University</h4>
                <p>M.S. Artificial Intelligence (Aug 2024 - Dec 2025)</p>
            </div>
            <div class="education-section">
                <h4>University of California, Irvine</h4>
                <p>B.S. Computer Science, B.A. Quantitative Economics (Aug 2019 - Jun 2023) </p>
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
            <div class="skills-section">
                <h3>Frameworks & Libraries</h3>
                <div class="skills-list">
                    ${skillsData.frameworks.map(skill => 
                        `<span class="skill-tag">${skill}</span>`
                    ).join('')}
                </div>
            </div>
            <div class="skills-section">
                <h3>Tools & Technologies</h3>
                <div class="skills-list">
                    ${skillsData.tools.map(skill => 
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
                    <h1>Projects</h1>
                </div>
                ${projectsData.map(project => `
                    <div class="project-item">
                        <div class="project-title">${project.title}</div>
                        <div class="project-date">${project.date}</div>
                        <div class="project-description">${project.description.replace(/\n/g, '<br>')}</div>
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

    renderExperiencePage() {
        return `
            <div class="page active" id="experience">
                <div class="section">
                    <h1>Experience</h1>
                </div>

                <div class="section">
                    ${experienceData.map(exp => `
                        <div class="experience-item">
                            <div class="experience-title">${exp.title}</div>
                            <div class="experience-company">${exp.company}</div>
                            <div class="experience-date">${exp.date}</div>
                            <div class="experience-description">
                                ${exp.description.replace(/\n/g, '<br>')}
                            </div>
                            <p></p>
                            <div class="project-tech">
                                ${exp.technologies.map(tech => 
                                    `<span class="tech-tag">${tech}</span>`
                                ).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    renderBlogPage() {
        return `
            <div class="page active" id="blog">
                <div class="section">
                    <h1>Notes</h1>
                    <p>Under construction..</p>
                </div>
            </div>
        `;
    }

    renderMiscPage() {
        return `
            <div class="page active" id="misc">
                <div class="section">
                    <h1>Misc</h1>
                    <p>Other interesting things about me, my hobbies, achievements, and random thoughts.</p>
                </div>

                <div class="misc-grid">
                    
                    <div class="misc-item">
                        <h3>📚 Currently Learning</h3>
                        <p>Raft Consensus</p>
                        <p>Database Systems</p>
                        <p>Transformer</p>
                    </div>
                    
                    <div class="misc-item">
                        <h3>📍 Contact</h3>
                        <p>📧 <a href="mailto:rongmu@andrew.cmu.edu">Email</a></p>
                        <p>💼 <a href="https://www.linkedin.com/in/rong-lynn-mu-028992180/">LinkedIn</a></p>
                        <p>🐙 <a href="https://github.com/RongMu00">GitHub</a></p>
                    </div>
                </div>
            </div>
        `;
    }

    addPageAnimation() {
        const pageContainer = document.getElementById('page-container');
        if (pageContainer) {
            pageContainer.style.opacity = '0';
            pageContainer.style.transform = 'translateY(10px)';
            
            setTimeout(() => {
                pageContainer.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                pageContainer.style.opacity = '1';
                pageContainer.style.transform = 'translateY(0)';
            }, 50);
        }
    }
}