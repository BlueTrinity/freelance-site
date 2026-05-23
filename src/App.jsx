import { useEffect, useMemo, useRef, useState } from "react";

const profile = {
  brand: "Freelance IT",
  email: "ramtin.khoshniat@outlook.com",
};

const content = {
  fr: {
    locale: "fr-BE",
    languageName: "Français",
    seo: {
      title: "Développeur indépendant informatique | Sites web, applications métier et bases de données",
      description:
        "Développeur indépendant pour sites React, applications Windows, automatisations Node.js et bases de données SQL fiables pour indépendants, PME et commerces.",
      ogTitle: "Développeur indépendant informatique",
      ogDescription:
        "Sites web professionnels, applications métier Windows, automatisations et bases de données fiables pour indépendants, PME et commerces.",
    },
    brandTagline: "Développeur indépendant",
    location: "Belgique et France, à distance",
    availability: "Soirs, week-ends et créneaux planifiés",
    navigation: [
      { label: "Services", href: "#services" },
      { label: "Solutions", href: "#solutions" },
      { label: "Offres", href: "#offers" },
      { label: "Méthode", href: "#process" },
      { label: "Contact", href: "#contact" },
    ],
    languageLabel: "Choisir la langue",
    menuLabel: "Ouvrir le menu",
    closeMenuLabel: "Fermer le menu",
    backHomeLabel: "Retour à l'accueil",
    hero: {
      eyebrow: "Sites web · Applications Windows · Bases de données",
      title: "Développeur indépendant pour des outils numériques clairs et fiables",
      lead:
        "J'aide les indépendants, commerces et PME à transformer leurs besoins métier en sites professionnels, outils internes, automatisations et bases de données bien structurées.",
      primaryCta: "Demander un devis",
      secondaryCta: "Voir les services",
      trustLabel: "Points forts",
      stats: [
        { value: "48h", label: "pour cadrer le projet" },
        { value: "3 axes", label: "web, desktop et data" },
        { value: "1 contact", label: "du brief à la mise en ligne" },
      ],
    },
    intro: {
      kicker: "Pour indépendants, commerces et PME",
      title: "Un partenaire technique quand vous avez besoin d'avancer concrètement.",
      text:
        "Votre site doit inspirer confiance. Vos fichiers Excel débordent. Votre application interne ralentit l'équipe. Je vous aide à passer d'une idée floue à une solution utile, maintenable et adaptée à votre budget.",
    },
    servicesHeading: {
      kicker: "Services",
      title: "Ce que je peux construire pour vous",
      text: "Des prestations pensées pour attirer de meilleurs clients, gagner du temps et sécuriser vos données.",
    },
    services: [
      {
        icon: "web",
        title: "Sites web professionnels",
        text:
          "Sites vitrines, portfolios, pages de vente et interfaces React rapides, responsives et orientées conversion.",
        points: ["React, JavaScript, HTML, CSS", "SEO local et performance", "Formulaires, analytics, intégrations"],
      },
      {
        icon: "app",
        tone: "amber",
        title: "Applications métier Windows",
        text:
          "Outils internes simples et efficaces pour remplacer des fichiers manuels ou moderniser une application existante.",
        points: ["WinForms en C# ou VB.NET", "Stock, clients, factures, planning", "Maintenance et évolution d'applications"],
      },
      {
        icon: "data",
        tone: "coral",
        title: "Bases de données et reporting",
        text:
          "Modélisation, requêtes, migration, optimisation et connexion de vos outils à une base de données solide.",
        points: ["SQL Server, MySQL, PostgreSQL", "Tableaux de bord et exports", "Sauvegardes et nettoyage des données"],
      },
      {
        icon: "automation",
        tone: "slate",
        title: "Automatisation et API",
        text:
          "Scripts Node.js, connexions entre outils, import/export de données et petites API pour fluidifier vos opérations.",
        points: ["Node.js et services web", "Traitement CSV/Excel", "Connexion CRM, formulaires, emails"],
      },
    ],
    solutions: {
      kicker: "Résultats clients",
      title: "Des solutions orientées activité, pas seulement du code.",
      text: "L'objectif est simple: rendre votre activité plus visible, plus crédible et plus facile à gérer.",
      outcomes: [
        {
          title: "Être trouvé par de meilleurs clients",
          text: "Une présence web claire avec messages, appels à l'action et structure SEO locale.",
        },
        {
          title: "Réduire les tâches répétitives",
          text: "Des formulaires, exports, automatisations et écrans métier qui évitent les doubles encodages.",
        },
        {
          title: "Décider avec des données propres",
          text: "Des bases structurées et des tableaux utiles pour suivre clients, ventes, stocks ou interventions.",
        },
      ],
    },
    stack: {
      kicker: "Technologies",
      title: "Une stack pragmatique pour livrer vite et bien",
    },
    technologies: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Node.js",
      "C#",
      "VB.NET",
      "WinForms",
      "SQL Server",
      "MySQL",
      "PostgreSQL",
      "Git",
    ],
    offersHeading: {
      kicker: "Offres",
      title: "Des formules faciles à comprendre",
      text: "Chaque projet reçoit un devis clair après un court échange sur vos objectifs, vos délais et vos contraintes.",
    },
    offers: [
      {
        label: "Visibilité",
        title: "Site vitrine",
        price: "Sur devis clair",
        points: ["Design responsive", "Pages services, contact et mentions", "Référencement local de base", "Mise en ligne accompagnée"],
        cta: "Parler de mon site",
      },
      {
        label: "Croissance",
        title: "Site + conversion",
        price: "Le plus demandé",
        points: ["Structure orientée prospects", "Formulaire de demande qualifiée", "Suivi analytics et événements", "Optimisation performance et mobile"],
        cta: "Demander un devis",
        featured: true,
      },
      {
        label: "Métier",
        title: "Application sur mesure",
        price: "Selon besoin",
        points: ["Application WinForms ou outil web", "Connexion base de données", "Import, export, rapports", "Maintenance évolutive"],
        cta: "Décrire mon besoin",
      },
    ],
    process: {
      kicker: "Méthode",
      title: "Un déroulé simple, même si votre idée n'est pas encore parfaitement définie.",
      steps: [
        {
          title: "Diagnostic",
          text: "On clarifie le problème, les utilisateurs, les données, les priorités et le budget réaliste.",
        },
        {
          title: "Proposition",
          text: "Vous recevez un périmètre, une estimation, un planning et les éléments nécessaires pour décider.",
        },
        {
          title: "Construction",
          text: "Je développe par étapes visibles, avec retours réguliers et corrections avant livraison.",
        },
        {
          title: "Lancement",
          text: "Mise en ligne, installation, documentation légère et accompagnement pour prendre l'outil en main.",
        },
      ],
    },
    brief: {
      kicker: "Demande rapide",
      title: "Préparez votre brief en 30 secondes",
      text: "Sélectionnez ce dont vous avez besoin et le bouton contact préparera un message clair à envoyer.",
      projectLabel: "Type de projet",
      timelineLabel: "Délai souhaité",
      goalLabel: "Priorité principale",
      cta: "Créer mon message",
      subjectPrefix: "Demande de devis",
      messageIntro: "Bonjour,\n\nJe souhaite discuter d'un projet.",
      detailsPrompt: "Voici quelques détails supplémentaires:",
      thanks: "Merci,",
    },
    projectTypes: [
      "Site vitrine professionnel",
      "Site React ou interface web",
      "Application WinForms C# / VB.NET",
      "Base de données SQL",
      "Automatisation Node.js",
    ],
    timelines: ["Dans le mois", "Dans les 2 à 3 mois", "Le plus vite possible", "Je veux d'abord cadrer l'idée"],
    goals: ["Attirer plus de clients", "Gagner du temps", "Fiabiliser les données", "Moderniser un outil existant"],
    faq: {
      label: "Questions fréquentes",
      kicker: "FAQ",
      title: "Questions fréquentes",
      items: [
        {
          question: "Travaillez-vous avec de petites structures?",
          answer:
            "Oui. Le site est pensé pour indépendants, commerces, petites entreprises et équipes qui veulent avancer sans lourdeur.",
        },
        {
          question: "Pouvez-vous reprendre un projet existant?",
          answer:
            "Oui, après un diagnostic du code, de la base de données et des priorités. Je peux corriger, stabiliser ou faire évoluer.",
        },
        {
          question: "Est-ce possible de commencer petit?",
          answer:
            "Oui. On peut démarrer par une première version utile, puis ajouter des fonctionnalités quand votre besoin est validé.",
        },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Parlez-moi de votre projet.",
      text:
        "Envoyez quelques lignes sur votre activité, votre besoin et votre délai. Je vous réponds avec les prochaines étapes.",
      emailCta: "Envoyer un email",
      cardLabel: "Coordonnées",
      emailLabel: "Email",
      availabilityLabel: "Disponibilité",
    },
    footer: {
      rights: "Tous droits réservés.",
      backToTop: "Retour en haut",
    },
  },
  en: {
    locale: "en",
    languageName: "English",
    seo: {
      title: "Freelance IT Developer | Websites, business applications and databases",
      description:
        "Freelance IT developer for React websites, Windows business applications, Node.js automations and reliable SQL databases for freelancers and small businesses.",
      ogTitle: "Freelance IT Developer",
      ogDescription:
        "Professional websites, Windows business applications, automations and reliable databases for freelancers, small businesses and local companies.",
    },
    brandTagline: "Independent software developer",
    location: "Belgium and France, remote",
    availability: "Evenings, weekends and planned time slots",
    navigation: [
      { label: "Services", href: "#services" },
      { label: "Solutions", href: "#solutions" },
      { label: "Packages", href: "#offers" },
      { label: "Process", href: "#process" },
      { label: "Contact", href: "#contact" },
    ],
    languageLabel: "Choose language",
    menuLabel: "Open menu",
    closeMenuLabel: "Close menu",
    backHomeLabel: "Back to home",
    hero: {
      eyebrow: "Websites · Windows apps · Databases",
      title: "Independent IT developer for clear, reliable digital tools",
      lead:
        "I help freelancers, shops and small businesses turn operational needs into professional websites, internal tools, automations and well-structured databases.",
      primaryCta: "Request a quote",
      secondaryCta: "View services",
      trustLabel: "Key strengths",
      stats: [
        { value: "48h", label: "to scope the project" },
        { value: "3 pillars", label: "web, desktop and data" },
        { value: "1 contact", label: "from brief to launch" },
      ],
    },
    intro: {
      kicker: "For freelancers, shops and SMEs",
      title: "A practical technical partner when you need things to move.",
      text:
        "Your website needs to build trust. Your spreadsheets are getting messy. Your internal application is slowing the team down. I help you turn a rough idea into a useful, maintainable solution that fits your budget.",
    },
    servicesHeading: {
      kicker: "Services",
      title: "What I can build for you",
      text: "Focused services to attract better clients, save time and protect the quality of your data.",
    },
    services: [
      {
        icon: "web",
        title: "Professional websites",
        text:
          "Business websites, portfolios, landing pages and fast React interfaces designed for clarity, trust and conversion.",
        points: ["React, JavaScript, HTML, CSS", "Local SEO and performance", "Forms, analytics, integrations"],
      },
      {
        icon: "app",
        tone: "amber",
        title: "Windows business apps",
        text:
          "Simple, efficient internal tools to replace manual files or modernize an application your team already uses.",
        points: ["WinForms in C# or VB.NET", "Stock, clients, invoices, planning", "Maintenance and feature evolution"],
      },
      {
        icon: "data",
        tone: "coral",
        title: "Databases and reporting",
        text:
          "Schema design, queries, migration, optimization and reliable connections between your tools and your data.",
        points: ["SQL Server, MySQL, PostgreSQL", "Dashboards and exports", "Backups and data cleanup"],
      },
      {
        icon: "automation",
        tone: "slate",
        title: "Automation and APIs",
        text:
          "Node.js scripts, tool integrations, data import/export and small APIs to make daily operations smoother.",
        points: ["Node.js and web services", "CSV/Excel processing", "CRM, forms and email connections"],
      },
    ],
    solutions: {
      kicker: "Client outcomes",
      title: "Business-focused solutions, not just code.",
      text: "The goal is simple: make your activity easier to find, easier to trust and easier to manage.",
      outcomes: [
        {
          title: "Get found by better clients",
          text: "A clear web presence with focused messaging, calls to action and a local SEO structure.",
        },
        {
          title: "Reduce repetitive work",
          text: "Forms, exports, automations and business screens that avoid double entry and manual follow-up.",
        },
        {
          title: "Make decisions with cleaner data",
          text: "Structured databases and useful dashboards to track clients, sales, stock or interventions.",
        },
      ],
    },
    stack: {
      kicker: "Technologies",
      title: "A pragmatic stack for fast, reliable delivery",
    },
    technologies: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Node.js",
      "C#",
      "VB.NET",
      "WinForms",
      "SQL Server",
      "MySQL",
      "PostgreSQL",
      "Git",
    ],
    offersHeading: {
      kicker: "Packages",
      title: "Clear offers that are easy to understand",
      text: "Each project gets a clear quote after a short discussion about your goals, timing and constraints.",
    },
    offers: [
      {
        label: "Visibility",
        title: "Business website",
        price: "Clear quote",
        points: ["Responsive design", "Services, contact and legal pages", "Basic local SEO", "Guided launch support"],
        cta: "Discuss my website",
      },
      {
        label: "Growth",
        title: "Website + conversion",
        price: "Most requested",
        points: ["Prospect-focused structure", "Qualified request form", "Analytics and event tracking", "Mobile and performance optimization"],
        cta: "Request a quote",
        featured: true,
      },
      {
        label: "Operations",
        title: "Custom business tool",
        price: "Based on scope",
        points: ["WinForms app or web tool", "Database connection", "Import, export and reports", "Ongoing maintenance"],
        cta: "Describe my need",
      },
    ],
    process: {
      kicker: "Process",
      title: "A simple flow, even if your idea is not fully defined yet.",
      steps: [
        {
          title: "Discovery",
          text: "We clarify the problem, users, data, priorities and a realistic budget.",
        },
        {
          title: "Proposal",
          text: "You receive a clear scope, estimate, timeline and the details needed to make a decision.",
        },
        {
          title: "Build",
          text: "I develop in visible steps, with regular feedback and corrections before delivery.",
        },
        {
          title: "Launch",
          text: "Deployment, installation, light documentation and support so you can start using the tool.",
        },
      ],
    },
    brief: {
      kicker: "Quick request",
      title: "Prepare your brief in 30 seconds",
      text: "Select what you need and the contact button will prepare a clear message to send.",
      projectLabel: "Project type",
      timelineLabel: "Desired timeline",
      goalLabel: "Main priority",
      cta: "Create my message",
      subjectPrefix: "Quote request",
      messageIntro: "Hello,\n\nI would like to discuss a project.",
      detailsPrompt: "Here are a few additional details:",
      thanks: "Thank you,",
    },
    projectTypes: [
      "Professional business website",
      "React site or web interface",
      "WinForms C# / VB.NET application",
      "SQL database",
      "Node.js automation",
    ],
    timelines: ["This month", "In 2 to 3 months", "As soon as possible", "I want to scope the idea first"],
    goals: ["Attract more clients", "Save time", "Improve data reliability", "Modernize an existing tool"],
    faq: {
      label: "Frequently asked questions",
      kicker: "FAQ",
      title: "Frequently asked questions",
      items: [
        {
          question: "Do you work with small businesses?",
          answer:
            "Yes. This service is designed for freelancers, shops, small companies and teams that want practical progress without heavy processes.",
        },
        {
          question: "Can you take over an existing project?",
          answer:
            "Yes, after a review of the code, database and priorities. I can fix, stabilize or extend an existing project.",
        },
        {
          question: "Can we start small?",
          answer:
            "Yes. We can start with a useful first version, then add features once the need is validated.",
        },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Tell me about your project.",
      text: "Send a few lines about your activity, your need and your timing. I will reply with the next steps.",
      emailCta: "Send an email",
      cardLabel: "Contact details",
      emailLabel: "Email",
      availabilityLabel: "Availability",
    },
    footer: {
      rights: "All rights reserved.",
      backToTop: "Back to top",
    },
  },
};

