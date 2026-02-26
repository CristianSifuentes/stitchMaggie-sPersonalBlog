import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { EssayCollectionCard } from '@/features/writing/views/components/EssayCollectionCard';
import { useEssaysCollection } from '@/features/writing/hooks/useEssaysCollection';
import { APP_ROUTES } from '@/app/config/routes';

export function WritingPage() {
  const { essays, isLoading, isError } = useEssaysCollection();

  const orderedEssays = useMemo(
    () => [...essays].sort((a, b) => a.publishedAt.localeCompare(b.publishedAt)),
    [essays],
  );

  return (
    <section className="container essays-collection-page">
      <header className="essays-collection-header">
        <div className="collection-breadcrumb">
          <span>18</span>
          <Link to={APP_ROUTES.garden}>Back to Garden</Link>
        </div>

        <h1>Essays</h1>
        <p>Opinionated, longform narrative writing with an agenda.</p>
      </header>

      {isLoading ? (
        <p className="collection-loading">Loading essays...</p>
      ) : isError ? (
        <p className="collection-loading">Unable to load essays right now.</p>
      ) : (
        <div className="essays-card-grid">
          {orderedEssays.map((essay) => (
            <EssayCollectionCard key={essay.slug} essay={essay} />
          ))}
        </div>
      )}
    </section>
  );
}
