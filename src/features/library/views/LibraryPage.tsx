import { Link } from 'react-router-dom';
import { APP_ROUTES } from '@/app/config/routes';
import { useLibrary } from '@/features/library/hooks/useLibrary';
import { BookCard } from '@/shared/components/BookCard';

export function LibraryPage() {
  const { data } = useLibrary();
  if (!data) return null;

  return (
    <section className="container library-page">
      <header className="books-page-hero books-page-hero--warm">
        <div className="collection-breadcrumb">
          <span>{data.length.toString().padStart(2, '0')}</span>
          <Link to={APP_ROUTES.garden}>Back to Garden</Link>
        </div>

        <h1>Library</h1>

        <p className="books-page-hero__lede">
          Books I&apos;ve read and loved — each one left a mark.
          <br />
          <em>These are not summaries. They are traces.</em>
        </p>

        <div className="books-page-hero__metrics">
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

      <div className="books-shelf-rule" aria-hidden="true">
        <span>✦</span>
      </div>

      <div className="library-books-grid">
        {data.map((book, i) => (
          <BookCard
            key={book.id}
            variant="read"
            id={book.id}
            title={book.title}
            author={book.author}
            coverUrl={book.coverUrl}
            note={book.note}
            index={i}
          />
        ))}
      </div>

      <blockquote className="books-page-closing">
        <p>&ldquo;A reader lives a thousand lives before he dies. The man who never reads lives only one.&rdquo;</p>
        <cite>— George R.R. Martin</cite>
      </blockquote>
    </section>
  );
}
