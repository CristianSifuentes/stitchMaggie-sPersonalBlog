import { Link } from 'react-router-dom';
import { APP_ROUTES } from '@/app/config/routes';
import { useNotes } from '@/features/notes/hooks/useNotes';

export function NotesPage() {
  const { data } = useNotes();
  if (!data) return null;

  return (
    <section className="container notes-page">
      <header>
        <div className="collection-breadcrumb"><span>77</span><Link to={APP_ROUTES.garden}>Back to Garden</Link></div>
        <h1>Notes</h1>
        <p>Loose, unopinionated notes on things I don&apos;t entirely understand yet.</p>
      </header>
      <div className="notes-grid">
        {data.map((note) => (
          <article key={note.id}>
            <span className="notes-grid__bullet">✦</span>
            <h2>{note.title}</h2>
            <p>{note.description}</p>
            <small>Note • {note.ageLabel}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
