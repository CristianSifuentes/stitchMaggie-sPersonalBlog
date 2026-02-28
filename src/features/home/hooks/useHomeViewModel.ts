import { useQuery } from '@tanstack/react-query';
import { homeManager } from '@/features/home/services/HomeManager';

export function useHomeViewModel() {
  return useQuery({
    queryKey: ['home', 'view-model'],
    queryFn: () => homeManager.getHomeViewModel(),
  });
}
