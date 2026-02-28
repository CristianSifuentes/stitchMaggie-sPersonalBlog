import { httpClient } from '@/shared/services/httpClient';
import { EssayDetail, EssaySummary } from '@/features/writing/types/essay';

export class WritingRepository {
  listEssays() {
    return httpClient.get<EssaySummary[]>('/essays');
  }

  getEssayBySlug(slug: string) {
    return httpClient.get<EssayDetail>(`/essays/${slug}`);
  }
}
