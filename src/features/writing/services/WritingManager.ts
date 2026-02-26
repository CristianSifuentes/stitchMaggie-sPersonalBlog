import { WritingRepository } from '@/features/writing/services/WritingRepository';
import { EssayCollectionFilters } from '@/features/writing/types/essay';

const repository = new WritingRepository();

export class WritingManager {
  listEssays() {
    return repository.listEssays();
  }

  getEssayBySlug(slug: string) {
    return repository.getEssayBySlug(slug);
  }

  filterEssays(
    essays: Awaited<ReturnType<WritingRepository['listEssays']>>,
    filters: EssayCollectionFilters,
    deferredQuery: string,
  ) {
    const query = deferredQuery.trim().toLowerCase();

    return essays.filter((essay) => {
      const matchesCategory = filters.category === 'all' || essay.category === filters.category;
      const matchesQuery =
        query.length === 0 ||
        essay.title.toLowerCase().includes(query) ||
        essay.excerpt.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });
  }
}

export const writingManager = new WritingManager();
