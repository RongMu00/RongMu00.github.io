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
        if (pageContainer && this.pages[pageId]) {
            pageContainer.innerHTML = this.pages[pageId]();
            this.addPageAnimation();
            utils.scrollToTop();
        }
    }

    renderHomePage() {
        return `
            <div class="page active" id="home">
                <div class="hero">
                    <h1>Hi, I'm Rong Mu</h1>
                    <p class="subtitle">Aspiring Software Engineer | AI & Systems Enthusiast | Building Scalable Solutions </p>
                </div>
                
                <div class="section">
                    <h2>About Me 👋</h2>
                    <p>Hello! I'm a Master student in Computer Engineering at Carnegie Mellon University, specialized in AI systems. 
                    My academic interests primarily focus on ML/LLM, including agentic AI systems, inference optimization, adversarial training.</p> 
                    
                    <p>I enjoy building AI-powered systems and applications. Previously, I worked closely with Dr. Qi Afred Chen and Dr. Ningfei Wang,
                    studying robustness of autonomous driving perception under physical adversarial attacks. I also worked with Dr. An Do on building
                    ML-powered EEG superdecoder. 
                    </p>
                    <p> Currently, I am working as a ML application engineer intern at PDF Solutions, Inc., building data infrastructure for their intelligent
                    anomaly detection system. In my spare time, I immerse myself in learning computer systems and system-aspect LLM optimization.  
                    </p>
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
                    <h1>Projects 🍵</h1>
                    <p>Here are some of the projects I've worked on, showcasing my skills in various technologies and domains.</p>
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

    renderExperiencePage() {
        return `
            <div class="page active" id="experience">
                <div class="section">
                    <h1>Experience</h1>
                    <p>My professional journey including internships, research experiences, and other relevant work.</p>
                </div>

                <div class="section">
                    <h2>Internships</h2>
                    ${experienceData.internships.map(exp => `
                        <div class="experience-item">
                            <div class="experience-header">
                                <div>
                                    <div class="experience-title">${exp.title}</div>
                                    <div class="experience-company">${exp.company}</div>
                                </div>
                                <div class="experience-date">${exp.date}</div>
                            </div>
                            <div class="experience-description">${exp.description}</div>
                        </div>
                    `).join('')}
                </div>

                <div class="section">
                    <h2>Research Experience</h2>
                    ${experienceData.research.map(exp => `
                        <div class="experience-item">
                            <div class="experience-header">
                                <div>
                                    <div class="experience-title">${exp.title}</div>
                                    <div class="experience-company">${exp.company}</div>
                                </div>
                                <div class="experience-date">${exp.date}</div>
                            </div>
                            <div class="experience-description">${exp.description}</div>
                        </div>
                    `).join('')}
                </div>

                <div class="section">
                    <h2>Other Experience</h2>
                    ${experienceData.other.map(exp => `
                        <div class="experience-item">
                            <div class="experience-header">
                                <div>
                                    <div class="experience-title">${exp.title}</div>
                                    <div class="experience-company">${exp.company}</div>
                                </div>
                                <div class="experience-date">${exp.date}</div>
                            </div>
                            <div class="experience-description">${exp.description}</div>
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
                    <h1>Blog</h1>
                    <p>Sharing my learning journey, insights, and thoughts on various computer science topics.</p>
                </div>
                ${blogData.map(post => `
                    <div class="blog-post">
                        <div class="blog-header">
                            <div>
                                <div class="blog-title">${post.title}</div>
                            </div>
                            <div class="blog-date">${post.date}</div>
                        </div>
                        <div class="blog-excerpt">${post.excerpt}</div>
                        <a href="#" class="read-more">Read More →</a>
                    </div>
                `).join('')}
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
                        <h3>🏆 Achievements</h3>
                        <p>Dean's List for 3 consecutive semesters</p>
                        <p>Winner of University Hackathon 2023</p>
                        <p>Google Code Jam Qualification Round</p>
                        <p>Open Source Contributor (500+ commits)</p>
                        <p>Published research paper in ACM conference</p>
                    </div>
                    
                    <div class="misc-item">
                        <h3>🎯 Hobbies</h3>
                        <p>Competitive Programming</p>
                        <p>📷 Photography</p>
                        <p>♟️ Chess</p>
                        <p>📚 Reading Tech Blogs</p>
                        <p>🌱 Contributing to Open Source</p>
                        <p>🎵 Playing Guitar</p>
                    </div>
                    
                    <div class="misc-item">
                        <h3>📚 Currently Learning</h3>
                        <p>Kubernetes & DevOps</p>
                        <p>System Design</p>
                        <p>Advanced Machine Learning</p>
                        <p>Cloud Architecture (AWS/GCP)</p>
                        <p>Rust Programming Language</p>
                    </div>
                    
                    <div class="misc-item">
                        <h3>🌟 Fun Facts</h3>
                        <p>I can solve a Rubik's cube in under 2 minutes</p>
                        <p>I've contributed to 10+ open source projects</p>
                        <p>I maintain a tech blog with 1000+ readers</p>
                        <p>I speak 3 programming languages fluently</p>
                        <p>I once debugged code for 12 hours straight</p>
                    </div>
                    
                    <div class="misc-item">
                        <h3>📍 Contact</h3>
                        <p>📧 john.doe@email.com</p>
                        <p>💼 <a href="#">linkedin.com/in/johndoe</a></p>
                        <p>🐙 <a href="#">github.com/johndoe</a></p>
                        <p>🐦 <a href="#">@johndoe_dev</a></p>
                        <p>🌐 <a href="#">johndoe.dev</a></p>
                    </div>
                    
                    <div class="misc-item">
                        <h3>💭 Quote</h3>
                        <p>"The best way to learn programming is by building projects that you're passionate about. Every line of code is a step towards mastery."</p>
                        <p style="margin-top: 1rem; font-style: italic;">- My coding philosophy</p>
                    </div>
                </div>

                <div class="section" style="margin-top: 3rem;">
                    <h2>Last :)</h2>
                    <p>⛰️ Nomad Photographer with Canon EOS R10 📷</p>
                    <p>Thanks for visiting my website! Feel free to reach out if you'd like to connect or collaborate on interesting projects.</p>
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