import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '@/app/config/routes';
import { useLibrary } from '@/features/library/hooks/useLibrary';

function ReadBadge() {
  return (
    <span className="library-book__read-badge" aria-label="Read">
      <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" width="10" height="10">
        <path d="M2 7L5.5 10.5L12 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      Read
    </span>
  );
}

export function LibraryPage() {
  const { data } = useLibrary();
  if (!data) return null;

  return (
    <section className="container library-page">
      <header className="library-hero">
        <div className="collection-breadcrumb">
          <span>{data.length.toString().padStart(2, '0')}</span>
          <Link to={APP_ROUTES.garden}>Back to Garden</Link>
        </div>

        <h1>Library</h1>

        <p className="library-hero__lede">
          Books I&apos;ve read and loved — each one left a mark. These are not summaries; they&apos;re traces.
        </p>

        <div className="library-hero__metrics">
          <span>
            <strong>{data.length.toString().padStart(2, '0')}</strong>
            <small>Volumes</small>
          </span>
          <span>
            <strong>All</strong>
            <small>Loved</small>
          </span>
        </div>
      </header>

      <div className="library-books-grid">
        {data.map((book, i) => (
          <article
            key={book.id}
            className="library-book"
            style={{ '--book-i': i } as CSSProperties}
          >
            <div className="library-book__cover">
              <img src={book.coverUrl} alt={book.title} loading="lazy" />
              <ReadBadge />
              <div className="library-book__overlay">
                <p className="library-book__overlay-note">{book.note}</p>
              </div>
            </div>
            <div className="library-book__copy">
              <p className="library-book__author">{book.author}</p>
              <h3 className="library-book__title">{book.title}</h3>
              <p className="library-book__note">{book.note}</p>
            </div>
          </article>
        ))}
      </div>

      <blockquote className="library-closing">
        <p>&ldquo;A reader lives a thousand lives before he dies. The man who never reads lives only one.&rdquo;</p>
        <cite>— George R.R. Martin</cite>
      </blockquote>
    </section>
  );
}
