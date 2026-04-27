import { Link } from 'react-router-dom';
import { APP_ROUTES } from '@/app/config/routes';
import { useLibrary } from '@/features/library/hooks/useLibrary';

export function LibraryPage() {
  const { data } = useLibrary();
  if (!data) return null;

  return (
    <section className="container library-page">
      <header>
        <div className="collection-breadcrumb">
          <span>{data.length.toString().padStart(2, '0')}</span>
          <Link to={APP_ROUTES.garden}>Back to Garden</Link>
        </div>
        <h1>Library | Antilibrary</h1>
        <p>Books I like the idea of having read.</p>
      </header>
      <div className="library-grid">
        {data.map((book) => (
          <article key={book.id}>
            <img src={book.coverUrl} alt={book.title} loading="lazy" />
            <h3>{book.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
