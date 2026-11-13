// All page content lives here. Everything below is sample text — replace it with yours.

export const goal =
  'Write two or three sentences here about what you want to build, the problems you want to work on, and where you are heading.'

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

export const experience = [
  {
    role: 'Application Developer Intern',
    company: 'Cencora / APR Inc.',
    years: 'Sep 2026 – Present',
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
]

export const research = [
  { title: 'Title of your paper or research project', venue: 'Journal, conference or lab', year: 'Year', link: '' },
  { title: 'Title of a second paper or project', venue: 'Journal, conference or lab', year: 'Year', link: '' },
]

export const achievements = [
  { title: 'Award or recognition', detail: 'Who gave it and what for.', year: 'Year' },
  { title: 'Certification or competition result', detail: 'Issuer or event.', year: 'Year' },
  { title: 'Another achievement', detail: 'One line of context.', year: 'Year' },
]
