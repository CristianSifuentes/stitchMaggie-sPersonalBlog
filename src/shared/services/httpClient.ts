import { EssayDetail, EssaySummary } from '@/shared/types/essay';
import { Post } from '@/shared/types/post';

export interface HttpClient {
  get<T>(url: string): Promise<T>;
}

const fakeNetworkDelay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const mockPosts: Post[] = [
  {
    id: 'react-pattern-language',
    title: 'A Pattern Language for React',
    description: "Exploring component composition through Christopher Alexander's lens.",
    imageUrl:
      'https://images.unsplash.com/photo-1527489377706-5bf97e608852?auto=format&fit=crop&w=1000&q=80',
    tag: 'essay',
  },
  {
    id: 'cultural-interfaces',
    title: 'Cultural Interfaces',
    description: 'How our digital tools shape our understanding of culture and history.',
    imageUrl:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
    tag: 'note',
  },
];

const essayCollection: EssayDetail[] = [
  {
    slug: 'ai-chatbots-undermining-enlightenment',
    title: 'A Treatise on AI Chatbots Undermining the Enlightenment',
    excerpt: 'Why probabilistic answers can flatten ambiguity, nuance, and critical thinking in public discourse.',
    readTimeMinutes: 12,
    publishedAt: '2023-10-12',
    heroImageUrl: 'https://images.unsplash.com/photo-1677442135136-760c813028c0?auto=format&fit=crop&w=1400&q=80',
    category: 'engineering',
    visual: 'bulb',
    author: 'Maggie Appleton',
    authorRole: 'Design Anthropologist',
    authorAvatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    illustrationCredit: 'Maggie Studio',
    body: {
      intro:
        'Chatbots are excellent at plausible fluency. The risk appears when plausibility is mistaken for epistemic rigor, especially in educational and civic contexts.',
      sectionTitle: 'The Legibility Trap',
      sectionBody:
        'Systems optimized for confidence and speed tend to reduce productive friction. Yet friction is often where inquiry and reflection actually happen.',
      quote:
        'A smooth answer is not always a deep answer. Sometimes intelligence looks like hesitation.',
      typographyTitle: 'Narrative Interfaces',
      typographyBody:
        'Longform interfaces should reward slow reading. Headings, whitespace, and typographic cadence can preserve complexity instead of compressing it.',
      typographyBody2:
        'The question is not whether AI should write, but whether readers still have room to interpret.',
      conclusion:
        'Tools are never neutral. When writing systems collapse uncertainty, they reshape the social conditions of thinking itself.',
      figureImageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
    },
  },
  {
    slug: 'pattern-language-of-project-xanadu',
    title: 'The Pattern Language of Project Xanadu',
    excerpt: 'Re-reading hypertext history as a set of durable interaction patterns for modern web architectures.',
    readTimeMinutes: 10,
    publishedAt: '2024-01-08',
    heroImageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=80',
    category: 'design',
    visual: 'cards',
    author: 'Maggie Appleton',
    authorRole: 'Researcher & Writer',
    authorAvatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    illustrationCredit: 'Archive Remix',
    body: {
      intro:
        'Project Xanadu imagined documents as connected structures rather than isolated files. Its ambitions still feel contemporary.',
      sectionTitle: 'From Pages to Graphs',
      sectionBody:
        'When interfaces expose relationships between fragments, users can reason across ideas instead of navigating siloed pages.',
      quote: 'Hypertext is not navigation chrome. It is a way of thinking in public.',
      typographyTitle: 'Composing Links',
      typographyBody:
        'Readable links, annotations, and references create cognitive scaffolding. They let interfaces teach through structure.',
      typographyBody2:
        'Designing a reading system means designing what can be discovered, compared, and remembered.',
      conclusion: 'Xanadu remains useful as a provocation: software can preserve context instead of erasing it.',
      figureImageUrl: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1400&q=80',
    },
  },
  {
    slug: 'meat-planet-illustrated-notes',
    title: 'Meat Planet: The Illustrated Notes',
    excerpt: 'A visual notebook about embodiment, computation, and the strange poetics of digital materiality.',
    readTimeMinutes: 8,
    publishedAt: '2024-05-20',
    heroImageUrl: 'https://images.unsplash.com/photo-1579547621706-1a9c79d5f259?auto=format&fit=crop&w=1400&q=80',
    category: 'anthropology',
    visual: 'planet',
    author: 'Maggie Appleton',
    authorRole: 'Visual Essayist',
    authorAvatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    illustrationCredit: 'Meat Planet Notebook',
    body: {
      intro:
        'Bodies and interfaces are co-constructed. Every gesture on glass is both a physical act and a symbolic one.',
      sectionTitle: 'Embodied Computation',
      sectionBody:
        'Touchscreens, haptics, and camera systems recruit the body into software logic. The interface is always biological and technical.',
      quote: 'Digital culture is never disembodied; it simply hides its infrastructure in plain sight.',
      typographyTitle: 'Drawing as Method',
      typographyBody:
        'Illustrated notes allow speculative thinking to stay unresolved. Ambiguity becomes a productive research state.',
      typographyBody2:
        'In practice, sketches can hold contradictory ideas longer than polished diagrams.',
      conclusion:
        'Visual essays help us think with materials, not just about them. They make theory tactile.',
      figureImageUrl: 'https://images.unsplash.com/photo-1516382799247-87df95d790b7?auto=format&fit=crop&w=1400&q=80',
    },
  },
];

const essaySummaries: EssaySummary[] = essayCollection.map(({ body: _body, ...summary }) => summary);

export const httpClient: HttpClient = {
  async get<T>(url: string): Promise<T> {
    await fakeNetworkDelay(120);

    if (url === '/posts') {
      return mockPosts as T;
    }

    if (url === '/essays') {
      return essaySummaries as T;
    }

    if (url.startsWith('/essays/')) {
      const slug = url.replace('/essays/', '');
      const essay = essayCollection.find((entry) => entry.slug === slug);
      if (!essay) {
        throw new Error(`Essay not found: ${slug}`);
      }

      return essay as T;
    }

    throw new Error(`Unknown endpoint: ${url}`);
  },
};
