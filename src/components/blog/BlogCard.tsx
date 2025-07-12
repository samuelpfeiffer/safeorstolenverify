
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Tag } from 'lucide-react';
import { BlogPost } from '@/hooks/useBlogPosts';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Card className={cn('group hover:shadow-lg transition-shadow duration-300', featured && 'md:col-span-2')}>
      {post.featured_image_url && (
        <div className="relative overflow-hidden">
          <img
            src={post.featured_image_url}
            alt={post.title}
            className={cn(
              'w-full object-cover group-hover:scale-105 transition-transform duration-300',
              featured ? 'h-64' : 'h-48'
            )}
          />
          {post.categories && post.categories.length > 0 && (
            <div className="absolute top-4 left-4">
              <Badge 
                style={{ backgroundColor: post.categories[0].color || '#3B82F6' }}
                className="text-white"
              >
                {post.categories[0].name}
              </Badge>
            </div>
          )}
        </div>
      )}
      
      <CardHeader>
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{post.published_at ? formatDate(post.published_at) : formatDate(post.created_at)}</span>
          </div>
          {post.reading_time && (
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{post.reading_time} min read</span>
            </div>
          )}
        </div>
        
        <Link to={`/blog/${post.slug}`} className="block">
          <h3 className={cn(
            'font-bold text-gray-900 group-hover:text-blue-600 transition-colors',
            featured ? 'text-2xl' : 'text-xl'
          )}>
            {post.title}
          </h3>
        </Link>
      </CardHeader>

      <CardContent>
        <p className="text-gray-600 leading-relaxed">
          {post.excerpt || post.content.substring(0, 150) + '...'}
        </p>
      </CardContent>

      <CardFooter className="flex justify-between items-center">
        <div className="flex flex-wrap gap-1">
          {post.tags?.slice(0, 3).map((tag) => (
            <Badge key={tag.id} variant="secondary" className="text-xs">
              <Tag className="h-3 w-3 mr-1" />
              {tag.name}
            </Badge>
          ))}
          {post.tags && post.tags.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{post.tags.length - 3} more
            </Badge>
          )}
        </div>
        
        <Link 
          to={`/blog/${post.slug}`}
          className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
        >
          Read More →
        </Link>
      </CardFooter>
    </Card>
  );
};
