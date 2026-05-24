// works.js

import "./works.css";

document.querySelector("#app").innerHTML = `
<header>
    <div class="container">

        <nav>
            <a href="#" class="logo">
                Sovio<span>.</span>
            </a>

            <button 
                class="menu-toggle" 
                id="mobile-toggle"
                aria-label="Toggle navigation"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <ul class="nav-links" id="nav-list">
                <li><a href="index.html">About</a></li>
                <li><a href="portfolio.html#experience">Experience</a></li>
                <li><a href="portfolio.html#stack">Stack</a></li>

                <li>
                    <a href="mailto:hello@mariel.dev" class="btn-cta-nav">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>

    </div>
</header>

<main class="container">

    <div class="page-header">
        <h1 class="page-title">
            Case Studies & Projects
        </h1>

        <p class="page-subtitle">
            A repository tracking software systems, 
            core database builds, and strategic 
            conversion funnels.
        </p>
    </div>

    <!-- FILTERS -->

    <div class="filter-container">

        <button 
            class="filter-btn active"
            data-filter="all"
        >
            All Projects
        </button>

        <button 
            class="filter-btn"
            data-filter="engineering"
        >
            Engineering
        </button>

        <button 
            class="filter-btn"
            data-filter="marketing"
        >
            Marketing & Growth
        </button>

    </div>

    <!-- PROJECT GRID -->

    <div class="works-grid" id="projects-container">

        <!-- PROJECT 1 -->

        <div class="project-card" data-category="engineering">

            <div class="project-image-box">

                <div 
                    class="project-placeholder-ui"
                    style="color: #a855f7;"
                >
                    <span>// Initializing Heatmap Engine</span><br>

                    <span style="color: #64748b;">
                        function initHeatmap() {
                    </span><br>

                    <span>
                        &nbsp;&nbsp;intensity: records.level,
                    </span><br>

                    <span>
                        &nbsp;&nbsp;bounds: neighborhood_data
                    </span><br>

                    <span style="color: #64748b;">}</span>

                </div>

            </div>

            <div class="project-details">

                <span class="project-meta">
                    Full-Stack Development
                </span>

                <h3 class="project-title">
                    Administrative Unit Heatmap
                </h3>

                <p class="project-desc">
                    A geographic data system built to calculate 
                    and display localized metric intensities 
                    across neighborhood-level administrative 
                    units with dynamic query features.
                </p>

                <div class="tech-stack-wrap">
                    <span class="tech-badge">PHP 8.x</span>
                    <span class="tech-badge">JavaScript</span>
                    <span class="tech-badge">MySQL</span>
                    <span class="tech-badge">REST API</span>
                </div>

                <a href="#" class="project-link">
                    Analyze System
                    <i class="fa-solid fa-arrow-right"></i>
                </a>

            </div>
        </div>

        <!-- PROJECT 2 -->

        <div class="project-card" data-category="marketing">

            <div class="project-image-box">

                <div 
                    class="project-placeholder-ui"
                    style="color: #06b6d4;"
                >
                    <span>[Campaign Analytics Engine]</span><br>

                    <span style="color: #64748b;">
                        > Testing tracking pixels... OK
                    </span><br>

                    <span>
                        > Conversion Rate: +4.8% CR
                    </span><br>

                    <span>
                        > Capturing UTM reference data
                    </span>

                </div>

            </div>

            <div class="project-details">

                <span class="project-meta">
                    Affiliate & Social Strategy
                </span>

                <h3 class="project-title">
                    Conversion Funnel System
                </h3>

                <p class="project-desc">
                    Architecting custom tracking link infrastructure 
                    paired with programmatic social media scheduling 
                    configurations to optimize affiliate payout channels.
                </p>

                <div class="tech-stack-wrap">
                    <span class="tech-badge">
                        Social Media Management
                    </span>

                    <span class="tech-badge">
                        Affiliate Marketing
                    </span>

                    <span class="tech-badge">
                        Data Auditing
                    </span>
                </div>

                <a href="#" class="project-link">
                    View Strategy Docs
                    <i class="fa-solid fa-arrow-right"></i>
                </a>

            </div>
        </div>

        <!-- PROJECT 3 -->

        <div class="project-card" data-category="engineering">

            <div class="project-image-box">

                <div 
                    class="project-placeholder-ui"
                    style="color: #10b981;"
                >
                    <span>
                        SELECT files, size FROM database
                    </span><br>

                    <span style="color: #64748b;">
                        WHERE created_at <= '2022-12-31'
                    </span><br>

                    <span style="color: #ef4444;">
                        DROP OLD_ARCHIVE;
                    </span><br>

                    <span>
                        > Batch processing lifecycle optimization...
                    </span>

                </div>

            </div>

            <div class="project-details">

                <span class="project-meta">
                    Database Architecture
                </span>

                <h3 class="project-title">
                    Automated Data Lifecycle Manager
                </h3>

                <p class="project-desc">
                    An internal data cleansing pipeline configured 
                    to safely audit, isolate, and prune high-volume 
                    archive tables in transactional environments 
                    without downtime.
                </p>

                <div class="tech-stack-wrap">
                    <span class="tech-badge">MySQL</span>
                    <span class="tech-badge">SQLAlchemy</span>
                    <span class="tech-badge">Python</span>
                    <span class="tech-badge">Data Automation</span>
                </div>

                <a href="#" class="project-link">
                    Review Code Execution
                    <i class="fa-solid fa-arrow-right"></i>
                </a>

            </div>
        </div>

    </div>

</main>

<footer>

    <div class="container">

        <div class="footer-socials">

            <a href="#" aria-label="GitHub">
                <i class="fa-brands fa-github"></i>
            </a>

            <a href="#" aria-label="LinkedIn">
                <i class="fa-brands fa-linkedin-in"></i>
            </a>

            <a href="#" aria-label="Instagram">
                <i class="fa-brands fa-instagram"></i>
            </a>

        </div>

        <p class="copy-text">
            © 2026 Mariel Sobiono. 
            Built for performance and structural growth.
        </p>

    </div>

</footer>
`;

// =========================
// MOBILE MENU
// =========================

const toggleBtn = document.getElementById("mobile-toggle");
const navLinksElement = document.getElementById("nav-list");

toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("active");
    navLinksElement.classList.toggle("active");
});

// =========================
// FILTER SYSTEM
// =========================

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // remove active state
        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        // add active state
        button.classList.add("active");

        const activeFilter =
            button.getAttribute("data-filter");

        projectCards.forEach((card) => {

            const category =
                card.getAttribute("data-category");

            if (
                activeFilter === "all" ||
                category === activeFilter
            ) {

                card.style.display = "flex";

                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform =
                        "translateY(0)";
                }, 20);

            } else {

                card.style.opacity = "0";

                card.style.transform =
                    "translateY(12px)";

                setTimeout(() => {
                    card.style.display = "none";
                }, 300);
            }
        });
    });
});