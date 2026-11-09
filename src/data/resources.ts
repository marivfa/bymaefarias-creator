// Edit only this file to add resources or publish links. No URLs are assumed.
export type ResourceLocale = 'en' | 'es';
export type LocalizedText = Record<ResourceLocale, string>;
export type ResourceLink = { label: LocalizedText; url?: string; external?: boolean; affiliate?: boolean };
export type Resource = {
  id: string;
  category: 'free-downloads' | 'amazon-favorites' | 'planners-journals' | 'merch';
  visible: boolean;
  title: LocalizedText;
  description: LocalizedText;
  image?: { src: string; alt: LocalizedText };
  links: ResourceLink[];
};

export const resources: Resource[] = [
  {
    id: 'farm-animals-coloring-book', category: 'free-downloads', visible: true,
    title: { en: 'Farm Animals Coloring Book', es: 'Mi libro de colorear: Granja' },
    description: {
      en: 'A simple printable coloring book for little hands. Made for everyday play, travel and quiet moments.',
      es: 'Un libro de colorear imprimible para pequeñas manitos. Ideal para jugar en casa, viajar y disfrutar de momentos tranquilos.'
    },
    image: {
      src: '/images/resources/colorbook-granja.png',
      alt: {
        en: 'Travel activity printable preview',
        es: 'Vista previa de actividades para viajar'
      }
    },
    // Add a URL only AFTER the actual PDF exists in public/downloads/.
    // e.g. url: '/downloads/farm-animals-coloring-book.pdf'
    links: [{ label: { en: 'Download Free PDF', es: 'Descargar PDF gratis' } , url: '/downloads/colorbook-granja.pdf'}]
  },
  {
    id: 'christmas-coloring-book', category: 'free-downloads', visible: true,
    title: { en: 'Christmas Coloring Book', es: 'Mi libro de colorear: Granja' },
    description: {
      en: 'A simple printable coloring book for little hands. Made for everyday play, travel and quiet moments.',
      es: 'Un libro de colorear imprimible para pequeñas manitos. Ideal para jugar en casa, viajar y disfrutar de momentos tranquilos.'
    },
    image: {
      src: '/images/resources/colorbook-navidad.png',
      alt: {
        en: 'Travel activity printable preview',
        es: 'Vista previa de actividades para viajar'
      }
    },
    // Add a URL only AFTER the actual PDF exists in public/downloads/.
    // e.g. url: '/downloads/farm-animals-coloring-book.pdf'
    links: [{ label: { en: 'Download Free PDF', es: 'Descargar PDF gratis' }, url: '/downloads/colorbook-navidad.pdf' }]
  },
  {
    id: 'amazon-storefront', category: 'amazon-favorites', visible: true,
    title: { en: 'Amazon Favorites', es: 'Mis favoritos de Amazon' },
    description: {
      en: 'A few everyday favorites and helpful finds, all organized in my Amazon Storefront.',
      es: 'Algunos favoritos del día a día y descubrimientos útiles, organizados en mi tienda de Amazon.'
    },
    // Add your real Storefront URL and set affiliate: true if applicable.
    links: [{ label: { en: 'Explore my favorites', es: 'Ver mis favoritos' }, external: true, affiliate: true , url: 'https://www.amazon.com/shop/bymaefarias?ccs_id=62683792-296d-4211-afca-573098a654d5'}]
  },
  {
    id: 'planners-journals', category: 'planners-journals', visible: true,
    title: { en: 'Planners & Journals', es: 'Planners y journals' },
    description: {
      en: "A small collection of planners and journals I've created along the way.",
      es: 'Una pequeña colección de planners y journals que he creado.'
    },
    // Prefer a single Amazon author/collection link; otherwise add a few individual links here.
    links: [{ label: { en: 'Explore the collection', es: 'Explorar la colección' }, external: true , url: 'https://www.amazon.com/stores/author/B0GDRVVYL2/allbooks?_encoding=UTF8&ref_=aufs_ap_ahdr_dsk_ab&pd_rd_w=NmRbn&content-id=amzn1.sym.7e190e19-9f6f-4df8-807a-5a7608594741&pf_rd_p=7e190e19-9f6f-4df8-807a-5a7608594741&pf_rd_r=142-4402055-9483343&pd_rd_wg=VKRNo&pd_rd_r=67de3fa7-97f0-44e3-b71f-07140fa9dedd&ccs_id=965e626a-cdcd-4fac-bc02-bb0df3533114'}]
  }
  // Future merch: add a resource with category: 'merch' and visible: false.
];

export const resourceSections = [
  { id: 'free-downloads', label: { en: 'Free Downloads', es: 'Descargas gratuitas' } },
  { id: 'amazon-favorites', label: { en: 'Amazon Favorites', es: 'Favoritos de Amazon' } },
  { id: 'planners-journals', label: { en: 'Planners & Journals', es: 'Planners y journals' } }
] as const;

// All Resources page UI translations live here.
export const resourcesCopy: Record<ResourceLocale, { eyebrow: string; title: string; lead: string; soon: string; affiliate: string; unavailable: string; heroNote: string }> = {
  en: {
    eyebrow: 'RESOURCES · BYMAEFARIAS', title: 'Little things worth sharing.',
    lead: "Free printables, everyday favorites, and a few things I've created along the way.",
    soon: 'Coming soon', affiliate: 'Affiliate disclosure: Some links may be affiliate links. I may earn a commission from qualifying purchases, at no additional cost to you.',
    unavailable: 'Link coming soon', heroNote: 'made to share ♡'
  },
  es: {
    eyebrow: 'RECURSOS · BYMAEFARIAS', title: 'Pequeñas cosas que vale la pena compartir.',
    lead: 'Imprimibles gratuitos, favoritos del día a día y algunas cosas que he creado en el camino.',
    soon: 'Próximamente', affiliate: 'Aviso de afiliados: Algunos enlaces pueden ser de afiliados. Podría recibir una comisión por compras elegibles, sin costo adicional para ti.',
    unavailable: 'Enlace próximamente', heroNote: 'hecho para compartir ♡'
  }
};
