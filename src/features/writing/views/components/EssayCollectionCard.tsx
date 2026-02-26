import { memo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { EssaySummary } from '@/features/writing/types/essay';
import { APP_ROUTES } from '@/app/config/routes';
import { writingManager } from '@/features/writing/services/WritingManager';

interface EssayCollectionCardProps {
  essay: EssaySummary;
}

function EssayCollectionCardImpl({ essay }: EssayCollectionCardProps) {
  const queryClient = useQueryClient();

  const prefetchEssay = useCallback(() => {
    void queryClient.prefetchQuery({
      queryKey: ['writing', 'essay', essay.slug],
      queryFn: () => writingManager.getEssayBySlug(essay.slug),
    });
  }, [essay.slug, queryClient]);

  return (
    <article className="essay-card">
      <Link to={APP_ROUTES.writingDetail(essay.slug)} onMouseEnter={prefetchEssay} onFocus={prefetchEssay}>
        <img src={essay.heroImageUrl} alt={essay.title} loading="lazy" />
        <div className="essay-card-content">
          <span className="essay-category">{essay.category}</span>
          <h3>{essay.title}</h3>
          <p>{essay.excerpt}</p>
          <small>
            {new Date(essay.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}{' '}
            · {essay.readTimeMinutes} min read
          </small>
        </div>
      </Link>
    </article>
  );
}

export const EssayCollectionCard = memo(EssayCollectionCardImpl);
