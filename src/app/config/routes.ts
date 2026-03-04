export const APP_ROUTES = {
  home: '/',
  garden: '/garden',
  writing: '/garden/essays',
  writingDetail: (slug: string) => `/garden/essays/${slug}`,
  notes: '/garden/notes',
  podcasts: '/garden/podcasts',
  now: '/now',
  about: '/about',
  library: '/library',
  smidgeons: '/smidgeons',
} as const;
