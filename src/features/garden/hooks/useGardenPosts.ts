import { useMemo, useState, useDeferredValue } from 'react';
import { useQuery } from '@tanstack/react-query';
import { gardenManager } from '@/features/garden/services/GardenManager';
import { GardenFilters } from '@/features/garden/types/garden';

export function useGardenPosts() {
  const [filters, setFilters] = useState<GardenFilters>({ query: '', tag: 'all' });
  const deferredQuery = useDeferredValue(filters.query);
  const postsQuery = useQuery({
    queryKey: ['garden', 'posts'],
    queryFn: () => gardenManager.listPosts(),
  });

  const filteredPosts = useMemo(() => {
    if (!postsQuery.data) {
      return [];
    }

    return postsQuery.data.filter((post) => {
      const matchesTag = filters.tag === 'all' || post.tag === filters.tag;
      const normalizedQuery = deferredQuery.toLowerCase();
      const matchesQuery =
        normalizedQuery.length === 0 ||
        post.title.toLowerCase().includes(normalizedQuery) ||
        post.description.toLowerCase().includes(normalizedQuery);

      return matchesTag && matchesQuery;
    });
  }, [postsQuery.data, filters.tag, deferredQuery]);

  return { filters, setFilters, filteredPosts, isLoading: postsQuery.isLoading };
}
