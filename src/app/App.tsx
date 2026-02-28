import { Suspense } from 'react';
import { QueryProvider } from '@/app/providers/QueryProvider';
import { AppRouter } from '@/app/routes/AppRouter';
import { AppBootstrap } from '@/app/providers/AppBootstrap';
import { RoutePendingBoundary } from '@/shared/components/RoutePendingBoundary';

export function App() {
  return (
    <QueryProvider>
      <AppBootstrap>
        <Suspense fallback={<RoutePendingBoundary />}>
          <AppRouter />
        </Suspense>
      </AppBootstrap>
    </QueryProvider>
  );
}
