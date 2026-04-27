import { useQuery } from '@tanstack/react-query';
import { smidgeonsManager } from '@/features/smidgeons/services/SmidgeonsManager';

export function useSmidgeons() {
  return useQuery({
    queryKey: ['smidgeons', 'items'],
    queryFn: () => smidgeonsManager.listItems(),
  });
}
