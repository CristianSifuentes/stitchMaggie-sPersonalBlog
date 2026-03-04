import { Link } from 'react-router-dom';
import { useGardenEntries } from '@/features/garden/hooks/useGardenPosts';

export function GardenPage() {
  const { entries, filters, isLoading, isPending, setStage, setType } = useGardenEntries();

  return (
    <section className="container garden-index-page">
      <header className="garden-index-header">
        <span className="counter">162</span>
        <h1>The Garden</h1>
        <p>A collection of essays, notes, patterns, talks, podcasts, and half-baked explorations I&apos;m always tending to.</p>
      </header>

      <div className="garden-controls">
        <select value={filters.stage} onChange={(event) => setStage(event.target.value as typeof filters.stage)}>
          <option value="all">All Growth Stages</option>
          <option value="seedling">Seedling</option>
          <option value="budding">Budding</option>
          <option value="evergreen">Evergreen</option>
        </select>
        <select value={filters.type} onChange={(event) => setType(event.target.value as typeof filters.type)}>
          <option value="all">All Types</option>
          <option value="essay">Essay</option>
          <option value="note">Note</option>
          <option value="pattern">Pattern</option>
          <option value="podcast">Podcast</option>
          <option value="now">Now</option>
        </select>
      </div>

      {(isLoading || isPending) && <p className="collection-loading">Updating garden…</p>}

      <div className="garden-grid">
        {entries.map((entry) => (
          <Link key={entry.id} to={entry.route} className="garden-card">
            {entry.imageUrl ? <img src={entry.imageUrl} alt={entry.title} loading="lazy" /> : <span className="garden-card-chip">{entry.type}</span>}
            <h3>{entry.title}</h3>
            <p>{entry.description}</p>
            <small>{entry.stage}</small>
          </Link>
        ))}
      </div>
    </section>
  );
}
