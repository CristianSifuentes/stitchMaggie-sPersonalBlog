import { SmidgeonsRepository } from '@/features/smidgeons/services/SmidgeonsRepository';

const repository = new SmidgeonsRepository();

export class SmidgeonsManager {
  listItems() {
    return repository.listItems();
  }
}

export const smidgeonsManager = new SmidgeonsManager();
