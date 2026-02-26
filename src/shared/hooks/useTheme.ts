import { useLayoutEffect } from 'react';
import { useThemeStore } from '@/shared/services/themeStore';

export function useTheme() {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return { theme, toggleTheme };
}
