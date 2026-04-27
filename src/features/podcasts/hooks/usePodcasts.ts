import { useMemo, useState, useTransition } from 'react';
import { useQuery } from '@tanstack/react-query';
import { podcastsManager } from '@/features/podcasts/services/PodcastsManager';
import { PodcastFilter } from '@/features/podcasts/types/podcast';

export function usePodcasts() {
  const [isPending, startTransition] = useTransition();
  const [filter, setCurrentFilter] = useState<PodcastFilter>('all');

  const episodesQuery = useQuery({
    queryKey: ['podcasts', 'episodes'],
    queryFn: () => podcastsManager.listEpisodes(),
  });

  const catalog = useMemo(() => episodesQuery.data ?? [], [episodesQuery.data]);

  const featuredEpisode = useMemo(
    () => catalog.find((episode) => episode.isFeatured) ?? catalog[0] ?? null,
    [catalog],
  );

  const episodes = useMemo(() => podcastsManager.applyFilter(catalog, filter), [catalog, filter]);

  const setFilter = (nextFilter: PodcastFilter) => {
    startTransition(() => setCurrentFilter(nextFilter));
  };

  return {
    catalog,
    episodes,
    featuredEpisode,
    filter,
    isLoading: episodesQuery.isLoading,
    isPending,
    setFilter,
  };
}
