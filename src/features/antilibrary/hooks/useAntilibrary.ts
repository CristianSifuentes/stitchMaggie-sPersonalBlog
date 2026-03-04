import { useMemo, useState, useTransition } from 'react';
import { useQuery } from '@tanstack/react-query';
import { antilibraryManager } from '@/features/antilibrary/services/AntilibraryManager';
import { AntilibraryFilter } from '@/features/antilibrary/types/antilibrary';

export function useAntilibrary() {
  const [isPending, startTransition] = useTransition();
  const [filter, setCurrentFilter] = useState<AntilibraryFilter>('all');

  const booksQuery = useQuery({
    queryKey: ['antilibrary', 'collection'],
    queryFn: () => antilibraryManager.listBooks(),
  });

  const catalog = useMemo(() => booksQuery.data ?? [], [booksQuery.data]);
  const books = useMemo(() => antilibraryManager.applyFilter(catalog, filter), [catalog, filter]);

  const setFilter = (nextFilter: AntilibraryFilter) => {
    startTransition(() => setCurrentFilter(nextFilter));
  };

  return {
    catalog,
    books,
    filter,
    isLoading: booksQuery.isLoading,
    isPending,
    setFilter,
  };
}
