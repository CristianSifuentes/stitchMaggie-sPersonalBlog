import { Link, NavLink } from 'react-router-dom';
import { APP_ROUTES } from '@/app/config/routes';
import { useTheme } from '@/shared/hooks/useTheme';

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link className="logo" to={APP_ROUTES.home} aria-label="Home">
          <span className="logo-leaf">✦</span>
          <span className="logo-mark">M</span>
          <span className="logo-leaf">✦</span>
        </Link>

        <nav className="main-nav">
          <div className="nav-dropdown">
            <span>The Garden ▾</span>
            <div className="nav-dropdown-menu">
              <NavLink to={APP_ROUTES.garden}>Garden Home</NavLink>
              <NavLink to={APP_ROUTES.writing}>Essays</NavLink>
              <NavLink to={APP_ROUTES.notes}>Notes</NavLink>
              <NavLink to={APP_ROUTES.podcasts}>Podcasts</NavLink>
              <NavLink to={APP_ROUTES.library}>Library</NavLink>
              <NavLink to={APP_ROUTES.smidgeons}>Smidgeons</NavLink>
            </div>
          </div>
          <NavLink to={APP_ROUTES.now}>Now</NavLink>
          <NavLink to={APP_ROUTES.about}>About</NavLink>
          <button type="button" aria-label="Toggle dark mode" className="theme-btn" onClick={toggleTheme}>
            {theme === 'light' ? '◐' : '◑'}
          </button>
        </nav>
      </div>
    </header>
  );
}
