import { useMemo, useState, useTransition } from 'react';
import { useQuery } from '@tanstack/react-query';
import { talksManager } from '@/features/talks/services/TalksManager';
import { TalkFilter } from '@/features/talks/types/talk';

export function useTalks() {
  const [isPending, startTransition] = useTransition();
  const [filter, setCurrentFilter] = useState<TalkFilter>('all');

  const talksQuery = useQuery({
    queryKey: ['talks', 'collection'],
    queryFn: () => talksManager.listTalks(),
  });

  const catalog = useMemo(() => talksQuery.data ?? [], [talksQuery.data]);

  const featuredTalk = useMemo(
    () => catalog.find((talk) => talk.isFeatured) ?? catalog[0] ?? null,
    [catalog],
  );

  const talks = useMemo(() => talksManager.applyFilter(catalog, filter), [catalog, filter]);

  const setFilter = (nextFilter: TalkFilter) => {
    startTransition(() => setCurrentFilter(nextFilter));
  };

  return {
    catalog,
    talks,
    featuredTalk,
    filter,
    isLoading: talksQuery.isLoading,
    isPending,
    setFilter,
  };
}
