import { GardenRepository } from '@/features/garden/services/GardenRepository';
import { GardenFilters } from '@/features/garden/types/garden';
import { GardenEntry } from '@/shared/types/content';

const repository = new GardenRepository();

export class GardenManager {
  listEntries() {
    return repository.listEntries();
  }

  applyFilters(entries: GardenEntry[], filters: GardenFilters) {
    return entries.filter((entry) => {
      const stageMatch = filters.stage === 'all' || filters.stage === entry.stage;
      const typeMatch = filters.type === 'all' || filters.type === entry.type;
      return stageMatch && typeMatch;
    });
  }
}

export const gardenManager = new GardenManager();
