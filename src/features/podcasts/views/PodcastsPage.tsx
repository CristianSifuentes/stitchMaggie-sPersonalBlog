import { Link } from 'react-router-dom';
import { APP_ROUTES } from '@/app/config/routes';
import { usePodcasts } from '@/features/podcasts/hooks/usePodcasts';
import { PodcastFilter } from '@/features/podcasts/types/podcast';
import { PodcastEpisode } from '@/shared/types/content';

interface PodcastFilterDefinition {
  value: PodcastFilter;
  label: string;
  summary: string;
}

const FILTERS: PodcastFilterDefinition[] = [
  { value: 'all', label: 'All Episodes', summary: 'The full studio archive, from early sketches to the most polished long-form conversations.' },
  { value: 'recent', label: 'Recent', summary: 'The latest recordings, surfaced first so the page feels alive and current without changing the architecture.' },
  { value: 'popular', label: 'Popular', summary: 'The episodes that have the broadest pull: durable topics, strong hooks, and the cleanest signal.' },
];

const STAGE_META: Record<PodcastEpisode['stage'], { label: string; detail: string; description: string }> = {
  seedling: {
    label: 'Seedling',
    detail: 'Initial Thoughts',
    description: 'A rough-cut conversation that captures a promising idea before it hardens into a finished thesis.',
  },
  budding: {
    label: 'Budding',
    detail: 'Developing Idea',
    description: 'An evolving episode with a clearer frame, stronger structure, and room to grow into a larger thread.',
  },
  evergreen: {
    label: 'Evergreen',
    detail: 'Evergreen Piece',
    description: 'A durable conversation with a stable point of view that still rewards revisiting over time.',
  },
};

function formatCount(value: number) {
  return value.toString().padStart(2, '0');
}

