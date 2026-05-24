// app.js

import "./style.css";

document.querySelector("#app").innerHTML = `
<div class="container">

function setFavicon(url) {
  const link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/x-icon'; // Use 'image/png' for PNG files
  link.href = url;

  document.getElementsByTagName('head')[0].appendChild(link);
}

// Usage:
setFavicon('https://example.com');

    <nav>
        <a href="#" class="logo">Sovio<span>.</span></a>

        <ul class="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#stack">Stack</a></li>
            <li><a href="mailto:hello@mariel.dev" class="btn-cta-nav">Contact</a></li>
        </ul>
    </nav>

    <section class="hero visible" id="home">
        <div class="hero-text">
            <h1>Mariel Sobiono</h1>

            <p>
                Software Engineer & Strategic Marketer. 
                Specializing in high-performance systems 
                and data-driven social growth.
            </p>

            <div class="cta-group">
                <a href="mailto:contact@mariel.dev" class="btn-primary">
                    Start a Conversation
                </a>

                <a href="works.html" class="btn-secondary">
                    View Creative Portfolio
                </a>
            </div>
        </div>

        <div class="card-wrapper">
            <div class="access-card" id="tilt-card">
                <img 
                    src="profile.jpg" 
                    alt="Mariel Sobiono" 
                    class="profile-img"
                />

                <h3>MARIEL</h3>

                <p class="role">
                    Software Engineer | SMM | Affiliate
                </p>
            </div>
        </div>
    </section>

    <section id="about">
        <h2>About Me</h2>

        <p class="about-text">
            I bridge the gap between technical excellence 
            and digital storytelling. As a 
            <b>Social Media Manager and Affiliate Strategist</b>, 
            I use my engineering background to optimize 
            conversion funnels and build high-engagement communities.
        </p>

        <p class="about-text">
            Whether I'm architecting <b>PHP & MySQL</b> backends 
            or managing multi-platform social campaigns, 
            my focus remains the same:
            <b>performance and scalability.</b>
        </p>
    </section>

    <section id="experience">
        <h2>Professional Path</h2>

        <div class="timeline-item">
            <div>
                <h3>SMM & Affiliate Strategist</h3>
                <p>Independent Brand Consultant</p>
            </div>

            <div class="year">2024 - PRES</div>
        </div>

        <div class="timeline-item">
            <div>
                <h3>Senior Software Lead</h3>
                <p>Global Engineering Hub</p>
            </div>

            <div class="year">2025 - PRES</div>
        </div>

        <div class="timeline-item">
            <div>
                <h3>Full-Stack Developer</h3>
                <p>Tech Innovators Manila</p>
            </div>

            <div class="year secondary">2023 - 2025</div>
        </div>
    </section>

    <section id="stack">
        <h2>The Tech & Growth Stack</h2>

        <div class="stack-grid">

            <div class="stack-box">
                <h4>ENGINEERING</h4>

                <div class="tag-cloud">
                    <span class="tag">PHP</span>
                    <span class="tag">JavaScript</span>
                    <span class="tag">Python</span>
                    <span class="tag">MySQL</span>
                    <span class="tag">C++</span>
                    <span class="tag">HTML/CSS</span>
                </div>
            </div>

            <div class="stack-box">
                <h4>MARKETING & STRATEGY</h4>

                <div class="tag-cloud">
                    <span class="tag">Social Media Management</span>
                    <span class="tag">Affiliate Marketing</span>
                    <span class="tag">Conversion Optimization</span>
                    <span class="tag">Content Strategy</span>
                </div>
            </div>

        </div>
    </section>

    <section id="github">
        <h2>Code Contribution History</h2>

        <div class="github-card">
            <div class="github-wrapper">
                <img 
                    src="https://ghchart.rshah.org/00a2ff/Sobiono-k"
                    alt="GitHub Contributions Chart"
                />
            </div>
        </div>
    </section>

    <footer>
        <div class="social-links">
            <a href="https://github.com/Sobiono-k" target="_blank">
                <i class="fab fa-github"></i>
            </a>

            <a href="https://www.linkedin.com/in/mariel-sobiono" target="_blank">
                <i class="fab fa-linkedin"></i>
            </a>

            <a href="https://www.instagram.com/kielsovio_" target="_blank">
                <i class="fab fa-instagram"></i>
            </a>
        </div>

        <p>
            © 2026 Mariel Sobiono. Built for Performance.
        </p>
    </footer>

</div>
`;

// =========================
// 3D TILT EFFECT
// =========================

const card = document.getElementById("tilt-card");

card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xRotation =
        -((y - rect.height / 2) / rect.height) * 20;

    const yRotation =
        ((x - rect.width / 2) / rect.width) * 20;

    card.style.transform = `
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)
    `;
});

card.addEventListener("mouseleave", () => {
    card.style.transform = `
        rotateX(0deg)
        rotateY(0deg)
    `;

    card.style.transition = "transform 0.5s ease";
});

card.addEventListener("mouseenter", () => {
    card.style.transition = "none";
});

// =========================
// SCROLL REVEAL
// =========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, observerOptions);

document.querySelectorAll("section").forEach((section) => {
    if (section.id !== "home") {
        observer.observe(section);
    }
});