const skills = [
  "Python",
  "Java",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Expo",
  "Next.js",
  "Node.js",
  "Spring Boot",
  "AWS",
  "Firebase",
  "PostgreSQL",
  "SQLite",
  "Flutter",
  "REST APIs",
  "System Design",
  "Data Structures",
  "Algorithms",
  "Problem Solving",
  "Scalable Applications",
  "API Integration",
  "Performance Optimization",
  "CI/CD",
  "Release Automation",
  "Mobile Architecture",
  "Observability",
  "Cloud Services",
  "Software Engineering",
];

const projects = [
  {
    category: "AI Application",
    title: "AI-Document-Assistant",
    description:
      "Built a full-stack document Q&A application that lets users upload PDF, TXT, and DOCX files and ask natural-language questions about their content using a local Ollama model. The app includes persistent document sessions, chat history, and a workspace-style interface.",
    stack: "React, Flask, SQLite, Ollama, Document Processing",
    href: "mailto:pavanikandi319@gmail.com",
    linkLabel: "Ask for details",
    accent: "ai",
    impact: "Local LLM workflow with persistent document history",
    role: "Full-stack development, document processing, LLM integration",
    bullets: [
      "Added PDF, TXT, and DOCX upload with extracted text flow into a local Q&A experience.",
      "Used chunking and relevant-section selection before sending context to the model.",
      "Stored document sessions and chat history in SQLite for a persistent workspace flow.",
    ],
  },
  {
    category: "Inventory Platform",
    title: "Medication Inventory Management System",
    description:
      "Worked on a medication inventory system built to manage sensitive data and support day-to-day operations more reliably. The project involved both application development and secure AWS-based infrastructure.",
    stack: "React.js, Node.js, AWS S3, CloudFront, Lambda, KMS",
    href: "https://github.com/PavaniKandi",
    linkLabel: "GitHub",
    accent: "inventory",
    impact: "Security-focused cloud-backed workflow",
    role: "Frontend, backend integration, AWS-backed delivery",
    bullets: [
      "Worked on workflows for managing sensitive medication and inventory data reliably.",
      "Supported secure cloud-backed architecture using AWS services for storage and delivery.",
      "Balanced operational usability with protected access and system reliability needs.",
    ],
  },
  {
    category: "Mobile App",
    title: "EASY PAY",
    description:
      "Built features for a payment mobile app focused on secure and simple transactions. The work included user-facing flows, API integration, and support for biometric authentication.",
    stack: "Flutter, REST APIs, Mobile UX",
    href: "https://linkedin.com/in/pavanik9",
    linkLabel: "LinkedIn",
    accent: "payment",
    impact: "Secure transactions with smoother user flow",
    role: "Mobile feature development, API integration, UX improvements",
    bullets: [
      "Built user-facing payment flows designed to feel simple and secure.",
      "Integrated API-driven transactions and supported biometric authentication.",
      "Focused on reducing friction in core payment actions for end users.",
    ],
  },
  {
    category: "Professional Work",
    title: "Product and Platform Delivery",
    description:
      "My work has included mobile apps, admin portals, backend services, performance improvements, and reusable UI systems built for real product teams.",
    stack: "React Native, Node.js, Java, Spring Boot, Firebase",
    href: "mailto:pavanikandi319@gmail.com",
    linkLabel: "Contact Me",
    accent: "platform",
    impact: "Cross-functional delivery across product teams",
    role: "Architecture, performance, delivery, cross-team execution",
    bullets: [
      "Worked across mobile apps, admin portals, and backend services in product teams.",
      "Improved startup performance, release quality, and reusable UI systems.",
      "Contributed across React Native, Java, Spring Boot, Firebase, and delivery workflows.",
    ],
  },
];

const highlights = [
  {
    value: "6+ Years",
    label: "Building mobile, web, and backend products in production environments.",
  },
  {
    value: "100K+ Users",
    label: "Supported through production mobile platforms and large-scale product delivery.",
  },
  {
    value: "Master's in CS",
    label: "Advanced coursework in AI, machine learning, algorithms, cloud, and operating systems.",
  },
  {
    value: "AI + Product",
    label: "Interested in technically challenging work across product engineering and AI-related systems.",
  },
];

