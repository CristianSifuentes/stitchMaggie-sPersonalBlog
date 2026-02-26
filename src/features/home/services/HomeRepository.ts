import { httpClient } from '@/shared/services/httpClient';
import { Post } from '@/shared/types/post';

export class HomeRepository {
  async getFeaturedPosts() {
    return httpClient.get<Post[]>('/posts');
  }
}
