interface AboutPageProps {
  variant?: 'about' | 'now';
}

export function AboutPage({ variant = 'about' }: AboutPageProps) {
  const isNow = variant === 'now';

  return (
    <section className="container simple-page">
      <h1>{isNow ? 'Now' : 'About'}</h1>
      <p>
        {isNow
          ? 'Currently exploring AI, software architecture, and visual narratives through code.'
          : 'Maggie is a designer and anthropologist turning complex ideas into visual essays.'}
      </p>
    </section>
  );
}
