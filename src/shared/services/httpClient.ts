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
  {
    slug: 'folk-interfaces',
    title: 'Folk Interfaces',
    excerpt: 'How people build their own tools, hacks, and workarounds when software fails to meet them where they are.',
    readTimeMinutes: 8,
    publishedAt: '2021-11-03',
    heroImageUrl: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1400&q=80',
    category: 'engineering',
    visual: 'folk',
    author: 'Maggie Appleton',
    authorRole: 'Design Anthropologist',
    authorAvatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    illustrationCredit: 'Visual Dispatch',
    body: {
      intro:
        'Before Figma, before Adobe, before the GUI—people were already designing. They just called it something else. Folk interfaces are the handmade tools, workarounds, and joyful hacks that emerge when people refuse to let software limit what they can do.',
      sectionTitle: 'When Users Become Makers',
      sectionBody:
        "A spreadsheet with embedded colour-coded rituals. A text file with a personal syntax no one else can read. A Notion dashboard restructured each week because last week's structure no longer matches how the mind is working. These are not failures of the software. They are people doing what humans have always done: adapting the tools at hand to fit the shape of their lives.",
      quote:
        'The folk artefacts of any era are its best design criticism. They reveal, with devastating precision, what the official tools got wrong.',
      typographyTitle: 'The Craft of the Workaround',
      typographyBody:
        'When we encounter a workaround, we tend to see inefficiency. But there is another way to read it: as a form of feedback, a signal that the designed path was not the natural one. Workarounds are hypotheses about better tools. Some of them are even correct.',
      typographyBody2:
        "Design teams would do well to study the folk interfaces that emerge in the wake of their products. Users don't always articulate what they need—but they build it, quietly, in the margins of the tools they were given.",
      conclusion:
        'Every spreadsheet-as-database is a protest. Every personal text-file syntax is a manifesto. Folk interfaces are not edge cases—they are the point. They are where human ingenuity lives when official design fails to make room for it.',
      figureImageUrl:
        'https://images.unsplash.com/photo-1568209865332-a15790aed756?auto=format&fit=crop&w=1400&q=80',
    },
  },
  {
    slug: 'drawing-invisible-systems',
    title: 'Drawing Invisible Systems',
    excerpt: 'Visual thinking as a method for making the abstract tangible—and why diagrams are a form of argument.',
    readTimeMinutes: 7,
    publishedAt: '2022-02-14',
    heroImageUrl: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=1400&q=80',
    category: 'design',
    visual: 'diagram',
    author: 'Maggie Appleton',
    authorRole: 'Design Anthropologist',
    authorAvatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    illustrationCredit: 'Field Notes Studio',
    body: {
      intro:
        'Some ideas resist language. The moment you commit them to a sentence, something important slips away—the multiplicity, the feedback loops, the simultaneity. Drawing is a different kind of thinking. It makes room for things that words cannot hold.',
      sectionTitle: 'The Argument of the Diagram',
      sectionBody:
        'A diagram is not a neutral representation. It is a claim. Every box you draw asserts that this thing is a unit. Every arrow claims a relationship. The space between elements says something about distance and independence. When we draw a system, we are not documenting it—we are arguing for a particular way of seeing it.',
      quote:
        'The best diagrams are not illustrations of ideas. They are the ideas themselves, given a form that the eye can travel and the hand can dispute.',
      typographyTitle: 'Sketching as Method, Not Output',
      typographyBody:
        'We tend to treat visual thinking as a precursor to real work—the rough stage before the polished deliverable. But for many designers and researchers, the sketch is the site of the actual thinking. The act of drawing surfaces contradictions that would otherwise stay buried in the prose.',
      typographyBody2:
        'When you draw a process as a diagram, you have to decide where it starts and ends. That decision, so easy to skip in writing, becomes unavoidable on the page. The boundary you draw is the insight.',
      conclusion:
        'Visual thinking does not simplify complex systems. It complicates them in the right way—by making their structure visible, arguable, and changeable. The invisible becomes something you can point at, argue with, and improve.',
      figureImageUrl:
        'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1400&q=80',
    },
  },
  {
    slug: 'how-humans-became-legible',
    title: 'How Humans Became Legible',
    excerpt: "On James Scott's Seeing Like a State, the violence of classification, and why maps always leave something out.",
    readTimeMinutes: 9,
    publishedAt: '2022-06-20',
    heroImageUrl: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1400&q=80',
    category: 'anthropology',
    visual: 'legible',
    author: 'Maggie Appleton',
    authorRole: 'Design Anthropologist',
    authorAvatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    illustrationCredit: 'Archive Remix',
    body: {
      intro:
        "James Scott's Seeing Like a State opens with a provocation: modern states require their subjects to be legible. To be counted. To be categorised. To fit into systems that can be administered from a distance. The violence of this requirement is subtle, but it runs very deep.",
      sectionTitle: 'The Cost of Being Seen',
      sectionBody:
        'Before standardised surnames, many people were known by their place, their trade, or their relationship: John the Miller, Mary of the Hill, Thomas son of Richard. This naming was local, contextual, and sufficient for the communities that used it. When states needed to count people—for taxes, for armies—that richness became a liability. Names had to be fixed, transferable, and unique across large distances.',
      quote:
        'To be made legible by a state is to have your complexity reduced to what the state can use. The remainder is not recorded. It simply ceases to exist, officially.',
      typographyTitle: 'Digital Legibility and Its Costs',
      typographyBody:
        'Every form you fill out on the internet is a small act of becoming legible to a system. You accept its categories—your gender from a dropdown, your occupation from a list—or you leave the field blank and become, in that small way, invisible to the system that needs you to be countable.',
      typographyBody2:
        'Platform designers make these choices constantly: which categories to offer, which fields to require, what it means to leave something blank. These decisions are not neutral. They determine whose lives can be represented and whose are left as remainder.',
      conclusion:
        'Legibility is not the same as understanding. The map that makes a city governable also makes it less of a city—more grid, less neighbourhood. We should design systems that can hold complexity, not ones that require us to shed it to get through the door.',
      figureImageUrl:
        'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1400&q=80',
    },
  },
  {
    slug: 'a-brief-history-of-tools-for-thought',
    title: 'A Brief History of Tools for Thought',
    excerpt: "From Vannevar Bush's Memex to Roam Research—tracing our long obsession with building machines to think with.",
    readTimeMinutes: 10,
    publishedAt: '2022-10-08',
    heroImageUrl: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1400&q=80',
    category: 'engineering',
    visual: 'memex',
    author: 'Maggie Appleton',
    authorRole: 'Design Anthropologist',
    authorAvatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    illustrationCredit: 'Studio Fluids',
    body: {
      intro:
        'In 1945, Vannevar Bush imagined a machine he called the Memex—a desk fitted with a screen and controls that would let a scientist navigate their entire library as if by thought, leaving trails of association that could be shared with colleagues. He never built it. But the idea has been haunting us ever since.',
      sectionTitle: 'The Unrealised Dream',
      sectionBody:
        "Douglas Engelbart spent most of his career trying to build Bush's dream. His 1968 demonstration—the Mother of All Demos—showed a system with hypertext, collaborative editing, and a mouse. The audience was stunned. And then decades passed, and almost none of it made it into the mainstream. The tools that won were simpler, easier to ship, and far less ambitious.",
      quote:
        'Every generation of tool builders inherits the same unfulfilled promise: that we might one day build a machine worthy of the complexity of thought itself.',
      typographyTitle: 'The Garden Grows Slowly',
      typographyBody:
        "The digital garden movement is the latest iteration of this dream. It trades databases and algorithms for something older and stranger: tending. You don't architect a garden. You plant things, see what grows, prune what doesn't, and return to it over time. The metaphor is not incidental—it changes what you believe software should do.",
      typographyBody2:
        "Roam Research, Obsidian, Notion, and their kin are experiments in personal knowledge infrastructure. They don't solve the problem Bush articulated. But they keep it alive, which may be the most important thing. The dream of the Memex keeps us from accepting that software has already reached its ceiling.",
      conclusion:
        'Tools for thought are a form of optimism. Each new tool carries the claim that human cognition is worth extending—that the mind, given the right scaffold, can reach further than it could alone. We have not built the Memex yet. But we are still trying. That matters more than we admit.',
      figureImageUrl:
        'https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1400&q=80',
    },
  },
  {
    slug: 'designing-for-ambient-co-presence',
    title: 'Designing for Ambient Co-presence',
    excerpt: 'What remote collaboration tools get wrong about the feeling of being together in a shared space.',
    readTimeMinutes: 8,
    publishedAt: '2023-01-25',
    heroImageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80',
    category: 'design',
    visual: 'presence',
    author: 'Maggie Appleton',
    authorRole: 'Design Anthropologist',
    authorAvatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    illustrationCredit: 'Visual Dispatch',
    body: {
      intro:
        'Before the pandemic, remote work was something companies permitted reluctantly and employees practised with apology. After it, we learned something uncomfortable: the tools we had built for remote work were designed for the exception, not the rule. They were built for absence, not presence.',
      sectionTitle: 'The Signal We Actually Send',
      sectionBody:
        'In an office, presence is ambient. You know whether your colleague is at their desk, in a conversation, or staring at their screen with the particular intensity that means do not interrupt me. You learn this without trying. The office provides a continuous low-bandwidth signal about the state of the people around you. Remote work has almost nothing like this.',
      quote:
        'A green dot on a Slack profile is not presence. It is the ghost of presence—a status update wearing the costume of a human signal.',
      typographyTitle: 'Designing Peripheral Vision',
      typographyBody:
        "The best tools for co-presence are not video calls. Video calls are high-bandwidth interruptions. What we actually need are low-bandwidth continuous signals—the digital equivalent of seeing someone's coat on a chair and knowing they are nearby. This is peripheral vision, and almost no software is designed for it.",
      typographyBody2:
        "Some tools are beginning to explore this space: Figma's live cursors, Linear's presence indicators, the humble typing indicator in a chat app. Each is a small attempt to make absence feel less absolute. The space ahead of us is vast and almost entirely unexplored.",
      conclusion:
        'Co-presence is not a feature. It is a fundamental quality of collaborative environments that we have barely begun to understand in digital space. The challenge is not to replicate the office—it is to understand what made the office work, and to build something that does the same thing differently.',
      figureImageUrl:
        'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=80',
    },
  },
  {
    slug: 'the-technical-and-the-cultural',
    title: 'The Technical and the Cultural Are the Same Thing',
    excerpt: 'Why the division between hard technical problems and soft cultural ones is a fiction worth dismantling.',
    readTimeMinutes: 9,
    publishedAt: '2023-05-11',
    heroImageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80',
    category: 'anthropology',
    visual: 'venn',
    author: 'Maggie Appleton',
    authorRole: 'Design Anthropologist',
    authorAvatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    illustrationCredit: 'Field Notes Studio',
    body: {
      intro:
        'There is a habit of mind, common in engineering culture, that treats social and cultural factors as complications layered on top of a neutral technical substrate. The real problem is technical. The cultural stuff is just context. This habit of mind is wrong—and understanding why reveals something important about how technology actually works.',
      sectionTitle: 'Technology Is Always Already Cultural',
      sectionBody:
        "Langdon Winner's famous question—Do Artefacts Have Politics?—was not asking whether people have used technology for political ends. Of course they have. He was asking something harder: whether the design of an artefact, independent of how it is used, can carry political content. His answer, developed through careful case studies, was yes.",
      quote:
        'A bridge with a low clearance that keeps buses out of certain neighbourhoods is not a neutral structure. It is a decision about who gets to move through the world, encoded in concrete.',
      typographyTitle: 'Interface as Ideology',
      typographyBody:
        'Digital interfaces are not neutral surfaces. They embed assumptions about users—who they are, how they think, what they need. These assumptions are cultural. They are also invisible in the way that all default assumptions are invisible: you only notice them when you are the person they were not designed for.',
      typographyBody2:
        'The work of inclusive design is not cosmetic. It is not about adding features for edge cases. It is about recognising that the default user is always a cultural construction—and choosing, deliberately, to expand whose experience counts as normal.',
      conclusion:
        'The technical and the cultural are not two layers of the same thing. They are the same thing. Every technical decision is a cultural decision. Every design choice reflects a theory of human nature. The only question is whether we make those choices consciously or let them crystallise, unexamined, into the structure of our systems.',
      figureImageUrl:
        'https://images.unsplash.com/photo-1526378787940-576a539ba69d?auto=format&fit=crop&w=1400&q=80',
    },
  },
  {
    slug: 'programming-as-theory-building',
    title: 'Programming as Theory Building',
    excerpt: "Peter Naur's radical thesis: a program is not the code, but the shared understanding held in the minds of its makers.",
    readTimeMinutes: 11,
    publishedAt: '2023-09-28',
    heroImageUrl: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1400&q=80',
    category: 'engineering',
    visual: 'theory',
    author: 'Maggie Appleton',
    authorRole: 'Design Anthropologist',
    authorAvatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    illustrationCredit: 'Maggie Studio',
    body: {
      intro:
        'In 1985, the Danish computer scientist Peter Naur published an essay that most programmers have never read. Its title was Programming as Theory Building. Its argument, stated simply, is this: the primary product of programming is not the code. It is the shared understanding—the theory—that the programmers hold in their minds.',
      sectionTitle: 'What Dies When Programmers Leave',
      sectionBody:
        "Naur's essay was motivated by a problem everyone in software recognises but struggles to name: why is it so hard to modify or maintain a programme whose original authors have left? We tend to blame documentation. But Naur argued that documentation was a symptom, not a cause. The real loss is the theory. The understanding of why the programme is shaped the way it is.",
      quote:
        'A programme is a solution to a problem. But the solution and the problem live, primarily, in the minds of the people who built it—not in the code itself.',
      typographyTitle: 'The Limits of Legibility',
      typographyBody:
        'We have invested enormously in making code readable: naming conventions, linting, documentation generators, architecture diagrams. All of these help. But they capture the what, not the why. The theory—the web of decisions, constraints, trade-offs, and abandoned alternatives—resists encoding. It is tacit knowledge, and tacit knowledge lives in people, not files.',
      typographyBody2:
        'This has implications beyond software. Any complex system built by a team of people carries a theory in the minds of its builders. When those people leave, the theory degrades. What remains is an artefact whose behaviour can be studied but whose rationale may be permanently lost.',
      conclusion:
        'Programming is not a solitary act of writing. It is a collective act of understanding. The code is evidence of that understanding—but it is not the understanding itself. We need to think much more carefully about what it means to maintain not just software, but the human knowledge that makes software meaningful.',
      figureImageUrl:
        'https://images.unsplash.com/photo-1545670723-196ed0954986?auto=format&fit=crop&w=1400&q=80',
    },
  },
  {
    slug: 'the-dark-forest-internet',
    title: 'The Dark Forest Theory of the Internet',
    excerpt: 'Why the public web is getting quieter, and where all the real conversations went.',
    readTimeMinutes: 9,
    publishedAt: '2023-11-15',
    heroImageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=80',
    category: 'design',
    visual: 'forest',
    author: 'Maggie Appleton',
    authorRole: 'Design Anthropologist',
    authorAvatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    illustrationCredit: 'Archive Remix',
    body: {
      intro:
        'The public internet has been getting quieter. Not in terms of traffic—traffic is stratospheric. But in terms of voices. The people who used to write publicly, in their own spaces, have mostly retreated. Their blogs went dark. Their forums closed. And yet they are still here. They just moved somewhere you cannot easily see them.',
      sectionTitle: 'Why the Forest Went Dark',
      sectionBody:
        "Liu Cixin's science fiction novel The Dark Forest offers a metaphor that has proven strangely apt. In the novel, the universe is silent not because it is empty but because every civilisation, upon becoming detectable, is immediately eliminated. The rational strategy is to stay hidden. The silence of the cosmos is not emptiness—it is concealment.",
      quote:
        'The incentive structure of the public internet now punishes authenticity and rewards performance. What you say in public can be archived, decontextualised, and weaponised. The prudent response is silence.',
      typographyTitle: 'Where the Conversation Went',
      typographyBody:
        "The conversation did not disappear. It moved to private newsletters, closed Discord servers, group chats, and invite-only communities. These spaces are not searchable. They are not indexed. They do not contribute to the public record. They are, in the metaphor, dark forests—alive with activity, but invisible to anyone who hasn't been welcomed in.",
      typographyBody2:
        'This matters for design. It means that the surfaces we build for public expression are increasingly used for performance rather than genuine communication. The people who would speak genuinely have moved to smaller rooms. The designers of public platforms should ask: what would it take to make public expression feel safe again?',
      conclusion:
        'The dark forest internet is not a crisis of content. It is a crisis of trust. We built the public web without asking whether it would be possible to be vulnerable in it. Now we are learning the answer. The next generation of tools will need to make privacy and intimacy the design goal, not the afterthought.',
      figureImageUrl:
        'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=80',
    },
  },
  {
    slug: 'we-know-more-than-we-can-tell',
    title: 'We Know More Than We Can Tell',
    excerpt: "Michael Polanyi's tacit knowledge and what it means that the most important things resist explanation.",
    readTimeMinutes: 10,
    publishedAt: '2024-04-20',
    heroImageUrl: 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&w=1400&q=80',
    category: 'anthropology',
    visual: 'iceberg',
    author: 'Maggie Appleton',
    authorRole: 'Design Anthropologist',
    authorAvatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    illustrationCredit: 'Field Notes Studio',
    body: {
      intro:
        'Michael Polanyi began his most famous book with a sentence so simple it sounds almost trivial: we know more than we can tell. The depth of this observation only becomes apparent when you try to explain something you know perfectly well how to do—how to ride a bicycle, how to recognise a face, how to tell when a conversation is going wrong. The knowledge is real. The explanation fails.',
      sectionTitle: 'The Iceberg of Skill',
      sectionBody:
        "We live in a culture that privileges explicit knowledge—the kind you can write down, transfer, measure, and certify. Degrees, credentials, documentation, specifications. These are the visible portion of the iceberg. Beneath the surface sits something vast and largely invisible: the tacit knowledge that makes explicit knowledge usable. The surgeon who knows when something feels wrong. The programmer who senses a bad abstraction before they can name why. The designer who reads a mockup and says this doesn't work.",
      quote:
        'Tacit knowledge is not a gap in what we understand. It is the foundation on which all understanding rests. The map is always smaller than the territory it was made to navigate.',
      typographyTitle: 'What Survives the Documentation',
      typographyBody:
        'The knowledge management industry—Notion, Roam, Obsidian, Confluence, all of it—is built on the assumption that knowledge can be captured and transferred. And some of it can. But the most important knowledge in any organisation tends to be the kind that walks out the door when people leave.',
      typographyBody2:
        'This is not a technological problem. No software will solve it. It is a structural problem about how humans learn—through practice, through imitation, through working alongside people who know things they cannot fully explain. Mentorship is not a soft benefit. It is the transmission medium for tacit knowledge.',
      conclusion:
        'We have built extraordinary tools for the explicit layer of knowledge. We have barely begun to think about the tacit layer. The most important things—craft, judgement, intuition, expertise—resist our best documentation efforts. Maybe that is not a failure to be solved. Maybe it is a reminder that learning is irreducibly human, and that some knowledge can only be passed between people.',
      figureImageUrl:
        'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&w=1400&q=80',
    },
  },
];