function PodcastGlyph({ illustration }: { illustration: PodcastEpisode['illustration'] }) {
  switch (illustration) {
    case 'neural':
      return (
        <svg viewBox="0 0 64 64" className="podcast-card__glyph" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 24 32 18 43 24 43 40 32 46 21 40Z" />
          <path d="M32 18V46" />
          <path d="M21 24 43 40" />
          <path d="M43 24 21 40" />
          <circle cx="21" cy="24" r="3.3" fill="currentColor" stroke="none" />
          <circle cx="43" cy="24" r="3.3" fill="currentColor" stroke="none" />
          <circle cx="21" cy="40" r="3.3" fill="currentColor" stroke="none" />
          <circle cx="43" cy="40" r="3.3" fill="currentColor" stroke="none" />
          <circle cx="32" cy="18" r="3.3" fill="currentColor" stroke="none" />
          <circle cx="32" cy="46" r="3.3" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'atlas':
      return (
        <svg viewBox="0 0 64 64" className="podcast-card__glyph" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="32" cy="32" r="16" />
          <path d="M16 32H48" />
          <path d="M32 16V48" />
          <path d="M21 24C24 28 27 30 32 30S40 28 43 24" />
          <path d="M21 40C24 36 27 34 32 34S40 36 43 40" />
          <path d="M27 16C24.8 21 24 26.5 24 32S24.8 43 27 48" />
          <path d="M37 16C39.2 21 40 26.5 40 32S39.2 43 37 48" />
        </svg>
      );
    case 'draft':
      return (
        <svg viewBox="0 0 64 64" className="podcast-card__glyph" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 42 39 23" />
          <path d="M39 23 45 29" />
          <path d="M18 46 24 44 20 40 18 46Z" fill="currentColor" stroke="none" />
          <path d="M45 29 49 25C50.7 23.3 50.7 20.7 49 19S44.7 17.3 43 19L39 23" />
        </svg>
      );
    case 'archive':
      return (
        <svg viewBox="0 0 64 64" className="podcast-card__glyph" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="18" y="19" width="28" height="8" rx="2" />
          <path d="M21 27V43C21 44.7 22.3 46 24 46H40C41.7 46 43 44.7 43 43V27" />
          <path d="M28 34H36" />
        </svg>
      );
    case 'blueprint':
      return (
        <svg viewBox="0 0 64 64" className="podcast-card__glyph" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M32 19V27" />
          <path d="M32 27 24 44" />
          <path d="M32 27 40 44" />
          <path d="M24 44 29 36" />
          <path d="M40 44 35 36" />
          <circle cx="32" cy="19" r="3.4" />
        </svg>
      );
    case 'signal':
    default:
      return (
        <svg viewBox="0 0 64 64" className="podcast-card__glyph" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 35V29" />
          <path d="M25 40V24" />
          <path d="M32 46V18" />
          <path d="M39 39V25" />
          <path d="M46 34V30" />
        </svg>
      );
  }
}

function PodcastCard({ episode }: { episode: PodcastEpisode }) {
  const stage = STAGE_META[episode.stage];

  return (
    <article className="podcast-card">
      <div className="podcast-card__masthead">
        <span className="podcast-stage-pill" data-stage={episode.stage}>
          {stage.label}
        </span>
        <div className="podcast-card__visual">
          <PodcastGlyph illustration={episode.illustration} />
        </div>
      </div>

      <div className="podcast-card__body">
        <div className="podcast-card__meta">
          <span>{episode.publishedLabel}</span>
          <span className="podcast-card__dot" />
          <span>{episode.durationLabel}</span>
        </div>

        <h3>{episode.title}</h3>
        <p>{episode.description}</p>

        <footer className="podcast-card__footer">
          <span className="podcast-card__series">{episode.series}</span>
          <span className="podcast-card__detail">{stage.detail}</span>
        </footer>
      </div>
    </article>
  );
}

export function PodcastsPage() {
  const { catalog, episodes, featuredEpisode, filter, setFilter, isLoading, isPending } = usePodcasts();

  const activeFilter = FILTERS.find((option) => option.value === filter) ?? FILTERS[0];
  const popularCount = catalog.filter((episode) => episode.isPopular).length;
  const evergreenCount = catalog.filter((episode) => episode.stage === 'evergreen').length;

  return (
    <section className="container podcasts-page">
      <header className="podcasts-hero">
        <div className="podcasts-hero__copy">
          <div className="collection-breadcrumb">
            <span>{formatCount(catalog.length || 6)}</span>
            <Link to={APP_ROUTES.garden}>Back to Garden</Link>
          </div>
          <p className="podcasts-hero__eyebrow">Long-form audio notes</p>
          <h1>Podcasts</h1>
          <p className="podcasts-hero__lede">
            Conversations, interviews, and audio explorations I&apos;ve been part of. Thinking out loud about design,
            systems, and digital craft without breaking the rhythm of the garden.
          </p>
        </div>

        {featuredEpisode && (
          <aside className="podcasts-spotlight">
            <p className="podcasts-spotlight__eyebrow">Featured transmission</p>
            <div className="podcasts-spotlight__row">
              <span className="podcast-stage-pill" data-stage={featuredEpisode.stage}>
                {STAGE_META[featuredEpisode.stage].label}
              </span>
              <span className="podcasts-spotlight__meta">
                {featuredEpisode.publishedLabel} / {featuredEpisode.durationLabel}
              </span>
            </div>
            <h2>{featuredEpisode.title}</h2>
            <p>{featuredEpisode.description}</p>
            <div className="podcasts-spotlight__footer">
              <span>{featuredEpisode.series}</span>
              <a href="#podcast-catalog">Explore the catalog</a>
            </div>
          </aside>
        )}
      </header>

      <div className="podcasts-toolbar">
        <div className="podcasts-tabs" role="toolbar" aria-label="Podcast filters">
          {FILTERS.map((option) => {
            const isActive = option.value === filter;

            return (
              <button
                key={option.value}
                type="button"
                className={isActive ? 'podcasts-tab is-active' : 'podcasts-tab'}
                aria-pressed={isActive}
                onClick={() => setFilter(option.value)}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        <div className="podcasts-metrics" aria-label="Podcast summary">
          <div className="podcasts-metric">
            <strong>{formatCount(catalog.length)}</strong>
            <span>Episodes</span>
          </div>
          <div className="podcasts-metric">
            <strong>{formatCount(popularCount)}</strong>
            <span>Popular</span>
          </div>
          <div className="podcasts-metric">
            <strong>{formatCount(evergreenCount)}</strong>
            <span>Evergreen</span>
          </div>
        </div>
      </div>

      <p className="podcasts-filter-copy">{activeFilter.summary}</p>

      {(isLoading || isPending) && <p className="collection-loading">Tuning the studio feed...</p>}

      <div className="podcasts-grid" id="podcast-catalog">
        {episodes.map((episode) => (
          <PodcastCard key={episode.id} episode={episode} />
        ))}
      </div>

      {!isLoading && !episodes.length && <p className="collection-loading">No episodes match this filter yet.</p>}

      <section className="podcasts-notes" aria-label="Podcast page notes">
        <div className="podcasts-note-card">
          <p className="podcasts-note-card__eyebrow">Studio Notes</p>
          <h2>Audio that feels native to the same ecosystem.</h2>
          <p>
            The page keeps the application shell intact, uses the same typography and color system, and adds a richer
            card language so podcasts read like a natural extension of the garden instead of a separate product.
          </p>
        </div>

        <div className="podcasts-legend">
          <p className="podcasts-note-card__eyebrow">Maturity Legend</p>
          <div className="podcasts-stage-list">
            {(['seedling', 'budding', 'evergreen'] as PodcastEpisode['stage'][]).map((stageKey) => (
              <div key={stageKey} className="podcasts-stage-item">
                <span className="podcast-stage-pill" data-stage={stageKey}>
                  {STAGE_META[stageKey].label}
                </span>
                <p>{STAGE_META[stageKey].description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}
