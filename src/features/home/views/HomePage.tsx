import { Link } from 'react-router-dom';
import { APP_ROUTES } from '@/app/config/routes';
import { useHomeViewModel } from '@/features/home/hooks/useHomeViewModel';
import { PostCard } from '@/shared/components/PostCard';

export function HomePage() {
  const { data } = useHomeViewModel();

  if (!data) {
    return null;
  }

  return (
    <section className="container home-page">
      <h1>{data.heading}</h1>
      <p className="lead">{data.summary}</p>
      <p className="focus-copy">{data.currentFocus}</p>

      <section className="garden-overview">
        <h2>The Garden</h2>
        <p>A digital garden is a collection of imperfect notes, essays, and ideas growing slowly over time.</p>
        <Link to={APP_ROUTES.garden}>Learn more →</Link>
      </section>

      <section className="post-grid">
        {data.posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
    </section>
  );
}
