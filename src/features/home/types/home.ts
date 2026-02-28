import { Post } from '@/shared/types/post';

export interface HomeViewModel {
  heading: string;
  summary: string;
  currentFocus: string;
  posts: Post[];
}
