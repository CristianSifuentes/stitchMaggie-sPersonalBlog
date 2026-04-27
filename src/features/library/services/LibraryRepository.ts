import { httpClient } from '@/shared/services/httpClient';
import { BookItem } from '@/shared/types/content';

export class LibraryRepository {
  listBooks() {
    return httpClient.get<BookItem[]>('/library');
  }
}
