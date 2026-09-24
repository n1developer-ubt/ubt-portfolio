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
      caseStudy: "/docs/aplyfy-case-study.pdf",
      conceptScreens: false,
      screens: [
        {
          src: "/images/projects/aplyfy-1.webp",
          caption:
            "Matches: every job scored on skills, language and location against your own CV.",
        },
        {
          src: "/images/projects/aplyfy-2.webp",
          caption:
            "Autopilot: applications filed for you, with the ones needing input held back.",
        },
        {
          src: "/images/projects/aplyfy-3.webp",
          caption: "Applications: every job applied for, and where each one stands.",
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
      caseStudy: "/docs/visorun-case-study.pdf",
      conceptScreens: false,
      screens: [
        {
          src: "/images/projects/visorun-1.webp",
          caption:
            "Analytics dashboard: CVs, anonymized profiles and PDF exports across the team.",
        },
        {
          src: "/images/projects/visorun-2.webp",
          caption: "The CV library every profile and anonymized export is built from.",
        },
        {
          src: "/images/projects/visorun-3.webp",
          caption: "Billing: plan, monthly CV quota and top-up credit packs.",
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
        "A chauffeur and ride platform with multi-stop trips, live driver tracking and dispatch.",
      description:
        "A ride platform I architected from scratch and led as lead developer, with a team of 3. Drivers work a trip list, run multi-stop journeys with per-stop timing, and log waiting time; dispatchers follow every ride live and settle the trip from the same record.",
      built: [
        "Driver app with multi-stop trips, per-stop status and waiting time",
        "Live GPS tracking and dispatch across the fleet",
        "10,000+ daily active users at 99.9% uptime",
      ],
      tags: ["React", "Node.js", "MongoDB", "Socket.io", "ASP.NET Core", "GCP"],
      caseStudy: "/docs/lrcar-case-study.pdf",
      conceptScreens: false,
      screens: [
        {
          src: "/images/projects/lrcar-1.webp",
          caption:
            "Driver app: the trip list, and a live multi-stop journey with each stop timed.",
        },
        {
          src: "/images/projects/lrcar-2.webp",
          caption:
            "Waiting time logged on the spot, and the completed trip broken down by stage.",
        },
      ],
    },
    {
      slug: "stuzanne-erp",
      title: "STUZANNE ERP",
      kind: "Enterprise",
      status: "Enterprise",
      statusDot: false,
      summary:
        "A workshop ERP for a jewellery manufacturer: jobs, bench allocation and costing in one system.",
      description:
        "An ERP that runs a jewellery workshop end to end. Every piece becomes a barcoded job with a customer reference, a due date and a description of the work; jobs are allocated to setters and polishers, tracked on a calendar, and priced from a costing model built on metal spot price and per-stage labour.",
      built: [
        "Barcoded jobs with customer reference, due date and bench allocation",
        "Allocation to setters and polishers, with scan-to-assign and a workshop calendar",
        "Costing driven by metal spot price, per-stage labour, plating and hallmarking",
        "Quotes and exports for the office side of the workshop",
      ],
      tags: ["React", "Node.js", "Express", "MongoDB"],
      caseStudy: "/docs/stuzanne-case-study.pdf",
      conceptScreens: false,
      screens: [
        {
          src: "/images/projects/stuzanne-1.webp",
          caption: "Jobs management: every piece barcoded, described and allocated to a bench.",
        },
        {
          src: "/images/projects/stuzanne-2.webp",
          caption: "Allocations: who on the bench is carrying which jobs.",
        },
        {
          src: "/images/projects/stuzanne-3.webp",
          caption:
            "The costing model: metal spot price, labour per stage, plating and hallmarking.",
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
  docs: {
    cv: "/docs/usama-bin-tariq-cv.pdf",
    portfolio: "/docs/usama-bin-tariq-portfolio.pdf",
  },
  contact: {
    eyebrow: "Available for new projects",
    text: "Freelance projects and full-time roles welcome. I usually reply within a day.",
  },
} as const;

export type Project = (typeof site.projects)[number];
export type Experience = (typeof site.experience)[number];
export type Skill = (typeof site.skills.items)[number];