const languageCodes = ["fr", "en"];

const serviceIcons = {
  web: (
    <>
      <path d="M4 5.5h16v10.8H4z" />
      <path d="M9 20h6M12 16.3V20" />
      <path d="m8 10 2-2m0 4-2-2m8-2 2 2-2 2" />
    </>
  ),
  app: (
    <>
      <path d="M5 4h14a1 1 0 0 1 1 1v14H4V5a1 1 0 0 1 1-1Z" />
      <path d="M4 8h16M8 4v4M8 12h8M8 16h5" />
    </>
  ),
  data: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </>
  ),
  automation: (
    <>
      <path d="M4 7h7v7H4zM13 5h7v5h-7zM13 14h7v5h-7z" />
      <path d="M11 10h2M8 14v2a2 2 0 0 0 2 2h3" />
    </>
  ),
};

function getInitialLanguage() {
  if (typeof window === "undefined") return "fr";

  const saved = window.localStorage.getItem("site-language");
  if (languageCodes.includes(saved)) return saved;

  return window.navigator.language?.toLowerCase().startsWith("en") ? "en" : "fr";
}

function updateMeta(selector, value) {
  const node = document.querySelector(selector);
  if (node) {
    node.setAttribute("content", value);
  }
}

function Icon({ name, tone = "" }) {
  return (
    <span className={`service-icon ${tone}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" role="img">
        {serviceIcons[name]}
      </svg>
    </span>
  );
}

function Reveal({ as: Component = "div", className = "", children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.16 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <Component ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}>
      {children}
    </Component>
  );
}

function Header({ language, setLanguage, t }) {
  const [open, setOpen] = useState(false);

  function chooseLanguage(code) {
    setLanguage(code);
    setOpen(false);
  }

  return (
    <header className="site-header">
      <a className="brand" href="#accueil" aria-label={t.backHomeLabel} onClick={() => setOpen(false)}>
        <span className="brand-mark" aria-hidden="true">
          IT
        </span>
        <span>
          <strong>{profile.brand}</strong>
          <small>{t.brandTagline}</small>
        </span>
      </a>

      <nav className={`main-nav ${open ? "is-open" : ""}`} aria-label="Main navigation">
        {t.navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <div className="language-switch" role="group" aria-label={t.languageLabel}>
          {languageCodes.map((code) => (
            <button
              key={code}
              type="button"
              className={language === code ? "is-active" : ""}
              aria-pressed={language === code}
              onClick={() => chooseLanguage(code)}
            >
              {code.toUpperCase()}
            </button>
          ))}
        </div>

        <button
          className="nav-toggle"
          type="button"
          aria-label={open ? t.closeMenuLabel : t.menuLabel}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

function Hero({ t }) {
  return (
    <section className="hero">
      <div className="hero-media" aria-hidden="true"></div>
      <div className="hero-overlay" aria-hidden="true"></div>
      <div className="hero-content section-shell">
        <p className="eyebrow">{t.hero.eyebrow}</p>
        <h1>{t.hero.title}</h1>
        <p className="hero-lead">{t.hero.lead}</p>

        <div className="hero-actions">
          <a className="button primary" href="#contact">
            {t.hero.primaryCta}
          </a>
          <a className="button secondary" href="#services">
            {t.hero.secondaryCta}
          </a>
        </div>

        <dl className="trust-strip" aria-label={t.hero.trustLabel}>
          {t.hero.stats.map((stat) => (
            <div key={stat.value}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Intro({ t }) {
  return (
    <section className="intro section-shell" aria-label={t.intro.kicker}>
      <div>
        <p className="section-kicker">{t.intro.kicker}</p>
        <h2>{t.intro.title}</h2>
      </div>
      <p>{t.intro.text}</p>
    </section>
  );
}

function Services({ t }) {
  return (
    <section className="services section-shell" id="services">
      <div className="section-heading">
        <p className="section-kicker">{t.servicesHeading.kicker}</p>
        <h2>{t.servicesHeading.title}</h2>
        <p>{t.servicesHeading.text}</p>
      </div>

      <div className="service-grid">
        {t.services.map((service) => (
          <Reveal as="article" className="service-card" key={service.title}>
            <Icon name={service.icon} tone={service.tone} />
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <ul>
              {service.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Solutions({ t }) {
  return (
    <section className="solutions" id="solutions">
      <div className="section-shell split">
        <div>
          <p className="section-kicker">{t.solutions.kicker}</p>
          <h2>{t.solutions.title}</h2>
          <p>{t.solutions.text}</p>
        </div>

        <div className="outcome-list">
          {t.solutions.outcomes.map((outcome, index) => (
            <Reveal as="article" className="outcome-item" key={outcome.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{outcome.title}</h3>
                <p>{outcome.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stack({ t }) {
  return (
    <section className="stack section-shell" aria-label={t.stack.kicker}>
      <div className="section-heading compact">
        <p className="section-kicker">{t.stack.kicker}</p>
        <h2>{t.stack.title}</h2>
      </div>
      <div className="tech-cloud">
        {t.technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </section>
  );
}

function Offers({ t }) {
  return (
    <section className="offers section-shell" id="offers">
      <div className="section-heading">
        <p className="section-kicker">{t.offersHeading.kicker}</p>
        <h2>{t.offersHeading.title}</h2>
        <p>{t.offersHeading.text}</p>
      </div>

      <div className="offer-grid">
        {t.offers.map((offer) => (
          <Reveal as="article" className={`offer-card ${offer.featured ? "featured" : ""}`} key={offer.title}>
            <p className="offer-label">{offer.label}</p>
            <h3>{offer.title}</h3>
            <p className="price">{offer.price}</p>
            <ul>
              {offer.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <a className={offer.featured ? "button primary full" : "text-link"} href="#contact">
              {offer.cta}
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Process({ t }) {
  return (
    <section className="process" id="process">
      <div className="section-shell">
        <div className="section-heading">
          <p className="section-kicker">{t.process.kicker}</p>
          <h2>{t.process.title}</h2>
        </div>

        <div className="timeline">
          {t.process.steps.map((step, index) => (
            <Reveal as="article" className="timeline-step" key={step.title}>
              <span>{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BriefBuilder({ t }) {
  const [brief, setBrief] = useState({
    project: 0,
    timeline: 0,
    goal: 0,
  });

  const mailto = useMemo(() => {
    const project = t.projectTypes[brief.project];
    const timeline = t.timelines[brief.timeline];
    const goal = t.goals[brief.goal];
    const subject = encodeURIComponent(`${t.brief.subjectPrefix} - ${project}`);
    const body = encodeURIComponent(
      `${t.brief.messageIntro}\n\n${t.brief.projectLabel}: ${project}\n${t.brief.timelineLabel}: ${timeline}\n${t.brief.goalLabel}: ${goal}\n\n${t.brief.detailsPrompt}\n\n${t.brief.thanks}\n`
    );

    return `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }, [brief, t]);

  function updateBrief(event) {
    const { name, value } = event.target;
    setBrief((current) => ({ ...current, [name]: Number(value) }));
  }

  return (
    <section className="lead-builder section-shell" aria-labelledby="lead-builder-title">
      <div className="lead-panel">
        <div>
          <p className="section-kicker">{t.brief.kicker}</p>
          <h2 id="lead-builder-title">{t.brief.title}</h2>
          <p>{t.brief.text}</p>
        </div>

        <form className="brief-form">
          <SelectField label={t.brief.projectLabel} name="project" value={brief.project} options={t.projectTypes} onChange={updateBrief} />
          <SelectField label={t.brief.timelineLabel} name="timeline" value={brief.timeline} options={t.timelines} onChange={updateBrief} />
          <SelectField label={t.brief.goalLabel} name="goal" value={brief.goal} options={t.goals} onChange={updateBrief} />
          <a className="button primary full" href={mailto}>
            {t.brief.cta}
          </a>
        </form>
      </div>
    </section>
  );
}

