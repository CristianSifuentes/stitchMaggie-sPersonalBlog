import { EssayDetail, EssaySummary } from '@/shared/types/essay';
import { Post } from '@/shared/types/post';
import { AntilibraryBook, BookItem, GardenEntry, NoteItem, NowEntry, PatternItem, PodcastEpisode, SmidgeonItem, TalkItem } from '@/shared/types/content';
import { APP_ROUTES } from '@/app/config/routes';

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
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBYeD6YoLOp9JNsqiV99D_nkhph4WTfN8Jm5ZireNRSJpVOBg5rOreIUTtNYEOgy3M0Qew2yijm46WTPwpV4kfIqCDs-ACpLTxnQgYgnrDi1OxhZM6DNRbvX2peGiATyxfeBbw8CZUmd2SkA9VP791CM1nPImVqBnzDBcSpxa46gAC6CpIpI6gepu73c_0Iz-z2swCevV8aUg0vLWpomahDxKSHGXtO3f0qDd8o1v9HZuj5D-HlecxMoWcpXJkjUIvnIu0GIAyZzZA',
    tag: 'essay',
  },
  {
    id: 'cultural-interfaces',
    title: 'Cultural Interfaces',
    description: 'How our digital tools shape our understanding of culture and history.',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB5ovwtHkr37PlU6b2ZDFaXAw1B9BTk9nIdDOuRl4R8Sbqpo3Qa3dmjf-xFQ-rk44xxGAWWgKx_kFq_5CJfeKu_7L5mO4XOAznwXEUZjwPyCOILOgXK21RmVbtD5PtSWjotCjQMp8o238dwadIBS6nkli2d4FoHSp_Iu5ZYSWBTxoYTb1JO7f0lLbReLMfW1HsDZ1sz68PWM3B0LA2TpNvTY0W4dLs-ZsRJiHlDs-EQixg-frAtMoI-FQ7IUvajlNyVhae7daPMGzI',
    tag: 'note',
  },
];

