import { PodcastFilter } from '@/features/podcasts/types/podcast';
import { PodcastsRepository } from '@/features/podcasts/services/PodcastsRepository';
import { PodcastEpisode } from '@/shared/types/content';

const repository = new PodcastsRepository();

export class PodcastsManager {
  listEpisodes() {
    return repository.listEpisodes();
  }

  applyFilter(episodes: PodcastEpisode[], filter: PodcastFilter) {
    if (filter === 'recent') {
      return episodes.slice(0, 3);
    }

    if (filter === 'popular') {
      return episodes.filter((episode) => episode.isPopular);
    }

    return episodes;
  }
}

export const podcastsManager = new PodcastsManager();
