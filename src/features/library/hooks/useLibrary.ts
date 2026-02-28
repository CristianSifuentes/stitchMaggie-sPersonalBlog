import { useQuery } from '@tanstack/react-query';
import { libraryManager } from '@/features/library/services/LibraryManager';

export function useLibrary() {
  return useQuery({
    queryKey: ['library', 'books'],
    queryFn: () => libraryManager.listBooks(),
  });
}
