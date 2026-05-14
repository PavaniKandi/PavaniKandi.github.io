const skills = [
  "Python",
  "Java",
  "TypeScript",
  "React",
  "React Native",
  "Expo",
  "Spring Boot",
  "Node.js",
  "AWS",
  "Firebase",
  "PostgreSQL",
  "SQLite",
  "System Design",
  "Algorithms",
  "CI/CD",
  "Observability",
]

const projects = [
  {
    type: "AI Product",
    status: "Active",
    title: "AI-Document-Assistant",
    description:
      "Document Q&A workspace with PDF, TXT, and DOCX uploads, local Ollama answers, SQLite sessions, and persistent chat history.",
    stack: ["React", "Flask", "SQLite", "Ollama"],
    href: "mailto:pavanikandi319@gmail.com",
    cta: "Ask for details",
  },
  {
    type: "Cloud Workflow",
    status: "Built",
    title: "Medication Inventory Platform",
    description:
      "Secure inventory workflow for sensitive operational data using React, Node.js, and AWS-backed delivery.",
    stack: ["React", "Node.js", "AWS", "KMS"],
    href: "https://github.com/PavaniKandi",
    cta: "GitHub",
  },
  {
    type: "Mobile Product",
    status: "Built",
    title: "EASY PAY",
    description:
      "Payment mobile app focused on secure transactions, biometric login, and simpler user-facing payment flows.",
    stack: ["Flutter", "REST APIs", "Mobile UX"],
    href: "https://linkedin.com/in/pavanik9",
    cta: "LinkedIn",
  },
]

const experience = [
  {
    period: "Mar 2025 - Present",
    role: "Full Stack Developer",
    company: "Deloitte USA",
    text:
      "Working across React, React Native, and Spring Boot for a platform serving 100K+ users, with focus on delivery, architecture, and reliable product experiences.",
  },
  {
    period: "Dec 2018 - Jul 2023",
    role: "Senior Mobile and Web Engineer",
    company: "PurpleTalk | Syngenta",
    text:
      "Built mobile and web experiences, improved startup performance, supported release pipelines, reusable UI systems, Firebase, backend integrations, and cross-functional delivery.",
  },
]

const activityCells = Array.from({ length: 84 }, (_, index) => {
  const pattern = [0, 1, 2, 3, 1, 0, 2, 4, 1, 3, 0, 2]
  return pattern[index % pattern.length]
})

function App() {
  return (
    <div className="dashboard-shell">
      <aside className="profile-panel">
        <div className="avatar">PK</div>
        <h1>Pavani Kandi</h1>
        <p className="title">Full Stack Developer</p>
        <p className="profile-copy">
          Building production software across web, mobile, backend, and AI-related workflows.
        </p>

        <div className="profile-links">
          <a href="mailto:pavanikandi319@gmail.com">Mail</a>
          <a href="https://linkedin.com/in/pavanik9">LinkedIn</a>
          <a href="https://github.com/PavaniKandi">GitHub</a>
        </div>

        <div className="mini-stats">
          <div>
            <strong>6+</strong>
            <span>Years</span>
          </div>
          <div>
            <strong>100K+</strong>
            <span>Users</span>
          </div>
          <div>
            <strong>AI</strong>
            <span>Focus</span>
          </div>
        </div>
      </aside>

      <main className="workspace">
        <header className="workspace-header">
          <nav>
            <a href="#projects">Projects</a>
            <a href="#stack">Stack</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
          <span>United States</span>
        </header>

        <section className="intro-grid">
          <div className="intro-copy">
            <p className="eyebrow">AI-focused product engineering</p>
            <h2>Engineer for production products, platform reliability, and intelligent workflows.</h2>
            <p>
              I work across React, React Native, Java, Spring Boot, Python, and backend systems. I’m especially interested in roles where product engineering meets AI-related systems, data-heavy workflows, and hard technical problems.
            </p>
          </div>

          <div className="activity-card">
            <div className="card-head">
              <div>
                <p className="eyebrow">GitHub Pulse</p>
                <h3>Engineering activity</h3>
              </div>
              <span>Mock preview</span>
            </div>
            <div className="activity-grid" aria-label="Mock GitHub activity grid">
              {activityCells.map((level, index) => (
                <span className={`level-${level}`} key={`${level}-${index}`} />
              ))}
            </div>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-head">
            <p className="eyebrow">Projects</p>
            <h2>Selected work</h2>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-row" key={project.title}>
                <div>
                  <div className="project-meta">
                    <span>{project.type}</span>
                    <span>{project.status}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-side">
                  <div className="stack-row">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <a href={project.href}>{project.cta}</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="stack-section" id="stack">
          <div className="section-head">
            <p className="eyebrow">Tech Stack</p>
            <h2>Tools I use to build and ship</h2>
          </div>
          <div className="skill-board">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="experience-section" id="experience">
          <div className="section-head">
            <p className="eyebrow">Experience</p>
            <h2>Professional path</h2>
          </div>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-item" key={item.company}>
                <span>{item.period}</span>
                <h3>{item.role}</h3>
                <strong>{item.company}</strong>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-card" id="contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Open to challenging engineering work.</h2>
            <p>
              Interested in AI-related products, backend systems, Python development, mobile platforms, and product teams solving real problems.
            </p>
          </div>
          <a href="mailto:pavanikandi319@gmail.com">pavanikandi319@gmail.com</a>
        </section>
      </main>
    </div>
  )
}

export default App
