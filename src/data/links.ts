import { resources, type ResourceLocale, type LocalizedText } from './resources';
import { site } from './site';

type LinkIcon = 'briefcase' | 'monitor' | 'gift' | 'heart' | 'book';
type LinkItem = { id: string; title: LocalizedText; icon: LinkIcon; type: 'internal' | 'resource'; active: boolean; path?: Record<ResourceLocale,string>; resourceId?: string; affiliate?: boolean };

// Change order, active, labels, or add items here; do not edit the component.
export const links: LinkItem[] = [
  { id: 'portfolio', title: { en: 'UGC Portfolio & Collaborations', es: 'Portafolio UGC y colaboraciones' }, icon: 'briefcase', type: 'internal', active: true, path: { en: '/#work', es: '/es/#work' } },
  { id: 'services', title: { en: 'Creative & Digital Services', es: 'Servicios creativos y digitales' }, icon: 'monitor', type: 'internal', active: true, path: { en: '/services/', es: '/es/services/' } },
  { id: 'resources', title: { en: 'Free Printables & Resources', es: 'Imprimibles y recursos gratuitos' }, icon: 'gift', type: 'internal', active: true, path: { en: '/resources/', es: '/es/resources/' } },
  { id: 'amazon', title: { en: 'My Amazon Favorites', es: 'Mis favoritos de Amazon' }, icon: 'heart', type: 'resource', active: true, resourceId: 'amazon-storefront' },
  { id: 'planners', title: { en: 'Planners & Journals', es: 'Planners y journals' }, icon: 'book', type: 'resource', active: true, resourceId: 'planners-journals' },
];

export const linksCopy = {
  en: { heading: "I'm Mari ♡", subtitle: 'Food · Motherhood · Everyday Lifestyle', description: 'A little bit of what I create, love & share.', ctaPrompt: 'Have a project in mind?', cta: 'Work with Mari', affiliate: 'Some links may be affiliate links. I may earn a commission at no extra cost to you.', language: 'Español', pageTitle: 'Links | byMaeFarias', pageDescription: 'Explore Mari’s UGC portfolio, services, free resources, and everyday favorites.' },
  es: { heading: 'Soy Mari ♡', subtitle: 'Comida · Maternidad · Estilo de vida', description: 'Un poquito de lo que creo, amo y comparto.', ctaPrompt: '¿Tienes un proyecto en mente?', cta: 'Trabaja conmigo', affiliate: 'Algunos enlaces pueden ser de afiliados. Podría recibir una comisión sin costo adicional para ti.', language: 'English', pageTitle: 'Enlaces | byMaeFarias', pageDescription: 'Explora el portafolio UGC de Mari, sus servicios, recursos gratuitos y favoritos.' }
} as const;

export function resolveLink(item: LinkItem, lang: ResourceLocale) {
  if (!item.active) return null;
  if (item.type === 'internal') return item.path?.[lang] ? { ...item, url: item.path[lang], external: false, affiliate: false } : null;
  const resource = resources.find((r) => r.id === item.resourceId && r.visible);
  const link = resource?.links.find((l) => !!l.url);
  return link?.url ? { ...item, url: link.url, external: !!link.external, affiliate: !!link.affiliate } : null;
}

// Only add verified social profiles here. Email and Instagram come from site.ts.
export const linksSocial = [
  { id: 'instagram', url: site.instagram, label: 'Instagram', active: true },
  { id: 'tiktok', url: '', label: 'TikTok', active: false },
  { id: 'email', url: `mailto:${site.email}`, label: 'Email', active: true }
];
