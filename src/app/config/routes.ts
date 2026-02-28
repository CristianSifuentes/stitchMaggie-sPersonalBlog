export const APP_ROUTES = {
  home: '/',
  garden: '/garden',
  writing: '/garden/essays',
  writingDetail: (slug: string) => `/garden/essays/${slug}`,
  notes: '/garden/notes',
  now: '/now',
  about: '/about',
  library: '/library',
  smidgeons: '/smidgeons',
} as const;
