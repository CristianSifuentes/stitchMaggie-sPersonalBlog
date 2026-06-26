import { Link } from 'react-router-dom';
import { APP_ROUTES } from '@/app/config/routes';
import { useSmidgeons } from '@/features/smidgeons/hooks/useSmidgeons';

export function SmidgeonsPage() {
  const { data } = useSmidgeons();
  if (!data) return null;

  return (
    <section className="container smidgeons-page">
      <header>
        <div className="collection-breadcrumb">
          <span>{data.length.toString().padStart(2, '0')}</span>
          <Link to={APP_ROUTES.garden}>Back to Garden</Link>
        </div>
        <h1>Smidgeons Stream</h1>
        <p>A stream of interesting links, papers, and tiny thoughts.</p>
      </header>
      {data.map((item) => (
        <div key={item.id} className="smidgeons-layout">
          <aside>
            <time>{item.date}</time>
            {item.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </aside>
          <article>
            <h2>{item.title}</h2>
            <p className="author">{item.author}</p>
            {item.summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        </div>
      ))}
    </section>
  );
}
