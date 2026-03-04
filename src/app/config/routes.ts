export const APP_ROUTES = {
  home: '/',
  garden: '/garden',
  writing: '/garden/essays',
  writingDetail: (slug: string) => `/garden/essays/${slug}`,
  notes: '/garden/notes',
  patterns: '/garden/patterns',
  podcasts: '/garden/podcasts',
  now: '/now',
  about: '/about',
  library: '/library',
  smidgeons: '/smidgeons',
} as const;
