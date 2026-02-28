import { useQuery } from '@tanstack/react-query';
import { notesManager } from '@/features/notes/services/NotesManager';

export function useNotes() {
  return useQuery({
    queryKey: ['notes', 'collection'],
    queryFn: () => notesManager.listNotes(),
  });
}
