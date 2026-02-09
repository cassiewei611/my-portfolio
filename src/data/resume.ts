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
  about: string[]
  education: { degree: string; school: string; period: string; gpa?: string; highlights: string[] }[]
  languages: { name: string; level: string }[]
  skills: { category: string; items: string[] }[]
  experience: { company: string; role: string; type: string; period: string; description: string[] }[]
  projects: Project[]
} = {
  name: 'Cassie Wei',
  fullName: 'Chuanyu (Cassie) Wei',
  title: 'Full Stack Developer',
  roles: ['Full Stack Developer', 'Software Engineer', 'Tech Consultant'],
  email: 'cassiewei06@gmail.com',
  phone: '+45 50391418',
  github: 'https://github.com/cassiewei611',
  linkedin: 'https://linkedin.com/in/chuanyu-wei',
  location: 'Copenhagen, Denmark',

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
      degree: 'B.S. in Arts and Literature',
      school: 'Nankai University, China',
      period: 'Sep 2018 — Jul 2022',
      highlights: [
        'Specialized in modern cultural theory, visual culture, and media studies',
        'Developed strong communication, research, and analytical skills',
      ],
    },
  ],

  languages: [
    { name: 'Chinese', level: 'Native' },
    { name: 'English', level: 'C2 — Full Professional' },
    { name: 'Danish', level: 'A1 — Elementary' },
  ],

  skills: [
    {
      category: 'Frontend',
      items: ['React', 'TypeScript', 'Next.js', 'HTML / CSS', 'Tailwind CSS', 'Figma to Code'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Python', 'PostgreSQL', 'REST APIs', 'Contentful CMS'],
    },
    {
      category: 'Tools & Platforms',
      items: ['Git', 'Docker', 'PowerBI', 'VS Code', 'Jira', 'CI / CD'],
    },
    {
      category: 'Soft Skills',
      items: [
        'Cross-functional Communication',
        'Problem Solving',
        'Process Documentation',
        'Stakeholder Coordination',
        'International Collaboration',
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
        'Coordinated weekly exercises and provided feedback to improve student learning outcomes.',
        'Designed and delivered hands-on workshops on Git and LaTeX to support technical skill development.',
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
      period: 'Jan 2023 — Jun 2023',
      description: [
        'Delivered 3+ automated workflow configurations by translating business requirements into technical specifications.',
        'Facilitated cross-functional workshops between business users, developers, and stakeholders.',
        'Created comprehensive documentation including process maps, trigger logic, and configuration guides.',
      ],
    },
  ],

  projects: [
    {
      title: 'Developer Portfolio',
      description:
        'Personal portfolio website built with React, TypeScript, and Tailwind CSS featuring smooth scroll animations and a Morandi color palette.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/cassiewei611/my-portfolio',
    },
    {
      title: 'From Lockdowns to Recovery',
      description:
        'Research project analyzing 300M+ mobility records with automated data processing pipelines, validation rules, and geospatial visualizations.',
      tech: ['Python', 'Pandas', 'NetworkX', 'GeoPandas'],
    },
    {
      title: 'Beauty Clinic Booking System',
      description:
        'Full-stack booking platform for a beauty clinic with appointment scheduling, user authentication, and admin dashboard.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
      github: 'https://github.com/cassiewei611/beauty-clinic-frontend',
    },
    {
      title: 'HomeSwap',
      description:
        'A home-swapping platform enabling users to list properties and arrange exchanges for travel accommodation.',
      tech: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com/cassiewei611/homeswap',
    },
  ],
}
