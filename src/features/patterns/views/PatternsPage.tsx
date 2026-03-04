import { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '@/app/config/routes';
import { usePatterns } from '@/features/patterns/hooks/usePatterns';
import { PatternFilters } from '@/features/patterns/types/pattern';
import { PatternItem } from '@/shared/types/content';

interface StageDefinition {
  value: PatternFilters['stage'];
  label: string;
  summary: string;
}

const STAGES: StageDefinition[] = [
  {
    value: 'all',
    label: 'All',
    summary: 'A full scan of the pattern language: durable principles, active experiments, and the threads connecting them.',
  },
  {
    value: 'seedling',
    label: 'Seedling',
    summary: 'Early ideas still being tested against practice, usually sharper on possibility than on certainty.',
  },
  {
    value: 'budding',
    label: 'Budding',
    summary: 'Patterns with repeatable shape emerging, but still open enough to evolve with each application.',
  },
  {
    value: 'evergreen',
    label: 'Evergreen',
    summary: 'Core structures that have held up across enough projects to count as reliable architecture.',
  },
];

const STAGE_META: Record<PatternItem['stage'], { label: string; note: string; description: string }> = {
  seedling: {
    label: 'Seedling',
    note: 'Early-stage thought',
    description: 'Rough observations and experimental ideas that are still being validated and shaped.',
  },
  budding: {
    label: 'Budding',
    note: 'Developing structure',
    description: 'Refined concepts that now repeat across projects and are forming a stronger internal logic.',
  },
  evergreen: {
    label: 'Evergreen',
    note: 'Proven principle',
    description: 'Stable patterns that have become dependable parts of the design and systems toolkit.',
  },
};

function formatCount(value: number) {
  return value.toString().padStart(2, '0');
}

function StageGlyph({ stage }: { stage: PatternFilters['stage'] }) {
  switch (stage) {
    case 'seedling':
      return (
        <svg viewBox="0 0 24 24" className="patterns-stage-tab__icon" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 19V10" />
          <path d="M12 12C8 12 6 9.5 6 6.5 9 6.5 11.5 8 12 12Z" />
          <path d="M12 14C16 14 18 11.5 18 8.5 15 8.5 12.5 10 12 14Z" />
        </svg>
      );
    case 'budding':
      return (
        <svg viewBox="0 0 24 24" className="patterns-stage-tab__icon" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 19V13" />
          <path d="M12 13C8 13 6 10.5 6 7.5 8.9 7.5 11.4 9 12 13Z" />
          <path d="M12 13C16 13 18 10.5 18 7.5 15.1 7.5 12.6 9 12 13Z" />
          <path d="M12 9.4C10.7 7.1 10.9 4.8 12.5 3 14.1 4.6 14.4 7 12 9.4Z" />
        </svg>
      );
    case 'evergreen':
      return (
        <svg viewBox="0 0 24 24" className="patterns-stage-tab__icon" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 20V6" />
          <path d="M12 4 7 11H17L12 4Z" />
          <path d="M12 8 5 16H19L12 8Z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className="patterns-stage-tab__icon" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="4" y="4" width="6" height="6" />
          <rect x="14" y="4" width="6" height="6" />
          <rect x="4" y="14" width="6" height="6" />
          <rect x="14" y="14" width="6" height="6" />
        </svg>
      );
  }
}

function PatternGlyph({ illustration }: { illustration: PatternItem['illustration'] }) {
  switch (illustration) {
    case 'field':
      return (
        <svg viewBox="0 0 64 64" className="pattern-card__glyph" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="32" cy="20" r="2" fill="currentColor" stroke="none" />
          <circle cx="24" cy="26" r="2" fill="currentColor" stroke="none" />
          <circle cx="40" cy="26" r="2" fill="currentColor" stroke="none" />
          <circle cx="18" cy="34" r="2" fill="currentColor" stroke="none" />
          <circle cx="32" cy="34" r="2" fill="currentColor" stroke="none" />
          <circle cx="46" cy="34" r="2" fill="currentColor" stroke="none" />
          <circle cx="24" cy="42" r="2" fill="currentColor" stroke="none" />
          <circle cx="40" cy="42" r="2" fill="currentColor" stroke="none" />
          <circle cx="32" cy="48" r="2" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'ambient':
      return (
        <svg viewBox="0 0 64 64" className="pattern-card__glyph" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M24 42V25A8 8 0 0 1 32 17 8 8 0 0 1 40 25V42" />
          <path d="M27 46H37" />
          <path d="M28 51H36" />
          <path d="M32 17V13" />
          <circle cx="45" cy="24" r="2.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'links':
      return (
        <svg viewBox="0 0 64 64" className="pattern-card__glyph" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M28 25A8 8 0 1 1 28 39L23 44A8 8 0 1 1 12 33L18 27" />
          <path d="M36 25A8 8 0 1 0 36 39L41 44A8 8 0 1 0 52 33L46 27" />
        </svg>
      );
    case 'veil':
      return (
        <svg viewBox="0 0 64 64" className="pattern-card__glyph" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M17 28C22 20 27 16 32 16S42 20 47 28C42 36 37 40 32 40S22 36 17 28Z" />
          <path d="M22 42 42 20" />
          <circle cx="32" cy="28" r="4" />
        </svg>
      );
    case 'sync':
      return (
        <svg viewBox="0 0 64 64" className="pattern-card__glyph" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M19 24H45" />
          <path d="M38 17 45 24 38 31" />
          <path d="M45 40H19" />
          <path d="M26 33 19 40 26 47" />
        </svg>
      );
    case 'thread':
    default:
      return (
        <svg viewBox="0 0 64 64" className="pattern-card__glyph" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 45V23" />
          <path d="M18 44C22 39 27 37 32 37C37 37 42 39 46 44" />
          <path d="M18 28C22 23 27 21 32 21C37 21 42 23 46 28" />
          <path d="M46 19V43" />
        </svg>
      );
  }
}

function PatternCard({ pattern }: { pattern: PatternItem }) {
  const stage = STAGE_META[pattern.stage];

  return (
    <article className="pattern-card">
      <div className="pattern-card__visual">
        <span className="patterns-stage-pill" data-stage={pattern.stage}>
          {stage.label}
        </span>
        <PatternGlyph illustration={pattern.illustration} />
      </div>

      <div className="pattern-card__body">
        <p className="pattern-card__lens">{pattern.lens}</p>
        <h3>{pattern.title}</h3>
        <p>{pattern.description}</p>
        <footer className="pattern-card__footer">{pattern.updatedLabel}</footer>
      </div>
    </article>
  );
}

export function PatternsPage() {
  const { catalog, patterns, featuredPattern, filters, isLoading, isPending, setStage, setQuery } = usePatterns();

  const activeStage = STAGES.find((stage) => stage.value === filters.stage) ?? STAGES[0];
  const evergreenCount = catalog.filter((pattern) => pattern.stage === 'evergreen').length;
  const visibleCount = patterns.length;
  const queryLabel = filters.query.trim();

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <section className="container patterns-page">
      <header className="patterns-hero">
        <div className="patterns-hero__copy">
          <div className="collection-breadcrumb">
            <span>{formatCount(catalog.length || 6)}</span>
            <Link to={APP_ROUTES.garden}>Back to Garden</Link>
          </div>
          <p className="patterns-hero__eyebrow">Frameworks and recurring structures</p>
          <h1>Patterns</h1>
          <p className="patterns-hero__lede">
            A collection of recurring solutions and design systems I&apos;ve observed or built. These are conceptual
            frameworks for digital tools and cognitive architectures.
          </p>
        </div>

        <aside className="patterns-atlas">
          <p className="patterns-atlas__eyebrow">Pattern atlas</p>
          <div className="patterns-atlas__metrics">
            <div>
              <strong>{formatCount(catalog.length)}</strong>
              <span>Total patterns</span>
            </div>
            <div>
              <strong>{formatCount(evergreenCount)}</strong>
              <span>Evergreen</span>
            </div>
            <div>
              <strong>{formatCount(visibleCount)}</strong>
              <span>Visible now</span>
            </div>
          </div>

          {featuredPattern && (
            <div className="patterns-atlas__featured">
              <span className="patterns-stage-pill" data-stage={featuredPattern.stage}>
                {STAGE_META[featuredPattern.stage].label}
              </span>
              <h2>{featuredPattern.title}</h2>
              <p>{featuredPattern.description}</p>
              <small>{featuredPattern.updatedLabel}</small>
            </div>
          )}
        </aside>
      </header>

      <div className="patterns-toolbar">
        <div className="patterns-tabs" role="toolbar" aria-label="Pattern stage filters">
          {STAGES.map((stage) => {
            const isActive = stage.value === filters.stage;

            return (
              <button
                key={stage.value}
                type="button"
                className={isActive ? 'patterns-stage-tab is-active' : 'patterns-stage-tab'}
                aria-pressed={isActive}
                onClick={() => setStage(stage.value)}
              >
                <StageGlyph stage={stage.value === 'all' ? 'all' : stage.value} />
                <span>{stage.label}</span>
              </button>
            );
          })}
        </div>

        <label className="patterns-search" aria-label="Search patterns">
          <span className="patterns-search__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="6" />
              <path d="M20 20 16 16" />
            </svg>
          </span>
          <input
            type="search"
            value={filters.query}
            onChange={handleSearchChange}
            placeholder="Search patterns..."
          />
        </label>
      </div>

      <p className="patterns-filter-copy">
        {activeStage.summary}
        {queryLabel ? ` Matching "${queryLabel}" across titles, descriptions, and lenses.` : ''}
      </p>

      {(isLoading || isPending) && <p className="collection-loading">Indexing the pattern language...</p>}

      <div className="patterns-grid" id="pattern-catalog">
        {patterns.map((pattern) => (
          <PatternCard key={pattern.id} pattern={pattern} />
        ))}
      </div>

      {!isLoading && !patterns.length && (
        <p className="collection-loading">No patterns match this combination yet.</p>
      )}

      <section className="patterns-legend" aria-label="Maturity legend">
        <h2>Maturity Legend</h2>
        <div className="patterns-legend__grid">
          {(['seedling', 'budding', 'evergreen'] as PatternItem['stage'][]).map((stage) => (
            <article key={stage} className="patterns-legend-card" data-stage={stage}>
              <div className="patterns-legend-card__head">
                <span className="patterns-stage-pill" data-stage={stage}>
                  {STAGE_META[stage].label}
                </span>
                <small>{STAGE_META[stage].note}</small>
              </div>
              <p>{STAGE_META[stage].description}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
