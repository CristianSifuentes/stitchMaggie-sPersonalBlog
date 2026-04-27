import { GardenEntry } from '@/shared/types/content';

export interface GardenFilters {
  stage: 'all' | GardenEntry['stage'];
  type: 'all' | GardenEntry['type'];
}
