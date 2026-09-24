export const site = {
  name: "Usama Bin Tariq",
  role: "Full Stack Developer",
  location: "Berlin, Germany",
  email: "imusamabintariq@gmail.com",
  social: {
    github: "https://github.com/n1developer-ubt/",
    linkedin: "https://www.linkedin.com/in/usama-bin--tariq/",
    fiverr: "https://www.fiverr.com/n1developer",
  },
  hero: {
    status: "Available for freelance & full-time · Berlin",
    lede: "Full Stack Developer and founder of Aplyfy. 7+ years turning ideas into scalable web, mobile and desktop products — for startups, universities and enterprises.",
    ledeMobile:
      "Full Stack Developer and founder of Aplyfy, with 7+ years turning ideas into scalable products.",
  },
  marquee: [
    "React",
    "Next.js",
    "Node.js",
    "C# & .NET",
    "Python · FastAPI",
    "Rust",
    "React Native",
    "GCP · AWS",
  ],
  about: {
    side: "Web, iOS, Android, Windows and macOS — I've shipped on all of them.",
    paragraphs: [
      "I'm a **Full Stack Developer** in Berlin, currently building at **HeyJobs**. I work across the stack with React, Node.js and ASP.NET Core.",
      "Before that I spent close to two years at **TU Berlin**, building relational database technology and data APIs with C++, Python and FastAPI.",
      "On the side I run **Aplyfy**, my AI job-application platform, and **Visorun**, my SaaS for recruitment agencies — and I'm at home building management systems, POS, chat apps and admin portals.",
    ],
    chips: ["MSc CS · TU Berlin", "MSc CS · NUST · 3.83", "German B2 · English · Urdu"],
    stats: [
      { value: "7+", label: "years experience" },
      { value: "300+", label: "projects completed" },
      { value: "150+", label: "happy clients" },
      { value: "20", label: "technologies" },
    ],
  },
  experienceIntro: "From desktop apps in 2018 to product engineering in Berlin today.",
  experience: [
    {
      initials: "HJ",
      title: "Software Engineer",
      org: "HeyJobs · Berlin",
      dates: "2026 – now",
      summary:
        "Building the user-facing product in Next.js and React, backed by Python services in a microservice architecture.",
      highlights: [
        "Designed the microservice architecture and ran it in Docker on Kubernetes",
        "Deployed on AWS and maintained the CI/CD pipelines",
      ],
      tags: ["Next.js", "React", "Python · FastAPI", "AWS"],
      current: true,
    },
    {
      initials: "TU",
      title: "C++ / Python Developer",
      org: "Technische Universität Berlin · part-time",
      dates: "2024 – 2026",
      summary:
        "Relational database technology in C++ and Python, with FastAPI web APIs serving the data.",
      highlights: [
        "Built database internals in C++ and Python",
        "Datafusion and PyArrow for efficient data processing and normalisation",
      ],
      tags: ["C++", "Python", "FastAPI", "PyArrow"],
    },
    {
      initials: "LR",
      title: "Full-Stack Developer",
      org: "LRCAR Services · Texas, US · remote",
      dates: "2021 – 2024",
      summary: "Built a ride-sharing platform from scratch and led a team of 3.",
      highlights: [
        "Real-time GPS tracking & route optimisation",
        "Backend systems and mobile apps with Firestore integration",
      ],
      tags: ["ASP.NET Core", "React", "Node.js", "GCP"],
    },
    {
      initials: "Fi",
      title: "Freelance Full Stack Developer",
      org: "Fiverr / Upwork · remote",
      dates: "2018 – 2024",
      summary:
        "Web, mobile and desktop applications for clients worldwide, from responsive front-ends to scalable back-ends.",
      highlights: [
        "300+ projects with 5-star ratings",
        "E-commerce platforms generating $1M+ in sales · custom ERPs",
      ],
      tags: ["Next.js", "React Native", "ASP.NET Core", "AWS"],
    },
    {
      initials: "NU",
      title: "Full Stack Developer",
      org: "NUST · Pakistan",
      dates: "2022 – 2023",
      summary:
        "Web apps that opened up access to language models for private organisation policies.",
      highlights: [
        "End-to-end development: React.js interfaces, ASP.NET Core logic",
        "MySQL database design for LLM-driven retrieval and processing",
      ],
      tags: ["ASP.NET Core", "React", "MySQL"],
    },
  ],
  skills: {
    filters: [
      { id: "all", label: "All" },
      { id: "fe", label: "Frontend" },
      { id: "be", label: "Backend" },
      { id: "db", label: "Database" },
      { id: "cl", label: "Cloud" },
      { id: "md", label: "Mobile & Desktop" },
    ],
    items: [
      { name: "React.js", pct: 95, big: true, cat: "fe" },
      { name: "Node.js", pct: 92, big: true, cat: "be" },
      { name: "Next.js", pct: 92, cat: "fe" },
      { name: "TypeScript", pct: 90, cat: "fe" },
      { name: "C#", pct: 90, big: true, cat: "be" },
      { name: "ASP.NET Core", pct: 88, cat: "be" },
      { name: "Tailwind", pct: 88, cat: "fe" },
      { name: "Python / FastAPI", pct: 85, cat: "be" },
      { name: "React Native", cat: "md" },
      { name: "WPF", cat: "md" },
      { name: "SQL Server", cat: "db" },
      { name: "MongoDB", cat: "db" },
      { name: "MySQL", cat: "db" },
      { name: "GCP", cat: "cl" },
      { name: "AWS", cat: "cl" },
      { name: "Rust", cat: "be" },
    ],
    exploring:
      "Currently exploring: AI/ML integration · advanced Rust · WebAssembly · microservices",
  },
  projects: [
    {
      slug: "aplyfy",
      title: "Aplyfy",
      kind: "SaaS · my own product",
      status: "My SaaS",
      statusDot: false,
      featured: true,
      summary:
        "An AI job-application platform: one profile in, a matched job with a rewritten CV, cover letter and finished PDFs out.",
      description:
        "Aplyfy is my AI job-application platform — product, API, AI pipeline, database and AWS infrastructure, all built and run by me. A profile goes in; a matched job comes back with a tailored CV, a cover letter and a ready-to-send email as finished PDFs, in under a minute, in English or German. Autopilot can file the application for you.",
      built: [
        "Five-step pipeline — find, match, write, design, apply — where every step retries itself",
        "Nine background lanes on AWS Lambda and SQS that scale to zero between runs",
        "An agent that reads an employer's form, answers what it can and leaves the rest to you",
        "Practice-run by default: the form is filled and screenshotted, never submitted blind",
      ],
      tags: ["React 19", "NestJS", "PostgreSQL", "AWS Lambda", "Bedrock"],
      conceptScreens: false,
      screens: [
        {
          src: "/images/projects/aplyfy-1.webp",
          caption: "Matches: every job scored against your own CV, not keyword search.",
        },
        {
          src: "/images/projects/aplyfy-2.webp",
          caption:
            "One hub, many arms: the API, the work queue and nine worker lanes behind it.",
        },
        {
          src: "/images/projects/aplyfy-3.webp",
          caption:
            "Autopilot fills the employer's form, sorts every question and stops at the ones only you can answer.",
        },
      ],
    },
    {
      slug: "visorun",
      title: "Visorun",
      kind: "SaaS · my own product",
      status: "My SaaS",
      statusDot: false,
      summary:
        "Candidate profiles for recruitment agencies: build, anonymize and send them from one dashboard.",
      description:
        "Visorun is my plan-gated CV management and anonymization platform for recruiters. Recruiters upload a CV and Visorun turns it into a clean candidate profile. One click anonymizes it before it goes to a client, and a central dashboard shows every profile that was sent, viewed and shortlisted. Stripe billing sits behind it with monthly quotas and top-up credit packs.",
      built: [
        "Profile builder that turns CVs into consistent, branded candidate exports",
        "One-click anonymization of name, photo and contact details",
        "Stripe billing with monthly CV quotas, top-up credit packs and transactional email",
      ],
      tags: ["React", "NestJS", "Firestore", "Stripe", "GCP"],
      link: { label: "Visit Visorun ↗", href: "[Visorun URL]" },
      conceptScreens: true,
      screens: [
        {
          src: "/images/projects/viso-1.webp",
          caption: "Candidates dashboard: every profile, its status and where it was sent.",
        },
        {
          src: "/images/projects/viso-2.webp",
          caption: "A candidate profile built from an uploaded CV.",
        },
        {
          src: "/images/projects/viso-3.webp",
          caption: "Anonymize a profile and send it to clients from one place.",
        },
      ],
    },
    {
      slug: "lrcar",
      title: "LRCar Service",
      kind: "Web + mobile · Lead developer",
      status: "Live",
      statusDot: true,
      summary:
        "An Uber-style ride-sharing platform with real-time GPS tracking and route optimisation.",
      description:
        "A full ride-sharing platform I architected from scratch and led as lead developer, with a team of 3. Riders book and track trips live, drivers get optimised routes, and operators run everything from an admin dashboard.",
      built: [
        "Real-time GPS tracking and route optimisation",
        "Rider and driver mobile apps plus an admin dashboard",
        "10,000+ daily active users at 99.9% uptime",
      ],
      tags: ["React", "Node.js", "MongoDB", "Socket.io", "ASP.NET Core", "GCP"],
      conceptScreens: true,
      screens: [
        {
          src: "/images/projects/lrcar-1.webp",
          caption: "Rider app: live tracking from pickup to drop-off.",
        },
        {
          src: "/images/projects/lrcar-2.webp",
          caption: "Admin: live operations map with active trips and drivers.",
        },
        {
          src: "/images/projects/lrcar-3.webp",
          caption: "Admin: trips and uptime at a glance.",
        },
      ],
    },
    {
      slug: "stuzanne-erp",
      title: "STUZANNE ERP",
      kind: "Enterprise",
      status: "Enterprise",
      statusDot: false,
      summary: "A modern ERP for retail: inventory, sales tracking and customer relationships.",
      description:
        "A retail ERP that brings stock, sales and customers into one system, so store managers always know what is selling, what to reorder and who their best customers are.",
      built: [
        "Inventory management with low-stock alerts",
        "Sales tracking per store",
        "Customer relationship management and loyalty campaigns",
      ],
      tags: ["React", "Node.js", "Express", "MongoDB"],
      conceptScreens: true,
      screens: [
        {
          src: "/images/projects/stuzanne-1.webp",
          caption: "Inventory with stock levels per product.",
        },
        { src: "/images/projects/stuzanne-2.webp", caption: "Sales by store." },
        {
          src: "/images/projects/stuzanne-3.webp",
          caption: "Customers and loyalty campaigns.",
        },
      ],
    },
  ],
  moreProjects: {
    title: "300+ projects delivered for clients worldwide.",
    categories: [
      "E-commerce stores",
      "ERP & POS systems",
      "Chat apps",
      "Admin portals",
      "Desktop tools (WPF, WinForms)",
      "WordPress sites",
    ],
  },
  reviews: {
    featured: {
      quote:
        "After contacting four or five sellers, I'm happy I found Usama. He listened to my needs and built the software I needed from scratch.",
      by: "colinjohnparry · Desktop application · United States",
    },
    more: [
      {
        quote:
          "He paid attention to the details I gave him. The overall quality of his work was great.",
        by: "astepnate · repeat client · US",
      },
      {
        quote:
          "He not only delivers on time but does so with remarkable politeness and quick responsiveness.",
        by: "anasmak11 · repeat client · Kuwait",
      },
    ],
  },
  contact: {
    eyebrow: "Available for new projects",
    text: "Freelance projects and full-time roles welcome. I usually reply within a day.",
  },
} as const;

export type Project = (typeof site.projects)[number];
export type Experience = (typeof site.experience)[number];
export type Skill = (typeof site.skills.items)[number];
