import { httpClient } from '@/shared/services/httpClient';
import { TalkItem } from '@/shared/types/content';

export class TalksRepository {
  listTalks() {
    return httpClient.get<TalkItem[]>('/talks');
  }
}
