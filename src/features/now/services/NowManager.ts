import { NowRepository } from '@/features/now/services/NowRepository';

const repository = new NowRepository();

export class NowManager {
  listEntries() {
    return repository.listEntries();
  }
}

export const nowManager = new NowManager();
