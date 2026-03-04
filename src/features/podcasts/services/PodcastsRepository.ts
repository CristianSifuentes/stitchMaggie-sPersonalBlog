import { httpClient } from '@/shared/services/httpClient';
import { PodcastEpisode } from '@/shared/types/content';

export class PodcastsRepository {
  listEpisodes() {
    return httpClient.get<PodcastEpisode[]>('/podcasts');
  }
}
