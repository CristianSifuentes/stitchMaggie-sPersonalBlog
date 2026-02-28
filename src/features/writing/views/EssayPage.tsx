import { Link, Navigate, useParams } from 'react-router-dom';
import { APP_ROUTES } from '@/app/config/routes';
import { useEssayDetail } from '@/features/writing/hooks/useEssayDetail';

export function EssayPage() {
  const { slug } = useParams<{ slug: string }>();
  const { data, isError } = useEssayDetail(slug ?? '');

  if (!slug) {
    return <Navigate to={APP_ROUTES.writing} replace />;
  }

  if (isError) {
    return <Navigate to={APP_ROUTES.writing} replace />;
  }

  if (!data) {
    return null;
  }

  return (
    <section className="essay-page-wrapper">
      <article className="essay-article">
        <header className="essay-hero-header">
          <h1>{data.title}</h1>
          <p>
            {new Date(data.publishedAt).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}{' '}
            · {data.readTimeMinutes} min read
          </p>
        </header>

        <figure>
          <img className="essay-main-image" src={data.heroImageUrl} alt={data.title} />
          <figcaption>
            Illustration by <span>{data.illustrationCredit}</span>
          </figcaption>
        </figure>

        <div className="essay-body">
          <p>{data.body.intro}</p>
          <h2>{data.body.sectionTitle}</h2>
          <p>{data.body.sectionBody}</p>
          <blockquote>{data.body.quote}</blockquote>
          <p>
            Consider the modern reading experience. A reader can start on mobile, continue on desktop, and finish on a
            tablet. Great editorial interfaces preserve meaning while adapting form.
          </p>
          <figure>
            <img src={data.body.figureImageUrl} alt={data.body.typographyTitle} />
            <figcaption>Early conceptual sketches of adaptive layouts</figcaption>
          </figure>
          <h3>{data.body.typographyTitle}</h3>
          <p>{data.body.typographyBody}</p>
          <p>{data.body.typographyBody2}</p>
          <aside>
            <h4>Key takeaways</h4>
            <ul>
              <li>Design systems should adapt to context, not enforce rigid layouts.</li>
              <li>Content is the source of truth for composition and pacing.</li>
              <li>Typography remains the primary interface for digital essays.</li>
            </ul>
          </aside>
          <p>{data.body.conclusion}</p>
        </div>

        <footer className="essay-author-footer">
          <div className="essay-author">
            <img src={data.authorAvatarUrl} alt={data.author} />
            <div>
              <strong>{data.author}</strong>
              <p>{data.authorRole}</p>
            </div>
          </div>

          <Link to={APP_ROUTES.writing} className="essay-next-link">
            Back to Essays Collection →
          </Link>
        </footer>
      </article>
    </section>
  );
}
