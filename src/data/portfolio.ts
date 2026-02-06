// ====================================
// PORTFOLIO DATA — Bilingual (NL / EN)
// Edit this file to update your portfolio content.
// ====================================

import type { Language } from "@/context/LanguageContext";

// ------------------------------------
// Types
// ------------------------------------

export interface Experience {
  id: string;
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  startDate: string;
  endDate: string | "Present" | "Heden";
  description: string;
  highlights?: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  link?: string;
  featured?: boolean;
  company: string;
  companyLogo?: string;
  context?: string;
  challenge?: string;
  role?: string;
  tasks?: string[];
  decisions?: string[];
  outcome?: string;
  images?: { src: string; alt: string; caption?: string; mobileFrame?: boolean }[];
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  avatar?: string;
  quote: string;
  linkedIn?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    tagline: string;
    bio: string;
    location: string;
    email: string;
    avatar?: string;
    totalExperience: string;
    companiesWorkedWith: { name: string; url: string }[];
    links: {
      linkedin?: string;
      github?: string;
    };
  };
  nav: {
    work: string;
    about: string;
    experience: string;
    contact: string;
  };
  sections: {
    selectedWork: string;
    featuredProjects: string;
    aboutHeading: string;
    experienceHeading: string;
    testimonialsLabel: string;
    testimonialsHeading: string;
    contactLabel: string;
    contactHeading: string;
    contactDescription: string;
    viewProject: string;
    viewMyWork: string;
    getInTouch: string;
    connectLinkedIn: string;
    current: string;
    yearsExperience: string;
    countries: string;
    enterpriseClients: string;
    designedAndBuilt: string;
  };
  experiences: Experience[];
  projects: Project[];
  testimonials: Testimonial[];
  education: {
    id: string;
    degree: string;
    field: string;
    institution: string;
    years: string;
  }[];
}

// ------------------------------------
// DUTCH (NL)
// ------------------------------------