const notes: NoteItem[] = [
  { id: '1',  title: 'Statistically, When Will My Baby Be Born?',             description: 'A tiny probabilistic tool to estimate when your baby might arrive, drawing on epidemiological data.',    ageLabel: '10 Months Ago',      stage: 'seedling',  topics: ['tools', 'statistics'] },
  { id: '2',  title: 'The Best Illustration Books and Courses',                description: 'My favourite resources for developing visual thinking skills — books, courses, and practice methods.',      ageLabel: 'About 4 Years Ago',  stage: 'evergreen', topics: ['illustration', 'learning'] },
  { id: '3',  title: 'A Naïve Exploration of CSCL',                           description: 'Notes on the academic field of Computer-Supported Collaborative Learning and its major papers.',            ageLabel: 'Over 5 Years Ago',   stage: 'seedling',  topics: ['education', 'research', 'collaboration'] },
  { id: '4',  title: 'How to Import Academic Papers from Zotero into Tana',   description: 'A practical import pipeline for integrating reference management with personal knowledge systems.',         ageLabel: '12 Months Ago',      stage: 'budding',   topics: ['tools', 'knowledge-management'] },
  { id: '5',  title: 'Pattern Languages in Programming and Interface Design',  description: "Christopher Alexander's pattern language and how it migrated into software architecture and UI systems.",  ageLabel: 'About 4 Years Ago',  stage: 'evergreen', topics: ['design', 'engineering'] },
  { id: '6',  title: 'Silent Synchronous Reading Sessions',                    description: 'Notes on the practice of running silent meetings and how shared reading changes group dynamics.',           ageLabel: 'Over 5 Years Ago',   stage: 'budding',   topics: ['collaboration', 'learning'] },
  { id: '7',  title: 'What Makes a Good API',                                  description: 'Exploring the aesthetic and pragmatic dimensions of API design — legibility, affordance, and taste.',      ageLabel: '8 Months Ago',       stage: 'budding',   topics: ['engineering', 'design'] },
  { id: '8',  title: 'On Spatial Thinking and Conceptual Metaphor',            description: "Lakoff and Johnson's insight that abstract thought is grounded in spatial and bodily experience.",         ageLabel: 'About 3 Years Ago',  stage: 'evergreen', topics: ['cognition', 'language'] },
  { id: '9',  title: 'The Attention Economy and Its Discontents',              description: 'Loose threads on how time-on-site became a proxy for value — and what we lost in the bargain.',           ageLabel: '5 Months Ago',       stage: 'seedling',  topics: ['culture', 'technology'] },
  { id: '10', title: 'Notes on Building a Second Brain',                       description: "Tiago Forte's externalised PKM system as a tool for creative professionals — strengths and blind spots.", ageLabel: '2 Years Ago',        stage: 'budding',   topics: ['knowledge-management', 'tools'] },
  { id: '11', title: 'Why Wikipedia Works (and What It Gets Wrong)',           description: 'Governance, neutrality, and the surprising economics of open collaborative knowledge production.',         ageLabel: 'About 3 Years Ago',  stage: 'evergreen', topics: ['culture', 'collaboration'] },
  { id: '12', title: 'The Problem with Dark Mode',                             description: 'Dark mode is not simply an inversion. Notes on contrast, readability, and the aesthetics of darkness.',    ageLabel: '6 Months Ago',       stage: 'seedling',  topics: ['design', 'technology'] },
  { id: '13', title: 'Slow Reading as a Practice',                             description: 'Against the productivity framing of reading — on attention, annotation, and re-reading as a discipline.',  ageLabel: 'About 2 Years Ago',  stage: 'budding',   topics: ['learning', 'culture'] },
  { id: '14', title: 'On the Craft of Explanation',                            description: 'What separates a clear explanation from a confusing one — structure, analogy, and the reader model.',      ageLabel: 'About 4 Years Ago',  stage: 'evergreen', topics: ['writing', 'education'] },
  { id: '15', title: 'How Programming Languages Shape Thought',                description: 'The Sapir-Whorf hypothesis applied to code — do the languages we write in constrain what we can think?',  ageLabel: '18 Months Ago',      stage: 'budding',   topics: ['engineering', 'cognition', 'language'] },
  { id: '16', title: 'Epistemic Autonomy and the AI Question',                 description: 'When AI handles synthesis, does the reader still build their own understanding? Open questions only.',     ageLabel: '3 Months Ago',       stage: 'seedling',  topics: ['technology', 'philosophy', 'education'] },
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
