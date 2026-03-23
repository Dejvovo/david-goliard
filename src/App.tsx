import { useState } from 'react'
import t, { type Lang } from './i18n'

function Icon({ name, className = '' }: { name: string; className?: string }) {
  return <span className={`material-symbols-outlined ${className}`}>{name}</span>
}

function LinkedInIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function GitHubIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function scrollTo(id: string) {
  return (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }
}

function LangToggle({ lang, onToggle }: { lang: Lang; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-0 font-headline font-bold text-xs tracking-widest uppercase border border-outline-variant/40 overflow-hidden"
      title={lang === 'cs' ? 'Switch to English' : 'Přepnout do češtiny'}
    >
      <span className={`px-3 py-2 transition-colors duration-200 ${lang === 'cs' ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:text-on-surface'}`}>
        CZ
      </span>
      <span className={`px-3 py-2 transition-colors duration-200 ${lang === 'en' ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:text-on-surface'}`}>
        EN
      </span>
    </button>
  )
}

function NavBar({ lang, onToggleLang, tr }: { lang: Lang; onToggleLang: () => void; tr: typeof t.cs }) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-xl">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-12 py-6">
        <div className="text-xl font-black tracking-tighter text-neutral-50 font-headline uppercase">
          DAVID GOLIARD
        </div>
        <div className="hidden md:flex items-center gap-10">
          <a href="#stack" onClick={scrollTo('stack')} className="text-on-surface-variant font-medium hover:text-on-surface transition-colors duration-300 font-headline tracking-tight uppercase text-sm">
            {tr.nav.stack}
          </a>
          <a href="#skills" onClick={scrollTo('skills')} className="text-on-surface-variant font-medium hover:text-on-surface transition-colors duration-300 font-headline tracking-tight uppercase text-sm">
            {tr.nav.skills}
          </a>
          <a href="#experience" onClick={scrollTo('experience')} className="text-on-surface-variant font-medium hover:text-on-surface transition-colors duration-300 font-headline tracking-tight uppercase text-sm">
            {tr.nav.experience}
          </a>
          <a href="#contact" onClick={scrollTo('contact')} className="text-on-surface-variant font-medium hover:text-on-surface transition-colors duration-300 font-headline tracking-tight uppercase text-sm">
            {tr.nav.contact}
          </a>
          <LangToggle lang={lang} onToggle={onToggleLang} />
        </div>
        <a href="#contact" onClick={scrollTo('contact')} className="bg-primary text-on-primary-container px-6 py-2.5 font-headline tracking-tight uppercase text-sm font-bold active:scale-90 transition-transform">
          {tr.nav.hire}
        </a>
      </div>
    </nav>
  )
}

function HeroSection({ tr }: { tr: typeof t.cs }) {
  return (
    <section className="min-h-screen flex items-center pt-24 px-12 max-w-7xl mx-auto relative overflow-hidden">
      <div className="grid grid-cols-12 gap-8 items-center w-full">
        <div className="col-span-12 lg:col-span-7 z-10">
          <p className="font-label text-primary uppercase tracking-[0.2em] text-xs mb-6">
            {tr.hero.eyebrow}
          </p>
          <h1 className="font-headline text-[clamp(3.5rem,8vw,5.5rem)] font-extrabold leading-[0.9] tracking-tighter text-on-surface mb-8">
            {tr.hero.line1}
            <br />
            <span className="text-on-surface-variant font-light italic">{tr.hero.line2}</span>
            <br />
            {tr.hero.line3}
          </h1>
          <p className="text-on-surface-variant font-light text-base leading-relaxed max-w-lg mb-10">
            {tr.hero.bio}
          </p>
          <div className="flex items-center gap-10 mt-4">
            <a href="#experience" onClick={scrollTo('experience')} className="group flex items-center gap-4 text-primary font-bold tracking-widest uppercase text-xs">
              <span className="w-12 h-[1px] bg-primary group-hover:w-20 transition-all duration-500" />
              {tr.hero.cta}
            </a>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/in/david-goliard-a3581812a"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface-variant transition-colors duration-300"
                title="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/Dejvovo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface-variant transition-colors duration-300"
                title="GitHub"
              >
                <GitHubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 relative">
          <div className="aspect-[4/5] bg-surface-container-low overflow-hidden relative">
            <img
              src={`${import.meta.env.BASE_URL}portrait.jpg`}
              alt="Portrait of David Goliard"
              className="w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-primary/20 -z-10" />
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-[50vw] h-[512px] bg-primary/5 blur-[120px] rounded-full -z-10" />
    </section>
  )
}

