import { httpClient } from '@/shared/services/httpClient';
import { NoteItem } from '@/shared/types/content';

export class NotesRepository {
  listNotes() {
    return httpClient.get<NoteItem[]>('/notes');
  }
}
