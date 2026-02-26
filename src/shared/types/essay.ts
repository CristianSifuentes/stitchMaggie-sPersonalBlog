export type EssayCategory = 'engineering' | 'design' | 'anthropology';

export interface EssaySummary {
  slug: string;
  title: string;
  excerpt: string;
  readTimeMinutes: number;
  publishedAt: string;
  heroImageUrl: string;
  category: EssayCategory;
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