const ICONS = ['web', 'dns', 'storage', 'groups']

function StackSection({ tr }: { tr: typeof t.cs }) {
  return (
    <section id="stack" className="py-32 px-12 max-w-7xl mx-auto bg-surface">
      <div className="mb-24">
        <p className="font-label text-on-secondary-fixed-variant uppercase tracking-widest text-xs mb-4">{tr.stack.eyebrow}</p>
        <h2 className="font-headline text-4xl font-bold tracking-tight text-on-surface uppercase">{tr.stack.title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
        {tr.stack.areas.map((a, i) => (
          <div key={a.title} className="bg-surface-container-low p-10 hover:bg-surface-container transition-colors duration-500 group">
            <Icon name={ICONS[i]} className="text-primary text-3xl mb-12 block group-hover:scale-110 transition-transform" />
            <h3 className="font-headline text-lg font-bold text-on-surface mb-4 uppercase">{a.title}</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed font-light">{a.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function SkillsSection({ tr }: { tr: typeof t.cs }) {
  return (
    <section id="skills" className="py-32 px-12 max-w-7xl mx-auto bg-surface-container-low">
      <div className="mb-24">
        <p className="font-label text-on-secondary-fixed-variant uppercase tracking-widest text-xs mb-4">{tr.skills.eyebrow}</p>
        <h2 className="font-headline text-4xl font-bold tracking-tight text-on-surface uppercase">{tr.skills.title}</h2>
      </div>
      <div className="space-y-16">
        {tr.skills.groups.map((g) => (
          <div key={g.label}>
            <p className="font-label text-primary text-[10px] tracking-[0.3em] uppercase mb-8">{g.label}</p>
            <div className="flex flex-wrap gap-3">
              {g.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2.5 bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface-variant text-xs font-label uppercase tracking-widest transition-colors duration-300 cursor-default rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function ExperienceSection({ tr }: { tr: typeof t.cs }) {
  return (
    <section id="experience" className="py-32 px-12 max-w-7xl mx-auto bg-surface">
      <div className="mb-24">
        <p className="font-label text-on-secondary-fixed-variant uppercase tracking-widest text-xs mb-4">{tr.experience.eyebrow}</p>
        <h2 className="font-headline text-4xl font-bold tracking-tight text-on-surface uppercase">{tr.experience.title}</h2>
      </div>
      <div className="space-y-2">
        {tr.experience.jobs.map((job) => (
          <div key={job.period} className="bg-surface-container-low p-10 hover:bg-surface-container transition-colors duration-500">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-3">
                <p className="font-label text-primary text-[10px] tracking-[0.2em] uppercase mb-1">{job.period}</p>
                <p className="font-label text-on-secondary-fixed-variant text-[10px] uppercase tracking-widest">{job.location}</p>
              </div>
              <div className="col-span-12 lg:col-span-9">
                <h3 className="font-headline text-xl font-extrabold text-on-surface mb-1 uppercase tracking-tight">{job.role}</h3>
                <p className="font-headline text-sm text-on-surface-variant mb-6 font-light">{job.company}</p>
                <ul className="space-y-2 mb-8">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-on-surface-variant text-sm font-light leading-relaxed">
                      <span className="text-primary mt-1 text-xs">—</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  {job.tags.map((tag) => (
                    <span key={tag} className="px-4 py-1.5 rounded-full border border-outline-variant/30 text-[10px] font-label text-on-surface-variant uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function ContactSection({ tr }: { tr: typeof t.cs }) {
  const links = [
    {
      label: 'LinkedIn',
      handle: 'David Goliard',
      href: 'https://linkedin.com/in/david-goliard-a3581812a',
      SvgIcon: LinkedInIcon,
    },
    {
      label: 'GitHub',
      handle: 'Dejvovo',
      href: 'https://github.com/Dejvovo',
      SvgIcon: GitHubIcon,
    },
  ]
  return (
    <section id="contact" className="py-32 px-12 max-w-7xl mx-auto bg-surface-container-low">
      <div className="max-w-2xl">
        <p className="font-label text-primary uppercase tracking-widest text-xs mb-4">{tr.contact.eyebrow}</p>
        <h2 className="font-headline text-5xl font-extrabold tracking-tighter text-on-surface mb-12 uppercase leading-tight">
          {tr.contact.title1}{tr.contact.title2 && <><br />{tr.contact.title2}</>}
        </h2>
        <p className="text-on-surface-variant font-light text-lg mb-16 leading-relaxed">{tr.contact.bio}</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-6 bg-surface-container-high hover:bg-primary transition-colors duration-300 px-8 py-6 flex-1"
          >
            <span className="w-12 h-12 flex items-center justify-center border border-outline-variant/40 group-hover:border-on-primary/30 transition-colors duration-300 shrink-0">
              <l.SvgIcon className="w-5 h-5 text-primary group-hover:text-on-primary transition-colors duration-300" />
            </span>
            <div>
              <p className="font-label text-[10px] text-on-surface-variant group-hover:text-on-primary/70 uppercase tracking-widest mb-1 transition-colors duration-300">{l.label}</p>
              <p className="font-headline font-bold text-on-surface group-hover:text-on-primary text-lg transition-colors duration-300">{l.handle}</p>
            </div>
            <Icon name="arrow_forward" className="ml-auto text-primary group-hover:text-on-primary group-hover:translate-x-1 transition-all duration-300" />
          </a>
        ))}
      </div>
    </section>
  )
}

function Footer({ tr }: { tr: typeof t.cs }) {
  const links = [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/david-goliard-a3581812a' },
    { label: 'GitHub', href: 'https://github.com/Dejvovo' },
  ]
  return (
    <footer className="bg-neutral-950 w-full py-20 mt-20">
      <div className="max-w-7xl mx-auto px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-lg font-black text-neutral-50 font-headline uppercase tracking-tighter">DAVID GOLIARD</div>
        <div className="flex flex-wrap gap-8 items-center justify-center">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="font-headline text-xs tracking-widest uppercase text-neutral-500 hover:text-primary transition-colors duration-300">
              {l.label}
            </a>
          ))}
        </div>
        <div className="font-headline text-xs tracking-widest uppercase text-neutral-500 opacity-80">{tr.footer.copy}</div>
      </div>
    </footer>
  )
}

export default function App() {
  const [lang, setLang] = useState<Lang>(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('lang') === 'en' ? 'en' : 'cs'
  })

  const toggleLang = () => {
    const next: Lang = lang === 'cs' ? 'en' : 'cs'
    setLang(next)
    window.history.pushState({}, '', next === 'en' ? '?lang=en' : '/')
  }

  const tr = t[lang]

  return (
    <div className="bg-surface text-on-surface min-h-screen font-body">
      <NavBar lang={lang} onToggleLang={toggleLang} tr={tr} />
      <main>
        <HeroSection tr={tr} />
        <StackSection tr={tr} />
        <SkillsSection tr={tr} />
        <ExperienceSection tr={tr} />
        <ContactSection tr={tr} />
      </main>
      <Footer tr={tr} />
    </div>
  )
}
