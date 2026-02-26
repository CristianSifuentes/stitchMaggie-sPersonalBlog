import { memo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { EssaySummary } from '@/features/writing/types/essay';
import { APP_ROUTES } from '@/app/config/routes';
import { writingManager } from '@/features/writing/services/WritingManager';

interface EssayCollectionCardProps {
  essay: EssaySummary;
}

function EssayVisual({ visual }: Pick<EssaySummary, 'visual'>) {
  if (visual === 'bulb') {
    return (
      <div className="visual visual-bulb" aria-hidden>
        <div className="bulb-core" />
      </div>
    );
  }

  if (visual === 'cards') {
    return (
      <div className="visual visual-cards" aria-hidden>
        <div className="paper paper-left" />
        <div className="paper paper-center" />
        <div className="paper paper-right" />
      </div>
    );
  }

  return (
    <div className="visual visual-planet" aria-hidden>
      <div className="planet-core" />
      <div className="planet-ring" />
      <span className="planet-dot" />
    </div>
  );
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
    <article className="essay-collection-card">
      <Link to={APP_ROUTES.writingDetail(essay.slug)} onMouseEnter={prefetchEssay} onFocus={prefetchEssay}>
        <div className="essay-collection-card-visual">
          <EssayVisual visual={essay.visual} />
        </div>

        <div className="essay-collection-card-copy">
          <h2>{essay.title}</h2>
        </div>
      </Link>
    </article>
  );
}

export const EssayCollectionCard = memo(EssayCollectionCardImpl);
