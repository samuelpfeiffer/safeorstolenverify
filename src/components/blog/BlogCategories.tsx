
import { Link } from 'react-router-dom';
import { useBlogCategories } from '@/hooks/useBlogPosts';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const BlogCategories = () => {
  const { data: categories, isLoading, error } = useBlogCategories();

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-8 bg-gray-200 rounded-[0.25rem] animate-pulse" />
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error || !categories) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Categories</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <Link 
            to="/blog"
            className="block p-2 rounded-[0.25rem] hover:bg-gray-50 transition-colors"
          >
            <Badge variant="outline" className="w-full justify-start">
              All Posts
            </Badge>
          </Link>
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/blog/category/${category.slug}`}
              className="block p-2 rounded-[0.25rem] hover:bg-gray-50 transition-colors"
            >
              <Badge 
                style={{ backgroundColor: category.color || '#3B82F6' }}
                className="text-white w-full justify-start"
              >
                {category.name}
              </Badge>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
