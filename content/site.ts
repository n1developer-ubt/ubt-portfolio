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
    lede: "Full Stack Developer and founder of Viso. 7+ years turning ideas into scalable web, mobile and desktop products — for startups, universities and enterprises.",
    ledeMobile:
      "Full Stack Developer and founder of Viso, with 7+ years turning ideas into scalable products.",
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
      "Alongside, I'm a **student software developer at TU Berlin**, building research software with C++, Python, FastAPI and Rust.",
      "On the side I run **Viso**, my SaaS for recruitment agencies — and I'm at home building management systems, POS, chat apps and admin portals.",
    ],
    chips: ["MSc CS · TU Berlin", "MSc CS · NUST · 3.83", "English · German A2"],
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
      title: "[Your role title]",
      org: "HeyJobs · Berlin",
      dates: "[Start] – now",
      summary: "[One line on what you build at HeyJobs]",
      tags: ["[Tech]", "[Tech]", "[Tech]"],
      current: true,
    },
    {
      initials: "TU",
      title: "Software Developer",
      org: "Technische Universität Berlin · part-time",
      dates: "2024 – now",
      summary:
        "Research-oriented applications and systems for university operations, with international research teams.",
      tags: ["Python", "FastAPI", "C++", "Rust"],
    },
    {
      initials: "LR",
      title: "Lead Developer",
      org: "LRCAR Services · remote",
      dates: "2021 – 2024",
      summary: "Built a ride-sharing platform from scratch and led a team of 3.",
      highlights: [
        "Real-time GPS tracking & route optimisation",
        "10,000+ daily users at 99.9% uptime",
      ],
      tags: ["ASP.NET Core", "React", "Node.js", "GCP"],
    },
    {
      initials: "Fi",
      title: "Full Stack Engineer",
      org: "Fiverr · freelance",
      dates: "2020 – 2024",
      highlights: [
        "300+ projects with 5-star ratings",
        "E-commerce platforms generating $1M+ in sales · custom ERPs",
      ],
      tags: ["Next.js", "React Native", "AWS", "MySQL"],
    },
    {
      initials: "NU",
      title: "Full Stack Engineer",
      org: "NUST · contract, hybrid",
      dates: "2022 – 2023",
      summary:
        "Enterprise and educational apps for the university; ML/AI research collaboration.",
      tags: ["ASP.NET Core", "React", "MySQL"],
    },
    {
      initials: "↗",
      title: "Full Stack & Software Developer",
      org: "Various companies · Pakistan",
      dates: "2018 – 2020",
      summary: "WinForms & WPF desktop apps, React front-ends and ASP.NET Core APIs.",
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
      slug: "viso",
      title: "Viso",
      kind: "SaaS · my own product",
      status: "My SaaS",
      statusDot: false,
      featured: true,
      summary:
        "Candidate profiles for recruitment agencies: build, anonymize and send them from one dashboard.",
      description:
        "Viso is my SaaS for recruitment agencies. Recruiters upload a CV and Viso turns it into a clean candidate profile. One click anonymizes it before it goes to a client, and a central dashboard shows every profile that was sent, viewed and shortlisted.",
      built: [
        "Profile builder that turns CVs into consistent candidate profiles",
        "One-click anonymization of name, photo and contact details",
        "Central dashboard to send profiles to clients and track their status",
      ],
      tags: ["[Tech stack]"],
      link: { label: "Visit Viso ↗", href: "[Viso URL]" },
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
      slug: "evergo",
      title: "Evergo Packaging",
      kind: "Web platform",
      status: "Live",
      statusDot: true,
      summary: "An eco-friendly packaging platform with environmental impact tracking.",
      description:
        "A platform that connects businesses with sustainable packaging solutions. Every order shows its environmental impact, so companies can see what switching saves.",
      built: [
        "Storefront and product catalog for sustainable packaging",
        "Environmental impact tracking for businesses",
        "Type-safe stack with Next.js, Prisma and PostgreSQL",
      ],
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      conceptScreens: true,
      screens: [
        { src: "/images/projects/evergo-1.webp", caption: "Landing page for businesses." },
        {
          src: "/images/projects/evergo-2.webp",
          caption: "Product catalog with the CO₂ saved per item.",
        },
        {
          src: "/images/projects/evergo-3.webp",
          caption: "Impact dashboard for business customers.",
        },
      ],
    },
    {
      slug: "truck-safety-erp",
      title: "Truck Safety Team ERP",
      kind: "Enterprise",
      status: "Enterprise",
      statusDot: false,
      summary:
        "Fleet tracking, compliance monitoring and safety analytics for a trucking company.",
      description:
        "An ERP for truck safety management. Safety teams see the whole fleet on a map, stay ahead of inspections and driver-hour rules, and track how safety improves over time.",
      built: [
        "Live fleet overview with vehicle status",
        "Compliance monitoring for inspections and driver hours",
        "Safety analytics and fleet safety score",
      ],
      tags: ["C#", "ASP.NET Core", "SQL Server", "Angular"],
      conceptScreens: true,
      screens: [
        {
          src: "/images/projects/truck-1.webp",
          caption: "Fleet overview with every truck on the map.",
        },
        {
          src: "/images/projects/truck-2.webp",
          caption: "Compliance checks and what is due next.",
        },
        {
          src: "/images/projects/truck-3.webp",
          caption: "Safety analytics over the last 12 months.",
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
