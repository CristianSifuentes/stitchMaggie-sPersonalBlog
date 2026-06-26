import { Link } from 'react-router-dom';
import { APP_ROUTES } from '@/app/config/routes';
import { useAntilibrary } from '@/features/antilibrary/hooks/useAntilibrary';
import { AntilibraryFilter } from '@/features/antilibrary/types/antilibrary';
import { AntilibraryBook } from '@/shared/types/content';
import { BookCard } from '@/shared/components/BookCard';

interface FilterDefinition {
  value: AntilibraryFilter;
  label: string;
  summary: string;
}

const FILTERS: FilterDefinition[] = [
  { value: 'all',       label: 'All Collections',    summary: 'The full unread stack: books held in active tension between curiosity, reference, and future research.' },
  { value: 'reading',   label: 'Currently Reading',  summary: 'Books in active rotation right now, informing current notes and sharpening ongoing project decisions.' },
  { value: 'to-read',   label: 'To Read',            summary: 'Priority titles waiting for focused reading sessions and deeper annotation passes.' },
  { value: 'reference', label: 'Reference Only',     summary: 'Dense books mostly used as lookup instruments: revisited in fragments across essays, talks, and patterns.' },
  { value: 'archive',   label: 'Archives',           summary: 'Books that have moved to long-horizon shelves but still shape the frame of future ideas.' },
];

const STAGE_META: Record<AntilibraryBook['stage'], { label: string; description: string }> = {
  seedling:  { label: 'Seedling',  description: 'Rough notes and initial sparks of curiosity.' },
  budding:   { label: 'Budding',   description: 'Developing ideas with early connections and practical use.' },
  evergreen: { label: 'Evergreen', description: 'Fully developed thought structures and stable research anchors.' },
};

const STATUS_LABELS: Record<AntilibraryBook['status'], string> = {
  unread:   'Unread',
  reading:  'Reading',
  'to-read':'To Read',
  reference:'Reference',
  archived: 'Archived',
};

const ACCENT_COLORS: Record<AntilibraryBook['accent'], string> = {
  amber:  '#d97706',
  indigo: '#4f46e5',
  green:  '#16a34a',
  violet: '#9333ea',
  orange: '#f97316',
  rose:   '#f43f5e',
};

function formatCount(n: number) {
  return n.toString().padStart(2, '0');
}

export function AntilibraryPage() {
  const { catalog, books, filter, setFilter, isLoading, isPending } = useAntilibrary();

  const activeFilter   = FILTERS.find((f) => f.value === filter) ?? FILTERS[0];
  const readingCount   = catalog.filter((b) => b.collection === 'reading').length;
  const referenceCount = catalog.filter((b) => b.collection === 'reference').length;

  return (
    <section className="container antilibrary-page">
      <header className="books-page-hero books-page-hero--cool antilibrary-hero">
        <div className="collection-breadcrumb">
          <span>{formatCount(catalog.length || 6)}</span>
          <Link to={APP_ROUTES.garden}>Back to Garden</Link>
        </div>

        <h1>Antilibrary</h1>
        <p className="books-page-hero__lede">
          A collection of unread books that keep my assumptions humble.
          <br />
          <em>An intentional research surface for future essays, talks, and pattern work.</em>
        </p>

        <div className="books-page-hero__metrics">
          <span>
            <strong>{formatCount(catalog.length)}</strong>
            <small>Volumes</small>
          </span>
          <span>
            <strong>{formatCount(readingCount)}</strong>
            <small>Reading now</small>
          </span>
          <span>
            <strong>{formatCount(referenceCount)}</strong>
            <small>Reference</small>
          </span>
        </div>
      </header>

      <div className="books-shelf-rule" aria-hidden="true">
        <span>✦</span>
      </div>

      <div className="antilibrary-tabs" role="toolbar" aria-label="Antilibrary filters">
        {FILTERS.map((item) => {
          const isActive = item.value === filter;
          return (
            <button
              key={item.value}
              type="button"
              className={isActive ? 'antilibrary-tab is-active' : 'antilibrary-tab'}
              aria-pressed={isActive}
              onClick={() => setFilter(item.value)}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <p className="antilibrary-filter-copy">{activeFilter.summary}</p>

      {(isLoading || isPending) && <p className="collection-loading">Reordering shelves...</p>}

      <div className="antilibrary-grid">
        {books.map((book, i) => (
          <BookCard
            key={book.id}
            variant="unread"
            id={book.id}
            title={book.title}
            author={book.author}
            coverUrl={book.coverUrl}
            summary={book.summary}
            statusLabel={STATUS_LABELS[book.status]}
            statusVariant={book.status}
            stage={book.stage}
            stageLabel={STAGE_META[book.stage].label}
            collectionLabel={book.collectionLabel}
            accentColor={ACCENT_COLORS[book.accent]}
            index={i}
          />
        ))}
      </div>

      {!isLoading && !books.length && (
        <p className="collection-loading">No books match this collection filter yet.</p>
      )}

      <section className="antilibrary-quote">
        <p>&quot;A library of read books is far less valuable than a library of unread ones.&quot; — Nassim Taleb</p>
        <button type="button" className="antilibrary-quote__button">
          <span aria-hidden="true">+</span>
          <span>Suggest a book</span>
        </button>
      </section>

      <section className="antilibrary-legend" aria-label="Antilibrary legend">
        <article className="antilibrary-legend__panel">
          <h2>Growth Status</h2>
          <div className="antilibrary-stage-list">
            {(['evergreen', 'budding', 'seedling'] as AntilibraryBook['stage'][]).map((stage) => (
              <div key={stage} className="antilibrary-stage-item">
                <span className={`book-card__stage-pill book-card__stage-pill--${stage}`}>
                  {STAGE_META[stage].label}
                </span>
                <p>{STAGE_META[stage].description}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="antilibrary-legend__panel">
          <h2>Collection Map</h2>
          <div className="antilibrary-stage-list">
            {FILTERS.filter((f) => f.value !== 'all').map((item) => (
              <div key={item.value} className="antilibrary-stage-item">
                <span className="antilibrary-pill">{item.label}</span>
                <p>{item.summary}</p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </section>
  );
}
