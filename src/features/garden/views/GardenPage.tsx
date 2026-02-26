import { ChangeEvent, useTransition } from 'react';
import { PostCard } from '@/shared/components/PostCard';
import { useGardenPosts } from '@/features/garden/hooks/useGardenPosts';

export function GardenPage() {
  const [isPending, startTransition] = useTransition();
  const { filters, setFilters, filteredPosts, isLoading } = useGardenPosts();

  const handleQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    startTransition(() => {
      setFilters((current) => ({ ...current, query }));
    });
  };

  return (
    <section className="container garden-page">
      <h1>The Garden</h1>
      <div className="garden-toolbar">
        <input value={filters.query} onChange={handleQueryChange} placeholder="Search essays and notes" />
        <select
          value={filters.tag}
          onChange={(event) => setFilters((current) => ({ ...current, tag: event.target.value as typeof filters.tag }))}
        >
          <option value="all">All</option>
          <option value="essay">Essays</option>
          <option value="note">Notes</option>
        </select>
      </div>
      {(isLoading || isPending) && <p>Filtering content…</p>}
      <div className="post-grid">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
