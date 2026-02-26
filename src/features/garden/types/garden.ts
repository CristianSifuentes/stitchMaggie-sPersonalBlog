import { Post } from '@/shared/types/post';

export interface GardenFilters {
  query: string;
  tag: 'all' | Post['tag'];
}