const nl: PortfolioData = {
  personal: {
    name: "Ruud Moers",
    title: "Senior UX Designer",
    tagline: "Heldere, relevante en impactvolle gebruikerservaringen",
    bio: "Ik ben een ervaren designer die streeft naar het creëren van heldere, relevante en impactvolle gebruikerservaringen. De afgelopen jaren werkte ik bij WeAreReasonablePeople, Wolters Kluwer, Unilever en ANWB aan diverse digitale producten, zowel in-house als aan bureauzijde. Ik werk doelgericht en met oog voor detail, waarbij de gebruiker altijd centraal staat.",
    location: "Randstad, Nederland",
    email: "rpmoers@gmail.com",
    totalExperience: "12+ jaar",
    companiesWorkedWith: [
      { name: "WeAreReasonablePeople", url: "https://www.wearereasonablepeople.com/" },
      { name: "HERE", url: "https://www.here.com/" },
      { name: "Peterson", url: "https://nl.petersonlogistics.com/" },
      { name: "Wolters Kluwer", url: "https://www.wolterskluwer.com/en" },
      { name: "Unilever", url: "https://www.unilever.nl/" },
      { name: "ANWB", url: "https://www.anwb.nl/" },
    ],
    links: {
      linkedin: "https://www.linkedin.com/in/ruud-moers/",
    },
  },

  nav: {
    work: "Werk",
    about: "Over mij",
    experience: "Ervaring",
    contact: "Contact",
  },

  sections: {
    selectedWork: "Geselecteerd werk",
    featuredProjects: "Projecten",
    aboutHeading: "Ervaringen ontwerpen die gebruikersbehoeften en bedrijfsdoelen in balans brengen.",
    experienceHeading: "Ervaring",
    testimonialsLabel: "Aanbevelingen",
    testimonialsHeading: "Wat collega's zeggen",
    contactLabel: "Contact",
    contactHeading: "Laten we samenwerken",
    contactDescription: "Heb je een project in gedachten? Stuur me gerust een bericht via e-mail of LinkedIn.",
    viewProject: "Bekijk project",
    viewMyWork: "Bekijk mijn werk",
    getInTouch: "Neem contact op",
    connectLinkedIn: "LinkedIn",
    current: "Huidig",
    yearsExperience: "Ervaring",
    countries: "Landen",
    enterpriseClients: "Enterprise klanten",
    designedAndBuilt: "Ontworpen & gebouwd met zorg",
  },

  experiences: [
    {
      id: "warp",
      title: "Senior UX Designer",
      company: "WeAreReasonablePeople",
      companyUrl: "https://www.wearereasonablepeople.com/",
      location: "Rotterdam, Zuid-Holland",
      startDate: "Sep 2025",
      endDate: "Heden",
      description:
        "Bij WARP ontwerp en verbeter ik digitale producten en interne platformen in complexe domeinen als mobiliteit, automotive, logistiek en AI. Ik werk aan het verbeteren en opschalen van een bestaand design system door Figma-componentbibliotheken, componenten, variabelen en tokens te structureren, met focus op consistentie, toegankelijkheid (WCAG) en onderhoudbaarheid. Daarnaast draag ik bij aan interne AI-initiatieven door Figma-componenten om te zetten naar herbruikbare front-end componenten met behulp van AI-ondersteunde workflows (o.a. Cursor), in nauwe samenwerking met engineers om design en implementatie op één lijn te houden.",
      highlights: [
        "Digitale producten voor complexe domeinen",
        "Design system verbeteren en opschalen",
        "AI-ondersteunde workflows (Figma → front-end via Cursor)",
        "Samenwerking met engineers voor design-code alignment",
      ],
    },
    {
      id: "thesis-supervisor",
      title: "Afstudeerbegeleider",
      company: "De Haagse Hogeschool",
      companyUrl: "https://www.dehaagsehogeschool.nl/",
      location: "Den Haag",
      startDate: "Apr 2025",
      endDate: "Nov 2025",
      description:
        "Studenten begeleid bij hun afstudeerprojecten, met mentorschap op het gebied van UX-ontwerpmethodologieën en onderzoekspraktijken.",
      highlights: [
        "Begeleiding van eindejaarsstudenten",
        "Beoordeling van ontwerponderzoek",
        "Delen van industrieervaring met de academische wereld",
      ],
    },
    {
      id: "wolters-kluwer",
      title: "Senior UX Designer",
      company: "Wolters Kluwer",
      companyUrl: "https://www.wolterskluwer.com/",
      location: "Nederland",
      startDate: "Jun 2022",
      endDate: "Sep 2025",
      description:
        "Lid van meerdere core product teams gericht op de ontwikkeling van Europese cloud-oplossingen voor deployment in meerdere landen. Verantwoordelijk voor het omzetten van abstracte ideeën naar concrete concepten, user flows, wireframes en interactieve prototypes die leiden tot gebruiksvriendelijke ervaringen. Verrijken van de productvisie door diepgaand onderzoek, genereren van innovatieve concepten, prototyping en gebruikerstesten. Bijdragen aan een bestaand design system voor consistentie en een uniforme gebruikerservaring. Samenwerking met cross-functionele teams en stakeholders, met focus op Lean UX en het bevorderen van de UX-volwassenheid binnen de organisatie.",
      highlights: [
        "Twee design systems opgezet en onderhouden",
        "Lean UX-methodologie toegepast",
        "Samengewerkt met cross-functionele teams",
        "UX-volwassenheid binnen de organisatie bevorderd",
      ],
    },
    {
      id: "unilever-lead",
      title: "Lead UX Designer",
      company: "Unilever",
      companyUrl: "https://www.unilever.nl/",
      location: "Rotterdam, Zuid-Holland",
      startDate: "Jul 2020",
      endDate: "Jun 2022",
      description:
        "User Experience lead in het definiëren van designstrategieën, faciliteren van CX & UX-workshops en het aansturen van de UX-richting van innovaties en bestaande platformen.",
      highlights: [
        "Designstrategieën gedefinieerd voor Unilever Food Solutions",
        "CX & UX-workshops gefaciliteerd",
        "UX-richting voor innovaties aangestuurd",
      ],
    },
    {
      id: "unilever-designer",
      title: "UX Designer",
      company: "Unilever",
      companyUrl: "https://www.unilever.nl/",
      location: "Rotterdam",
      startDate: "Aug 2018",
      endDate: "Jul 2020",
      description:
        "Verantwoordelijk voor het UX-ontwerp van innovaties, websites en apps binnen Unilever Food Solutions, actief in 70+ landen. Taken omvatten onder andere het definiëren van designstrategieën, faciliteren van designworkshops, optimaliseren en onderhouden van de UX van alle websites en Android- en iOS-apps, het maken van low- en high-fidelity prototypes, en het plannen en uitvoeren van gebruikersonderzoek (remote en in-house).",
      highlights: [
        "UX-ontwerp voor 70+ landen",
        "Low- en high-fidelity prototypes gemaakt",
        "Gebruikersonderzoek gepland en uitgevoerd",
        "Android- en iOS-apps geoptimaliseerd",
      ],
    },
    {
      id: "anwb",
      title: "UX Designer",
      company: "ANWB",
      companyUrl: "https://www.anwb.nl/",
      location: "Den Haag",
      startDate: "Mei 2017",
      endDate: "Aug 2018",
      description:
        "Verantwoordelijk voor de UX van alle applicaties binnen de afdeling Hulpverlening bij de ANWB. Dit omvatte de software in de auto van de Wegenwacht, diverse Android- en webapps en 'Waar Is Mijn Wegenwacht'.",
      highlights: [
        "Focusgroep geleid voor redesign dispatch-software",
        "UX-plan en richtlijnen opgesteld",
        "Afdelingen verbonden voor betere samenwerking",
        "High-fidelity prototypes gebouwd",
      ],
    },
  ],

  projects: [
    {
      id: "here-design-system",
      title: "White Label Design System",
      subtitle: "HERE Technologies — via WeAreReasonablePeople",
      description: "Modernisering van een white label design system voor navigatie- en locatieplatformen.",
      company: "HERE",
      image: "/images/projects/here-design-system.jpg",
      tags: ["Design Systems", "Figma", "Componenten", "Documentatie"],
      featured: true,
      context: "HERE Technologies ontwikkelt navigatie- en locatieplatformen die worden ingezet door autofabrikanten en andere partners. Het bestaande design system had een update nodig om beter schaalbaar, consistenter en beter hanteerbaar te zijn voor zowel interne teams als OEM-partners.",
      challenge: "Het design system was verouderd en inconsistent. Componenten misten duidelijk vastgelegde states en interactiegedrag, en documentatie was versnipperd. Dit maakte het voor ontwerp- en ontwikkelteams lastig om het system consistent toe te passen en verder te ontwikkelen binnen verschillende producten en omgevingen.",
      role: "Senior UX Designer, met een begeleidende en adviserende rol in de modernisering van het design system. Verantwoordelijk voor het richting geven aan UX-keuzes, het bewaken van consistentie en het ondersteunen van teams bij ontwerp- en structuurvraagstukken.",
      tasks: [
        "Begeleiden van het standaardiseren en doorontwikkelen van componenten",
        "Adviseren over component states en vastleggen van interactiegedrag",
        "Ondersteunen bij het verbeteren en stroomlijnen van gebruikersflows",
        "Meedenken over herbruikbare patronen en composities",
        "Reviewen en helpen opzetten van documentatie en richtlijnen voor consistent gebruik",
      ],
      decisions: [
        "Geadviseerd over een modulaire componentarchitectuur die schaalbaarheid en flexibiliteit ondersteunt",
        "Motion design verkend als onderdeel van het design system, met onderzoek naar verschillende tools en workflows (Figma, plugins, Cursor en ProtoPie). De uiteindelijke aanpak is een bewuste combinatie, gebaseerd op de sterke en zwakke punten van elke oplossing.",
        "Sterke nadruk gelegd op duidelijke documentatie om adoptie door interne teams en OEM-partners te versnellen",
      ],
      outcome: "Een gemoderniseerd en beter gestructureerd design system dat iteratief wordt doorontwikkeld. Het system bevat consistente componenten, duidelijk vastgelegd interactiegedrag en verbeterde documentatie, en wordt inmiddels gebruikt en verder verfijnd.",
      images: [
        { src: "/images/projects/here/structure.png", alt: "Design system structure — primitives, components, patterns and features", caption: "Structuur van het design system: van primitives via components en patterns naar features" },
        { src: "/images/projects/here/tokens-semantic.png", alt: "Semantic colour tokens mapping from primitives to component tokens", caption: "Token-architectuur: primitive, semantic en component tokens" },
        { src: "/images/projects/here/tokens-themeable.png", alt: "Themeable tokens — HERE Vanilla vs OEM example with different color schemes", caption: "Themeability: dezelfde tokens, verschillende merken" },
        { src: "/images/projects/here/tokens-variables.png", alt: "Figma variables panel showing 144 design tokens for light and dark themes", caption: "Variabelen in Figma: 144 tokens voor light en dark thema's" },
        { src: "/images/projects/here/component-button.png", alt: "Button component showing all variants, sizes and states", caption: "Button component: alle varianten, formaten en states" },
      ],
    },
    {
      id: "peterson-portal",
      title: "Client Portal",
      subtitle: "Peterson Logistics — via WeAreReasonablePeople",
      description: "Ontwerp van een klantportaal voor complexe logistieke supply chains, met overzicht van dossiers, bargestatus en timesheets.",
      company: "Peterson",
      image: "/images/projects/peterson-portal.jpg",
      tags: ["B2B", "Logistiek", "Gebruikersonderzoek", "Agile"],
      featured: true,
      context: "Peterson Logistics levert geïntegreerde logistieke diensten voor complexe supply chains, waaronder transport, opslag, handling en douane-ondersteuning. Klanten werken met meerdere logistieke processen en dossiers tegelijk en hadden behoefte aan één centrale plek om inzicht te krijgen in de voortgang en status van hun activiteiten.",
      challenge: "Informatie over dossiers, bargestatussen, timesheets en sampling was verspreid over verschillende systemen en communicatiekanalen. Hierdoor misten klanten overzicht en kostte het veel tijd om de juiste informatie te verzamelen. De uitdaging was om deze gefragmenteerde informatie samen te brengen in een helder en logisch geheel, afgestemd op verschillende typen gebruikers.",
      role: "Senior UX Designer, verantwoordelijk voor het begeleiden en uitvoeren van het volledige UX-traject: van onderzoek en probleemdefinitie tot conceptontwikkeling, validatie en oplevering, in nauwe samenwerking met stakeholders en het developmentteam.",
      tasks: [
        "Uitvoeren van gebruikersonderzoek en interviews met verschillende klanttypes",
        "Afstemmen met interne stakeholders over wensen, randvoorwaarden en prioriteiten",
        "Ontwikkelen en iteratief verfijnen van concepten en flows",
        "Valideren van ontwerpen met gebruikers en verwerken van feedback",
        "Samenwerken binnen een agile team tijdens ontwerp en implementatie",
      ],
      decisions: [
        "Ontwerpen van een dashboard-aanpak waarbij dossiers de centrale structuur vormen",
        "Rekening houden met verschillende gebruikersrollen (inkoop, verkoop, logistiek) en hun informatiebehoeften",
        "Prioriteren van voortgangs- en statusoverzichten op basis van gebruikersfeedback",
        "Zorgen voor een duidelijke informatiehiërarchie en voorspelbare navigatie",
      ],
      outcome: "Een overzichtelijk klantportaal waarin klanten hun dossiers (inkoop, verkoop, ontvangst en voortgang), bargestatussen, timesheets en samplestatus centraal kunnen inzien. Het portaal biedt één duidelijk toegangspunt tot relevante logistieke informatie, waardoor klanten beter overzicht hebben en minder afhankelijk zijn van losse systemen en communicatie.",
      images: [
        { src: "/images/projects/peterson/dossiers-overview.png", alt: "Dossiers overview showing list of vessels, warehouses and depots with status and progress", caption: "Dossieroverzicht: alle dossiers met type, klant, product en voortgang" },
        { src: "/images/projects/peterson/dossier-progress.png", alt: "Dossier progress view with dual column layout showing WT4 and WT3 loading schedules", caption: "Voortgangsweergave: real-time status per laadschema" },
        { src: "/images/projects/peterson/dossier-barge-detail.png", alt: "Barge shipment detail panel showing order, certification, barge capacity and contact information", caption: "Barge detail: zending-informatie, certificering en contactgegevens" },
        { src: "/images/projects/peterson/dossier-sales.png", alt: "Sales view with expanded Leievoeders section showing delivery details per barge", caption: "Verkoopweergave: leveringsdetails per barge met contractinformatie" },
        { src: "/images/projects/peterson/dossier-sales-barge.png", alt: "Sales view with connected barge detail panel open alongside delivery information", caption: "Verkoopweergave met gekoppelde barge: alle informatie op één plek" },
      ],
    },
    {
      id: "warp-ai",
      title: "Interne AI-projecten",
      subtitle: "WeAreReasonablePeople",
      description: "Ontwikkeling van interne AI-tools waaronder een mailbot en een component library die Figma-ontwerpen omzet naar herbruikbare front-end componenten.",
      company: "WeAreReasonablePeople",
      image: "/images/projects/warp-ai.jpg",
      tags: ["AI", "Component Library", "Figma", "Cursor", "Front-end"],
      featured: true,
      context: "WARP investeert in interne AI-initiatieven om werkprocessen te verbeteren. Eén van deze initiatieven is het overbruggen van de kloof tussen ontwerp en development.",
      challenge: "Het handmatig omzetten van Figma-ontwerpen naar front-end code is tijdrovend en foutgevoelig. Daarnaast was er behoefte aan slimmere interne tooling, zoals een AI-gestuurde mailbot.",
      role: "Senior UX Designer en initiator, verantwoordelijk voor zowel het ontwerp als de implementatie van de component library.",
      tasks: [
        "Ontwerpen van de component library architectuur",
        "Figma-componenten vertalen naar herbruikbare front-end componenten via Cursor",
        "Samenwerken met engineers voor design-code alignment",
        "Bijdragen aan de mailbot en andere interne AI-projecten",
      ],
      decisions: [
        "AI-gestuurde workflow gekozen (Cursor) voor snellere omzetting van ontwerp naar code",
        "Componentbibliotheek opgezet als herbruikbaar framework voor interne projecten",
        "Nauw samengewerkt met engineers om consistentie tussen ontwerp en implementatie te waarborgen",
      ],
      outcome: "Een werkende component library waarmee Figma-ontwerpen met AI-ondersteuning worden omgezet naar herbruikbare front-end componenten voor interne projecten.",
    },
    {
      id: "wk-design-systems",
      title: "Design Systems",
      subtitle: "Wolters Kluwer",
      description: "Twee aparte design systems opgezet voor verschillende teams: één voor een Duits team en twee voor een Europees cloud team.",
      company: "Wolters Kluwer",
      image: "/images/projects/wk-design-systems.jpg",
      tags: ["Design Systems", "Enterprise", "Componentbibliotheken", "Documentatie"],
      featured: true,
      context: "Wolters Kluwer ontwikkelt cloud-oplossingen die in meerdere Europese landen worden uitgerold. Binnen de organisatie werkten verschillende productteams zonder een gedeeld design system, wat leidde tot inconsistenties in UI, interactie en werkwijze tussen producten en teams.",
      challenge: "Elk team had eigen eisen, workflows en technische randvoorwaarden. Er was geen gestandaardiseerde aanpak voor componenten, typografie, kleurgebruik en interactiepatronen. Tegelijk moesten de oplossingen flexibel genoeg blijven voor toekomstige uitbreidingen en aansluiten op bestaande development pipelines en tooling.",
      role: "Senior UX Designer, verantwoordelijk voor het begeleiden en uitvoeren van het traject van onderzoek en analyse tot ontwerp, documentatie en doorlopende doorontwikkeling, in samenwerking met meerdere teams en stakeholders.",
      tasks: [
        "Onderzoeken en analyseren van behoeften, workflows en randvoorwaarden per team",
        "Ontwerpen en opzetten van componentbibliotheken",
        "Vastleggen van richtlijnen en documentatie voor consistent gebruik",
        "Afstemmen met stakeholders om adoptie en draagvlak te vergroten",
        "Onderhoud en iteratieve doorontwikkeling van de systemen",
      ],
      decisions: [
        "Bewust gekozen voor twee afzonderlijke design systems in plaats van één universele oplossing, vanwege sterk uiteenlopende teambehoeften",
        "Modulaire opzet toegepast om hergebruik van componenten mogelijk te maken waar dit zinvol was",
        "Ontwikkelen van stijlgidsen voor typografie, kleuren, iconen en interactiepatronen",
        "Inrichting van Figma-libraries en samenwerking met bestaande tools en workflows",
      ],
      outcome: "Verbeterde consistentie binnen beide teams en hun producten, met behoud van flexibiliteit per context. Ontwerp- en ontwikkelteams konden sneller werken dankzij herbruikbare componenten en duidelijke richtlijnen. Daarnaast verbeterde de samenwerking tussen design en development door een gedeelde taal en structuur.",
      images: [
        { src: "/images/projects/wk-design-systems/getting-started-content.png", alt: "Detailed getting started guide covering component creation, naming conventions, and auto layout", caption: "TaskFlow Library v1.3: componenten- en templatebibliotheek" },
        { src: "/images/projects/wk-design-systems/action-bar-component.png", alt: "Action Bar component documentation showing all variants and configurations", caption: "Richtlijnen: componentcreatie, naamgeving en auto layout" },
        { src: "/images/projects/wk-design-systems/taskflow-cover.png", alt: "TaskFlow Library v1.3 — Components & Templates cover page", caption: "Action Bar component: alle varianten en configuraties" },
      ],
    },
    {
      id: "wk-portable-business",
      title: "Portable Business Components",
      subtitle: "Wolters Kluwer",
      description: "Ontwerp van herbruikbare business componenten voor Europese cloud-producten die in meerdere landen worden ingezet.",
      company: "Wolters Kluwer",
      image: "/images/projects/wk-pbc.jpg",
      tags: ["Enterprise UX", "Componenten", "Multi-markt", "Cloud"],
      featured: false,
      context: "Wolters Kluwer rolt cloud-oplossingen uit in meerdere Europese landen. Er was behoefte aan herbruikbare business componenten die consistent functioneren over verschillende producten en markten heen, zodat productteams konden werken met standaardoplossingen in plaats van telkens nieuwe functionaliteit te ontwerpen of ontwikkelen.",
      challenge: "Businesslogica en UX-patronen verschilden per land en product. De uitdaging was om componenten te ontwerpen die flexibel genoeg zijn voor lokale aanpassingen, terwijl de kernfunctionaliteit en gebruikerservaring consistent blijven over alle producten.",
      role: "Senior UX Designer binnen het core product team, met een begeleidende rol in het ontwerpen en doorontwikkelen van herbruikbare business componenten als onderdeel van het bredere design system.",
      tasks: [
        "Ontwerpen en doorontwikkelen van herbruikbare business componenten",
        "Afstemmen met product- en designteams in verschillende landen",
        "Prototypen en valideren van componentgedrag en interactie",
        "Bijdragen aan en afstemmen met het centrale design system",
      ],
      decisions: [
        "Notification system voor consistente gebruikersmeldingen en statusupdates",
        "Standaard tabellen voor het tonen en beheren van gestructureerde data",
        "Reporting system voor inzicht in data en voortgang",
        "Aanvullende business componenten voor terugkerende patronen binnen verschillende producten",
      ],
      outcome: "Een set herbruikbare business componenten die consistent wordt ingezet in meerdere Europese markten. Productteams beschikken over een solide basis voor veelgebruikte functionaliteit, waardoor ontwikkeltijd wordt verkort en de gebruikerservaring over producten heen consistenter is geworden.",
      images: [
        { src: "/images/projects/wk-pbc/notification-components-1.png", alt: "Notification system with panel, states and interaction design in Figma", caption: "Notificatiesysteem: panel, meldingstypes en interactie" },
        { src: "/images/projects/wk-pbc/notification-components-2.png", alt: "Notification component variants and states in Figma design system", caption: "Notification component: varianten, states en structuur" },
        { src: "/images/projects/wk-pbc/data-grid-1.png", alt: "Advanced Data Grid portable business component implementation", caption: "Advanced Data Grid: portable business component" },
        { src: "/images/projects/wk-pbc/data-grid-2.webp", alt: "Advanced Data Grid component design in Figma with table cells and configurations", caption: "Advanced Data Grid: Figma design met cellen en configuraties" },
        { src: "/images/projects/wk-pbc/reporting-system-1.png", alt: "Reporting System with report template management interface", caption: "Reporting System: templatebeheer en documentgeneratie" },
        { src: "/images/projects/wk-pbc/reporting-system-2.png", alt: "Reporting System showing how to customize a report", caption: "Reporting System: rapporten aanpassen en configureren" },
      ],
    },
    {
      id: "wk-taskflow-ai",
      title: "TaskFlow & AI",
      subtitle: "Wolters Kluwer",
      description: "Ontwerpen voor AI-integratie in TaskFlow, gericht op het verbeteren van de gebruikerservaring door waarschuwingen en samenvattingen voor documenten.",
      company: "Wolters Kluwer",
      image: "/images/projects/wk-taskflow.jpg",
      tags: ["AI", "Product Design", "Enterprise", "Documentverwerking"],
      featured: false,
      context: "TaskFlow is een Wolters Kluwer-product voor documentverwerking en workflow-automatisering. Binnen het product ontstond de kans om AI-functionaliteit toe te voegen om gebruikers beter te ondersteunen bij het aanleveren, controleren en verwerken van documenten.",
      challenge: "AI-functionaliteit moest worden geïntegreerd op een manier die begrijpelijk en toegankelijk is, zonder bestaande workflows te verstoren. Daarnaast moesten de ontwerpen schaalbaar zijn, zodat ze eenvoudig konden worden uitgebreid en geïntegreerd zodra de onderliggende AI-functionaliteit beschikbaar zou komen.",
      role: "Senior UX Designer, verantwoordelijk voor het verkennen en ontwerpen van AI-ondersteuning binnen de bestaande workflow, in nauwe afstemming met stakeholders en productteams.",
      tasks: [
        "Ontwerpen van notificaties voor ontbrekende of incorrecte documenten",
        "Ontwerpen van samenvattingen van geüploade documenten",
        "Ontwikkelen van schaalbare UX-patronen voor toekomstige AI-features",
        "Afstemmen en valideren van concepten met stakeholders",
      ],
      decisions: [
        "AI ontworpen als ondersteunend hulpmiddel, niet als vervanging van de gebruiker",
        "Sterke focus op begrijpelijkheid en voorspelbaar gedrag binnen bestaande workflows",
        "Proactieve notificaties ingezet om gebruikers tijdig te waarschuwen voor ontbrekende documenten",
        "Ontwerpen met oog op toekomstige uitbreiding en hergebruik",
      ],
      outcome: "Ontwerpen opgeleverd die klaar zijn voor integratie zodra de AI-functionaliteit beschikbaar komt. De focus ligt op duidelijke waarschuwingen, overzichtelijke samenvattingen en proactieve ondersteuning, zonder de bestaande gebruikersflow te onderbreken.",
      images: [
        { src: "/images/projects/wk-taskflow-ai/taskflow-ai-1.webp", alt: "Detail of proactive AI warning for missing documents", caption: "Proactieve AI-waarschuwing: detail van ontbrekende documenten" },
        { src: "/images/projects/wk-taskflow-ai/taskflow-ai-2.png", alt: "Proactive AI warning for missing documents in the total design", caption: "Proactieve AI-waarschuwing: in het totale ontwerp" },
        { src: "/images/projects/wk-taskflow-ai/check-with-ai-1.png", alt: "TaskFlow AI chat interface with document analysis and source references", caption: "TaskFlow AI: documentanalyse met chatinterface en bronverwijzingen" },
        { src: "/images/projects/wk-taskflow-ai/check-with-ai-2.png", alt: "TaskFlow AI chat detail showing document analysis conversation", caption: "TaskFlow AI: detail van documentanalyse" },
      ],
    },
    {
      id: "unilever-food-solutions",
      title: "Unilever Food Solutions App",
      subtitle: "Unilever",
      description: "UX-ontwerp en optimalisatie van de Food Solutions app die professionele koks bedient in meer dan 70 landen.",
      company: "Unilever",
      image: "/images/projects/unilever-fs.jpg",
      tags: ["Globaal", "Mobile Apps", "Lokalisatie", "B2B"],
      featured: false,
      context: "Unilever Food Solutions ondersteunt professionele chefs wereldwijd met recepten, productinformatie en zakelijke tools. Het platform wordt gebruikt in meer dan 70 landen, elk met eigen talen, culinaire tradities en werkwijzen.",
      challenge: "De uitdaging was om een consistente gebruikerservaring te bieden over meer dan 70 landen, terwijl er voldoende ruimte bleef voor lokale aanpassingen in taal, content en gebruik. Tegelijkertijd moesten zowel de Android- als iOS-apps worden geoptimaliseerd om beter aan te sluiten bij het daadwerkelijke gebruik per regio.",
      role: "UX Designer, later Lead UX Designer. Verantwoordelijk voor de UX van innovaties, websites en mobiele apps, met een toenemende focus op strategische richting, afstemming en begeleiding van teams.",
      tasks: [
        "Definiëren en bewaken van UX- en designstrategieën",
        "Faciliteren van CX- en UX-workshops met internationale stakeholders",
        "Optimaliseren van websites en Android- en iOS-apps",
        "Ontwikkelen van low- en high-fidelity prototypes",
        "Plannen en uitvoeren van gebruikersonderzoek in verschillende markten",
      ],
      decisions: [
        "Opzetten van een localization framework dat globale consistentie combineert met lokale flexibiliteit",
        "Prioriteren van verbeteringen in mobiele apps op basis van gebruiksdata per regio",
        "Inzetten van design thinking-workshops om nieuwe ideeën en innovaties te ontwikkelen",
        "Afstemmen van UX-keuzes over meerdere platforms en markten",
      ],
      outcome: "Een geoptimaliseerde digitale ervaring voor professionele chefs in meer dan 70 landen. Verbeterde Android- en iOS-apps en een consistente designstrategie over alle platformen, met ruimte voor lokale verschillen in gebruik en context.",
      images: [
        { src: "/images/projects/unilever-fs/unilever-app-academy.png", alt: "Unilever Food Solutions mobile app Academy section showing video courses, training progress, and world cuisines", caption: "Unilever Food Solutions App: Academy sectie met video cursussen", mobileFrame: true },
        { src: "/images/projects/unilever-fs/unilever-app-home.png", alt: "Unilever Food Solutions mobile app home screen showing content feed with recipes, academy videos, promotions, and loyalty program", caption: "Unilever Food Solutions App: home screen met content feed en loyalty programma", mobileFrame: true },
      ],
    },
    {
      id: "anwb-wegenwacht",
      title: "Waar Is Mijn Wegenwacht",
      subtitle: "ANWB",
      description: "Herontwerp van de webapp waarmee gestrande automobilisten hun wegenwacht kunnen volgen en relevante notificaties ontvangen.",
      company: "ANWB",
      image: "/images/projects/anwb-wegenwacht.jpg",
      tags: ["Consumer", "Mobile", "Service Design", "Gebruikersonderzoek"],
      featured: false,
      context: "Voor de ANWB Wegenwacht-app heb ik het ontwerp verzorgd voor een statusoverzicht waarmee gebruikers real-time inzicht krijgen in de voortgang van hun pechmelding. Voorheen bood de app geen mogelijkheid om gebruikers actief te informeren over de status van hun aanvraag, wat leidde tot onzekerheid tijdens het wachten.",
      challenge: "Om tot een passende oplossing te komen, is het volgende gedaan:",
      role: "UX Designer, verantwoordelijk voor de UX van alle applicaties binnen de afdeling Hulpverlening.",
      tasks: [
        "Gebruikersonderzoek uitgevoerd om inzicht te krijgen in de behoeften en zorgen van gebruikers tijdens het wachten op de Wegenwacht. Onzekerheid over wachttijd en gebrek aan regie kwamen hierbij duidelijk naar voren.",
        "Technische randvoorwaarden onderzocht in samenwerking met het developmentteam. Op basis hiervan is gekozen voor een webapp-integratie in plaats van een native oplossing, zodat de functionaliteit binnen de bestaande infrastructuur gerealiseerd kon worden.",
        "Iteratief ontworpen en gevalideerd met een klankbordgroep van eindgebruikers, waarbij feedback is gebruikt om de interface verder te vereenvoudigen en verduidelijken.",
      ],
      decisions: [
        "Een duidelijke statusweergave via een stapsgewijze interface",
        "De mogelijkheid om de Wegenwacht live te volgen op de kaart wanneer deze in de buurt is",
        "Inzicht in de pechmelding, met opties om de melding te wijzigen of annuleren",
      ],
      outcome: "Minder onzekerheid voor gebruikers dankzij real-time statusinformatie. Minder telefonisch contact met de klantenservice door beter inzicht in de voortgang. Verbeterde gebruikservaring, doordat gebruikers meer controle ervaren. Efficiëntere afhandeling van pechmeldingen.",
      images: [
        { src: "/images/projects/anwb-wegenwacht/waar-is-mijn-wegenwacht.png", alt: "Three mobile screens showing the ANWB roadside assistance tracking app with step-by-step status updates and live map tracking", caption: "Waar Is Mijn Wegenwacht: statusoverzicht met stapsgewijze interface en live tracking" },
      ],
    },
  ],

  testimonials: [
    {
      id: "nazar",
      name: "Nazar Dalyk",
      title: "User Experience Designer @ Trinetix",
      company: "Trinetix",
      linkedIn: "https://www.linkedin.com/in/nazar-dalyk-44b741106",
      quote:
        "Ruud is a highly skilled designer and a great teammate. He consistently brings fresh ideas to our brainstorming sessions. With strong attention to detail and excellent problem-solving skills, he always delivers high-quality work. Beyond his technical abilities, Ruud is supportive and always ready to help. He's a true team player who makes collaboration easy and enjoyable. It's been a pleasure working with him!",
    },
    {
      id: "yara",
      name: "Yara Jalal",
      title: "Business Group Agile Lead @ Unilever",
      company: "Unilever",
      linkedIn: "https://www.linkedin.com/in/yara-jalal-92a2ab94",
      quote:
        "I've had the pleasure of working closely with Ruud on several challenging projects over the past years. Ruud is a very optimistic and fun person with a can-do attitude that is contagious. I've learned a great deal from Ruud about user research, personas, testing with tools like Hotjar and creating prototypes. He uses his passion for user-centricity and understanding of the business needs to demonstrate the value of design thinking.",
    },
    {
      id: "adriaan",
      name: "Adriaan Oudijk",
      title: "Design Research Lead | UX Research Lead",
      company: "ANWB",
      quote:
        "Ruud is really good at solving wicked problems. He's an excellent UX Designer with the ability to deliver mindblowing graphic designs. His nonchalant attitude made him seem lazy to me, at first. Later on I noticed that he's just extremely efficient at his work, which allows him to take full advantage of the \"do something else\"-fase in a creative process.",
    },
  ],

  education: [
    {
      id: "cmd",
      degree: "Bachelor",
      field: "Communication and Multimedia Design",
      institution: "Haagse Hogeschool Den Haag",
      years: "2010 - 2016",
    },
    {
      id: "mbo",
      degree: "MBO",
      field: "Grafisch Vormgeven",
      institution: "Grafisch Lyceum Rotterdam",
      years: "2005 - 2010",
    },
  ],
};

