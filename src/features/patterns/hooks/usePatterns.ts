import { useDeferredValue, useMemo, useState, useTransition } from 'react';
import { useQuery } from '@tanstack/react-query';
import { patternsManager } from '@/features/patterns/services/PatternsManager';
import { PatternFilters } from '@/features/patterns/types/pattern';

export function usePatterns() {
  const [isPending, startTransition] = useTransition();
  const [stage, setCurrentStage] = useState<PatternFilters['stage']>('all');
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  const patternsQuery = useQuery({
    queryKey: ['patterns', 'collection'],
    queryFn: () => patternsManager.listPatterns(),
  });

  const catalog = useMemo(() => patternsQuery.data ?? [], [patternsQuery.data]);

  const patterns = useMemo(
    () => patternsManager.applyFilters(catalog, { stage, query: deferredQuery }),
    [catalog, stage, deferredQuery],
  );

  const featuredPattern = useMemo(
    () => catalog.find((pattern) => pattern.isFeatured) ?? catalog[0] ?? null,
    [catalog],
  );

  const setStage = (nextStage: PatternFilters['stage']) => {
    startTransition(() => setCurrentStage(nextStage));
  };

  return {
    catalog,
    patterns,
    featuredPattern,
    filters: {
      stage,
      query,
    },
    isLoading: patternsQuery.isLoading,
    isPending: isPending || query !== deferredQuery,
    setStage,
    setQuery,
  };
}
