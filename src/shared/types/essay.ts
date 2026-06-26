export type EssayCategory = 'engineering' | 'design' | 'anthropology';
export type EssayVisual =
  | 'bulb'
  | 'cards'
  | 'planet'
  | 'folk'
  | 'diagram'
  | 'legible'
  | 'memex'
  | 'presence'
  | 'venn'
  | 'theory'
  | 'forest'
  | 'iceberg';

export interface EssaySummary {
  slug: string;
  title: string;
  excerpt: string;
  readTimeMinutes: number;
  publishedAt: string;
  heroImageUrl: string;
  category: EssayCategory;
  visual: EssayVisual;
}

export interface EssayDetail extends EssaySummary {
  author: string;
  authorRole: string;
  authorAvatarUrl: string;
  illustrationCredit: string;
  body: {
    intro: string;
    sectionTitle: string;
    sectionBody: string;
    quote: string;
    typographyTitle: string;
    typographyBody: string;
    typographyBody2: string;
    conclusion: string;
    figureImageUrl: string;
  };
}

export interface EssayCollectionFilters {
  query: string;
  category: 'all' | EssayCategory;
}
