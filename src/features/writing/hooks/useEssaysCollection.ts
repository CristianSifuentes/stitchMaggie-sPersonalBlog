import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { writingManager } from '@/features/writing/services/WritingManager';

export function useEssaysCollection() {
  const essaysQuery = useQuery({
    queryKey: ['writing', 'collection'],
    queryFn: () => writingManager.listEssays(),
  });

  const essays = useMemo(() => essaysQuery.data ?? [], [essaysQuery.data]);

  return {
    essays,
    isLoading: essaysQuery.isLoading,
    isError: essaysQuery.isError,
  };
}