const focusAreas = [
  "AI-related product work",
  "Python and backend systems",
  "Data structures and algorithms",
  "Complex product engineering",
];

const capabilities = [
  {
    title: "Mobile Architecture",
    description:
      "Built and improved React Native and Expo applications with strong attention to maintainability, reusable systems, and cross-platform reliability.",
  },
  {
    title: "Performance and Quality",
    description:
      "Worked deeply on startup time, rendering performance, release stability, observability, and test coverage for production-facing applications.",
  },
  {
    title: "Platform and Backend",
    description:
      "Contributed across APIs, integrations, authentication flows, local persistence, Firebase services, and Java or Node-backed product systems.",
  },
  {
    title: "AI and Applied Engineering",
    description:
      "Interested in AI-related product work and already building with Python, local LLM workflows, document processing, and problem-solving heavy systems.",
  },
];

const whatIBring = [
  {
    title: "Breadth Across the Stack",
    description:
      "I can contribute across frontend, mobile, backend, integrations, and release workflows instead of staying limited to one layer.",
  },
  {
    title: "Performance and Reliability Mindset",
    description:
      "A lot of my work naturally moves toward quality, performance, stability, and making production systems easier to maintain.",
  },
  {
    title: "AI and Problem-Solving Interest",
    description:
      "I’m intentionally drawn to work that combines product engineering with AI-related systems, Python, and harder technical challenges.",
  },
];

const experience = [
  {
    period: "Mar 2025 - Present",
    role: "Full Stack Developer",
    company: "Deloitte USA",
    description:
      "Working across frontend, mobile, and backend development using React, React Native, and Spring Boot for a platform serving 100K+ users. My work includes feature delivery, architecture decisions, performance improvements, and building reliable product experiences across the stack.",
  },
  {
    period: "Dec 2018 - Jul 2023",
    role: "Senior Mobile and Web Engineer",
    company: "PurpleTalk | Syngenta",
    description:
      "Built mobile and web product experiences, improved startup performance, supported large-scale release pipelines, implemented reusable UI systems, and worked across Firebase, backend services, and cross-functional product delivery.",
  },
];

const education = [
  {
    period: "Master's",
    role: "Master's in Computer Science",
    company: "University of Central Missouri",
    description:
      "During my master's in computer science, I studied areas including advanced data structures and algorithms, artificial intelligence, machine learning, cloud computing, and advanced operating systems, which strengthened both my software engineering foundation and my interest in solving complex technical problems.",
  },
  {
    period: "Bachelor's",
    role: "Bachelor of Technology in Computer Science",
    company: "Rajiv Gandhi University of Knowledge Technologies",
    description:
      "Built my core foundation in computer science, software development, programming, and problem solving, which later supported my work across mobile, web, backend, and platform engineering.",
  },
];

