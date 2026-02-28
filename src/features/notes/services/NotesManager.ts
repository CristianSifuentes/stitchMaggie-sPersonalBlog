import { NotesRepository } from '@/features/notes/services/NotesRepository';

const repository = new NotesRepository();

export class NotesManager {
  listNotes() {
    return repository.listNotes();
  }
}

export const notesManager = new NotesManager();