const essays: EssayDetail[] = [
  {
    slug: 'the-web-is-a-living-document',
    title: 'The Web is a Living Document',
    excerpt: 'Designing for the web means designing for adaptation rather than fixed output.',
    readTimeMinutes: 12,
    publishedAt: '2023-10-12',
    heroImageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDSbPH150avFgvyo7QU20uuYffKHyRJu-fBEbP3rsGPX4FmwbRgHbxJryy6dpsJjaKQvXLgqTvB9q4qnOjxGngANB4123F46zbRC-wHVm_TDbn70sVcD3gNxd-b8XRQPVjI05jBSi-9d7gPzFtHsZVcLm-nzcFlkbPbX0zLCCNcuY146QTIE6TF-TuLMbxWvV3TOzHKmCtDc3c3A3ll3Hqxwfn3fi91L3aFlLJ2YD6o7DmSTvxtodIcXcZTtvSn4PmOv6D7An-I_v0',
    category: 'engineering',
    visual: 'bulb',
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
        'Fluidity is not just responsive design or media queries. It asks us to guide and adapt, instead of dictating exact outcomes.',
      quote:
        'The medium is the message, but the medium keeps changing. To design for the web is to design for change itself.',
      typographyTitle: 'The Role of Typography',
      typographyBody:
        'In a fluid environment, type is the anchor. Relational scale and rhythm create a reading hierarchy that survives every viewport.',
      typographyBody2:
        'A serif font slows the eye for depth; a crisp sans-serif encourages scan speed. The choice defines pace and comprehension.',
      conclusion:
        'The web is not a canvas, it is a living landscape. We plant seeds and let context complete the experience.',
      figureImageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCAxgGPTklK9jLRRfociqT5m4UFUlm0oYAq2iv11ijbYv8qjiEbXJVZr1dQOukJaGzdvNFkNF2eC1Mo32VJvLzxhEg_9y-Wwu3aEDuiO4F7fWHvatV0hDxQEDcmtZ4LNxYIgOhnRgYcQd80q05sNMuxu-FigwGK2irT5Rf5zPLIYP5pDVEvWQjolap8tCJwqLtLHAlZX8eDUtnno9FNOpd_qIKsi68I4DOfINHlmO09oYdXPOvrqRmJcZljbBvE9Mpz5BLIlh-3xPk',
    },
  },
  {
    slug: 'ai-chatbots-undermining-enlightenment',
    title: 'A Treatise on AI Chatbots Undermining the Enlightenment',
    excerpt: 'Probabilistic assistants can compress nuance when confidence is mistaken for truth.',
    readTimeMinutes: 10,
    publishedAt: '2024-01-08',
    heroImageUrl: 'https://images.unsplash.com/photo-1677442135136-760c813028c0?auto=format&fit=crop&w=1400&q=80',
    category: 'engineering',
    visual: 'bulb',
    author: 'Maggie Appleton',
    authorRole: 'Design Anthropologist',
    authorAvatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    illustrationCredit: 'Maggie Studio',
    body: {
      intro: 'A smooth answer is not always a deep answer.',
      sectionTitle: 'Legibility Trap',
      sectionBody: 'When systems optimize for speed, they may reduce inquiry and reflection.',
      quote: 'Sometimes intelligence looks like hesitation.',
      typographyTitle: 'Narrative Interfaces',
      typographyBody: 'Longform interfaces should reward slow reading and healthy skepticism.',
      typographyBody2: 'The question is not if AI writes, but if readers still interpret.',
      conclusion: 'Tools shape cognition; interface design is epistemic design.',
      figureImageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80',
    },
  },
  {
    slug: 'pattern-language-of-project-xanadu',
    title: 'The Pattern Language of Project Xanadu',
    excerpt: 'A hypertext reading of enduring interface patterns.',
    readTimeMinutes: 9,
    publishedAt: '2024-02-02',
    heroImageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=80',
    category: 'design',
    visual: 'cards',
    author: 'Maggie Appleton',
    authorRole: 'Researcher & Writer',
    authorAvatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    illustrationCredit: 'Archive Remix',
    body: {
      intro: 'Xanadu still teaches us to design with relationship and context.',
      sectionTitle: 'From Pages to Graphs',
      sectionBody: 'Linked fragments can become structured thought.',
      quote: 'Hypertext is a way of thinking in public.',
      typographyTitle: 'Composing Links',
      typographyBody: 'Readable references become cognitive scaffolding.',
      typographyBody2: 'Discovery and memory are architectural concerns.',
      conclusion: 'Software can preserve context instead of erasing it.',
      figureImageUrl: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1400&q=80',
    },
  },
  {
    slug: 'meat-planet-illustrated-notes',
    title: 'Meat Planet: The Illustrated Notes',
    excerpt: 'Embodiment, interfaces, and speculative sketching.',
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
      intro: 'Bodies and interfaces are co-constructed.',
      sectionTitle: 'Embodied Computation',
      sectionBody: 'Touch, haptics, and cameras recruit the body into software logic.',
      quote: 'Digital culture is never disembodied.',
      typographyTitle: 'Drawing as Method',
      typographyBody: 'Sketches preserve ambiguity for longer reasoning.',
      typographyBody2: 'Notes can hold contradictions better than polished diagrams.',
      conclusion: 'Visual essays make theory tactile.',
      figureImageUrl: 'https://images.unsplash.com/photo-1516382799247-87df95d790b7?auto=format&fit=crop&w=1400&q=80',
    },
  },
];

