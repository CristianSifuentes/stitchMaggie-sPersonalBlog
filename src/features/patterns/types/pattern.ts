import { PatternItem } from '@/shared/types/content';

export interface PatternFilters {
  stage: 'all' | PatternItem['stage'];
  query: string;
}
