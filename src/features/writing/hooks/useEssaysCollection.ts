import { useDeferredValue, useMemo, useState, useTransition } from 'react';
import { useQuery } from '@tanstack/react-query';
import { writingManager } from '@/features/writing/services/WritingManager';
import { EssayCollectionFilters } from '@/features/writing/types/essay';

export function useEssaysCollection() {
  const [isPending, startTransition] = useTransition();
  const [filters, setFilters] = useState<EssayCollectionFilters>({ query: '', category: 'all' });
  const deferredQuery = useDeferredValue(filters.query);

  const essaysQuery = useQuery({
    queryKey: ['writing', 'collection'],
    queryFn: () => writingManager.listEssays(),
  });

  const essays = useMemo(() => {
    if (!essaysQuery.data) {
      return [];
    }

    return writingManager.filterEssays(essaysQuery.data, filters, deferredQuery);
  }, [deferredQuery, essaysQuery.data, filters]);

  const updateQuery = (query: string) => {
    startTransition(() => {
      setFilters((current) => ({ ...current, query }));
    });
  };

  const updateCategory = (category: EssayCollectionFilters['category']) => {
    setFilters((current) => ({ ...current, category }));
  };

  return { filters, essays, isFiltering: isPending, isLoading: essaysQuery.isLoading, updateQuery, updateCategory };
}
