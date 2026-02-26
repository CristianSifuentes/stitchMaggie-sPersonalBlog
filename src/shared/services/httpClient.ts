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
    slug: 'the-web-is-a-living-document',
    title: 'The Web is a Living Document',
    excerpt:
      'The web was never meant to be static. It expands and contracts with context, device, and intention.',
    readTimeMinutes: 12,
    publishedAt: '2023-10-12',
    heroImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDSbPH150avFgvyo7QU20uuYffKHyRJu-fBEbP3rsGPX4FmwbRgHbxJryy6dpsJjaKQvXLgqTvB9q4qnOjxGngANB4123F46zbRC-wHVm_TDbn70sVcD3gNxd-b8XRQPVjI05jBSi-9d7gPzFtHsZVcLm-nzcFlkbPbX0zLCCNcuY146QTIE6TF-TuLMbxWvV3TOzHKmCtDc3c3A3ll3Hqxwfn3fi91L3aFlLJ2YD6o7DmSTvxtodIcXcZTtvSn4PmOv6D7An-I_v0',
    category: 'engineering',
    author: 'Marcus Aurelius',
    authorRole: 'Designer & Developer',
    authorAvatarUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAwHm737L6zXgU2-HOyDygzuYXVrsEJ9hxYgDSepz6yYpU0oXBgU_S4-Tv5BSFs9626r4Dt_Z0QIz8pfSw_4HHQUNQ4KCt9XHN-_zFETyMewzuqmk2l7BPgL5L2K0J6CItV75KceNzZYKC5EGfDywzr3z-P5Z5SBQ2elcMGGH9mqAMgRDxUxoIfs7i-0U78IEWRBy0PMWV49cUvp0ZQjwhizHtj98Rfhr33QFPgQuZgbBNGwzy_rqk4919sqrh4t1UvMeNOnVx1_48',
    illustrationCredit: 'Studio Fluids',
    body: {
      intro:
        'The internet was never meant to be static. It breathes, expands, and contracts based on the device, the user, and the context.',
      sectionTitle: 'Embracing Fluidity',
      sectionBody:
        'Fluidity is not just responsive breakpoints. It is a design philosophy: suggest structure, but leave enough room for adaptation.',
      quote:
        'The medium is the message, but the medium keeps changing. To design for the web is to design for change itself.',
      typographyTitle: 'The Role of Typography',
      typographyBody:
        'Typography is the anchor in a fluid interface. With relational scale and variable rhythm, reading remains legible and expressive.',
      typographyBody2:
        'A serif can slow the eye and invite depth; a sans-serif can increase scanning speed. Type controls pace and emotion.',
      conclusion:
        'The web is not a canvas, it is a living landscape. We plant content, shape constraints, and let environments complete the experience.',
      figureImageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCAxgGPTklK9jLRRfociqT5m4UFUlm0oYAq2iv11ijbYv8qjiEbXJVZr1dQOukJaGzdvNFkNF2eC1Mo32VJvLzxhEg_9y-Wwu3aEDuiO4F7fWHvatV0hDxQEDcmtZ4LNxYIgOhnRgYcQd80q05sNMuxu-FigwGK2irT5Rf5zPLIYP5pDVEvWQjolap8tCJwqLtLHAlZX8eDUtnno9FNOpd_qIKsi68I4DOfINHlmO09oYdXPOvrqRmJcZljbBvE9Mpz5BLIlh-3xPk',
    },
  },
  {
    slug: 'culture-is-an-interface',
    title: 'Culture is an Interface',
    excerpt: 'How tools, rituals, and software patterns become cognitive interfaces for modern communities.',
    readTimeMinutes: 9,
    publishedAt: '2024-02-03',
    heroImageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1200&q=80',
    category: 'anthropology',
    author: 'Maggie Appleton',
    authorRole: 'Anthropologist & Illustrator',
    authorAvatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    illustrationCredit: 'Maggie Studio',
    body: {
      intro: 'Interfaces are not neutral. They encode beliefs about what matters and how people should move through information.',
      sectionTitle: 'Social Grammars',
      sectionBody: 'Every product creates a grammar of belonging. Buttons and labels become behavioral scripts.',
      quote: 'When culture meets code, interaction design becomes anthropology in motion.',
      typographyTitle: 'Narrative Layouts',
      typographyBody: 'Long-form digital writing benefits from generous whitespace, subtle rhythm, and visual punctuation.',
      typographyBody2: 'Readers do not consume pages; they inhabit them. Pace is as important as hierarchy.',
      conclusion: 'Designing writing spaces means designing memory, identity, and collective interpretation.',
      figureImageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    },
  },
  {
    slug: 'crafting-react-systems',
    title: 'Crafting React Systems for Teams',
    excerpt: 'Patterns for scaling React apps with feature boundaries, performance budgets, and collaborative autonomy.',
    readTimeMinutes: 15,
    publishedAt: '2025-01-15',
    heroImageUrl: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80',
    category: 'engineering',
    author: 'Maggie Appleton',
    authorRole: 'Design Engineer',
    authorAvatarUrl: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80',
    illustrationCredit: 'Field Notes Lab',
    body: {
      intro: 'A scalable React architecture is less about folder names and more about contracts between teams and layers.',
      sectionTitle: 'Feature Boundaries',
      sectionBody: 'Treat each domain as a product surface with its own view, service, and state boundaries.',
      quote: 'Great frontend architecture is social architecture: code should mirror team conversations.',
      typographyTitle: 'Performance as Design',
      typographyBody: 'Deferred interactions, stable references, and selective memoization preserve UX under growth.',
      typographyBody2: 'Measure first, optimize second. Performance work should follow profiling evidence.',
      conclusion: 'React remains powerful when we build with constraints, clarity, and system-level intent.',
      figureImageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
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
