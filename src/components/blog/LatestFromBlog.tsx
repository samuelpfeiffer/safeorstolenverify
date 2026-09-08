
import React from 'react';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import { BlogCard } from '@/components/blog/BlogCard';
import { Link } from '@/lib/router-compat';

export const LatestFromBlog: React.FC = () => {
  const { data: posts, isLoading, error } = useBlogPosts(3);

  return (
    <section className="py-16 bg-sos">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Latest from the Blog</h2>
          <Link to="/blog" className="text-sos-orange hover:text-sos-orange/80 text-sm font-medium">View all</Link>
        </div>

        {isLoading ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1,2,3].map(i => (
              <div key={i} className="h-64 bg-white/10 border border-white/20 rounded-xl animate-pulse" />
            ))}
          </div>
        ) : error || !posts || posts.length === 0 ? (
          <div className="text-center py-12 text-gray-300">
            No posts yet. Check back soon!
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
