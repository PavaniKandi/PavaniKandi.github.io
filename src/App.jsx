const skills = [
  "Python",
  "Java",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Expo",
  "Next.js",
  "Spring Boot",
  "Node.js",
  "GraphQL",
  "REST APIs",
  "AWS",
  "Azure",
  "Firebase",
  "PostgreSQL",
  "SQLite",
  "Salesforce Mobile SDK",
  "Mapbox SDK",
  "Storybook",
  "Redux Toolkit",
  "React Query",
  "Zustand",
  "System Design",
  "Algorithms",
  "OAuth2 / JWT",
  "Okta SSO",
  "CI/CD",
  "Fastlane",
  "CodePush",
  "Sentry",
  "Datadog",
  "Observability",
]

const projects = [
  {
    type: "AI Product",
    status: "Active",
    title: "AI-Document-Assistant",
    description:
      "Local-first document intelligence workspace for uploading PDF, TXT, and DOCX files, asking natural-language questions, and saving document sessions with persistent chat history.",
    stack: ["React", "Flask", "SQLite", "Ollama", "RAG"],
    href: "mailto:pavanikandi319@gmail.com",
    cta: "Ask for details",
  },
  {
    type: "Enterprise Mobile",
    status: "Built",
    title: "SmartAgro Field Platform",
    description:
      "Salesforce-based agriculture mobile application with offline-first SmartStore sync, account management, geolocation, Mapbox clustering, and background data synchronization.",
    stack: ["React Native", "Salesforce SDK", "SQLite", "Mapbox"],
    href: "mailto:pavanikandi319@gmail.com",
    cta: "Details",
  },
  {
    type: "Hybrid Architecture",
    status: "Built",
    title: "Product Verification Plugin",
    description:
      "React product-authentication plugin packaged with Webpack and embedded into native mobile apps through WebView, with QR/barcode scanning, image upload, SSO, and offline sync.",
    stack: ["React", "Webpack", "React Native", "Node.js", "GraphQL"],
    href: "mailto:pavanikandi319@gmail.com",
    cta: "Ask for details",
  },
  {
    type: "Mobile Product",
    status: "Built",
    title: "Maco Fitness Platform",
    description:
      "Gamified fitness and trainer-booking application with post creation, challenge workflows, badges, rewards, Razorpay payments, chat, notifications, and Firebase-backed analytics.",
    stack: ["React Native", "Firebase", "Razorpay", "FCM"],
    href: "mailto:pavanikandi319@gmail.com",
    cta: "Details",
  },
]

const experience = [
  {
    period: "Mar 2025 - Present",
    role: "Senior Software Engineer",
    company: "Deloitte USA",
    text:
      "Building React, React Native, TypeScript, Java, Spring Boot, REST, and GraphQL features for a state benefits platform serving 100K+ users. Work includes modular architecture, API reliability, observability, automated test coverage, CI/CD quality gates, and secure workflows for sensitive user data.",
  },
  {
    period: "Dec 2018 - Jul 2023",
    role: "Senior Mobile and Web Engineer",
    company: "PurpleTalk | Syngenta",
    text:
      "Delivered React and React Native products across agriculture, fitness, product verification, and enterprise workflows. Led mobile performance improvements, offline-first architecture, Salesforce Mobile SDK integrations, WebView plugin architecture, Firebase systems, CodePush, Fastlane release pipelines, and 50+ production releases.",
  },
]

const impactSignals = [
  "Reduced startup time by up to 60% through Hermes and Metro optimization.",
  "Improved runtime performance by up to 50% by profiling render hotspots and list behavior.",
  "Reduced crash rates and release-related incidents by roughly 30% through observability and quality gates.",
  "Delivered 50+ App Store and Play Store releases with Fastlane and CodePush OTA workflows.",
  "Built offline-first flows using SmartStore, SQLite, Firebase, local persistence, and background sync.",
]

const credentials = [
  "AWS Certified Solutions Architect - Associate",
  "HackerRank Frontend Developer (React)",
  "HackerRank SQL Advanced",
  "MS Computer Science: AI, ML, Cloud Computing, Advanced Algorithms",
]

const activityCells = Array.from({ length: 60 }, (_, index) => {
  const pattern = [0, 1, 2, 3, 1, 0, 2, 4, 1, 3, 0, 2]
  return pattern[index % pattern.length]
})

function App() {
  return (
    <div className="dashboard-shell">
      <aside className="profile-panel">
        <div className="avatar">PK</div>
        <h1>Pavani Kandi</h1>
        <p className="title">Senior Software Engineer</p>
        <p className="profile-copy">
          React, React Native, Java, Spring Boot, Python, and AI-related product engineering.
        </p>

        <div className="profile-links">
          <a href="mailto:pavanikandi9@gmail.com">Mail</a>
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
            <a href="#credentials">Credentials</a>
            <a href="#contact">Contact</a>
          </nav>
          <span>United States</span>
        </header>

        <section className="intro-grid">
          <div className="intro-copy">
            <p className="eyebrow">Senior React Native + Full Stack Engineer</p>
            <h2>Building high-performance product systems across mobile, web, backend, and AI workflows.</h2>
            <p>
              I bring 6+ years of experience building production applications across React, React Native, TypeScript, Java, Spring Boot, Python, Firebase, AWS, and API-driven platforms. My strongest work sits in scalable mobile architecture, performance optimization, offline-first systems, secure authentication, CI/CD, observability, and AI-enabled product workflows.
            </p>
          </div>

          <div className="activity-card">
            <div className="card-head">
              <div>
                <p className="eyebrow">Impact Snapshot</p>
                <h3>Production signals</h3>
              </div>
              <span>Resume-backed</span>
            </div>
            <ul className="impact-list">
              {impactSignals.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
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

        <section className="credentials-section" id="credentials">
          <div className="section-head">
            <p className="eyebrow">Credentials</p>
            <h2>Education and certifications</h2>
          </div>
          <div className="credential-grid">
            {credentials.map((item) => (
              <article className="credential-item" key={item}>
                <span>{item}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-card" id="contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Open to challenging engineering work.</h2>
            <p>
              Interested in AI-related products, backend systems, Python development, React Native platforms, and product teams solving real problems at scale.
            </p>
          </div>
          <a href="mailto:pavanikandi9@gmail.com">pavanikandi9@gmail.com</a>
        </section>
      </main>
    </div>
  )
}

export default App
