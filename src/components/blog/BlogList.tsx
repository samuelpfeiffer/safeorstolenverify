
import { BlogCard } from './BlogCard';
import { BlogPost } from '@/hooks/useBlogPosts';

interface BlogListProps {
  posts: BlogPost[];
  featured?: boolean;
}

export const BlogList = ({ posts, featured = false }: BlogListProps) => {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-foreground mb-2">No blog posts found</h3>
        <p className="text-muted-foreground">Check back later for new content!</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <BlogCard 
          key={post.id} 
          post={post} 
          featured={featured && index === 0}
        />
      ))}
    </div>
  );
};
