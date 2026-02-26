import { Link, NavLink } from 'react-router-dom';
import { APP_ROUTES } from '@/app/config/routes';
import { useTheme } from '@/shared/hooks/useTheme';

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="container nav-wrap">
        <Link to={APP_ROUTES.home} className="brand" aria-label="Go to homepage">
          <span className="brand-mark">M</span>
        </Link>

        <nav className="nav-links">
          <NavLink to={APP_ROUTES.home}>Work</NavLink>
          <NavLink to={APP_ROUTES.writing}>Writing</NavLink>
          <NavLink to={APP_ROUTES.about}>About</NavLink>
          <button className="theme-toggle" onClick={toggleTheme} type="button" aria-label="Toggle color scheme">
            {theme === 'light' ? '☾' : '☀'}
          </button>
        </nav>
      </div>
    </header>
  );
}
