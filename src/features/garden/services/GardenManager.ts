import { GardenRepository } from '@/features/garden/services/GardenRepository';

const repository = new GardenRepository();

export class GardenManager {
  async listPosts() {
    return repository.listPosts();
  }
}

export const gardenManager = new GardenManager();
