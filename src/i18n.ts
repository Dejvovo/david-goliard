export type Lang = 'cs' | 'en'

const t = {
  cs: {
    nav: {
      stack: 'Stack',
      skills: 'Dovednosti',
      experience: 'Zkušenosti',
      contact: 'Kontakt',
      hire: 'Kontaktujte mě',
    },
    hero: {
      eyebrow: 'Sídlím v České republice / Otevřen novým příležitostem',
      line1: 'DAVID GOLIARD',
      line2: 'Full Stack Dev &',
      line3: 'TEAM LEADER',
      bio: 'Stavím škálovatelné webové systémy s Node.js, React, GraphQL a PostgreSQL. Zkušený s vedením týmů, navrhováním architektury a dodáváním produktů od začátku do konce.',
      cta: 'Zobrazit zkušenosti',
    },
    stack: {
      eyebrow: 'Odbornost',
      title: 'Tech Stack',
      areas: [
        {
          title: 'Frontend',
          description: 'React, Next.js, TypeScript, Tailwind CSS, HTML5. Tvorba responzivních a výkonných uživatelských rozhraní s moderními nástroji.',
        },
        {
          title: 'Backend & API',
          description: 'Node.js, GraphQL, REST API, tRPC, Nexus, Prisma, Typeorm. Navrhování robustních a typově bezpečných serverových systémů.',
        },
        {
          title: 'Data & Infrastruktura',
          description: 'PostgreSQL, Docker, Azure, ELK Stack, Elasticsearch. Správa datových pipeline a cloudových nasazení.',
        },
        {
          title: 'Leadership',
          description: 'Tech Lead, Azure DevOps CI/CD, návrh architektury, mentoring, roadmapping a odhad náročnosti.',
        },
      ],
    },
    skills: {
      eyebrow: 'Technologie',
      title: 'Všechny dovednosti',
      groups: [
        {
          label: 'Frontend',
          skills: ['React', 'Next.js', 'TypeScript', 'HTML5', 'Tailwind CSS', 'AngularJs', 'Antd'],
        },
        {
          label: 'Backend & API',
          skills: ['Node.js', 'GraphQL', 'REST API', 'tRPC', 'Nexus', 'Prisma', 'Typeorm', 'C# 6', 'ASP.NET MVC', 'Functional Programming', 'OOP'],
        },
        {
          label: 'Databáze & Vyhledávání',
          skills: ['PostgreSQL', 'OracleDB', 'Elasticsearch', 'ELK Stack'],
        },
        {
          label: 'DevOps & Infrastruktura',
          skills: ['Azure', 'Azure DevOps', 'Docker', 'Vercel', 'Git', 'GitHub', 'Shell Scripts', 'CI/CD Pipelines'],
        },
        {
          label: 'Nástroje',
          skills: ['Visual Studio Code', 'Microsoft Visual Studio', 'JIRA', 'Selenium'],
        },
      ],
    },
    experience: {
      eyebrow: 'Kariéra',
      title: 'Zkušenosti',
      jobs: [
        {
          role: 'Javascript Developer — Tech Lead',
          company: 'Be a Future',
          period: 'Dub 2024 – Led 2026',
          location: 'Praha',
          bullets: [
            'Vedl migraci starších frontendových aplikací do moderních JS frameworků, standardizace workflow a best practices.',
            'Mentoroval tým 1–2 vývojářů.',
            'Navrhoval lepší architekturu pro starší aplikace.',
            'Spravoval build a release pipeline v Azure DevOps.',
          ],
          tags: ['React', 'Next.js', 'Azure DevOps', 'Tech Lead'],
        },
        {
          role: 'Javascript Developer',
          company: 'Be a Future',
          period: 'Zář 2021 – Dub 2024',
          location: 'Praha',
          bullets: [
            'Vyvíjel IT systémy napříč celým stackem: Postgres, REST, GraphQL, React, Next.js, Antd, Typeorm, Prisma.',
            'Spravoval CI/CD pipeline pomocí Azure DevOps.',
          ],
          tags: ['GraphQL', 'React', 'Postgres', 'Prisma'],
        },
        {
          role: 'C# Developer',
          company: 'Unicorn',
          period: 'Lis 2016 – Pro 2020',
          location: 'Praha',
          bullets: [
            'Vyvíjel use case pro velký enterprise systém se stackem ASP.NET MVC a AngularJs.',
            'Řešil bug tikety v systému JIRA.',
            'Psal automatizované testy pomocí Selenium.',
          ],
          tags: ['C#', 'ASP.NET MVC', 'AngularJs', 'Selenium'],
        },
      ],
    },
    contact: {
      eyebrow: 'Kontakt',
      title1: 'SPOJME SE',
      title2: '',
      bio: 'Otevřen novým příležitostem, freelance projektům a spolupráci. Napište mi přes LinkedIn nebo GitHub.',
    },
    footer: {
      copy: '© 2026 DAVID GOLIARD — FULL STACK DEVELOPER',
    },
  },

  en: {
    nav: {
      stack: 'Stack',
      skills: 'Skills',
      experience: 'Experience',
      contact: 'Contact',
      hire: 'Contact me',
    },
    hero: {
      eyebrow: 'Based in Czech Republic / Open to New Opportunities',
      line1: 'DAVID GOLIARD',
      line2: 'Full Stack Dev &',
      line3: 'TEAM LEADER',
      bio: 'Building scalable web systems with Node.js, React, GraphQL and PostgreSQL. Experienced in leading teams, designing architecture and shipping products end-to-end.',
      cta: 'View Experience',
    },
    stack: {
      eyebrow: 'Expertise',
      title: 'Tech Stack',
      areas: [
        {
          title: 'Frontend',
          description: 'React, Next.js, TypeScript, Tailwind CSS, HTML5. Building responsive, performant user interfaces with modern tooling.',
        },
        {
          title: 'Backend & API',
          description: 'Node.js, GraphQL, REST API, tRPC, Nexus, Prisma, Typeorm. Designing robust, type-safe server-side systems.',
        },
        {
          title: 'Data & Infra',
          description: 'PostgreSQL, Docker, Azure, ELK Stack, Elasticsearch. Managing data pipelines and cloud deployments.',
        },
        {
          title: 'Leadership',
          description: 'Tech Lead, Azure DevOps CI/CD, architecture design, mentoring, roadmapping and delivery estimation.',
        },
      ],
    },
    skills: {
      eyebrow: 'Technologies',
      title: 'All Skills',
      groups: [
        {
          label: 'Frontend',
          skills: ['React', 'Next.js', 'TypeScript', 'HTML5', 'Tailwind CSS', 'AngularJs', 'Antd'],
        },
        {
          label: 'Backend & API',
          skills: ['Node.js', 'GraphQL', 'REST API', 'tRPC', 'Nexus', 'Prisma', 'Typeorm', 'C# 6', 'ASP.NET MVC', 'Functional Programming', 'OOP'],
        },
        {
          label: 'Databases & Search',
          skills: ['PostgreSQL', 'OracleDB', 'Elasticsearch', 'ELK Stack'],
        },
        {
          label: 'DevOps & Infrastructure',
          skills: ['Azure', 'Azure DevOps', 'Docker', 'Vercel', 'Git', 'GitHub', 'Shell Scripts', 'CI/CD Pipelines'],
        },
        {
          label: 'Tools',
          skills: ['Visual Studio Code', 'Microsoft Visual Studio', 'JIRA', 'Selenium'],
        },
      ],
    },
    experience: {
      eyebrow: 'Career',
      title: 'Experience',
      jobs: [
        {
          role: 'Javascript Developer — Tech Lead',
          company: 'Be a Future',
          period: 'Apr 2024 – Jan 2026',
          location: 'Prague',
          bullets: [
            'Led migration of legacy frontend apps to modern JS frameworks, standardizing workflows and best practices.',
            'Mentored a team of 1–2 developers.',
            'Designed improved architecture for legacy applications.',
            'Managed Azure DevOps build and release pipelines.',
          ],
          tags: ['React', 'Next.js', 'Azure DevOps', 'Tech Lead'],
        },
        {
          role: 'Javascript Developer',
          company: 'Be a Future',
          period: 'Sep 2021 – Apr 2024',
          location: 'Prague',
          bullets: [
            'Built IT systems across the full stack: Postgres, REST, GraphQL, React, Next.js, Antd, Typeorm, Prisma.',
            'Managed CI/CD pipelines with Azure DevOps.',
          ],
          tags: ['GraphQL', 'React', 'Postgres', 'Prisma'],
        },
        {
          role: 'C# Developer',
          company: 'Unicorn',
          period: 'Nov 2016 – Dec 2020',
          location: 'Prague',
          bullets: [
            'Developed enterprise use cases with ASP.NET MVC and AngularJs.',
            'Resolved bug tickets tracked in JIRA.',
            'Wrote automated tests using Selenium.',
          ],
          tags: ['C#', 'ASP.NET MVC', 'AngularJs', 'Selenium'],
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title1: 'LET\'S',
      title2: 'CONNECT',
      bio: 'Open to new opportunities, freelance projects, and collaborations. Reach out via LinkedIn or GitHub.',
    },
    footer: {
      copy: '© 2026 DAVID GOLIARD — FULL STACK DEVELOPER',
    },
  },
}

export default t
