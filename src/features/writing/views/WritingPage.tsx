import { useMemo } from 'react';
import { EssayCollectionCard } from '@/features/writing/views/components/EssayCollectionCard';
import { useEssaysCollection } from '@/features/writing/hooks/useEssaysCollection';

const CATEGORY_OPTIONS = [
  { value: 'all', label: 'All categories' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'design', label: 'Design' },
  { value: 'anthropology', label: 'Anthropology' },
] as const;

export function WritingPage() {
  const { essays, filters, isFiltering, isLoading, updateCategory, updateQuery } = useEssaysCollection();

  const resultLabel = useMemo(() => {
    if (isLoading) {
      return 'Loading essays...';
    }

    if (essays.length === 0) {
      return 'No essays found. Try another query.';
    }

    return `${essays.length} essays available`;
  }, [essays.length, isLoading]);

  return (
    <section className="container writing-page">
      <header className="writing-header">
        <h1>Maggie&apos;s Essays Collection</h1>
        <p>
          A curated long-form archive inspired by Maggie Appleton&apos;s research-driven storytelling style: interface culture,
          software systems, and digital anthropology.
        </p>
      </header>

      <div className="writing-toolbar">
        <input
          value={filters.query}
          onChange={(event) => updateQuery(event.target.value)}
          placeholder="Search by title or idea"
          aria-label="Search essays"
        />
        <select
          value={filters.category}
          onChange={(event) => updateCategory(event.target.value as (typeof CATEGORY_OPTIONS)[number]['value'])}
          aria-label="Filter essays by category"
        >
          {CATEGORY_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <p className="writing-result-label">{isFiltering ? 'Refining collection…' : resultLabel}</p>

      <div className="essay-grid">
        {essays.map((essay) => (
          <EssayCollectionCard key={essay.slug} essay={essay} />
        ))}
      </div>
    </section>
  );
}
