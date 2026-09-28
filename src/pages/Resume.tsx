import './styles/Resume.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const Resume = () => {
  return (
    <div className="resume-page">
      <div className="resume-container">
        
        {/* Header Section */}
        <header className="resume-header">
          <h1 className="resume-name">Ritik Jain</h1>
          <h2 className="resume-title">Full Stack Developer | Web Automation Engineer</h2>
          <div className="resume-contact-info">
            <span className="contact-item"><FaEnvelope /> ritikjain6224@gmail.com</span>
            <span className="contact-item"><FaPhone /> +91 9993671347</span>
            <span className="contact-item"><FaMapMarkerAlt /> Betul, Madhya Pradesh India</span>
            <a href="https://github.com/ritikjain6521" target="_blank" rel="noopener noreferrer" className="contact-item"><FaGithub /> https://github.com/ritikjain6521</a>
          </div>
          <div className="resume-contact-info">
            <a href="https://www.linkedin.com/in/ritik-jain-77a090267/" target="_blank" rel="noopener noreferrer" className="contact-item"><FaLinkedin /> www.linkedin.com/in/ritik-jain-77a090267/</a>
          </div>
        </header>

        {/* Technical Skills */}
        <section className="resume-section skills-section">
          <h3 className="section-title">TECHNICAL SKILLS</h3>
          <div className="skills-grid">
            <div className="skill-row">
              <span className="skill-category">Frontend:</span>
              <span className="skill-items">React, next js, CSS, HTML</span>
            </div>
            <div className="skill-row">
              <span className="skill-category">Backend:</span>
              <span className="skill-items">express js, node js</span>
            </div>
            <div className="skill-row">
              <span className="skill-category">Database:</span>
              <span className="skill-items">Mongodb</span>
            </div>
            <div className="skill-row">
              <span className="skill-category">DevOps:</span>
              <span className="skill-items">vercel, github, Render</span>
            </div>
          </div>
        </section>

        {/* Work Experience */}
        <section className="resume-section">
          <h3 className="section-title">WORK EXPERIENCE</h3>
          
          <div className="experience-block">
            <div className="experience-header">
              <h4 className="job-title">Web Developer Intern @ Futurecept</h4>
              <span className="job-date">Nov 2023 — Present</span>
            </div>
            <div className="job-subtitle">Remote · 5864h+ Tracked</div>
            
            <div className="experience-category">
              <h5 className="category-title">🟦 WordPress Projects</h5>
              <ul className="task-list">
                <li><strong>SKT Blog Theme Development</strong> (40h+) — WordPress, PHP, CSS, JavaScript</li>
                <li><strong>Kirkwood Mountain Getaway</strong> (107h 07m) — WordPress, PHP, Jira</li>
              </ul>
            </div>
            
            <div className="experience-category">
              <h5 className="category-title">⚡ Apify Actors (TypeScript)</h5>
              <ul className="task-list">
                <li><strong>Google Maps Scraper</strong> (100h+) — TypeScript, Apify, Puppeteer, Node.js</li>
                <li><strong>Indeed Job Scraper</strong> (80h+) — TypeScript, Apify, Cheerio, Node.js</li>
              </ul>
            </div>
            
            <div className="experience-category">
              <h5 className="category-title">🐍 Python Scrapers</h5>
              <ul className="task-list">
                <li><strong>LinkedIn Python Scraper</strong> (150h+) — Python, Selenium, BeautifulSoup, Requests</li>
                <li><strong>Indeed Python Scraper</strong> (100h+) — Python, Scrapy, Requests, Pandas</li>
              </ul>
            </div>
            
            <div className="experience-category">
              <h5 className="category-title">⚙️ N8N Automation Workflows</h5>
              <ul className="task-list">
                <li><strong>LinkedIn Automation Content Research</strong> (0h 05m) — N8N, LinkedIn API, OpenAI</li>
                <li><strong>Email Verifier</strong> (22h 01m) — N8N, SMTP, DNS, JavaScript</li>
              </ul>
            </div>
            
            <div className="experience-category">
              <h5 className="category-title">📊 CRM & Active Projects</h5>
              <ul className="task-list">
                <li><strong>CRM360 Blog Generation Project</strong> (230h 56m) — Node.js, OpenAI, MongoDB, N8N, Canva API</li>
                <li><strong>HelioX Website</strong> (21h 26m) — WordPress, JavaScript, CSS</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="resume-section">
          <h3 className="section-title">PROJECTS</h3>
          <div className="projects-grid">
            
            <div className="project-card">
              <h4 className="project-title">ABH SHOP - Full Stack E-commerce Website</h4>
              <p className="project-desc">ABH SHOP is a fully responsive and feature-rich e-commerce web application where users can...</p>
              <div className="project-tags">
                <span>React.js</span>
                <span>TypeScript</span>
                <span>Bootstrap CSS</span>
              </div>
            </div>
            
            <div className="project-card">
              <h4 className="project-title">PassOP - Password Manager</h4>
              <p className="project-desc">PassOP is a sleek and simple web-based password manager that allows users to securely save...</p>
              <div className="project-tags">
                <span>HTML5</span>
                <span>CSS3</span>
                <span>JavaScript</span>
              </div>
            </div>
            
            <div className="project-card">
              <h4 className="project-title">My Personal Portfolio</h4>
              <p className="project-desc">A fully responsive and modern portfolio website built using the MERN Stack. Showcases pers...</p>
              <div className="project-tags">
                <span>React.js</span>
                <span>HTML5</span>
                <span>Tailwind CSS</span>
              </div>
            </div>
            
            <div className="project-card">
              <h4 className="project-title">Full Stack Music App</h4>
              <p className="project-desc">A full-featured, responsive Music Streaming Website built using the MERN stack with Postgr...</p>
              <div className="project-tags">
                <span>React.js</span>
                <span>Javascript</span>
                <span>PostgreSQL</span>
              </div>
            </div>
            
          </div>
        </section>

        {/* Bottom Split Section */}
        <div className="resume-bottom-split">
          <section className="resume-section education-section">
            <h3 className="section-title">EDUCATION</h3>
            <p className="education-details">B.Sc. / M.sc (Computer Science) | Chhindwara University (2021-2023)</p>
          </section>

          <section className="resume-section certifications-section">
            <h3 className="section-title">CERTIFICATIONS</h3>
            <ul className="cert-list">
              <li>Full Stack Web Development — <em>Udemy</em></li>
              <li>React js Advanced Concepts — <em>Coursera</em></li>
              <li>Node.js & Express Backend — <em>freeCodeCamp</em></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
