export const APP_ROUTES = {
  home: '/',
  garden: '/garden',
  writing: '/writing',
  writingDetail: (slug: string) => `/writing/${slug}`,
  about: '/about',
  now: '/now',
} as const;