function SelectField({ label, name, value, options, onChange }) {
  return (
    <label>
      <span>{label}</span>
      <select name={name} value={value} onChange={onChange}>
        {options.map((option, index) => (
          <option key={option} value={index}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function Faq({ t }) {
  return (
    <section className="faq section-shell" aria-label={t.faq.label}>
      <div className="section-heading compact">
        <p className="section-kicker">{t.faq.kicker}</p>
        <h2>{t.faq.title}</h2>
      </div>

      <div className="faq-list">
        {t.faq.items.map((faq) => (
          <details key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Contact({ t }) {
  return (
    <section className="contact" id="contact">
      <div className="section-shell contact-grid">
        <div>
          <p className="section-kicker">{t.contact.kicker}</p>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.text}</p>
          <div className="contact-actions">
            <a className="button primary" href={`mailto:${profile.email}`}>
              {t.contact.emailCta}
            </a>
          </div>
        </div>

        <aside className="contact-card" aria-label={t.contact.cardLabel}>
          <h3>{profile.brand}</h3>
          <p>{t.location}</p>
          <dl>
            <div>
              <dt>{t.contact.emailLabel}</dt>
              <dd>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </dd>
            </div>
            <div>
              <dt>{t.contact.availabilityLabel}</dt>
              <dd>{t.availability}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}

function JsonLd({ t }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: profile.brand,
    description: t.seo.description,
    areaServed: t.location,
    serviceType: t.services.map((service) => service.title),
    email: profile.email,
    availableLanguage: languageCodes.map((code) => content[code].languageName),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export default function App() {
  const [language, setLanguage] = useState(getInitialLanguage);
  const t = content[language];

  useEffect(() => {
    window.localStorage.setItem("site-language", language);
    document.documentElement.lang = language;
    document.title = t.seo.title;
    updateMeta('meta[name="description"]', t.seo.description);
    updateMeta('meta[property="og:title"]', t.seo.ogTitle);
    updateMeta('meta[property="og:description"]', t.seo.ogDescription);
  }, [language, t]);

  return (
    <>
      <JsonLd t={t} />
      <Header language={language} setLanguage={setLanguage} t={t} />
      <main id="accueil">
        <Hero t={t} />
        <Intro t={t} />
        <Services t={t} />
        <Solutions t={t} />
        <Stack t={t} />
        <Offers t={t} />
        <Process t={t} />
        <BriefBuilder t={t} />
        <Faq t={t} />
        <Contact t={t} />
      </main>
      <footer className="site-footer">
        <div className="section-shell footer-inner">
          <p>
            © {new Date().getFullYear()} {profile.brand}. {t.footer.rights}
          </p>
          <a href="#accueil">{t.footer.backToTop}</a>
        </div>
      </footer>
    </>
  );
}
