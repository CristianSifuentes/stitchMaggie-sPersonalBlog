import { CSSProperties } from 'react';

export type BookCardVariant = 'read' | 'unread';
export type BookCardStage   = 'seedling' | 'budding' | 'evergreen';
export type BookCardStatus  = 'reading' | 'to-read' | 'reference' | 'archived' | 'unread';

export interface BookCardProps {
  variant:         BookCardVariant;
  id:              string;
  title:           string;
  author:          string;
  coverUrl:        string;
  index?:          number;
  accentColor?:    string;   // CSS color, e.g. '#d97706' or 'var(--teal)'
  // read-variant
  note?:           string;
  // unread-variant
  summary?:        string;
  statusLabel?:    string;
  statusVariant?:  BookCardStatus;
  stage?:          BookCardStage;
  stageLabel?:     string;
  collectionLabel?: string;
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 12 12" fill="none" width="9" height="9" aria-hidden>
      <path d="M1.5 6L4.5 9L10.5 3" stroke="currentColor" strokeWidth="2.2"
            strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BookCard({
  variant, title, author, coverUrl, index = 0, accentColor,
  note, summary, statusLabel, statusVariant = 'unread',
  stage, stageLabel, collectionLabel,
}: BookCardProps) {
  return (
    <article
      className={`book-card book-card--${variant}`}
      style={{
        '--book-i': index,
        ...(accentColor ? { '--book-accent': accentColor } : {}),
      } as CSSProperties}
    >
      {/* ─ Cover ─────────────────────────────────────── */}
      <div className="book-card__cover">
        <img src={coverUrl} alt={title} loading="lazy" />

        {variant === 'read' && (
          <>
            <span className="book-card__badge book-card__badge--read">
              <CheckIcon /> Read
            </span>
            <div className="book-card__hover-overlay" aria-hidden="true">
              <p className="book-card__hover-note">{note}</p>
            </div>
          </>
        )}

        {variant === 'unread' && statusLabel && (
          <span className={`book-card__badge book-card__badge--${statusVariant}`}>
            {statusLabel}
          </span>
        )}
      </div>

      {/* ─ Copy ──────────────────────────────────────── */}
      <div className="book-card__copy">
        <p className="book-card__author">{author}</p>
        <h3 className="book-card__title">{title}</h3>

        {variant === 'read' && note && (
          <p className="book-card__note">{note}</p>
        )}

        {variant === 'unread' && (
          <>
            {summary && <p className="book-card__summary">{summary}</p>}
            {(stage || collectionLabel) && (
              <footer className="book-card__footer">
                {stage && stageLabel && (
                  <span className={`book-card__stage-pill book-card__stage-pill--${stage}`}>
                    {stageLabel}
                  </span>
                )}
                {collectionLabel && (
                  <span className="book-card__collection">{collectionLabel}</span>
                )}
              </footer>
            )}
          </>
        )}
      </div>
    </article>
  );
}
