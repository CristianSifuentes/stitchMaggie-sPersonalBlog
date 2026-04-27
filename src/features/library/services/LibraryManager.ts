import { LibraryRepository } from '@/features/library/services/LibraryRepository';

const repository = new LibraryRepository();

export class LibraryManager {
  listBooks() {
    return repository.listBooks();
  }
}

export const libraryManager = new LibraryManager();
