import { httpClient } from '@/shared/services/httpClient';
import { PatternItem } from '@/shared/types/content';

export class PatternsRepository {
  listPatterns() {
    return httpClient.get<PatternItem[]>('/patterns');
  }
}
