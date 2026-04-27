import { useQuery } from '@tanstack/react-query';
import { writingManager } from '@/features/writing/services/WritingManager';

export function useEssayDetail(slug: string) {
  return useQuery({
    queryKey: ['writing', 'essay', slug],
    queryFn: () => writingManager.getEssayBySlug(slug),
    enabled: Boolean(slug),
  });
}
