import { Link } from 'react-router-dom';
import { APP_ROUTES } from '@/app/config/routes';
import { useHomeViewModel } from '@/features/home/hooks/useHomeViewModel';
import { PostCard } from '@/shared/components/PostCard';

export function HomePage() {
  const { data } = useHomeViewModel();
  if (!data) return null;

  return (
    <section className="container home-page">
      <header className="home-hero">
        <h1>
          Maggie <span>makes visual essays about programming, design, and anthropology.</span>
        </h1>
        <p>Designer, anthropologist, and mediocre developer</p>
        <p>
          Currently exploring AI &amp; software engineering at <a href="#">Github Next</a>
        </p>
      </header>

      <section className="home-garden">
        <h2>The Garden</h2>
        <div>
          <p>A digital garden is a collection of imperfect notes, essays, and ideas growing slowly over time.</p>
          <Link to={APP_ROUTES.garden}>Learn more →</Link>
        </div>
      </section>

      <section className="post-grid">
        {data.posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
    </section>
  );
}
