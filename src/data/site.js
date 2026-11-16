// Central place for site-wide details. Edit these once; they're used everywhere.
export const site = {
  name: 'Varshil',
  initials: 'VP',
  fullName: 'Varshil Patel',
  role: 'Full-stack engineer and researcher',
  affiliation: 'MS Computer Science at Temple University',
  // Draft bio written from your resume and site content. Edit freely.
  bio: 'I build full-stack products and study how AI changes the way software gets made. I\'m an application developer intern at Cencora, where I led my team\'s move to spec-driven development, and I research that same method at Temple University with Dr. Alex Pang. Before that I shipped production systems at Orionik Technologies and DRC Systems, and built Hemis-Kitchen, a food ordering platform with 600+ users.',
  availability: '', // e.g. 'Open to full-time software engineering roles starting in 2027.'
  photo: '/images/varshil-patel.jpg',
  email: '', // TODO: add a public contact email
  resume: '', // TODO: put resume.pdf in /public and set this to '/resume.pdf'
  links: {
    github: 'https://github.com/Varshil25',
    linkedin: 'https://www.linkedin.com/in/varshil25/',
  },
}

export const navItems = [
  { to: '/', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/research', label: 'Research' },
  { to: '/resume', label: 'Resume' },
]
