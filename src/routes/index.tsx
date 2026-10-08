import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kwandile Felicity Mashego — Hospitality, Digital & AI Portfolio" },
      { name: "description", content: "Personal portfolio of Kwandile Felicity Mashego: hospitality, ICDL computer skills and Google AI certificates." },
      { property: "og:title", content: "Kwandile Felicity Mashego — Portfolio" },
      { property: "og:description", content: "Hospitality, digital skills and AI professional." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const quals = [
  { title: "Google AI Certificates", text: "AI fundamentals, responsible AI, practical AI tools, digital productivity and modern AI technologies." },
  { title: "Matric / National Senior Certificate", text: "Grade 12 foundation in academic knowledge, communication, workplace readiness and problem-solving." },
  { title: "Hospitality Qualification", text: "Hospitality operations, guest relations, food & beverage service and professional service standards." },
  { title: "ICDL Certification", text: "Computer fundamentals, word processing, spreadsheets, presentations, online essentials and document preparation." },
];

const skills = {
  "Digital & Technology": ["AI tools", "Computer literacy", "Microsoft Office", "Data entry", "Spreadsheets", "Presentations", "Online research", "Document preparation"],
  Hospitality: ["Customer service", "Guest relations", "Food & beverage", "Service standards", "Hospitality operations", "Teamwork"],
  Professional: ["Communication", "Time management", "Organisation", "Problem-solving", "Adaptability", "Attention to detail", "Administration", "Reliability"],
};

const strengths = [
  ["Hardworking", "Committed to completing tasks responsibly."],
  ["Adaptable", "Willing to learn new systems and technologies."],
  ["Customer-focused", "Treats every customer with respect."],
  ["Organised", "Plans and manages tasks effectively."],
  ["Team-oriented", "Values collaboration with others."],
  ["Technology-minded", "Uses digital tools and AI to work smarter."],
];

const objectives = [
  "Continuously improve my professional and digital skills",
  "Gain practical workplace experience",
  "Provide excellent customer service",
  "Use technology and AI to improve productivity",
  "Develop strong administrative abilities",
  "Grow into greater responsibilities over time",
];

function Section({ id, label, title, children }: { id: string; label: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-6 py-20 border-t">
      <p className="text-xs uppercase tracking-[0.25em] text-accent font-semibold">{label}</p>
      <h2 className="mt-3 text-4xl md:text-5xl text-primary">{title}</h2>
      <div className="mt-10">{children}</div>
    </section>
  );
}

function Index() {
  return (
    <main>
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6 text-sm">
        <span className="font-display text-lg text-primary">K. F. Mashego</span>
        <div className="hidden gap-6 text-muted-foreground md:flex">
          <a href="#about" className="hover:text-primary">About</a>
          <a href="#education" className="hover:text-primary">Education</a>
          <a href="#skills" className="hover:text-primary">Skills</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </div>
      </nav>

      <header className="mx-auto max-w-5xl px-6 pt-16 pb-24">
        <p className="text-sm uppercase tracking-[0.3em] text-accent font-semibold">Personal Portfolio</p>
        <h1 className="mt-6 text-6xl md:text-8xl leading-[0.95] text-primary">
          Kwandile<br /><em className="text-accent">Felicity</em> Mashego
        </h1>
        <p className="mt-8 max-w-xl text-lg text-muted-foreground">
          Hospitality, Digital Skills & AI Professional — combining warm customer service with modern technology.
        </p>
        <p className="mt-10 font-display italic text-xl text-foreground">Learning • Growing • Serving • Innovating</p>
        <a href="#contact" className="mt-10 inline-block rounded-full bg-primary px-7 py-3 text-primary-foreground font-medium hover:opacity-90">Get in touch</a>
      </header>

      <Section id="about" label="01 — Profile" title="About me">
        <div className="grid gap-8 md:grid-cols-2 text-lg leading-relaxed">
          <p>I am a motivated, hardworking, and adaptable individual with a combination of academic, hospitality, computer, and Artificial Intelligence skills, with knowledge in customer service, communication, administration and the practical use of AI tools.</p>
          <p className="text-muted-foreground">I am a responsible team player with good communication skills, attention to detail, and a willingness to learn and grow in a professional environment.</p>
        </div>
        <div className="mt-12 rounded-xl bg-primary p-8 text-primary-foreground">
          <h3 className="text-2xl">Career objective</h3>
          <p className="mt-3 opacity-90">To build a successful career by combining my hospitality experience, computer literacy, digital skills, and AI knowledge in a professional working environment.</p>
          <ul className="mt-6 grid gap-2 md:grid-cols-2 text-sm opacity-90">
            {objectives.map((o) => <li key={o}>— {o}</li>)}
          </ul>
        </div>
      </Section>

      <Section id="education" label="02 — Qualifications" title="Education">
        <div className="grid gap-5 md:grid-cols-2">
          {quals.map((q, i) => (
            <div key={q.title} className="rounded-xl border bg-card p-7">
              <span className="font-display text-3xl text-accent">0{i + 1}</span>
              <h3 className="mt-3 text-2xl text-primary">{q.title}</h3>
              <p className="mt-2 text-muted-foreground">{q.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="skills" label="03 — Abilities" title="Key skills">
        <div className="grid gap-10 md:grid-cols-3">
          {Object.entries(skills).map(([group, list]) => (
            <div key={group}>
              <h3 className="text-xl text-primary">{group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {list.map((s) => <span key={s} className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
        <h3 className="mt-16 text-2xl text-primary">Personal strengths</h3>
        <div className="mt-6 grid gap-x-10 gap-y-6 md:grid-cols-3">
          {strengths.map(([t, d]) => (
            <div key={t} className="border-l-2 border-accent pl-4">
              <p className="font-semibold">{t}</p>
              <p className="text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="vision" label="04 — Growth" title="Career vision">
        <p className="max-w-3xl font-display text-2xl md:text-3xl leading-snug">
          To become a confident professional who combines hospitality, customer service, digital technology, administration and Artificial Intelligence to create value in the workplace.
        </p>
      </Section>

      <Section id="contact" label="05 — Contact" title="Let's connect">
        <div className="grid gap-6 md:grid-cols-2">
          <a href="tel:0648408477" className="rounded-xl border bg-card p-7 hover:border-primary">
            <p className="text-sm text-muted-foreground">Phone</p>
            <p className="mt-1 font-display text-3xl text-primary">064 840 8477</p>
          </a>
          <div className="rounded-xl border bg-card p-7">
            <p className="text-sm text-muted-foreground">Location</p>
            <p className="mt-1 font-display text-3xl text-primary">Shabalala Trust</p>
          </div>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">Open to hospitality, administrative, customer service, internship and learnership opportunities.</p>
      </Section>

      <footer className="border-t py-10 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} Kwandile Felicity Mashego</footer>
    </main>
  );
}
