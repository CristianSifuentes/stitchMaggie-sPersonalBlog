import { PatternFilters } from '@/features/patterns/types/pattern';
import { PatternsRepository } from '@/features/patterns/services/PatternsRepository';
import { PatternItem } from '@/shared/types/content';

const repository = new PatternsRepository();

function includesQuery(pattern: PatternItem, query: string) {
  if (!query) {
    return true;
  }

  const haystack = [pattern.title, pattern.description, pattern.lens].join(' ').toLowerCase();
  return haystack.includes(query);
}

export class PatternsManager {
  listPatterns() {
    return repository.listPatterns();
  }

  applyFilters(patterns: PatternItem[], filters: PatternFilters) {
    const normalizedQuery = filters.query.trim().toLowerCase();

    return patterns.filter((pattern) => {
      const stageMatch = filters.stage === 'all' || pattern.stage === filters.stage;
      return stageMatch && includesQuery(pattern, normalizedQuery);
    });
  }
}

export const patternsManager = new PatternsManager();
