import { lazy } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { RootLayout } from '@/app/layout/RootLayout';
import { APP_ROUTES } from '@/app/config/routes';
import { FeatureFlagGuard } from '@/app/guards/FeatureFlagGuard';

const HomePage = lazy(() => import('@/features/home/views/HomePage').then((m) => ({ default: m.HomePage })));
const GardenPage = lazy(() =>
  import('@/features/garden/views/GardenPage').then((m) => ({ default: m.GardenPage })),
);
const WritingPage = lazy(() =>
  import('@/features/writing/views/WritingPage').then((m) => ({ default: m.WritingPage })),
);
const EssayPage = lazy(() => import('@/features/writing/views/EssayPage').then((m) => ({ default: m.EssayPage })));
const AboutPage = lazy(() => import('@/features/about/views/AboutPage').then((m) => ({ default: m.AboutPage })));

const router = createBrowserRouter([
  {
    path: APP_ROUTES.home,
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: APP_ROUTES.garden.slice(1),
        element: (
          <FeatureFlagGuard feature="gardenEnabled">
            <GardenPage />
          </FeatureFlagGuard>
        ),
      },
      {
        path: APP_ROUTES.writing.slice(1),
        element: (
          <FeatureFlagGuard feature="writingEnabled">
            <WritingPage />
          </FeatureFlagGuard>
        ),
      },
      {
        path: `${APP_ROUTES.writing.slice(1)}/:slug`,
        element: (
          <FeatureFlagGuard feature="writingEnabled">
            <EssayPage />
          </FeatureFlagGuard>
        ),
      },
      { path: APP_ROUTES.about.slice(1), element: <AboutPage /> },
      { path: APP_ROUTES.now.slice(1), element: <AboutPage variant="now" /> },
      { path: '*', element: <Navigate to={APP_ROUTES.home} replace /> },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
