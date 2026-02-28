import { useMemo, useState, useTransition } from 'react';
import { useQuery } from '@tanstack/react-query';
import { gardenManager } from '@/features/garden/services/GardenManager';
import { GardenFilters } from '@/features/garden/types/garden';

export function useGardenEntries() {
  const [isPending, startTransition] = useTransition();
  const [filters, setFilters] = useState<GardenFilters>({ stage: 'all', type: 'all' });

  const entriesQuery = useQuery({
    queryKey: ['garden', 'entries'],
    queryFn: () => gardenManager.listEntries(),
  });

  const entries = useMemo(() => {
    if (!entriesQuery.data) {
      return [];
    }

    return gardenManager.applyFilters(entriesQuery.data, filters);
  }, [entriesQuery.data, filters]);

  const setStage = (stage: GardenFilters['stage']) => {
    startTransition(() => setFilters((current) => ({ ...current, stage })));
  };

  const setType = (type: GardenFilters['type']) => {
    startTransition(() => setFilters((current) => ({ ...current, type })));
  };

  return { entries, filters, isLoading: entriesQuery.isLoading, isPending, setStage, setType };
}
