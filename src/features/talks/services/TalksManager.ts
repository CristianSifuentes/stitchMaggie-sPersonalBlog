import { TalkFilter } from '@/features/talks/types/talk';
import { TalksRepository } from '@/features/talks/services/TalksRepository';
import { TalkItem } from '@/shared/types/content';

const repository = new TalksRepository();

export class TalksManager {
  listTalks() {
    return repository.listTalks();
  }

  applyFilter(talks: TalkItem[], filter: TalkFilter) {
    if (filter === 'all') {
      return talks;
    }

    return talks.filter((talk) => talk.kind === filter);
  }
}

export const talksManager = new TalksManager();
