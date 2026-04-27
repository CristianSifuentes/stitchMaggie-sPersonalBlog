import { Link } from 'react-router-dom';
import { APP_ROUTES } from '@/app/config/routes';
import { useTalks } from '@/features/talks/hooks/useTalks';
import { TalkFilter } from '@/features/talks/types/talk';
import { TalkItem } from '@/shared/types/content';

interface TalkFilterDefinition {
  value: TalkFilter;
  label: string;
  summary: string;
}

const FILTERS: TalkFilterDefinition[] = [
  {
    value: 'all',
    label: 'All',
    summary: 'A full index of presentations and workshops, from early experiments to polished keynote narratives.',
  },
  {
    value: 'presentation',
    label: 'Presentations',
    summary: 'Talks shaped for conference or meetup audiences with a stronger narrative arc and technical framing.',
  },
  {
    value: 'workshop',
    label: 'Workshops',
    summary: 'Hands-on sessions designed to transfer methods, not just ideas, with practical tools people can apply immediately.',
  },
];

const STAGE_META: Record<TalkItem['stage'], { label: string; note: string; description: string }> = {
  seedling: {
    label: 'Seedling',
    note: 'Early draft',
    description: 'Initial framing and exploratory material that is still evolving through feedback.',
  },
  budding: {
    label: 'Budding',
    note: 'Growing clarity',
    description: 'Delivered material with a stable shape that still gains precision each time it is shared.',
  },
  evergreen: {
    label: 'Evergreen',
    note: 'Proven talk',
    description: 'A mature and resilient talk track that remains useful across audiences and contexts.',
  },
};

function formatCount(value: number) {
  return value.toString().padStart(2, '0');
}

function TalkGlyph({ illustration }: { illustration: TalkItem['illustration'] }) {
  switch (illustration) {
    case 'botany':
      return (
        <svg viewBox="0 0 64 64" className="talk-card__glyph" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="32" cy="24" r="6" />
          <path d="M24 33C20.5 33 17.5 35.8 17.5 39.4 21.5 39.4 25 37.8 27 35" />
          <path d="M40 33C44 33 47 35.8 47 39.4 43 39.4 39.3 37.8 37 35" />
          <path d="M32 30V46" />
          <path d="M25 46H39" />
        </svg>
      );
    case 'future':
      return (
        <svg viewBox="0 0 64 64" className="talk-card__glyph" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="32" cy="32" r="15" />
          <path d="M17 32H47" />
          <path d="M32 17V47" />
          <path d="M21.5 24.5C24.5 28 27 29.5 32 29.5S39.5 28 42.5 24.5" />
          <path d="M21.5 39.5C24.5 36 27 34.5 32 34.5S39.5 36 42.5 39.5" />
        </svg>
      );
    case 'structure':
      return (
        <svg viewBox="0 0 64 64" className="talk-card__glyph" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 44V24L32 18L46 24V44" />
          <path d="M18 30H46" />
          <path d="M32 18V44" />
          <path d="M24 44V34H40V44" />
        </svg>
      );
    case 'emotion':
      return (
        <svg viewBox="0 0 64 64" className="talk-card__glyph" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M32 46S17 36.5 17 26C17 20.8 21.2 16.5 26.5 16.5 29.3 16.5 31.8 17.7 33.5 19.6 35.2 17.7 37.7 16.5 40.5 16.5 45.8 16.5 50 20.8 50 26 50 36.5 35 46 35 46H32Z" />
          <path d="M24.5 27.5C26 25.2 28.4 24 31 24" />
          <path d="M33 24C35.6 24 38 25.2 39.5 27.5" />
        </svg>
      );
    case 'writing':
      return (
        <svg viewBox="0 0 64 64" className="talk-card__glyph" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 19H41L47 25V45C47 46.7 45.7 48 44 48H20C18.3 48 17 46.7 17 45V22C17 20.3 18.3 19 20 19Z" />
          <path d="M41 19V25H47" />
          <path d="M24 32H40" />
          <path d="M24 38H36" />
        </svg>
      );
    case 'systems':
    default:
      return (
        <svg viewBox="0 0 64 64" className="talk-card__glyph" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="14" y="16" width="14" height="14" />
          <rect x="36" y="16" width="14" height="14" />
          <rect x="14" y="34" width="14" height="14" />
          <rect x="36" y="34" width="14" height="14" />
          <path d="M28 23H36" />
          <path d="M21 30V34" />
          <path d="M43 30V34" />
        </svg>
      );
  }
}

function StageGlyph({ stage }: { stage: TalkItem['stage'] }) {
  switch (stage) {
    case 'seedling':
      return (
        <svg viewBox="0 0 24 24" className="talk-stage-pill__icon" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 19V10" />
          <path d="M12 12C8 12 6 9.5 6 6.5 9 6.5 11.5 8 12 12Z" />
          <path d="M12 14C16 14 18 11.5 18 8.5 15 8.5 12.5 10 12 14Z" />
        </svg>
      );
    case 'budding':
      return (
        <svg viewBox="0 0 24 24" className="talk-stage-pill__icon" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 19V13" />
          <path d="M12 13C8 13 6 10.5 6 7.5 8.9 7.5 11.4 9 12 13Z" />
          <path d="M12 13C16 13 18 10.5 18 7.5 15.1 7.5 12.6 9 12 13Z" />
          <path d="M12 9.4C10.7 7.1 10.9 4.8 12.5 3 14.1 4.6 14.4 7 12 9.4Z" />
        </svg>
      );
    case 'evergreen':
    default:
      return (
        <svg viewBox="0 0 24 24" className="talk-stage-pill__icon" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 20V6" />
          <path d="M12 4 7 11H17L12 4Z" />
          <path d="M12 8 5 16H19L12 8Z" />
        </svg>
      );
  }
}

