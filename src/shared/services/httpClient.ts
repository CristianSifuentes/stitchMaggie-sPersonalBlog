export interface HttpClient {
  get<T>(url: string): Promise<T>;
}

const fakeNetworkDelay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const mockPosts = [
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
] as const;

export const httpClient: HttpClient = {
  async get<T>(url: string): Promise<T> {
    await fakeNetworkDelay(150);

    if (url === '/posts') {
      return mockPosts as T;
    }

    throw new Error(`Unknown endpoint: ${url}`);
  },
};
