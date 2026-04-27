import { Post } from '@/shared/types/post';
import { HomeViewModel } from '@/features/home/types/home';

export function mapHomeViewModel(posts: Post[]): HomeViewModel {
  return {
    heading: 'Maggie makes visual essays about programming, design, and anthropology.',
    summary: 'Designer, anthropologist, and mediocre developer',
    currentFocus: 'Currently exploring AI & software engineering at Github Next',
    posts,
  };
}