const links = [
  {
    label: "Email",
    href: "mailto:pavanikandi319@gmail.com",
    variant: "primary",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/pavanik9",
    variant: "secondary",
  },
  {
    label: "GitHub",
    href: "https://github.com/PavaniKandi",
    variant: "secondary",
  },
];

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#top">
          Pavani Kandi
        </a>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-main">
            <div className="hero-copy">
              <p className="eyebrow">Full Stack Developer | Product, Platform, and AI-Focused Work</p>
              <h1>Building strong products across web, mobile, backend, and AI-related problem spaces.</h1>
              <p className="intro">
                I'm Pavani Kandi, a full stack developer with 6+ years of
                experience building applications across web, mobile, and backend
                systems using React, React Native, Node.js, Java, Spring Boot,
                and Python.
              </p>
              <div className="action-row">
                <a className="button primary" href="#work">
                  View Work
                </a>
                <a className="button secondary" href="#contact">
                  Get in Touch
                </a>
              </div>
            </div>

            <div className="hero-credentials">
              {highlights.map((item) => (
                <article className="mini-highlight" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-side">
            <div className="hero-panel">
              <p className="panel-kicker">What I'm Looking For</p>
              <h2>Challenging engineering work with exposure to AI-related systems.</h2>
              <p>
                I’m looking for roles where I can contribute as a strong software
                engineer and also work on AI-related products, Python-based
                systems, data-heavy applications, and complex technical problems.
              </p>
              <div className="hero-meta">
                <div>
                  <span>Location</span>
                  <strong>United States</strong>
                </div>
                <div>
                  <span>Email</span>
                  <strong>pavanikandi319@gmail.com</strong>
                </div>
                <div>
                  <span>Main Stack</span>
                  <strong>React, React Native, Node.js, Java, Spring Boot, Python</strong>
                </div>
                <div>
                  <span>Interests</span>
                  <strong>AI technologies, backend systems, problem solving</strong>
                </div>
              </div>
            </div>
            <div className="focus-panel">
              <p className="panel-kicker">Core Focus</p>
              <div className="hero-focus">
                {focusAreas.map((item) => (
                  <span className="focus-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </section>

        <section className="section" id="about">
          <div className="section-head">
            <p className="eyebrow">About</p>
            <h2>A portfolio that feels direct, polished, and personal.</h2>
          </div>
          <div className="about-grid">
            <div className="card copy-card">
              <p>
                I've worked on web applications, mobile apps, admin portals, and
                backend services in fast-paced product teams. A lot of my
                experience comes from building features that needed to work well
                for users and also be practical for the team maintaining them.
              </p>
              <p>
                I care about clean code, performance, and building interfaces
                that feel straightforward to use. I also enjoy working closely
                with product and engineering teams to ship things that are
                actually useful. I’m also very interested in opportunities that
                involve AI-related work, Python, and harder technical challenges.
              </p>
            </div>
            <div className="card skill-card">
              <p className="panel-kicker">Core Skills</p>
              <div className="chip-list">
                {skills.map((skill) => (
                  <span className="chip" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="capabilities">
          <div className="section-head">
            <p className="eyebrow">Capabilities</p>
            <h2>What I can bring beyond a standard full stack profile.</h2>
          </div>
          <div className="capability-grid">
            {capabilities.map((item) => (
              <article className="card capability-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="value">
          <div className="section-head">
            <p className="eyebrow">What I Bring</p>
            <h2>Why my background translates well to strong engineering teams.</h2>
          </div>
          <div className="bring-grid">
            {whatIBring.map((item) => (
              <article className="card bring-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="work">
          <div className="section-head">
            <p className="eyebrow">Selected Work</p>
            <h2>Projects and work that show engineering range and growth potential.</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article
                className={`card project-card project-${project.accent}`}
                key={project.title}
              >
                <div className="project-visual">
                  <span className="tag">{project.category}</span>
                  <div className="project-badge">{project.impact}</div>
                </div>
                <div className="project-body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="project-role">{project.role}</p>
                  <ul className="project-points">
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <div className="project-footer">
                    <span>{project.stack}</span>
                    <a href={project.href}>{project.linkLabel}</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-head">
            <p className="eyebrow">Experience</p>
            <h2>Experience that built both product depth and technical discipline.</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="card timeline-item" key={`${item.period}-${item.role}`}>
                <p className="period">{item.period}</p>
                <div>
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <div className="section-head">
            <p className="eyebrow">Education</p>
            <h2>Academic foundation that shaped my technical thinking.</h2>
          </div>
          <div className="timeline">
            {education.map((item) => (
              <article className="card timeline-item" key={`${item.period}-${item.role}`}>
                <p className="period">{item.period}</p>
                <div>
                  <h3>{item.role}</h3>
                  <p className="company">{item.company}</p>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <div className="card contact-card">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Open to engineering roles that are technically demanding and growth-oriented.</h2>
              <p>
                I'm especially interested in opportunities where I can contribute
                across software engineering and also work on AI-related systems,
                Python-based development, and complex problem solving.
              </p>
            </div>
            <div className="action-row">
              {links.map((link) => (
                <a
                  className={`button ${link.variant}`}
                  href={link.href}
                  key={link.label}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
