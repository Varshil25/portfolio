// Each project: title, meta image, what makes it unique, tech stack.
// Optional extras: summary, stats, architecture (drawn as a diagram) and decisions.
// Images can be a full URL or a file in /public/images, e.g. '/images/my-project.png'.
export const projects = [
  {
    title: 'Hemis-Kitchen',
    summary: 'Food ordering and catering platform for a home-style Indian kitchen serving Oshawa, Toronto and the GTA.',
    image: 'https://iili.io/CUHu0TQ.png',
    unique:
      'It is a live business, not a demo. Customers order tiffins and catering on the site, staff run everything from an admin panel, and orders flow straight into the ERP. I built and deployed it end to end, then moved the whole project to spec-driven development so new features are quick and safe to add.',
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'AWS S3', 'DigitalOcean', 'Odoo ERP', 'Google Maps API', 'JWT', 'CI/CD', 'Spec-Driven Development'],
    links: { live: 'https://itshemiskitchen.com/', code: '' },
    stats: [
      { value: '600+', label: 'registered users' },
      { value: '100', label: 'active paying customers' },
      { value: '$10K+', label: 'paid through the platform every month' },
    ],
    architecture: {
      layers: [
        { name: 'Frontend', tech: 'React', nodes: ['Customer ordering site', 'Admin panel'] },
        { name: 'Backend', tech: 'Node.js, Express', nodes: ['REST API with JWT auth'] },
        { name: 'Data and services', tech: '', nodes: ['PostgreSQL', 'AWS S3', 'Odoo ERP', 'Google Maps API'] },
      ],
      note: 'Deployed on DigitalOcean through a CI/CD pipeline.',
    },
    decisions: [
      { title: 'One API, two frontends', detail: 'The customer site and the admin panel share a single REST API, so business rules live in one place.' },
      { title: 'ERP as the back office', detail: 'Orders and catering requests sync to Odoo ERP automatically instead of being re-entered by hand.' },
      { title: 'Delivery built in', detail: 'Google Maps API handles delivery routing as part of the order flow.' },
      { title: 'Spec first, then code', detail: 'After launch I moved the project to spec-driven development: every feature starts as a written spec and test cases.' },
    ],
  },
]
