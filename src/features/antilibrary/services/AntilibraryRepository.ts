import { httpClient } from '@/shared/services/httpClient';
import { AntilibraryBook } from '@/shared/types/content';

export class AntilibraryRepository {
  listBooks() {
    return httpClient.get<AntilibraryBook[]>('/antilibrary');
  }
}
