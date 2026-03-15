const portfolio = {
  hero: {
    role: "Full Stack Developer",
    name: "Hi, I'm Pavani Kandi.",
    summary:
      "I'm a full stack developer with 6+ years of experience building web and mobile applications. I’ve worked across frontend, backend, and mobile teams, mainly using React, React Native, Node.js, Java, and Spring Boot.",
    currentFocus: "Building web, mobile, and backend applications",
    currentDescription:
      "I like working across the full product flow, from UI implementation to APIs, integrations, and production releases.",
    location: "United States",
    email: "pavanikandi319@gmail.com",
    focusAreas: "React, React Native, Node.js, Java, Spring Boot, AWS",
  },
  about: [
    "I’ve worked on web applications, mobile apps, admin portals, and backend services in fast-paced product teams. A lot of my experience comes from building features that needed to work well for users and also be practical for the team maintaining them.",
    "I care about writing clean code, improving performance, and building interfaces that feel straightforward to use. I also enjoy working closely with product and engineering teams to ship things that are actually useful.",
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Next.js",
    "Node.js",
    "Java",
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
        "Worked on a medication inventory system built to manage sensitive data and support day-to-day operations more reliably. The project involved both application development and secure AWS-based infrastructure.",
      stack: "React.js, Node.js, AWS S3, CloudFront, Lambda, KMS",
      linkLabel: "GitHub",
      href: "https://github.com/PavaniKandi",
    },
    {
      category: "Mobile App",
      title: "EASY PAY",
      description:
        "Built features for a payment mobile app focused on secure and simple transactions. The work included user-facing flows, API integration, and support for biometric authentication.",
      stack: "Flutter, REST APIs, Mobile UX",
      linkLabel: "LinkedIn",
      href: "https://linkedin.com/in/pavanik9",
    },
    {
      category: "Portfolio",
      title: "Developer Portfolio",
      description:
        "This portfolio site is a simple way to share my background, experience, and project work in one place.",
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
        "Worked on mobile apps, admin portals, and backend services for a global client. My work included feature development, JavaScript to TypeScript migration, release improvements, and leading a team of 8 developers.",
    },
    {
      period: "Dec 2018 - Jul 2021",
      role: "Web and Application Developer",
      company: "PurpleTalk | Syngenta",
      description:
        "Worked on UI improvements, Firebase-based backend automation, performance optimizations like lazy loading and code splitting, and reusable components that helped the team move faster.",
    },
    {
      period: "Highlights",
      role: "Education and Recognition",
      company: "University of Central Missouri and prior academic work",
      description:
        "Completed my Master’s in Computer Science at the University of Central Missouri and received recognition including a hackathon win and team collaboration awards.",
    },
  ],
  contact: {
    heading: "Get in touch",
    copy:
      "If you'd like to talk about a role or project, feel free to reach out.",
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
