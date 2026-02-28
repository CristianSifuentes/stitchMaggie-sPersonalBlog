import { useEffect } from 'react';
import { useThemeStore } from '@/shared/services/themeStore';

export function useInitializeApp() {
  const setTheme = useThemeStore((state) => state.setTheme);

  useEffect(() => {
    const userPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(userPreference);
  }, [setTheme]);
}