const notes: NoteItem[] = [
  { id: '1', title: 'Statistically, When Will My Baby Be Born?', description: 'A tiny tool to calculate when your baby might arrive', ageLabel: '10 Months Ago' },
  { id: '2', title: 'The Best Illustration Books and Courses', description: 'My favourite resources for developing visual thinking skills', ageLabel: 'About 4 Years Ago' },
  { id: '3', title: 'A Naïve Exploration of CSCL', description: 'Notes on the academic field and major papers', ageLabel: 'Over 5 Years Ago' },
  { id: '4', title: 'How to Import Academic Papers from Zotero into Tana', description: 'A practical import pipeline for personal knowledge systems', ageLabel: '12 Months Ago' },
  { id: '5', title: 'Pattern Languages in Programming and Interface Design', description: 'Christopher Alexander and software pattern legacies', ageLabel: 'About 4 Years Ago' },
  { id: '6', title: 'Silent Synchronous Reading Sessions', description: 'Notes on running silent meetings and reading sessions', ageLabel: 'Over 5 Years Ago' },
];

const nowLog: NowEntry[] = [
  { id: 'jan-2026', month: 'January 2026', content: [
    'I entered the new year holding an inconsolable, shrieking baby while London set off an armageddon of fireworks around us. So goes parenthood.',
    'It feels strange to be writing this now in a quiet moment while the house sleeps. I keep seeking silence more aggressively.',
    'Constraint has become prioritization. I only have energy for what truly matters, which is clarifying and exhausting.',
  ] },
  { id: 'oct-2025', month: 'October 2025', muted: true, content: ['Fall has arrived with a sudden drop in temperature. I have been revisiting old favorites and redesigning the garden section.'] },
];

