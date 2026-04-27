import { httpClient } from '@/shared/services/httpClient';
import { SmidgeonItem } from '@/shared/types/content';

export class SmidgeonsRepository {
  listItems() {
    return httpClient.get<SmidgeonItem[]>('/smidgeons');
  }
}
