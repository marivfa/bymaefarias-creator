export type PortfolioItem = {
  slug: string;
  title: { en: string; es: string };
  eyebrow: { en: string; es: string };
  reelUrl: string;
  videoSrc?: string;
  poster?: string;
};

export const portfolio: PortfolioItem[] = [
  {
    slug: 'funche',
    title: { en: 'Funche', es: 'Funche' },
    eyebrow: { en: 'Food · Organic integration', es: 'Food · Integración orgánica' },
    reelUrl: 'https://www.instagram.com/reel/DdNeCnpOL5I/',
    videoSrc: '/videos/funche.mp4',
    poster: '/images/posters/funche.jpg',
  },
  {
    slug: 'cooking-with-my-toddler',
    title: { en: 'Cooking with my toddler', es: 'Cocinando con mi toddler' },
    eyebrow: { en: 'Motherhood · Lifestyle', es: 'Maternidad · Lifestyle' },
    reelUrl: 'https://www.instagram.com/reel/DcufKbBu16b/',
    videoSrc: '/videos/cooking-with-toddler.mp4',
    poster: '/images/posters/cooking-with-toddler.jpg',
  },
  {
    slug: 'meal-prep',
    title: { en: 'Meal Prep', es: 'Meal Prep' },
    eyebrow: { en: 'Food · Product placement', es: 'Food · Product placement' },
    reelUrl: 'https://www.instagram.com/reel/DdHNPSmu1KK/',
    videoSrc: '/videos/meal-prep.mp4',
    poster: '/images/posters/meal-prep.jpg',
  },
  {
    slug: 'toddler-travel',
    title: { en: 'Toddler travel essentials', es: 'Esenciales de viaje con toddler' },
    eyebrow: { en: 'Motherhood · Everyday lifestyle', es: 'Maternidad · Vida cotidiana' },
    reelUrl: 'https://www.instagram.com/reel/Dcbn3NLxHX2/',
    videoSrc: '/videos/toddler-travel.mp4',
    poster: '/images/posters/toddler-travel.jpg',
  },
];

export const topReel = {
  slug: 'venezuela-150',
  title: { en: '$150 to enter Venezuela', es: '$150 para entrar a Venezuela' },
  description: {
    en: 'Organic storytelling about my travel experience in Venezuela.',
    es: 'Storytelling orgánico sobre mi experiencia viajando a Venezuela.'
  },
  reelUrl: 'https://www.instagram.com/reel/Dbv1PJaOCGn/',
  videoSrc: '/videos/venezuela-150.mp4',
  poster: '/images/posters/venezuela-150.jpg',
  stats: [
    { value: '286K+', label: { en: 'views', es: 'views' } },
    { value: '3.6K', label: { en: 'shares', es: 'shares' } },
    { value: '1.7K', label: { en: 'saves', es: 'saves' } },
    { value: '453', label: { en: 'follows', es: 'follows' } },
  ]
};
