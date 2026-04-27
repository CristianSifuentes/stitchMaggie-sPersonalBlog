import { AntilibraryFilter } from '@/features/antilibrary/types/antilibrary';
import { AntilibraryRepository } from '@/features/antilibrary/services/AntilibraryRepository';
import { AntilibraryBook } from '@/shared/types/content';

const repository = new AntilibraryRepository();

export class AntilibraryManager {
  listBooks() {
    return repository.listBooks();
  }

  applyFilter(books: AntilibraryBook[], filter: AntilibraryFilter) {
    if (filter === 'all') {
      return books;
    }

    return books.filter((book) => book.collection === filter);
  }
}

export const antilibraryManager = new AntilibraryManager();
