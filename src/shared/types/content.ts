export interface NowEntry {
  id: string;
  month: string;
  content: string[];
  muted?: boolean;
}

export interface NoteItem {
  id: string;
  title: string;
  description: string;
  ageLabel: string;
}

export interface BookItem {
  id: string;
  title: string;
  coverUrl: string;
}

export interface PodcastEpisode {
  id: string;
  title: string;
  description: string;
  publishedLabel: string;
  durationLabel: string;
  stage: 'seedling' | 'budding' | 'evergreen';
  series: string;
  illustration: 'signal' | 'neural' | 'atlas' | 'draft' | 'archive' | 'blueprint';
  isFeatured?: boolean;
  isPopular?: boolean;
}

export interface TalkItem {
  id: string;
  title: string;
  description: string;
  dateLabel: string;
  locationLabel: string;
  kind: 'presentation' | 'workshop';
  stage: 'seedling' | 'budding' | 'evergreen';
  illustration: 'systems' | 'botany' | 'future' | 'structure' | 'emotion' | 'writing';
  isFeatured?: boolean;
}

export interface PatternItem {
  id: string;
  title: string;
  description: string;
  updatedLabel: string;
  stage: 'seedling' | 'budding' | 'evergreen';
  lens: string;
  illustration: 'thread' | 'field' | 'ambient' | 'links' | 'veil' | 'sync';
  isFeatured?: boolean;
}

export interface SmidgeonItem {
  id: string;
  date: string;
  tags: string[];
  title: string;
  author: string;
  summary: string[];
}

export interface GardenEntry {
  id: string;
  type: 'now' | 'essay' | 'note' | 'podcast' | 'pattern' | 'talk';
  stage: 'seedling' | 'budding' | 'evergreen';
  title: string;
  description: string;
  imageUrl?: string;
  route: string;
}
