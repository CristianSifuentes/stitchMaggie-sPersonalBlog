import { Link, NavLink } from 'react-router-dom';
import { APP_ROUTES } from '@/app/config/routes';
import { useTheme } from '@/shared/hooks/useTheme';

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="container nav-wrap">
        <Link to={APP_ROUTES.home} className="brand" aria-label="Home">
          <svg width="30" height="24" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 15 L20 5 L20 25 Z" fill="#2CA9BC" />
            <path d="M15 25 V10 L22 18 L29 10 V25" stroke="#7e22ce" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </Link>

        <nav className="nav-links">
          <NavLink to={APP_ROUTES.garden}>The Garden</NavLink>
          <NavLink to={APP_ROUTES.now}>Now</NavLink>
          <NavLink to={APP_ROUTES.about}>About</NavLink>
          <button className="theme-toggle" onClick={toggleTheme} type="button" aria-label="Toggle color scheme">
            {theme === 'light' ? '◐' : '◑'}
          </button>
        </nav>
      </div>
    </header>
  );
}
