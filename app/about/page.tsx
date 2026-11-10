import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Github, Linkedin, Network, Code2, Telescope, BrainCircuit, MessageCircle, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Kushagra Rai',
  description: 'Meet Kushagra Rai — technology enthusiast, curious learner and the writer behind ByteScope. Connect to discuss technology, AI, engineering and collaboration.',
  openGraph: {
    title: 'About Kushagra Rai | ByteScope',
    description: 'The person and curiosity behind ByteScope.',
    images: ['/images/kushagra-rai.webp'],
  },
};

const interests = [
  { icon: BrainCircuit, title: 'Artificial intelligence', description: 'Exploring machine learning, large language models, generative AI, intelligent agents and the ways AI can augment human creativity and problem-solving.' },
  { icon: Network, title: 'Software & systems', description: 'Understanding how applications, APIs, databases, distributed systems and cloud infrastructure fit together to power reliable digital products.' },
  { icon: Code2, title: 'Building with technology', description: 'Learning by experimenting: turning concepts into projects, exploring tools and frameworks, and sharing the lessons that come from making things.' },
  { icon: Telescope, title: 'The future of technology', description: 'Following emerging ideas across AI, developer tools, automation, computing and the changing relationship between people and technology.' },
];

export default function AboutPage() {
  return (
    <main className="page-shell page-section about-page">
      <div className="about-hero">
        <div className="about-hero-copy">
          <span className="eyebrow">THE PERSON BEHIND BYTESCOPE</span>
          <h1>Curious about technology. <em>Excited by what comes next.</em></h1>
          <p className="about-lede">Hello, I&apos;m Kushagra Rai. I&apos;m passionate about technology and artificial intelligence, and I enjoy exploring how ideas become the products, platforms and systems we use every day.</p>
          <div className="about-socials">
            <a className="button button-primary" href="https://www.linkedin.com/in/kushagra-rai-a62201255/" target="_blank" rel="noreferrer"><Linkedin size={17}/> Connect on LinkedIn <ArrowUpRight size={15}/></a>
            <a className="button button-secondary" href="https://github.com/Kushagrarai09" target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={15}/></a>
          </div>
        </div>
        <div className="about-portrait-wrap">
          <div className="about-portrait-frame">
            <Image src="/images/kushagra-rai.jpg" alt="Portrait of Kushagra Rai" width={474} height={600} priority className="about-portrait"/>
          </div>
          <span className="about-portrait-caption">KUSHAGRA RAI · THE AUTHOR</span>
        </div>
      </div>

      <section className="about-section about-story">
        <div className="about-section-label"><span className="eyebrow">01 / MY STORY</span></div>
        <div className="about-section-content">
          <h2>A genuine curiosity for <em>how things work.</em></h2>
          <p>My interest in technology comes from a simple kind of curiosity: I want to understand what happens behind the screen. What makes an application respond? How do services communicate? How can data become useful information? And how are new technologies changing what people can create?</p>
          <p>That curiosity keeps drawing me towards different parts of the technology landscape — software development, backend systems, web technologies, cloud platforms, automation and artificial intelligence. I like connecting the dots between these areas instead of seeing them as isolated tools.</p>
          <p>I see learning as an ongoing process. Documentation, experiments, projects, technical discussions and the work of other builders all offer opportunities to understand a subject a little better. I value practical exploration alongside fundamentals: not just knowing what a tool does, but understanding why it exists, where it fits and what trade-offs it brings.</p>
        </div>
      </section>

      <section className="about-section about-interests">
        <div className="about-section-label"><span className="eyebrow">02 / WHAT I EXPLORE</span></div>
        <div className="about-section-content">
          <h2>Technology is a <em>connected world.</em></h2>
          <p className="about-section-intro">The fields I follow overlap and influence one another. These are some of the areas that keep me learning and asking new questions.</p>
          <div className="about-interest-grid">
            {interests.map(({ icon: Icon, title, description }, index) => (
              <article className="about-interest-card" key={title}>
                <span className="about-interest-number">0{index + 1}</span>
                <Icon size={22} strokeWidth={1.6}/>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section about-future">
        <div className="about-section-label"><span className="eyebrow">03 / THE ROAD AHEAD</span></div>
        <div className="about-section-content">
          <h2>Why the future of tech <em>matters.</em></h2>
          <p>Technology is entering a period where several important shifts are meeting at once. AI is moving from tools that respond to prompts towards systems that can reason over information and assist with multi-step work. Software is becoming more interconnected, while cloud infrastructure and distributed systems continue to make digital services available at global scale.</p>
          <p>At the same time, the fundamentals still matter. Useful products need thoughtful engineering, secure data practices, accessible experiences, reliable infrastructure and people who understand the problems they are trying to solve. New capabilities create opportunities, but they also bring questions about trust, privacy, safety, accountability and the impact of automation.</p>
          <p>I am especially interested in the space where AI meets practical software: how intelligent features can be designed into real applications, how people can work alongside AI responsibly, and how good engineering can turn promising experiments into dependable products. I believe the most interesting future will be shaped not by one technology alone, but by people who can keep learning, collaborate across disciplines and apply technology with purpose.</p>
        </div>
      </section>

      <section className="about-section about-bytescope">
        <div className="about-section-label"><span className="eyebrow">04 / WHY BYTESCOPE</span></div>
        <div className="about-section-content">
          <h2>A place to explore ideas <em>more deeply.</em></h2>
          <p>ByteScope is my personal technology publication. I created it as a space to explore the ideas, systems and discoveries shaping technology — and to make complicated subjects easier to approach through clear explanations and thoughtful writing.</p>
          <p>You will find articles and notes about AI, software engineering, backend development, web technologies, architecture and the wider technology ecosystem. Some pieces may explain a fundamental concept; others may examine a new tool, a design decision, a project lesson or a question about where the industry is heading.</p>
          <p>The goal is not to pretend to have every answer. It is to stay curious, research carefully, build where possible and share what I learn. I hope ByteScope can also become a starting point for useful conversations with readers who enjoy exploring technology.</p>
          <Link href="/blog" className="text-link about-inline-link">Explore the ByteScope journal <ArrowUpRight size={15}/></Link>
        </div>
      </section>

      <section className="about-connect" id="connect">
        <span className="eyebrow">05 / LET&apos;S CONNECT</span>
        <h2>Good ideas grow through <em>conversation.</em></h2>
        <p>I&apos;m always glad to connect with people who are curious about technology, AI, software and the future of digital products. Reach out to exchange ideas, discuss a technical topic, share project feedback or explore a potential collaboration.</p>
        <div className="about-connect-actions">
          <a className="button button-primary" href="https://www.linkedin.com/in/kushagra-rai-a62201255/" target="_blank" rel="noreferrer"><Linkedin size={17}/> Connect on LinkedIn <ArrowUpRight size={15}/></a>
          <a className="button button-secondary" href="https://github.com/Kushagrarai09" target="_blank" rel="noreferrer"><Github size={17}/> Explore my GitHub <ArrowUpRight size={15}/></a>
          <a className="button button-secondary" href="https://github.com/Kushagrarai09/bytescope" target="_blank" rel="noreferrer"><BookOpen size={17}/> ByteScope repository <ArrowUpRight size={15}/></a>
        </div>
        <p className="about-connect-note"><MessageCircle size={15}/> For professional conversations and collaboration enquiries, LinkedIn is the best place to reach me.</p>
      </section>
      <p className="about-disclaimer">ByteScope reflects my personal interests, learning and perspectives. Technology moves quickly; articles are intended to encourage exploration and discussion, not to present every topic as settled or definitive.</p>
    </main>
  );
}
