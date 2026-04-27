import { Post } from '@/shared/types/post';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="post-card">
      <img src={post.imageUrl} alt={post.title} loading="lazy" />
      <h3>{post.title}</h3>
      <p>{post.description}</p>
    </article>
  );
}
