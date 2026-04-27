import { useQuery } from '@tanstack/react-query';
import { nowManager } from '@/features/now/services/NowManager';

export function useNowLog() {
  return useQuery({
    queryKey: ['now', 'entries'],
    queryFn: () => nowManager.listEntries(),
  });
}
