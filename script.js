const portfolio = {
  hero: {
    role: "Full Stack Developer",
    name: "Pavani Kandi builds polished web and mobile products.",
    summary:
      "I’m a full stack developer with 6+ years of experience building responsive web apps, mobile products, and backend services with a strong focus on usability, performance, and maintainable engineering.",
    currentFocus: "Building scalable web and mobile experiences",
    currentDescription:
      "Focused on React, React Native, Node.js, Spring Boot, and cloud-backed product delivery.",
    location: "United States",
    email: "pavanikandi319@gmail.com",
    focusAreas: "React, React Native, Node.js, Spring Boot, AWS",
  },
  about: [
    "I’m a full stack developer who enjoys turning business needs into clean, reliable products. My experience spans frontend development, mobile delivery, backend services, and cloud integrations across fast-moving product teams.",
    "I care about intuitive interfaces, scalable architecture, reusable systems, and shipping features that improve performance, developer velocity, and the day-to-day experience for users.",
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Next.js",
    "Node.js",
    "Spring Boot",
    "AWS",
    "Firebase",
    "PostgreSQL",
    "Flutter",
    "REST APIs",
  ],
  projects: [
    {
      category: "Inventory Platform",
      title: "Medication Inventory Management System",
      description:
        "Built a scalable inventory management solution with secure cloud infrastructure for tracking medication data, supporting operational reliability and protected access to sensitive workflows.",
      stack: "React.js, Node.js, AWS S3, CloudFront, Lambda, KMS",
      linkLabel: "GitHub Profile",
      href: "https://github.com/PavaniKandi",
    },
    {
      category: "Mobile App",
      title: "EASY PAY",
      description:
        "Designed and delivered a payment application focused on secure transactions and frictionless usability, including biometric authentication and streamlined payment flows.",
      stack: "Flutter, REST APIs, Mobile UX",
      linkLabel: "LinkedIn",
      href: "https://linkedin.com/in/pavanik9",
    },
    {
      category: "Portfolio",
      title: "Developer Portfolio",
      description:
        "A personal developer portfolio that highlights experience, technical strengths, and selected work through a responsive single-page experience designed for clarity and storytelling.",
      stack: "HTML, CSS, JavaScript, GitHub Pages",
      linkLabel: "View Repository",
      href: "https://github.com/PavaniKandi/PavaniKandi.github.io",
    },
  ],
  experience: [
    {
      period: "Aug 2021 - May 2023",
      role: "Full Stack Developer",
      company: "PurpleTalk | Syngenta",
      description:
        "Developed mobile applications, admin portals, and backend services; led an 8-developer team; helped migrate JavaScript codebases to TypeScript; and improved delivery speed with better release workflows and state management.",
    },
    {
      period: "Dec 2018 - Jul 2021",
      role: "Web and Application Developer",
      company: "PurpleTalk | Syngenta",
      description:
        "Enhanced UI for a fitness platform, improved backend automation with Firebase Cloud Functions, reduced load times with lazy loading and code splitting, and built reusable components that increased team efficiency.",
    },
    {
      period: "Highlights",
      role: "Education and Recognition",
      company: "University of Central Missouri and prior academic work",
      description:
        "Completed a Master’s in Computer Science, built a strong foundation across web and mobile engineering, and earned recognition including a hackathon win and multiple team collaboration awards.",
    },
  ],
  contact: {
    heading: "Let’s build something meaningful.",
    copy:
      "If you’re hiring, collaborating, or just want to connect, I’d love to hear from you.",
    links: [
      {
        label: "Email Me",
        href: "mailto:pavanikandi319@gmail.com",
        style: "primary",
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/pavanik9",
        style: "secondary",
      },
      {
        label: "GitHub",
        href: "https://github.com/PavaniKandi",
        style: "secondary",
      },
    ],
  },
};

const setText = (id, value) => {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = value;
  }
};

setText("hero-role", portfolio.hero.role);
setText("hero-name", portfolio.hero.name);
setText("hero-summary", portfolio.hero.summary);
setText("current-focus", portfolio.hero.currentFocus);
setText("current-description", portfolio.hero.currentDescription);
setText("location", portfolio.hero.location);
setText("focus-areas", portfolio.hero.focusAreas);

const emailLink = document.getElementById("email-link");
if (emailLink) {
  emailLink.href = `mailto:${portfolio.hero.email}`;
  emailLink.textContent = portfolio.hero.email;
}

setText("about-paragraph-1", portfolio.about[0]);
setText("about-paragraph-2", portfolio.about[1]);

const skillsList = document.getElementById("skills-list");
portfolio.skills.forEach((skill) => {
  const chip = document.createElement("span");
  chip.className = "chip";
  chip.textContent = skill;
  skillsList.appendChild(chip);
});

const projectGrid = document.getElementById("project-grid");
portfolio.projects.forEach((project) => {
  const card = document.createElement("article");
  card.className = "project-card reveal";
  card.innerHTML = `
    <span class="project-tag">${project.category}</span>
    <h3 class="project-title">${project.title}</h3>
    <p class="project-description">${project.description}</p>
    <div class="project-meta">
      <span class="project-stack">${project.stack}</span>
      <a class="project-link" href="${project.href}">${project.linkLabel}</a>
    </div>
  `;
  projectGrid.appendChild(card);
});

const experienceList = document.getElementById("experience-list");
portfolio.experience.forEach((item) => {
  const row = document.createElement("article");
  row.className = "timeline-item reveal";
  row.innerHTML = `
    <div class="timeline-period">${item.period}</div>
    <div>
      <h3 class="timeline-role">${item.role}</h3>
      <p class="timeline-company">${item.company}</p>
      <p class="timeline-description">${item.description}</p>
    </div>
  `;
  experienceList.appendChild(row);
});

setText("contact-heading", portfolio.contact.heading);
setText("contact-copy", portfolio.contact.copy);

const contactLinks = document.getElementById("contact-links");
portfolio.contact.links.forEach((link) => {
  const anchor = document.createElement("a");
  anchor.className = `contact-link contact-link-${link.style}`;
  anchor.href = link.href;
  anchor.textContent = link.label;
  anchor.target = link.href.startsWith("http") ? "_blank" : "_self";
  anchor.rel = link.href.startsWith("http") ? "noreferrer" : "";
  contactLinks.appendChild(anchor);
});
