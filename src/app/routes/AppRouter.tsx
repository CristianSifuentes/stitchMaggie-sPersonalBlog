import { lazy } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { RootLayout } from '@/app/layout/RootLayout';
import { APP_ROUTES } from '@/app/config/routes';
import { FeatureFlagGuard } from '@/app/guards/FeatureFlagGuard';

const HomePage = lazy(() => import('@/features/home/views/HomePage').then((m) => ({ default: m.HomePage })));
const GardenPage = lazy(() => import('@/features/garden/views/GardenPage').then((m) => ({ default: m.GardenPage })));
const WritingPage = lazy(() => import('@/features/writing/views/WritingPage').then((m) => ({ default: m.WritingPage })));
const EssayPage = lazy(() => import('@/features/writing/views/EssayPage').then((m) => ({ default: m.EssayPage })));
const NotesPage = lazy(() => import('@/features/notes/views/NotesPage').then((m) => ({ default: m.NotesPage })));
const PatternsPage = lazy(() => import('@/features/patterns/views/PatternsPage').then((m) => ({ default: m.PatternsPage })));
const TalksPage = lazy(() => import('@/features/talks/views/TalksPage').then((m) => ({ default: m.TalksPage })));
const PodcastsPage = lazy(() => import('@/features/podcasts/views/PodcastsPage').then((m) => ({ default: m.PodcastsPage })));
const NowPage = lazy(() => import('@/features/now/views/NowPage').then((m) => ({ default: m.NowPage })));
const AboutPage = lazy(() => import('@/features/about/views/AboutPage').then((m) => ({ default: m.AboutPage })));
const LibraryPage = lazy(() => import('@/features/library/views/LibraryPage').then((m) => ({ default: m.LibraryPage })));
const SmidgeonsPage = lazy(() => import('@/features/smidgeons/views/SmidgeonsPage').then((m) => ({ default: m.SmidgeonsPage })));

const router = createBrowserRouter([
  {
    path: APP_ROUTES.home,
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: APP_ROUTES.garden.slice(1), element: <GardenPage /> },
      {
        path: APP_ROUTES.writing.slice(1),
        element: (
          <FeatureFlagGuard feature="writingEnabled">
            <WritingPage />
          </FeatureFlagGuard>
        ),
      },
      {
        path: APP_ROUTES.writingDetail('').slice(1) + ':slug',
        element: (
          <FeatureFlagGuard feature="writingEnabled">
            <EssayPage />
          </FeatureFlagGuard>
        ),
      },
      { path: APP_ROUTES.notes.slice(1), element: <NotesPage /> },
      { path: APP_ROUTES.patterns.slice(1), element: <PatternsPage /> },
      { path: APP_ROUTES.talks.slice(1), element: <TalksPage /> },
      { path: APP_ROUTES.podcasts.slice(1), element: <PodcastsPage /> },
      { path: APP_ROUTES.now.slice(1), element: <NowPage /> },
      { path: APP_ROUTES.about.slice(1), element: <AboutPage /> },
      { path: APP_ROUTES.library.slice(1), element: <LibraryPage /> },
      { path: APP_ROUTES.smidgeons.slice(1), element: <SmidgeonsPage /> },
      { path: '*', element: <Navigate to={APP_ROUTES.home} replace /> },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