function TalkCard({ talk }: { talk: TalkItem }) {
  const stage = STAGE_META[talk.stage];
  const kindLabel = talk.kind === 'presentation' ? 'Presentation' : 'Workshop';

  return (
    <article className="talk-card">
      <div className="talk-card__cover" data-illustration={talk.illustration}>
        <TalkGlyph illustration={talk.illustration} />
      </div>

      <div className="talk-card__body">
        <p className="talk-card__meta">
          <span>{talk.dateLabel}</span>
          <span className="talk-card__dot" />
          <span>{talk.locationLabel}</span>
        </p>

        <h3>{talk.title}</h3>
        <p>{talk.description}</p>

        <footer className="talk-card__footer">
          <span className="talk-card__kind">{kindLabel}</span>
          <span className="talk-stage-pill" data-stage={talk.stage}>
            <StageGlyph stage={talk.stage} />
            <span>{stage.label}</span>
          </span>
        </footer>
      </div>
    </article>
  );
}

export function TalksPage() {
  const { catalog, talks, featuredTalk, filter, setFilter, isLoading, isPending } = useTalks();

  const activeFilter = FILTERS.find((option) => option.value === filter) ?? FILTERS[0];
  const workshopCount = catalog.filter((talk) => talk.kind === 'workshop').length;
  const evergreenCount = catalog.filter((talk) => talk.stage === 'evergreen').length;

  return (
    <section className="container talks-page">
      <header className="talks-hero">
        <div className="talks-hero__copy">
          <div className="collection-breadcrumb">
            <span>{formatCount(catalog.length || 6)}</span>
            <Link to={APP_ROUTES.garden}>Back to Garden</Link>
          </div>
          <p className="talks-hero__eyebrow">Presentations, workshops, and lectures</p>
          <h1>Talks</h1>
          <p className="talks-hero__lede">
            A collection of sessions I&apos;ve shared across conferences, teams, and studios on design systems, digital
            gardening, interface architecture, and thoughtful product craft.
          </p>
        </div>

        {featuredTalk && (
          <aside className="talks-featured">
            <p className="talks-featured__eyebrow">Featured session</p>
            <span className="talk-stage-pill" data-stage={featuredTalk.stage}>
              <StageGlyph stage={featuredTalk.stage} />
              <span>{STAGE_META[featuredTalk.stage].label}</span>
            </span>
            <h2>{featuredTalk.title}</h2>
            <p>{featuredTalk.description}</p>
            <div className="talks-featured__meta">
              <span>{featuredTalk.dateLabel}</span>
              <span className="talks-featured__dot" />
              <span>{featuredTalk.locationLabel}</span>
              <span className="talks-featured__dot" />
              <span>{featuredTalk.kind === 'presentation' ? 'Presentation' : 'Workshop'}</span>
            </div>
          </aside>
        )}
      </header>

      <div className="talks-toolbar">
        <div className="talks-tabs" role="toolbar" aria-label="Talk filters">
          {FILTERS.map((option) => {
            const isActive = option.value === filter;

            return (
              <button
                key={option.value}
                type="button"
                className={isActive ? 'talks-tab is-active' : 'talks-tab'}
                aria-pressed={isActive}
                onClick={() => setFilter(option.value)}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        <div className="talks-metrics" aria-label="Talk summary">
          <div className="talks-metric">
            <strong>{formatCount(catalog.length)}</strong>
            <span>Total talks</span>
          </div>
          <div className="talks-metric">
            <strong>{formatCount(workshopCount)}</strong>
            <span>Workshops</span>
          </div>
          <div className="talks-metric">
            <strong>{formatCount(evergreenCount)}</strong>
            <span>Evergreen</span>
          </div>
        </div>
      </div>

      <p className="talks-filter-copy">{activeFilter.summary}</p>

      {(isLoading || isPending) && <p className="collection-loading">Preparing the stage...</p>}

      <div className="talks-grid" id="talks-catalog">
        {talks.map((talk) => (
          <TalkCard key={talk.id} talk={talk} />
        ))}
      </div>

      {!isLoading && !talks.length && <p className="collection-loading">No talks match this filter yet.</p>}

      <section className="talks-legend" aria-label="Maturity legend">
        <h2>Maturity Legend</h2>
        <div className="talks-legend__grid">
          {(['seedling', 'budding', 'evergreen'] as TalkItem['stage'][]).map((stage) => (
            <article key={stage} className="talks-legend-card" data-stage={stage}>
              <div className="talks-legend-card__head">
                <span className="talk-stage-pill" data-stage={stage}>
                  <StageGlyph stage={stage} />
                  <span>{STAGE_META[stage].label}</span>
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