const books: BookItem[] = [
  { id: 'b1', title: 'Age of Ambition: Chasing Fortune, Truth, and Faith in the New China', coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxfk646tvmz3MrMYANF4bWJkzPQ2rN5I39mkwzCGEt93QFFjPAdPJa_DpiLCM0iz1mC4PcaedQpyTDOOsRFIwdrIWSI-er4Dws-W8PvDVjSz0W4gi4WVUZTfg085GcZYZCTToKTceynMOaTsuv5rZ5JLMdAMd19pgQlhPYpqYgzYbba82T1NLvES8Ib3DC7nmV6hTQw3E3dWpdJl_j3glTznndL_kypy2uSx_BoPQqIMPKP4himXp0asf_uT1CzjKOgY3xJ0c9YPw' },
  { id: 'b2', title: 'Cue the Sun! The Invention of Reality TV', coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxOPf_GGCCjn4S85X21ititGPCxu79iSil6JEHRW6Cm0bilx8DI7ixKlXXx8j3sVXtzj6TVfjpaHcN8hQbQtj6zZ3tk8GRCu1b_mHxpP7JVYEKz9oVaPk2T_AQ0AH8YEAAZzuni2vjQt0kqPUmzHDNxyZm6wJawT2z7GNMmLMlF-TtDi62Gw9r4HIFbHf1Vs_aVRemfz8vDOXiAas9TCtGJx77vQnJp6hWcJuM_er8ROK3Tku3CDyPhWmwwm2j952eYompLVs4dnc' },
  { id: 'b3', title: "The Invention of Nature: Alexander von Humboldt's New World", coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB86MBtTr3AnfiP1juo3x-MY6_phxRt1sINsCXhcQTFgZDgP9QKjCNhNvLUGITAbkSXnuVXgaNUuLkRuqQ5ou90VIjqHEH1U3enz725FkCozoNPdGIQa0-YvIHlcWmySXxYCV2_qKFprVoRW10KavqrCzdsGRi5Td2u4ngQman66A1shZFmZOMPu9hlBh_PyshC6Z2L70m4arsHR3fkdl-jgEnuZl8-cRJz1QX-jJDSVnCMaZzr-5d3eWMa0uJJ4YYQlu5ie3-ffqw' },
  { id: 'b4', title: 'The Age of Wonder', coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCf3OdHR2exsQYzYJsSfXGoLtYwWi7lL76NrRNjxZZ3CPuZhqjNy7fsPpo9nTYcA5R8VX2cT-oyuThG_mgpu9dal7jJ2qY-SCvgdEERupHqpN5FIg-J26c1y4Wuq7dMF86JYx6LgOgfljT6V3j0CqEoGVWcd003vzkqYhwMq2kPYW4QZW2_d9mFOdGwIcfjy5phluGO4ZzW6DTjtigS4rQGSzCtNw4Lg7GNTEDMtgbA30ja1XUBZU6fiS2_2cejGGRLpns-dRFB8Zw' },
];

const antilibrary: AntilibraryBook[] = [
  {
    id: 'al1',
    title: 'The Order of Time',
    author: 'Carlo Rovelli',
    summary: 'Explores the physics of time and how our perception of "now" is a local phenomenon.',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8e47rSqWQ-hjjg8dqY1yBwFFgENDV9wIIEGKRyUhs_-AeSwHOltGrTwiP0SIl67sMoZ90n-MXEGb9nwTioqxw3vS7JFAvDVRHoePo3zfepbhQQ5dLyFwZzqYmccWGGPU4RA2qZJRm5kT6Z3Itxh-WgXF-w40e1tAgXPoVFbciJaDymt4tbX50mfIjQONcYm2SiMPfa5oHW3eYU5VihPOYpWN8DvHfH3lncA3YNQYdgz3bfUtGgW2SCJ-manWSo5cbKQLbNM07-i8',
    collection: 'to-read',
    collectionLabel: 'To Read',
    status: 'unread',
    stage: 'seedling',
    accent: 'amber',
  },
  {
    id: 'al2',
    title: 'Metaphors We Live By',
    author: 'George Lakoff',
    summary: 'A foundational text for cognitive linguistics and the metaphors that shape thought.',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCznSakO7eqLgqaIuc9PQ1cEXaFUvlCPxURiTfIChC6EUyjF0v61QcKJsR1Jh4jcaGmKoUiEkrdwzBOP3MZiedBO6EUkFt-CmBiWtxsunrpX01-R4MEOR8cchONyuuSVGiboFiS8y-_xE-HC5PFYDY6Ss1a6G4f2PxFVhKlHJrIUbLwRVTWiZH5KqEH8vnJ15MfriSqBDlsoOLEEL0SbEOM0VRZeRqOMA54e8-v9yMcoy_3vEai-WDIVO4khCjdSDO7D_rFp5kMEbw',
    collection: 'reference',
    collectionLabel: 'Reference Only',
    status: 'reference',
    stage: 'evergreen',
    accent: 'indigo',
  },
  {
    id: 'al3',
    title: 'Staying with the Trouble',
    author: 'Donna J. Haraway',
    summary: 'A provocation on multispecies justice and surviving on a damaged planet.',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzBQjfYXET-0FtvqWd1lIVDtG5oGdQf8QEK2DUQyP8dthS-Xd0rKo9Reme_5tW_h-HdZ69v06eWKKB40eI1hymzsncSWB0rbXudzPFljg73KHKT42w8xTATwv9oEChylbnskXEQK6fhVLhVrNeyUpYtHvXnx0HdX2DwnOtVWb2A2yaqLFwl0jcMqx4avQ1tTqJyi6E1gb8zfCGTz8kOfZWviE92BN88PI3RXtuKkXBBlSXp5NyBnDvV535vLjvv9__fYXZSMqB6jk',
    collection: 'to-read',
    collectionLabel: 'To Read',
    status: 'to-read',
    stage: 'seedling',
    accent: 'green',
  },
  {
    id: 'al4',
    title: 'Finite and Infinite Games',
    author: 'James P. Carse',
    summary: 'A distinction between playing to win and playing to keep the game going.',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPmrPEbxUhA6Qcgo_qOdX4RN9OsC821gEdIU4QO_XCX7ZVYgJ27NVeLZIVYv-q9A4hIAXj-sZvjjhKjJsoqVSBWBidz5aVKtUP8Zkt057NZnU5msK4QY17rbJVJrxjEz8KIF1C3bAWsW2une8P-jk7MiVrWzz1OfAFt0BVLKSr7MyuZBFO14d10I6TRIXWdg0cSZ2g9Awza2MJ4IEnsaDdNbDMYb4WQyliNdWgl4S6N2JEHc9PMwDvW2OZh90wtCma6_mu7DnC3tI',
    collection: 'archive',
    collectionLabel: 'Archives',
    status: 'archived',
    stage: 'evergreen',
    accent: 'violet',
  },
  {
    id: 'al5',
    title: 'The Spell of the Sensuous',
    author: 'David Abram',
    summary: 'A phenomenology of perception and the link between language and the animate earth.',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoPBcRKruINsNNEXhsc6aDHkOS5XXzR16gtL14Xb-f2xj5TA7Ki6vzsQa9oFlo7sOgmH5hgR2uwVxQ7z_iRiNhBSnrOF7_rKvGXpB7ZQZmeRXrhJK5cWgxRwpUG44BzhV9XrPi1kUYNO0RF9ojvm7eOdSgnycaxfS908wSNNfbtQThoLhnYYs3IzIUOdVt6Y1pHSyJyrTdtGhy-qk1IxiGOsNLSOzXSxdL__F-GH3ny9KNE-QSCJjS4QGlUtsdlTGtGoi1_Fq6ZxM',
    collection: 'reference',
    collectionLabel: 'Reference Only',
    status: 'reference',
    stage: 'budding',
    accent: 'orange',
  },
  {
    id: 'al6',
    title: 'Braiding Sweetgrass',
    author: 'Robin Wall Kimmerer',
    summary: 'Indigenous wisdom and scientific knowledge interwoven through the teachings of plants.',
    coverUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC82jXrF0__DVZ4OLQXUEewgcm0L--_NrIJUpBRsytakE8mwPkbornw9tYOCYvNKLVvEs3VF0f3d02t2eeK00sRdqDkt6tkUue00JccG_Xxzs7ohcg_aTDDm5CdJvuwAoa9GMaXmRQt5u1QxOYlLx_E9DnLd6LGN-W6Cc4itvU81E1y_EjYL0vmNWabC7ZOcD13hj4m8-SR62uDTWGdWvFi3aUKLJ0jPS6vEFEGiEsSpcmSxIhszYzHmvEHdGDphC2NPYjvM3sunqk',
    collection: 'reading',
    collectionLabel: 'Currently Reading',
    status: 'reading',
    stage: 'budding',
    accent: 'rose',
  },
];

const podcasts: PodcastEpisode[] = [
  {
    id: 'p1',
    title: 'The Future of Digital Gardens',
    description: 'A deep dive into how we organize thoughts online, moving from static pages to living, breathing knowledge graphs.',
    publishedLabel: 'Oct 2023',
    durationLabel: '45 min',
    stage: 'evergreen',
    series: 'Evergreen Piece',
    illustration: 'signal',
    isFeatured: true,
    isPopular: true,
  },
  {
    id: 'p2',
    title: 'Designing with AI Systems',
    description: 'Discussing the intersection of LLMs and design tools, and how creative workflows are fundamentally shifting.',
    publishedLabel: 'Sep 2023',
    durationLabel: '52 min',
    stage: 'budding',
    series: 'Developing Idea',
    illustration: 'neural',
    isPopular: true,
  },
  {
    id: 'p3',
    title: 'Metaphors We Live By in UI',
    description: 'Exploring how linguistic metaphors shape our interfaces and why we still use "folders" in a cloud-first world.',
    publishedLabel: 'Aug 2023',
    durationLabel: '38 min',
    stage: 'evergreen',
    series: 'Evergreen Piece',
    illustration: 'atlas',
    isPopular: true,
  },
  {
    id: 'p4',
    title: 'The Craft of Visual Thinking',
    description: 'How to use drawing as a tool for understanding complex problems before touching a single line of code.',
    publishedLabel: 'Jul 2023',
    durationLabel: '60 min',
    stage: 'seedling',
    series: 'Initial Thoughts',
    illustration: 'draft',
  },
  {
    id: 'p5',
    title: 'Building Knowledge Bases',
    description: 'Practical strategies for managing digital notes across multiple tools without losing your mind.',
    publishedLabel: 'Jun 2023',
    durationLabel: '42 min',
    stage: 'budding',
    series: 'Developing Idea',
    illustration: 'archive',
  },
  {
    id: 'p6',
    title: 'Architecture of Information',
    description: 'Why the structure of our digital spaces matters as much as the content within them.',
    publishedLabel: 'May 2023',
    durationLabel: '55 min',
    stage: 'evergreen',
    series: 'Evergreen Piece',
    illustration: 'blueprint',
    isPopular: true,
  },
];

const talks: TalkItem[] = [
  {
    id: 't1',
    title: 'Building Scalable Design Systems',
    description: 'A deep dive into creating robust component architecture for large product teams and enterprise interfaces.',
    dateLabel: 'Oct 2023',
    locationLabel: 'London',
    kind: 'presentation',
    stage: 'evergreen',
    illustration: 'systems',
    isFeatured: true,
  },
  {
    id: 't2',
    title: 'Digital Gardening 101',
    description: 'An introduction to personal knowledge management and the craft of maintaining a living, evolving garden.',
    dateLabel: 'Aug 2023',
    locationLabel: 'New York',
    kind: 'workshop',
    stage: 'seedling',
    illustration: 'botany',
  },
  {
    id: 't3',
    title: 'The Future of Web Interfaces',
    description: 'Exploring AI-assisted products, spatial interactions, and why browser-native experiences still matter.',
    dateLabel: 'Jun 2023',
    locationLabel: 'Remote',
    kind: 'presentation',
    stage: 'budding',
    illustration: 'future',
  },
  {
    id: 't4',
    title: 'UI Architecture Best Practices',
    description: 'Principles and decision frameworks for building maintainable, accessible interfaces at scale.',
    dateLabel: 'Jan 2023',
    locationLabel: 'Berlin',
    kind: 'presentation',
    stage: 'evergreen',
    illustration: 'structure',
  },
  {
    id: 't5',
    title: 'Design for Emotion',
    description: 'How typography, pacing, and visual rhythm shape emotional tone in digital products.',
    dateLabel: 'Nov 2022',
    locationLabel: 'Paris',
    kind: 'workshop',
    stage: 'budding',
    illustration: 'emotion',
  },
  {
    id: 't6',
    title: 'The Art of Documentation',
    description: 'Treating docs as product surfaces to improve onboarding, developer flow, and team alignment.',
    dateLabel: 'Sep 2022',
    locationLabel: 'London',
    kind: 'presentation',
    stage: 'seedling',
    illustration: 'writing',
  },
];

const patterns: PatternItem[] = [
  {
    id: 'pt1',
    title: 'Narrative Threading',
    description: 'Techniques for maintaining semantic context across non-linear information paths in hyperlinked environments.',
    updatedLabel: 'Updated 2 days ago',
    stage: 'evergreen',
    lens: 'Knowledge Design',
    illustration: 'thread',
    isFeatured: true,
  },
  {
    id: 'pt2',
    title: 'Spatial Interfaces',
    description: 'Mapping digital information architecture to physical human intuition and muscle memory for better navigation.',
    updatedLabel: 'Updated 1 week ago',
    stage: 'budding',
    lens: 'Navigation',
    illustration: 'field',
  },
  {
    id: 'pt3',
    title: 'Ambient Awareness',
    description: 'Designing low-friction signals of activity and presence in collaborative digital environments without noise.',
    updatedLabel: 'Updated 3 days ago',
    stage: 'seedling',
    lens: 'Collaboration',
    illustration: 'ambient',
  },
  {
    id: 'pt4',
    title: 'Bi-directional Links',
    description: 'The architectural foundation of the associative web, allowing for mutual context and effortless discovery.',
    updatedLabel: 'Updated 5 months ago',
    stage: 'evergreen',
    lens: 'Information Architecture',
    illustration: 'links',
  },
  {
    id: 'pt5',
    title: 'Progressive Disclosure',
    description: 'Managing system complexity by revealing information only as needed to achieve specific user goals.',
    updatedLabel: 'Updated 1 month ago',
    stage: 'evergreen',
    lens: 'Interaction Design',
    illustration: 'veil',
  },
  {
    id: 'pt6',
    title: 'Local-first Sync',
    description: 'Prioritizing user agency and offline capabilities through decentralized data structures and CRDTs.',
    updatedLabel: 'Updated 12 hours ago',
    stage: 'seedling',
    lens: 'Systems Thinking',
    illustration: 'sync',
  },
];

const smidgeons: SmidgeonItem[] = [
  {
    id: 's1',
    date: 'August 2, 2025',
    tags: ['Artificial Intelligence', 'End-User Programming', 'Language Models'],
    title: 'Vibe code is legacy code',
    author: 'Steve Krouse',
    summary: [
      'A lovely little write-up on how vibe code and legacy code are roughly the same thing: code that nobody understands.',
      'The piece reframes maintenance as conversational stewardship rather than strict code ownership.',
      'It raises a practical question: if AI can maintain intent, what new role should human understanding play?'
    ],
  },
];

const garden: GardenEntry[] = [
  { id: 'g-now', type: 'now', stage: 'evergreen', title: 'January 2026', description: 'A new now update about parenthood, work constraints, and perspective.', route: APP_ROUTES.now },
  { id: 'g-essay', type: 'essay', stage: 'budding', title: 'The Web is a Living Document', description: 'A longform essay on fluidity, typography, and designing for change.', imageUrl: essays[0].heroImageUrl, route: APP_ROUTES.writingDetail(essays[0].slug) },
  { id: 'g-note', type: 'note', stage: 'seedling', title: notes[0].title, description: notes[0].description, route: APP_ROUTES.notes },
  { id: 'g-pattern', type: 'pattern', stage: 'evergreen', title: patterns[0].title, description: 'Recurring design patterns and conceptual frameworks for digital tools and cognitive architecture.', route: APP_ROUTES.patterns },
  { id: 'g-talk', type: 'talk', stage: talks[0].stage, title: talks[0].title, description: 'Presentations, workshops, and lectures on design systems, web interfaces, and knowledge tools.', route: APP_ROUTES.talks },
  { id: 'g-podcast', type: 'podcast', stage: 'evergreen', title: podcasts[0].title, description: 'Conversations, interviews, and audio explorations on design, systems, and digital craft.', route: APP_ROUTES.podcasts },
  { id: 'g-antilibrary', type: 'note', stage: 'budding', title: 'Antilibrary', description: 'Unread books and reference shelves for future research and intellectual exploration.', route: APP_ROUTES.antilibrary },
  { id: 'g-library', type: 'note', stage: 'budding', title: 'Library / Antilibrary', description: 'Books I like the idea of having read.', route: APP_ROUTES.library },
  { id: 'g-smidgeons', type: 'note', stage: 'seedling', title: 'Smidgeons Stream', description: 'A stream of links, papers, and tiny thoughts.', route: APP_ROUTES.smidgeons },
];

const essaySummaries: EssaySummary[] = essays.map(({ body, ...summary }) => {
  void body;
  return summary;
});

export const httpClient: HttpClient = {
  async get<T>(url: string): Promise<T> {
    await fakeNetworkDelay(120);
    if (url === '/posts') return mockPosts as T;
    if (url === '/essays') return essaySummaries as T;
    if (url.startsWith('/essays/')) {
      const essay = essays.find((entry) => entry.slug === url.replace('/essays/', ''));
      if (!essay) throw new Error(`Essay not found`);
      return essay as T;
    }
    if (url === '/notes') return notes as T;
    if (url === '/now') return nowLog as T;
    if (url === '/library') return books as T;
    if (url === '/antilibrary') return antilibrary as T;
    if (url === '/patterns') return patterns as T;
    if (url === '/talks') return talks as T;
    if (url === '/podcasts') return podcasts as T;
    if (url === '/smidgeons') return smidgeons as T;
    if (url === '/garden') return garden as T;
    throw new Error(`Unknown endpoint: ${url}`);
  },
};
