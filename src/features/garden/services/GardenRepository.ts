import { httpClient } from '@/shared/services/httpClient';
import { Post } from '@/shared/types/post';

export class GardenRepository {
  async listPosts() {
    return httpClient.get<Post[]>('/posts');
  }
}
