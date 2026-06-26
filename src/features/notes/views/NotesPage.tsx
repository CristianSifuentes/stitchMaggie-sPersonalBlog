import { useState, useMemo, useCallback, CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '@/app/config/routes';
import { useNotes } from '@/features/notes/hooks/useNotes';
import { NoteStage, NoteTopic } from '@/shared/types/content';

const STAGE_META: Record<NoteStage, { label: string; icon: JSX.Element; color: string }> = {
  seedling: {
    label: 'Seedling',
    color: '#52b788',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="notes-stage-icon">
        <path d="M10 17V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 9C10 9 7 7 5 4C7.5 3.5 11 4.5 10 9Z" fill="currentColor" opacity="0.8"/>
        <path d="M10 12C10 12 13 10 15 7C12.5 6.5 9 7.5 10 12Z" fill="currentColor" opacity="0.6"/>
      </svg>
    ),
  },
  budding: {
    label: 'Budding',
    color: '#e9b44c',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="notes-stage-icon">
        <path d="M10 17V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="10" cy="7" r="3.5" fill="currentColor" opacity="0.75"/>
        <path d="M6.5 7C6.5 7 5 5 5 3.5C6.8 3.5 8.5 4.5 8.5 7" fill="currentColor" opacity="0.5"/>
        <path d="M13.5 7C13.5 7 15 5 15 3.5C13.2 3.5 11.5 4.5 11.5 7" fill="currentColor" opacity="0.5"/>
      </svg>
    ),
  },
  evergreen: {
    label: 'Evergreen',
    color: '#2d6a4f',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="notes-stage-icon">
        <path d="M10 18V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <polygon points="10,2 15,9 13,9 17,14 3,14 7,9 5,9" fill="currentColor" opacity="0.85"/>
      </svg>
    ),
  },
};

const ALL_TOPICS: NoteTopic[] = [
  'design', 'engineering', 'tools', 'knowledge-management', 'learning',
  'culture', 'cognition', 'writing', 'collaboration', 'technology',
  'philosophy', 'education', 'illustration', 'language', 'statistics', 'research',
];

export function NotesPage() {
  const { data } = useNotes();
  const [activeStage, setActiveStage] = useState<NoteStage | 'all'>('all');
  const [activeTopic, setActiveTopic] = useState<NoteTopic | 'all'>('all');

  const toggleStage = useCallback((stage: NoteStage | 'all') => {
    setActiveStage((s) => (s === stage ? 'all' : stage));
  }, []);

  const toggleTopic = useCallback((topic: NoteTopic | 'all') => {
    setActiveTopic((t) => (t === topic ? 'all' : topic));
  }, []);

  const filtered = useMemo(() => {
    if (!data) return [];
    return data.filter((note) => {
      const stageOk = activeStage === 'all' || note.stage === activeStage;
      const topicOk = activeTopic === 'all' || note.topics.includes(activeTopic);
      return stageOk && topicOk;
    });
  }, [data, activeStage, activeTopic]);

  const stageCounts = useMemo(() => {
    if (!data) return { seedling: 0, budding: 0, evergreen: 0 };
    return {
      seedling: data.filter((n) => n.stage === 'seedling').length,
      budding: data.filter((n) => n.stage === 'budding').length,
      evergreen: data.filter((n) => n.stage === 'evergreen').length,
    };
  }, [data]);

  if (!data) return null;

  return (
    <section className="container notes-page">
      <header className="notes-header">
        <div className="collection-breadcrumb">
          <span>{data.length.toString().padStart(2, '0')}</span>
          <Link to={APP_ROUTES.garden}>Back to Garden</Link>
        </div>
        <h1 className="notes-title">Notes</h1>
        <p className="notes-subtitle">
          Loose, unopinionated notes on things I&apos;m still figuring out.
          <br />
          <em>Ideas in various states of growth — some barely sprouted, some fully rooted.</em>
        </p>

        {/* Stage filter */}
        <div className="notes-filters" role="group" aria-label="Filter by growth stage">
          <button
            className={`notes-stage-btn notes-stage-btn--all${activeStage === 'all' ? ' is-active' : ''}`}
            onClick={() => toggleStage('all')}
          >
            All <span className="notes-filter-count">{data.length}</span>
          </button>
          {(Object.entries(STAGE_META) as [NoteStage, typeof STAGE_META[NoteStage]][]).map(([stage, meta]) => (
            <button
              key={stage}
              className={`notes-stage-btn notes-stage-btn--${stage}${activeStage === stage ? ' is-active' : ''}`}
              style={{ '--stage-color': meta.color } as CSSProperties}
              onClick={() => toggleStage(stage)}
            >
              {meta.icon}
              {meta.label}
              <span className="notes-filter-count">{stageCounts[stage]}</span>
            </button>
          ))}
        </div>

        {/* Topic filter */}
        <div className="notes-topics" role="group" aria-label="Filter by topic">
          {ALL_TOPICS.map((topic) => (
            <button
              key={topic}
              className={`notes-topic-pill${activeTopic === topic ? ' is-active' : ''}`}
              onClick={() => toggleTopic(topic)}
            >
              {topic}
            </button>
          ))}
        </div>

        {/* Results count */}
        <div className="notes-results-meta" aria-live="polite">
          <span key={filtered.length} className="notes-results-count">
            {filtered.length} {filtered.length === 1 ? 'note' : 'notes'}
          </span>
          {(activeStage !== 'all' || activeTopic !== 'all') && (
            <button
              className="notes-clear-filters"
              onClick={() => { setActiveStage('all'); setActiveTopic('all'); }}
            >
              Clear filters
            </button>
          )}
        </div>
      </header>

      {/* Notes list */}
      <ul className="notes-list" role="list">
        {filtered.map((note, i) => {
          const meta = STAGE_META[note.stage];
          return (
            <li
              key={note.id}
              className={`notes-item notes-item--${note.stage}`}
              style={{ '--note-i': i, '--stage-color': meta.color } as CSSProperties}
            >
              <div className="notes-item-stage" aria-label={meta.label} title={meta.label}>
                {meta.icon}
              </div>
              <div className="notes-item-body">
                <h2 className="notes-item-title">{note.title}</h2>
                <p className="notes-item-desc">{note.description}</p>
                <div className="notes-item-footer">
                  <div className="notes-item-topics">
                    {note.topics.map((t) => (
                      <button
                        key={t}
                        className={`notes-topic-tag${activeTopic === t ? ' is-active' : ''}`}
                        style={{ '--stage-color': meta.color } as CSSProperties}
                        onClick={() => toggleTopic(t)}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  <time className="notes-item-age">{note.ageLabel}</time>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {filtered.length === 0 && (
        <div className="notes-empty">
          <p>No notes match these filters.</p>
          <button className="notes-clear-filters" onClick={() => { setActiveStage('all'); setActiveTopic('all'); }}>
            Show all notes
          </button>
        </div>
      )}
    </section>
  );
}
