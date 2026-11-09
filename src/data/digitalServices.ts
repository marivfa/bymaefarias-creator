export type Locale = 'en' | 'es';
export type Localized = Record<Locale, string>;
export type DigitalService = {
  id: string;
  name: Localized;
  title: Localized;
  paragraphs: Record<Locale, string[]>;
  image?: { src: string; alt: Localized }; // Optional: omit to hide image
};

// Page-level copy stays with the services data, not inside the Astro component.
export const digitalServicesCopy: Record<Locale, {
  eyebrow: string; title: string; body: string; heroNote: string;
  sectionHeading: string; projectEyebrow: string; viewProject: string;
  portfolioPrompt: string; portfolioLink: string; portfolioLabel: string; serviceCta: string;
}> = {
  en: {
    eyebrow: 'CREATIVE & DIGITAL SERVICES',
    title: 'A little creative help. A little tech support.',
    body: 'Helping creators and small businesses bring their ideas to life, one project at a time.',
    heroNote: 'from ideas to something real',
    sectionHeading: 'WHAT I CAN HELP WITH',
    projectEyebrow: 'SELECTED DIGITAL PROJECT',
    viewProject: 'View project',
    portfolioPrompt: 'Looking for content collaborations? Explore my UGC portfolio.',
    portfolioLink: 'View UGC Portfolio',
    portfolioLabel: 'Content collaborations',
    serviceCta: 'Let’s Talk About Your Project'
  },
  es: {
    eyebrow: 'SERVICIOS CREATIVOS Y DIGITALES',
    title: 'Un poco de ayuda creativa. Un poco de apoyo tecnológico.',
    body: 'Ayudo a creadores y pequeños negocios a hacer realidad sus ideas, un proyecto a la vez.',
    heroNote: 'de las ideas a algo real',
    sectionHeading: 'EN QUÉ PUEDO AYUDARTE',
    projectEyebrow: 'PROYECTO DESTACADO',
    viewProject: 'Ver proyecto',
    portfolioPrompt: '¿Buscas colaboraciones de contenido? Explora mi portafolio UGC.',
    portfolioLink: 'Ver portafolio UGC',
    portfolioLabel: 'Colaboraciones de contenido',
    serviceCta: 'Hablemos de tu proyecto'
  }
};

// Update text and optional images here; layout stays unchanged.
export const digitalServices: DigitalService[] = [
  {
    id: 'short-form-video-editing',
    name: { en: 'Short-Form Video Editing', es: 'Edición de videos cortos' },
    title: { en: "You film it. I'll help bring it together.", es: 'Tú grabas. Yo te ayudo a darle forma.' },
    paragraphs: {
      en: [
        'Simple, thoughtful video editing for Reels, TikToks, product videos and everyday content.',
        "From trimming clips and adding captions to music and voiceovers, I help turn your footage into content that's ready to share."
      ],
      es: [
        'Edición sencilla y cuidada para Reels, TikToks, videos de producto y contenido del día a día.',
        'Desde recortar clips y añadir subtítulos hasta incorporar música y voces en off, te ayudo a convertir tus grabaciones en contenido listo para compartir.'
      ]
    }
    // To add an image later: image: { src: '/images/services/video-editing.jpg', alt: { en: '...', es: '...' } }
  },
  {
    id: 'digital-setup-guidance',
    name: { en: 'Digital Setup & Guidance', es: 'Configuración y orientación digital' },
    title: { en: 'Making digital things a little easier.', es: 'Hagamos que lo digital sea un poco más sencillo.' },
    paragraphs: {
      en: [
        'Need help setting up a website, organizing your digital tools or figuring out how to make a platform work for your business?',
        'With a background in software development, I provide practical support to help you find, set up and understand solutions that fit your needs.',
        "Every project is different, so we'll start by figuring out what you're trying to accomplish."
      ],
      es: [
        '¿Necesitas ayuda para configurar un website, organizar tus herramientas digitales o entender cómo aprovechar una plataforma para tu negocio?',
        'Con experiencia en desarrollo de software, ofrezco apoyo práctico para encontrar, configurar y comprender soluciones que se adapten a tus necesidades.',
        'Cada proyecto es diferente, así que empezaremos por entender qué quieres lograr.'
      ]
    }
    // To add an image later: image: { src: '/images/services/digital-setup.jpg', alt: { en: '...', es: '...' } }
  }
];

// Hidden until approved content is available. Do not enable with client work without permission.
export const selectedDigitalProject: {
  enabled: boolean;
  title: Localized;
  description: Localized;
  image?: { src: string; alt: Localized };
  url?: string;
} = {
  enabled: false,
  title: { en: 'Selected Digital Project', es: 'Proyecto digital destacado' },
  description: { en: '', es: '' }
};
