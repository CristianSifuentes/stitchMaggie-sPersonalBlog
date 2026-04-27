import { ReactNode } from 'react';
import { useInitializeApp } from '@/shared/hooks/useInitializeApp';

interface AppBootstrapProps {
  children: ReactNode;
}

export function AppBootstrap({ children }: AppBootstrapProps) {
  useInitializeApp();

  return children;
}
