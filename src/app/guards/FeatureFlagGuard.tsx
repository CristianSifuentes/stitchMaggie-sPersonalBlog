import { Navigate } from 'react-router-dom';
import { APP_ROUTES } from '@/app/config/routes';
import { useFeatureFlags } from '@/shared/hooks/useFeatureFlags';
import { ReactNode } from 'react';

interface FeatureFlagGuardProps {
  feature: keyof ReturnType<typeof useFeatureFlags>;
  children: ReactNode;
}

export function FeatureFlagGuard({ feature, children }: FeatureFlagGuardProps) {
  const flags = useFeatureFlags();

  if (!flags[feature]) {
    return <Navigate to={APP_ROUTES.home} replace />;
  }

  return children;
}
