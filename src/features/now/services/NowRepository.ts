import { httpClient } from '@/shared/services/httpClient';
import { NowEntry } from '@/shared/types/content';

export class NowRepository {
  listEntries() {
    return httpClient.get<NowEntry[]>('/now');
  }
}
