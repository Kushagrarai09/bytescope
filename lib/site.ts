export const siteConfig = { name: 'ByteScope', tagline: 'Technology, Beyond the Surface.', description: 'Ideas, engineering, discoveries and perspectives from the world of technology.', url: process.env.NEXT_PUBLIC_SITE_URL || 'https://bytescope.vercel.app', author: 'Kushagra Rai', nav: [{ label: 'Home', href: '/' }, { label: 'Explore', href: '/explore' }, { label: 'Categories', href: '/categories' }, { label: 'Projects', href: '/projects' }, { label: 'About', href: '/about' }] };
export const categories = [
  { name: 'AI & Machine Learning', slug: 'ai-machine-learning', description: 'LLMs, machine learning, RAG, agents and practical AI.' },
  { name: 'Software Engineering', slug: 'software-engineering', description: 'Architecture, APIs, testing, reliability and engineering craft.' },
  { name: 'Web Development', slug: 'web-development', description: 'Frontend, backend, full-stack and the modern web.' },
  { name: 'Programming', slug: 'programming', description: 'Languages, frameworks, patterns and problem solving.' },
  { name: 'Cloud & DevOps', slug: 'cloud-devops', description: 'Cloud infrastructure, containers, CI/CD and operations.' },
  { name: 'System Design', slug: 'system-design', description: 'Scalability, distributed systems, data and architecture.' },
  { name: 'Cybersecurity', slug: 'cybersecurity', description: 'Security fundamentals, privacy and safer software.' },
  { name: 'Tech & Innovation', slug: 'tech-innovation', description: 'Emerging ideas, tools, trends and thoughtful opinions.' },
];
