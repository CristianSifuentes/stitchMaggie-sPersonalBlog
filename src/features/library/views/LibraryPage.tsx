import { useLibrary } from '@/features/library/hooks/useLibrary';

export function LibraryPage() {
  const { data } = useLibrary();
  if (!data) return null;

  return (
    <section className="container library-page">
      <header>
        <span className="counter">29</span>
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