// ------------------------------------
// ENGLISH (EN)
// ------------------------------------

const en: PortfolioData = {
  personal: {
    name: "Ruud Moers",
    title: "Senior UX Designer",
    tagline: "Clear, relevant, and impactful user experiences",
    bio: "I'm an experienced designer who strives to create clear, relevant, and impactful user experiences. In recent years, I've worked at WeAreReasonablePeople, Wolters Kluwer, Unilever, and ANWB on various digital products, both in-house and agency-side. I work purposefully and with an eye for detail, with the user always at the center.",
    location: "Randstad, Netherlands",
    email: "rpmoers@gmail.com",
    totalExperience: "12+ years",
    companiesWorkedWith: [
      { name: "WeAreReasonablePeople", url: "https://www.wearereasonablepeople.com/" },
      { name: "HERE", url: "https://www.here.com/" },
      { name: "Peterson", url: "https://nl.petersonlogistics.com/" },
      { name: "Wolters Kluwer", url: "https://www.wolterskluwer.com/en" },
      { name: "Unilever", url: "https://www.unilever.nl/" },
      { name: "ANWB", url: "https://www.anwb.nl/" },
    ],
    links: {
      linkedin: "https://www.linkedin.com/in/ruud-moers/",
    },
  },

  nav: {
    work: "Work",
    about: "About",
    experience: "Experience",
    contact: "Contact",
  },

  sections: {
    selectedWork: "Selected Work",
    featuredProjects: "Projects",
    aboutHeading: "Designing experiences that balance user needs with business goals.",
    experienceHeading: "Where I've worked",
    testimonialsLabel: "Testimonials",
    testimonialsHeading: "What colleagues say",
    contactLabel: "Get in touch",
    contactHeading: "Let's work together",
    contactDescription: "Have a project in mind? Feel free to reach out via email or LinkedIn.",
    viewProject: "View project",
    viewMyWork: "View my work",
    getInTouch: "Get in touch",
    connectLinkedIn: "LinkedIn",
    current: "Current",
    yearsExperience: "Experience",
    countries: "Countries",
    enterpriseClients: "Enterprise clients",
    designedAndBuilt: "Designed & built with care",
  },

  experiences: [
    {
      id: "warp",
      title: "Senior UX Designer",
      company: "WeAreReasonablePeople",
      companyUrl: "https://www.wearereasonablepeople.com/",
      location: "Rotterdam, South Holland",
      startDate: "Sep 2025",
      endDate: "Present",
      description:
        "At WARP, I design and evolve digital products and internal platforms in complex domains such as mobility, automotive, logistics, and AI. My work includes improving and scaling an existing design system by structuring Figma component libraries, components, variables, and tokens, with a focus on consistency, accessibility (WCAG), and maintainability. I also contribute to internal AI initiatives by translating Figma components into reusable front-end components using AI-assisted workflows (e.g. Cursor), working closely with engineers to keep design and implementation aligned.",
      highlights: [
        "Digital products for complex domains",
        "Improving and scaling design systems",
        "AI-assisted workflows (Figma → front-end via Cursor)",
        "Close collaboration with engineers for design-code alignment",
      ],
    },
    {
      id: "thesis-supervisor",
      title: "Thesis Supervisor",
      company: "The Hague University of Applied Sciences",
      companyUrl: "https://www.dehaagsehogeschool.nl/",
      location: "The Hague",
      startDate: "Apr 2025",
      endDate: "Nov 2025",
      description:
        "Guided students through their thesis projects, providing mentorship on UX design methodologies and research practices.",
      highlights: [
        "Mentoring final-year students",
        "Reviewing and guiding design research",
        "Sharing industry experience with academia",
      ],
    },
    {
      id: "wolters-kluwer",
      title: "Senior UX Designer",
      company: "Wolters Kluwer",
      companyUrl: "https://www.wolterskluwer.com/",
      location: "Netherlands",
      startDate: "Jun 2022",
      endDate: "Sep 2025",
      description:
        "I was a member of multiple core product teams dedicated to developing European cloud solutions for deployment in multiple countries. Responsible for leading the transformation of abstract ideas into tangible concepts, user flows, wireframes, and interactive prototypes, all of which lead to user-friendly experiences. Enriching the product's vision by conducting in-depth research, generating innovative concepts, building prototypes, and user-testing to ensure optimal results. Making contributions to an established design system, ensuring consistency and a unified user experience. Collaborating with cross-functional team members and stakeholders, with a focus on Lean UX and advancing the organization's UX maturity.",
      highlights: [
        "Built and maintained two design systems",
        "Applied Lean UX methodology",
        "Collaborated with cross-functional teams",
        "Advanced the organization's UX maturity",
      ],
    },
    {
      id: "unilever-lead",
      title: "Lead UX Designer",
      company: "Unilever",
      companyUrl: "https://www.unilever.nl/",
      location: "Rotterdam, South Holland",
      startDate: "Jul 2020",
      endDate: "Jun 2022",
      description:
        "I was the User Experience lead in defining design strategies, facilitating CX & UX workshops and managing the direction of UX of innovations and existing platforms.",
      highlights: [
        "Defined design strategies for Unilever Food Solutions",
        "Facilitated CX & UX workshops",
        "Managed UX direction for innovations",
      ],
    },
    {
      id: "unilever-designer",
      title: "UX Designer",
      company: "Unilever",
      companyUrl: "https://www.unilever.nl/",
      location: "Rotterdam",
      startDate: "Aug 2018",
      endDate: "Jul 2020",
      description:
        "I was responsible for the UX design of innovations, websites & apps within Unilever Food Solutions, which serves 70+ countries. My responsibilities included defining design strategies, facilitating design workshops, optimizing and maintaining the UX of all websites and Android and iOS apps, creating low- and high-fidelity prototypes, and planning and conducting user research (remote and in-house testing).",
      highlights: [
        "UX design for 70+ countries",
        "Created low- and high-fidelity prototypes",
        "Planned and conducted user research",
        "Optimized Android and iOS apps",
      ],
    },
    {
      id: "anwb",
      title: "UX Designer",
      company: "ANWB",
      companyUrl: "https://www.anwb.nl/",
      location: "The Hague",
      startDate: "May 2017",
      endDate: "Aug 2018",
      description:
        "I was responsible for the UX of all applications within the 'Hulpverlening' department at the ANWB. This includes the software within the car of the 'Wegenwacht', several Android and web apps and 'Waar Is Mijn Wegenwacht'.",
      highlights: [
        "Led focus group for dispatch software redesign",
        "Created UX plan and guidelines",
        "Connected departments for better collaboration",
        "Built high-fidelity prototypes",
      ],
    },
  ],

  projects: [
    {
      id: "here-design-system",
      title: "White Label Design System",
      subtitle: "HERE Technologies — via WeAreReasonablePeople",
      description: "Modernization of a white label design system for navigation and location platforms.",
      company: "HERE",
      image: "/images/projects/here-design-system.jpg",
      tags: ["Design Systems", "Figma", "Components", "Documentation"],
      featured: true,
      context: "HERE Technologies develops navigation and location platforms used by car manufacturers and other partners. The existing design system needed an update to be more scalable, consistent, and manageable for both internal teams and OEM partners.",
      challenge: "The design system was outdated and inconsistent. Components lacked clearly defined states and interaction behavior, and documentation was fragmented. This made it difficult for design and development teams to apply and evolve the system consistently across different products and environments.",
      role: "Senior UX Designer, with an advisory and guiding role in the modernization of the design system. Responsible for directing UX decisions, ensuring consistency, and supporting teams with design and structural challenges.",
      tasks: [
        "Guiding the standardization and evolution of components",
        "Advising on component states and documenting interaction behavior",
        "Supporting the improvement and streamlining of user flows",
        "Contributing to reusable patterns and compositions",
        "Reviewing and helping set up documentation and guidelines for consistent usage",
      ],
      decisions: [
        "Advised on a modular component architecture that supports scalability and flexibility",
        "Explored motion design as part of the design system, researching different tools and workflows (Figma, plugins, Cursor, and ProtoPie). The final approach is a deliberate combination, based on the strengths and limitations of each solution.",
        "Placed strong emphasis on clear documentation to accelerate adoption by internal teams and OEM partners",
      ],
      outcome: "A modernized and better-structured design system that is being iteratively developed. The system contains consistent components, clearly documented interaction behavior, and improved documentation, and is now in active use and being refined.",
      images: [
        { src: "/images/projects/here/structure.png", alt: "Design system structure — primitives, components, patterns and features", caption: "Design system structure: from primitives through components and patterns to features" },
        { src: "/images/projects/here/tokens-semantic.png", alt: "Semantic colour tokens mapping from primitives to component tokens", caption: "Token architecture: primitive, semantic, and component tokens" },
        { src: "/images/projects/here/tokens-themeable.png", alt: "Themeable tokens — HERE Vanilla vs OEM example with different color schemes", caption: "Themeability: same tokens, different brands" },
        { src: "/images/projects/here/tokens-variables.png", alt: "Figma variables panel showing 144 design tokens for light and dark themes", caption: "Variables in Figma: 144 tokens for light and dark themes" },
        { src: "/images/projects/here/component-button.png", alt: "Button component showing all variants, sizes and states", caption: "Button component: all variants, sizes, and states" },
      ],
    },
    {
      id: "peterson-portal",
      title: "Client Portal",
      subtitle: "Peterson Logistics — via WeAreReasonablePeople",
      description: "Design of a client portal for complex logistics supply chains, providing oversight of dossiers, barge status, and timesheets.",
      company: "Peterson",
      image: "/images/projects/peterson-portal.jpg",
      tags: ["B2B", "Logistics", "User Research", "Agile"],
      featured: true,
      context: "Peterson Logistics provides integrated logistics services for complex supply chains, including transport, storage, handling, and customs support. Clients manage multiple logistics processes and dossiers simultaneously and needed a single, central place to gain insight into the progress and status of their activities.",
      challenge: "Information about dossiers, barge statuses, timesheets, and sampling was scattered across different systems and communication channels. This left clients without a clear overview and made it time-consuming to find the right information. The challenge was to bring this fragmented information together into a clear and logical whole, tailored to different types of users.",
      role: "Senior UX Designer, responsible for guiding and executing the full UX process: from research and problem definition to concept development, validation, and delivery, in close collaboration with stakeholders and the development team.",
      tasks: [
        "Conducting user research and interviews with different client types",
        "Aligning with internal stakeholders on requirements, constraints, and priorities",
        "Developing and iteratively refining concepts and flows",
        "Validating designs with users and incorporating feedback",
        "Collaborating within an agile team during design and implementation",
      ],
      decisions: [
        "Designed a dashboard approach with dossiers as the central structure",
        "Accounted for different user roles (procurement, sales, logistics) and their information needs",
        "Prioritized progress and status overviews based on user feedback",
        "Ensured clear information hierarchy and predictable navigation",
      ],
      outcome: "A clear client portal where clients can centrally view their dossiers (purchases, sales, receiving, and progress), barge statuses, timesheets, and sample status. The portal provides a single, clear access point to relevant logistics information, giving clients better oversight and reducing their dependence on separate systems and communication.",
      images: [
        { src: "/images/projects/peterson/dossiers-overview.png", alt: "Dossiers overview showing list of vessels, warehouses and depots with status and progress", caption: "Dossiers overview: all dossiers with type, client, product, and progress" },
        { src: "/images/projects/peterson/dossier-progress.png", alt: "Dossier progress view with dual column layout showing WT4 and WT3 loading schedules", caption: "Progress view: real-time status per loading schedule" },
        { src: "/images/projects/peterson/dossier-barge-detail.png", alt: "Barge shipment detail panel showing order, certification, barge capacity and contact information", caption: "Barge detail: shipment information, certification, and contact details" },
        { src: "/images/projects/peterson/dossier-sales.png", alt: "Sales view with expanded Leievoeders section showing delivery details per barge", caption: "Sales view: delivery details per barge with contract information" },
        { src: "/images/projects/peterson/dossier-sales-barge.png", alt: "Sales view with connected barge detail panel open alongside delivery information", caption: "Sales view with connected barge: all information in one place" },
      ],
    },
    {
      id: "warp-ai",
      title: "Internal AI Projects",
      subtitle: "WeAreReasonablePeople",
      description: "Development of internal AI tools including a mail bot and a component library that converts Figma designs into reusable front-end components.",
      company: "WeAreReasonablePeople",
      image: "/images/projects/warp-ai.jpg",
      tags: ["AI", "Component Library", "Figma", "Cursor", "Front-end"],
      featured: true,
      context: "WARP invests in internal AI initiatives to improve workflows. One of these initiatives bridges the gap between design and development.",
      challenge: "Manually converting Figma designs to front-end code is time-consuming and error-prone. Additionally, there was a need for smarter internal tooling, such as an AI-powered mail bot.",
      role: "Senior UX Designer and initiator, responsible for both the design and implementation of the component library.",
      tasks: [
        "Designing the component library architecture",
        "Translating Figma components into reusable front-end components via Cursor",
        "Collaborating with engineers for design-code alignment",
        "Contributing to the mail bot and other internal AI projects",
      ],
      decisions: [
        "Chose an AI-assisted workflow (Cursor) for faster design-to-code conversion",
        "Set up the component library as a reusable framework for internal projects",
        "Worked closely with engineers to ensure consistency between design and implementation",
      ],
      outcome: "A working component library that converts Figma designs into reusable front-end components using AI assistance for internal projects.",
    },
    {
      id: "wk-design-systems",
      title: "Design Systems",
      subtitle: "Wolters Kluwer",
      description: "Built two separate design systems for different teams: one for a German team and two for a European cloud team.",
      company: "Wolters Kluwer",
      image: "/images/projects/wk-design-systems.jpg",
      tags: ["Design Systems", "Enterprise", "Component Libraries", "Documentation"],
      featured: true,
      context: "Wolters Kluwer develops cloud solutions deployed across multiple European countries. Within the organization, different product teams were working without a shared design system, leading to inconsistencies in UI, interaction, and ways of working across products and teams.",
      challenge: "Each team had its own requirements, workflows, and technical constraints. There was no standardized approach for components, typography, color usage, and interaction patterns. At the same time, the solutions needed to remain flexible enough for future expansion and align with existing development pipelines and tooling.",
      role: "Senior UX Designer, responsible for guiding and executing the process from research and analysis to design, documentation, and ongoing development, in collaboration with multiple teams and stakeholders.",
      tasks: [
        "Researching and analyzing needs, workflows, and constraints per team",
        "Designing and setting up component libraries",
        "Documenting guidelines for consistent usage",
        "Aligning with stakeholders to increase adoption and support",
        "Maintenance and iterative development of the systems",
      ],
      decisions: [
        "Deliberately chose two separate design systems instead of one universal solution, due to vastly different team needs",
        "Applied a modular setup to enable component reuse where it made sense",
        "Developed style guides for typography, colors, icons, and interaction patterns",
        "Set up Figma libraries and collaboration with existing tools and workflows",
      ],
      outcome: "Improved consistency within both teams and their products, while maintaining flexibility per context. Design and development teams could work faster thanks to reusable components and clear guidelines. Additionally, collaboration between design and development improved through a shared language and structure.",
      images: [
        { src: "/images/projects/wk-design-systems/getting-started-content.png", alt: "Detailed getting started guide covering component creation, naming conventions, and auto layout", caption: "TaskFlow Library v1.3: component and template library" },
        { src: "/images/projects/wk-design-systems/action-bar-component.png", alt: "Action Bar component documentation showing all variants and configurations", caption: "Guidelines: component creation, naming, and auto layout" },
        { src: "/images/projects/wk-design-systems/taskflow-cover.png", alt: "TaskFlow Library v1.3 — Components & Templates cover page", caption: "Action Bar component: all variants and configurations" },
      ],
    },
    {
      id: "wk-portable-business",
      title: "Portable Business Components",
      subtitle: "Wolters Kluwer",
      description: "Design of reusable business components for European cloud products deployed across multiple countries.",
      company: "Wolters Kluwer",
      image: "/images/projects/wk-pbc.jpg",
      tags: ["Enterprise UX", "Components", "Multi-market", "Cloud"],
      featured: false,
      context: "Wolters Kluwer deploys cloud solutions across multiple European countries. There was a need for reusable business components that function consistently across different products and markets, enabling product teams to work with standardised solutions rather than designing or developing new functionality each time.",
      challenge: "Business logic and UX patterns differed per country and product. The challenge was to design components flexible enough for local adaptations while keeping core functionality and user experience consistent across all products.",
      role: "Senior UX Designer within the core product team, with a guiding role in designing and developing reusable business components as part of the broader design system.",
      tasks: [
        "Designing and developing reusable business components",
        "Aligning with product and design teams across different countries",
        "Prototyping and validating component behaviour and interaction",
        "Contributing to and aligning with the central design system",
      ],
      decisions: [
        "Notification system for consistent user alerts and status updates",
        "Standard tables for displaying and managing structured data",
        "Reporting system for data insights and progress tracking",
        "Additional business components for recurring patterns across products",
      ],
      outcome: "A set of reusable business components consistently deployed across multiple European markets. Product teams have a solid foundation for commonly used functionality, reducing development time and improving user experience consistency across products.",
      images: [
        { src: "/images/projects/wk-pbc/notification-components-1.png", alt: "Notification system with panel, states and interaction design in Figma", caption: "Notification system: panel, message types and interaction" },
        { src: "/images/projects/wk-pbc/notification-components-2.png", alt: "Notification component variants and states in Figma design system", caption: "Notification component: variants, states and structure" },
        { src: "/images/projects/wk-pbc/data-grid-1.png", alt: "Advanced Data Grid portable business component implementation", caption: "Advanced Data Grid: portable business component" },
        { src: "/images/projects/wk-pbc/data-grid-2.webp", alt: "Advanced Data Grid component design in Figma with table cells and configurations", caption: "Advanced Data Grid: Figma design with cells and configurations" },
        { src: "/images/projects/wk-pbc/reporting-system-1.png", alt: "Reporting System with report template management interface", caption: "Reporting System: template management and document generation" },
        { src: "/images/projects/wk-pbc/reporting-system-2.png", alt: "Reporting System showing how to customize a report", caption: "Reporting System: customizing and configuring reports" },
      ],
    },
    {
      id: "wk-taskflow-ai",
      title: "TaskFlow & AI",
      subtitle: "Wolters Kluwer",
      description: "Designs for AI integration in TaskFlow, focused on improving user experience through warnings and summaries for documents.",
      company: "Wolters Kluwer",
      image: "/images/projects/wk-taskflow.jpg",
      tags: ["AI", "Product Design", "Enterprise", "Document Processing"],
      featured: false,
      context: "TaskFlow is a Wolters Kluwer product for document processing and workflow automation. Within the product, an opportunity arose to add AI functionality to better support users in submitting, checking, and processing documents.",
      challenge: "AI functionality needed to be integrated in a way that is understandable and accessible, without disrupting existing workflows. Additionally, the designs needed to be scalable so they could be easily extended and integrated once the underlying AI functionality became available.",
      role: "Senior UX Designer, responsible for exploring and designing AI support within the existing workflow, in close collaboration with stakeholders and product teams.",
      tasks: [
        "Designing notifications for missing or incorrect documents",
        "Designing summaries of uploaded documents",
        "Developing scalable UX patterns for future AI features",
        "Aligning and validating concepts with stakeholders",
      ],
      decisions: [
        "Designed AI as a supportive tool, not as a replacement for the user",
        "Strong focus on understandability and predictable behaviour within existing workflows",
        "Proactive notifications used to timely warn users about missing documents",
        "Designed with an eye on future extension and reuse",
      ],
      outcome: "Designs delivered ready for integration once AI functionality becomes available. The focus is on clear warnings, concise summaries, and proactive support, without disrupting the existing user flow.",
      images: [
        { src: "/images/projects/wk-taskflow-ai/taskflow-ai-1.webp", alt: "Detail of proactive AI warning for missing documents", caption: "Proactive AI warning: detail of missing documents" },
        { src: "/images/projects/wk-taskflow-ai/taskflow-ai-2.png", alt: "Proactive AI warning for missing documents in the total design", caption: "Proactive AI warning: in the total design" },
        { src: "/images/projects/wk-taskflow-ai/check-with-ai-1.png", alt: "TaskFlow AI chat interface with document analysis and source references", caption: "TaskFlow AI: document analysis with chat interface and source references" },
        { src: "/images/projects/wk-taskflow-ai/check-with-ai-2.png", alt: "TaskFlow AI chat detail showing document analysis conversation", caption: "TaskFlow AI: detail of document analysis" },
      ],
    },
    {
      id: "unilever-food-solutions",
      title: "Unilever Food Solutions App",
      subtitle: "Unilever",
      description: "UX design and optimization of the Food Solutions app serving professional chefs across 70+ countries.",
      company: "Unilever",
      image: "/images/projects/unilever-fs.jpg",
      tags: ["Global", "Mobile Apps", "Localization", "B2B"],
      featured: false,
      context: "Unilever Food Solutions supports professional chefs worldwide with recipes, product information, and business tools. The platform is used in more than 70 countries, each with their own languages, culinary traditions, and working methods.",
      challenge: "The challenge was to provide a consistent user experience across more than 70 countries while maintaining sufficient room for local adaptations in language, content, and usage. At the same time, both Android and iOS apps needed to be optimized to better align with actual usage per region.",
      role: "UX Designer, later Lead UX Designer. Responsible for the UX of innovations, websites, and mobile apps, with an increasing focus on strategic direction, alignment, and team guidance.",
      tasks: [
        "Defining and monitoring UX and design strategies",
        "Facilitating CX and UX workshops with international stakeholders",
        "Optimizing websites and Android and iOS apps",
        "Developing low- and high-fidelity prototypes",
        "Planning and conducting user research across different markets",
      ],
      decisions: [
        "Setting up a localization framework that combines global consistency with local flexibility",
        "Prioritizing improvements in mobile apps based on usage data per region",
        "Using design thinking workshops to develop new ideas and innovations",
        "Aligning UX choices across multiple platforms and markets",
      ],
      outcome: "An optimized digital experience for professional chefs in more than 70 countries. Improved Android and iOS apps and a consistent design strategy across all platforms, with room for local differences in usage and context.",
      images: [
        { src: "/images/projects/unilever-fs/unilever-app-academy.png", alt: "Unilever Food Solutions mobile app Academy section showing video courses, training progress, and world cuisines", caption: "Unilever Food Solutions App: Academy section with video courses", mobileFrame: true },
        { src: "/images/projects/unilever-fs/unilever-app-home.png", alt: "Unilever Food Solutions mobile app home screen showing content feed with recipes, academy videos, promotions, and loyalty program", caption: "Unilever Food Solutions App: home screen with content feed and loyalty program", mobileFrame: true },
      ],
    },
    {
      id: "anwb-wegenwacht",
      title: "Waar Is Mijn Wegenwacht",
      subtitle: "ANWB",
      description: "Redesign of the web app that lets stranded motorists track their roadside assistance and receive relevant notifications.",
      company: "ANWB",
      image: "/images/projects/anwb-wegenwacht.jpg",
      tags: ["Consumer", "Mobile", "Service Design", "User Research"],
      featured: false,
      context: "For the ANWB roadside assistance app, I designed a status overview that gives users real-time insight into the progress of their breakdown report. Previously, the app did not offer the ability to actively inform users about the status of their request, which led to uncertainty while waiting.",
      challenge: "To arrive at an appropriate solution, the following was done:",
      role: "UX Designer, responsible for the UX of all applications within the roadside assistance department.",
      tasks: [
        "Conducted user research to gain insight into the needs and concerns of users while waiting for roadside assistance. Uncertainty about wait time and lack of control clearly emerged.",
        "Investigated technical constraints in collaboration with the development team. Based on this, a web app integration was chosen instead of a native solution, so the functionality could be realized within the existing infrastructure.",
        "Iteratively designed and validated with a user panel, using feedback to further simplify and clarify the interface.",
      ],
      decisions: [
        "A clear status display via a step-by-step interface",
        "The ability to track the roadside assistance live on the map when nearby",
        "Insight into the breakdown report, with options to modify or cancel the report",
      ],
      outcome: "Less uncertainty for users thanks to real-time status information. Less phone contact with customer service due to better insight into progress. Improved user experience, as users experience more control. More efficient handling of breakdown reports.",
      images: [
        { src: "/images/projects/anwb-wegenwacht/waar-is-mijn-wegenwacht.png", alt: "Three mobile screens showing the ANWB roadside assistance tracking app with step-by-step status updates and live map tracking", caption: "Waar Is Mijn Wegenwacht: status overview with step-by-step interface and live tracking" },
      ],
    },
  ],

  testimonials: [
    {
      id: "nazar",
      name: "Nazar Dalyk",
      title: "User Experience Designer @ Trinetix",
      company: "Trinetix",
      linkedIn: "https://www.linkedin.com/in/nazar-dalyk-44b741106",
      quote:
        "Ruud is a highly skilled designer and a great teammate. He consistently brings fresh ideas to our brainstorming sessions. With strong attention to detail and excellent problem-solving skills, he always delivers high-quality work. Beyond his technical abilities, Ruud is supportive and always ready to help. He's a true team player who makes collaboration easy and enjoyable. It's been a pleasure working with him!",
    },
    {
      id: "yara",
      name: "Yara Jalal",
      title: "Business Group Agile Lead @ Unilever",
      company: "Unilever",
      linkedIn: "https://www.linkedin.com/in/yara-jalal-92a2ab94",
      quote:
        "I've had the pleasure of working closely with Ruud on several challenging projects over the past years. Ruud is a very optimistic and fun person with a can-do attitude that is contagious. I've learned a great deal from Ruud about user research, personas, testing with tools like Hotjar and creating prototypes. He uses his passion for user-centricity and understanding of the business needs to demonstrate the value of design thinking.",
    },
    {
      id: "adriaan",
      name: "Adriaan Oudijk",
      title: "Design Research Lead | UX Research Lead",
      company: "ANWB",
      quote:
        "Ruud is really good at solving wicked problems. He's an excellent UX Designer with the ability to deliver mindblowing graphic designs. His nonchalant attitude made him seem lazy to me, at first. Later on I noticed that he's just extremely efficient at his work, which allows him to take full advantage of the \"do something else\"-fase in a creative process.",
    },
  ],

  education: [
    {
      id: "cmd",
      degree: "Bachelor's degree",
      field: "Communication and Multimedia Design",
      institution: "Haagse Hogeschool Den Haag",
      years: "2010 - 2016",
    },
    {
      id: "mbo",
      degree: "MBO",
      field: "Graphic Design",
      institution: "Grafisch Lyceum Rotterdam",
      years: "2005 - 2010",
    },
  ],
};

// ------------------------------------
// Export
// ------------------------------------

const portfolioDataByLanguage: Record<Language, PortfolioData> = { nl, en };

export function getPortfolioData(language: Language): PortfolioData {
  return portfolioDataByLanguage[language];
}

// Default export for backwards compatibility
export const portfolioData = en;
export default portfolioData;
