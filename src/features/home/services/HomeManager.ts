import { HomeRepository } from '@/features/home/services/HomeRepository';
import { mapHomeViewModel } from '@/features/home/utils/homeMappers';

const repository = new HomeRepository();

export class HomeManager {
  async getHomeViewModel() {
    const posts = await repository.getFeaturedPosts();
    return mapHomeViewModel(posts);
  }
}

export const homeManager = new HomeManager();
