// All page content lives here. Everything below is sample text — replace it with yours.

// Two or three sentences on what you are working toward. The section is hidden while this is empty.
export const goal = ''

export const education = [
  {
    degree: 'MS in Computer Science',
    school: 'Temple University',
    years: 'Aug 2025 – Present',
    note: 'CGPA 3.78 / 4.00',
  },
  {
    degree: "Bachelor of Engineering in Information Technology",
    school: 'Saffrony Institute of Technology (GTU)',
    years: 'Sep 2020 – May 2024',
    note: 'CGPA 3.74 / 4.00',
  },
]

// start/end are 'YYYY-MM' (end: null means ongoing) and position each role's bar on the timeline.
export const experience = [
  {
    role: 'Application Developer Intern',
    company: 'Cencora / APR Inc.',
    years: 'Sep 2026 – Present',
    start: '2026-09',
    end: null,
    points: [
      'Led my team\'s move to spec-driven development (SDD), which made project delivery about 60% faster and cut bugs by nearly 80%.',
      'Designed the SDD flow so AI coding agents start with the project\'s context and goals, and test cases are written before any feature is implemented.',
      'Build full-stack features for a healthcare application, with Java and Quarkus services on the backend and React with TypeScript on the frontend.',
      'Work within HIPAA compliance requirements for healthcare systems and data.',
      'Deliver in Scrum sprints, tracking work in Jira and keeping documentation in Confluence.',
    ],
    stack: ['Java', 'Quarkus', 'React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Azure', 'Jira', 'Spec-Driven Development'],
  },
  {
    role: 'Software Developer Intern',
    company: 'Cencora',
    years: 'Jun 2026 – Aug 2026',
    start: '2026-06',
    end: '2026-08',
    points: [
      'Optimized a cron job that took 8 hours to process 20,000 records so it finishes in 30 to 40 minutes.',
      'Worked with the DevOps team to find slow cron jobs and their query counts on a monolithic healthcare platform, then fixed the N+1 query problems behind them.',
      'Built server-side pagination for the platform.',
      'Worked with the Gigya login system, which handles more than 30 login redirects from a single platform.',
      'Placed 8th out of 98 interns in the intern hackathon.',
      'Met with more than 60 Cencora colleagues during the 10-week program to learn about their roles and responsibilities.',
    ],
    stack: ['Java', 'Quarkus', 'React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Azure', 'Jira', 'Debugging'],
  },
  {
    role: 'Software Developer (Student Worker)',
    company: 'Fox School of Business, Temple University (part-time)',
    years: 'Sep 2025 – Present',
    start: '2025-09',
    end: null,
    points: [
      'Build a classroom and space management tool on Temple\'s website for the Fox School of Business, with 360° views of the classrooms connected to it.',
      'The linked prototype is a replica of that tool: browse buildings and rooms, filter them by campus and sort them.',
      'Provide AV tech support for classrooms.',
      'Respond to help requests from classrooms, troubleshoot the systems and fix the issues.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', '360° Views', 'AV Support', 'Hardware Troubleshooting'],
    links: {
      live: 'https://varshil25.github.io/cts-prototype/',
      code: 'https://github.com/Varshil25/cts-prototype',
    },
  },
  {
    role: 'Junior Software Engineer',
    company: 'Orionik Technologies, Toronto, Canada',
    years: 'Aug 2024 – Jun 2025',
    start: '2024-08',
    end: '2025-06',
    points: [
      'Cut typical API response time from around 400ms to 100ms for 500+ daily active users by redesigning REST APIs and optimizing PostgreSQL queries.',
      'Built core modules for a multi-tenant salon and spa point-of-sale platform, including appointment scheduling, employee management and billing, with JWT auth and role-based access control.',
      'Refactored authentication and scheduling services in Spring Boot as part of a small team, contributing to faster release cycles and fewer post-release defects.',
      'Added Redis caching and Kafka/RabbitMQ event streaming to improve throughput under load.',
      'Containerized services with Docker and Kubernetes and helped set up CI/CD pipelines for automated, zero-downtime deployments.',
    ],
    stack: ['Spring Boot', 'PostgreSQL', 'React', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Kafka', 'RabbitMQ', 'Docker', 'Kubernetes', 'CI/CD'],
  },
  {
    role: 'Software Engineer Intern',
    company: 'DRC Systems, Gandhinagar, India',
    years: 'Jan 2024 – Jul 2024',
    start: '2024-01',
    end: '2024-07',
    points: [
      'Built backend modules with Spring Boot and MySQL that supported over 1,000 daily API requests.',
      'Delivered authentication, validation and reporting features across four Agile sprints.',
      'Profiled and refactored slow queries to reduce average API response time.',
    ],
    stack: ['Spring Boot', 'MySQL', 'REST APIs', 'Agile'],
  },
]

export const research = [
  {
    title: 'Evaluating and Extending Spec-Driven Development',
    venue: 'Independent study, MS Computer Science, Temple University. Advised by Dr. Alex Pang.',
    summary:
      'An empirical study of GitHub Spec Kit for software engineering and OpenOwls SD-KDP for knowledge-base production, comparing spec-driven development with unstructured prompting.',
    year: 'Ongoing',
    outcomesLabel: 'Outcomes so far, from the pilot run',
    points: [
      'Built sddlog, an instrument that records every prompt, tool call and edit during a run, backed by its own test suite and six integrity checks.',
      'Ran the full Spec Kit workflow on a pilot feature: 29 minutes of active time, 5 human prompts totalling 278 words, and 58 passing tests.',
      'Found that planning dominated the work: the phases before implementation took 74% of active time.',
      'Measured the output: about 7,580 words of specification, roughly 27 times the human input, governing 325 lines of source code.',
      'Observed that no spec was revised once implementation began, and that four ambiguities were settled as written assumptions instead of being raised as questions.',
    ],
    next: 'Next: a controlled comparison against unstructured prompting on a matched set of tasks.',
    link: 'https://github.com/Varshil25/spec-driven-development-study',
  },
]

export const achievements = [
  {
    title: 'NSF I-Corps award, $1,500',
    detail: 'Completed customer discovery interviews for my startup, Sono Assist (Team 146), in the NSF I-Corps Hub Northeast Region program run through Temple University\'s Propelus Program.',
    year: 'Spring 2026',
    certificate: '/images/nsf-icorps-certificate.png',
  },
  {
    title: '8th place out of 98 interns, Cencora intern hackathon',
    detail: 'During my summer software developer internship at Cencora.',
    year: 'Summer 2026',
  },
]
