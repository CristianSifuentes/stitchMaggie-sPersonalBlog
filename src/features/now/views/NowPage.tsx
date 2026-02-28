import { Link } from 'react-router-dom';
import { APP_ROUTES } from '@/app/config/routes';
import { useNowLog } from '@/features/now/hooks/useNowLog';

export function NowPage() {
  const { data } = useNowLog();
  if (!data) return null;

  return (
    <section className="container now-page">
      <Link to={APP_ROUTES.garden} className="back-link">Back to Garden</Link>
      <h1>Now</h1>
      <p className="now-intro">A sporadically updated log of what I&apos;m reading, exploring, and thinking about</p>
      <div className="timeline">
        {data.map((entry) => (
          <article key={entry.id} className={entry.muted ? 'timeline-entry muted' : 'timeline-entry'}>
            <h2>{entry.month}</h2>
            {entry.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}
