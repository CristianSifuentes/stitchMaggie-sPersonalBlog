import { httpClient } from '@/shared/services/httpClient';
import { GardenEntry } from '@/shared/types/content';

export class GardenRepository {
  listEntries() {
    return httpClient.get<GardenEntry[]>('/garden');
  }
}
