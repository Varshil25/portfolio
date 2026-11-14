// Each project needs: slug (used in the URL), title, category, tagline (one line for the
// card), unique (what makes it different) and stack. Everything else is optional:
// summary, image, links, stats, architecture (drawn as a diagram) and decisions.
// The first project in this list is shown as the large featured one.
// Images can be a full URL or a file in /public/images, e.g. '/images/my-project.png'.
export const projects = [
  {
    slug: 'hemis-kitchen',
    title: 'Hemis-Kitchen',
    category: 'Full-stack product',
    tagline: 'A live food ordering and catering platform with 600+ users, an admin panel and ERP integration.',
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
  {
    slug: 'deep-equilibrium-models',
    title: 'Deep Equilibrium Models from Scratch',
    category: 'Machine learning',
    tagline: 'A deep equilibrium model in NumPy with a hand-derived backward pass, reaching 97.5% on MNIST.',
    summary: 'Final project for a graduate Deep Learning course: a deep equilibrium model (DEQ), where the forward pass solves for a fixed point instead of stacking layers.',
    image: '',
    unique:
      'Nothing is borrowed from an autodiff library. I wrote the fixed-point forward solver and the implicit-differentiation backward pass by hand, then proved the gradients correct by checking them against numerical differences.',
    stack: ['Python', 'NumPy', 'Implicit differentiation', 'Anderson acceleration', 'LaTeX'],
    links: { live: '', code: 'https://github.com/Varshil25/deq-final-project' },
    stats: [
      { value: '97.5%', label: 'MNIST test accuracy after 5 epochs' },
      { value: '1.3e-06', label: 'worst gradient error against numerical checks' },
      { value: '30%', label: 'fewer solver iterations with Anderson acceleration' },
    ],
    decisions: [
      { title: 'Verify before training', detail: 'Every hand-derived gradient is compared with central differences, so training bugs cannot hide in the math.' },
      { title: 'Measure the speed-up honestly', detail: 'Anderson acceleration cut iterations by about 30% but took roughly twice the wall-clock time at this scale, and the report says so.' },
    ],
  },
  {
    slug: 'amma-grocery',
    title: 'Amma Grocery',
    category: 'Business website',
    tagline: 'Website for an Indian grocery store in Malvern, Pennsylvania.',
    summary: 'Storefront website for a local Indian grocery in Malvern, PA that sells spices, fresh produce and traditional ingredients.',
    image: 'https://varshil25.github.io/amma-indian-grocery-dev/preview-image.jpg',
    unique:
      'Built for a real local shop and set up to be found: page titles, descriptions and social preview tags are written for local search, so the store shows up well when someone looks for Indian groceries nearby or shares the link.', // TODO: confirm and add what else sets it apart
    stack: ['GitHub Pages', 'SEO'], // TODO: add the languages and frameworks used
    links: { live: 'https://varshil25.github.io/amma-indian-grocery-dev/', code: '' },
  },
  {
    slug: 'tacony-smoke',
    title: 'Tacony Smoke',
    category: 'Business website',
    tagline: 'Website for a smoke shop with two stores in Northeast Philadelphia.',
    summary: 'Website for Tacony Smoke, a smoke shop with two stores in the Tacony neighborhood of Northeast Philadelphia.',
    image: '',
    unique:
      'One site covers both store locations, and the 21+ valid-ID requirement is stated up front.', // TODO: confirm and add what else sets it apart
    stack: ['GitHub Pages'], // TODO: add the languages and frameworks used
    links: { live: 'https://varshil25.github.io/smoke-shop/', code: '' },
  },
]
