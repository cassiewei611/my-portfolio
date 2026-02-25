interface Project {
  title: string
  description: string
  tech: string[]
  github?: string
  live?: string
}

export const resume: {
  name: string
  fullName: string
  title: string
  roles: string[]
  email: string
  phone: string
  github: string
  linkedin: string
  location: string
  aboutLead: string
  aboutBody: string
  aboutTags: string[]
  about: string[]
  education: { degree: string; school: string; period: string; gpa?: string; highlights: string[] }[]
  languages: { name: string; level: string }[]
  hobbies: { name: string; emoji: string }[]
  skills: { category: string; items: string[] }[]
  experience: { company: string; role: string; type: string; period: string; description: string[] }[]
  projects: Project[]
} = {
  name: 'Cassie Wei',
  fullName: 'Chuanyu (Cassie) Wei',
  title: 'Software Engineer',
  roles: ['Software Engineer', 'Technical Consultant'],
  email: 'cassiewei06@gmail.com',
  phone: '+45 50391418',
  github: 'https://github.com/cassiewei611',
  linkedin: 'https://linkedin.com/in/chuanyu-wei',
  location: 'Copenhagen, Denmark',

  aboutLead: 'I build clean, user-friendly digital products from end to end.',
  aboutBody: 'With hands-on experience in full-stack development, CMS migration, and workflow automation — I bridge technical depth with cross-functional communication.',
  aboutTags: ['Full-Stack Dev', 'Technical Consulting', 'Cross-functional Communication'],

  about: [
    "I'm a Software Design MSc student at IT University of Copenhagen with hands-on experience in full-stack development and technical consulting.",
    'I enjoy turning complex problems into clean, user-friendly digital solutions. With a background spanning software engineering, CMS migration, and workflow automation, I bring both technical depth and strong cross-functional communication to every project.',
  ],

  education: [
    {
      degree: 'M.S. in Software Design',
      school: 'IT University of Copenhagen',
      period: 'Sep 2023 — Jun 2026',
      gpa: '10 / 12',
      highlights: [
        'MSc Programme Ambassador 2026',
        'Software Engineering (12), Mobile App Dev (12), Discrete Mathematics (12)',
        'Web Development, Distributed Systems, User-Centered Design',
      ],
    },
    {
      degree: 'B.S. in Linguistics and Literature',
      school: 'Nankai University',
      period: 'Sep 2018 — Jul 2022',
      gpa: '88.06 / 100',
      highlights: [
        'Specialized in modern cultural theory, visual culture, and media studies',
        'Developed strong communication, research, and analytical skills',
      ],
    },
  ],

  languages: [
    { name: 'Chinese', level: 'Native' },
    { name: 'English', level: 'C2 — Full Professional' },
    { name: 'Danish', level: 'A2 — Elementary' },
  ],

  hobbies: [
    { name: 'Hiking', emoji: '🥾' },
    { name: 'Badminton', emoji: '🏸' },
    { name: 'Traveling', emoji: '✈️' },
  
  ],

  skills: [
    {
      category: 'Frontend',
      items: ['React', 'TypeScript', 'Next.js', 'HTML / CSS', 'Tailwind CSS', 'Figma', 'Redux'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Java / Spring Boot', 'C# / .NET', 'Kotlin', 'Python', 'PostgreSQL', 'SQL Server', 'REST APIs', 'Spring AI', 'LangChain4j'],
    },
    {
      category: 'Tools',
      items: ['Git', 'Docker', 'Linux', 'AWS', 'CI / CD', 'PowerShell', 'Bash', 'Jira', 'Confluence', 'VS Code'],
    },
    {
      category: 'Soft Skills',
      items: [
        'Agile / Scrum',
        'Cross-functional Communication',
        'Requirements Analysis',
        'Process Optimization',
        'Stakeholder Coordination',
        'Documentation',
      ],
    },
  ],

  experience: [
    {
      company: 'IT University of Copenhagen',
      role: 'Teaching Assistant',
      type: 'Part-time',
      period: 'Aug 2024 — Present',
      description: [
        'Conducted weekly live coding sessions and exercise walkthroughs for courses in math, SQL & databases, data structures and algorithms, web development (React), and mobile app development (Kotlin).',
        'Designed and delivered hands-on workshops on PowerShell, Bash, Git, and LaTeX to strengthen students\' development toolchain proficiency.',
      ],
    },
    {
      company: 'Ramboll',
      role: 'Full Stack Developer',
      type: 'Internship',
      period: 'Feb 2025 — Jul 2025',
      description: [
        'Researched and evaluated CMS migration, navigating content from WordPress to Contentful.',
        'Converted Figma designs into responsive frontend components using React and TypeScript.',
        'Integrated frontend with a Node.js backend to ensure seamless data flow and functionality.',
      ],
    },
    {
      company: 'Meritco Services',
      role: 'Technical Consultant',
      type: 'Internship',
      period: 'Jan 2023 — Apr 2023',
      description: [
        'Conducted structured desk research to identify and screen industry experts across consumer and financial sectors, managing a pipeline of 20+ expert profiles per project.',
        'Coordinated expert interviews for consulting teams, synthesizing transcripts into structured research notes to support client deliverables.',
      ],
    },
  ],

  projects: [
    {
      title: 'AI Love Advisor',
      description:
        'Conversational AI application for relationship advice with multi-turn dialogue, RAG-based knowledge retrieval via PGVector, and Tool Calling for personalised date planning. Implements a ReAct-pattern autonomous agent capable of self-directed planning, web search, and PDF report generation.',
      tech: ['Java 21', 'Spring Boot 3', 'Spring AI', 'LangChain4j', 'PGVector', 'PostgreSQL'],
      github: 'https://github.com/cassiewei611/yu-ai-agent',
    },
    {
      title: 'From Lockdowns to Recovery',
      description:
        'Data analysis research project processing 300M+ mobility records to quantify travel willingness across 10,000+ census tracts. Trained and compared regression and Random Forest models (R²=0.9989), and built weighted mobility graphs to compute destination value scores across ~20.5M census tract pairs.',
      tech: ['Python', 'Pandas', 'GeoPandas', 'NetworkX', 'Scikit-learn', 'Matplotlib'],
      github: 'https://github.com/cassiewei611/Research-Project',
    },
    {
      title: 'TrackIt — Subscription & Budget Tracker',
      description:
        'Full-stack application following Clean Architecture with CQRS pattern using MediatR, FluentValidation, Entity Framework Core, and JWT authentication. React frontend with multi-currency support via Open Exchange Rates API and an interactive spending analytics dashboard.',
      tech: ['ASP.NET Core 8', 'C#', 'React', 'TypeScript', 'SQL Server'],
      github: 'https://github.com/cassiewei611/TrackIt',
    },
    {
      title: 'MuseMove — Web Shop',
      description:
        'Full-stack e-commerce web shop with UI/UX designed in Figma. Built a RESTful API for products, users, and shopping carts, using React functional components, Formik and Yup for form validation, and Context API for state management.',
      tech: ['TypeScript', 'React', 'Node.js', 'Express.js', 'RESTful API'],
      github: 'https://github.com/cassiewei611/Webshop',
    },
    {
      title: 'Petish — Pet Events Social Platform',
      description:
        'Full-stack social platform for pet owners to discover and join local events. Features user authentication, profile management, event RSVP, comment system, and ACL-based access control with Back4App (Parse Server) for cloud storage and image uploads.',
      tech: ['React', 'Node.js', 'Express.js', 'Parse Server', 'Back4App', 'Tailwind CSS'],
      github: 'https://github.com/cassiewei611/Group3-2024TID',
    },
  ],
}
