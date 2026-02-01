import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/seo/SEOHead';

interface BlogPostTemplateProps {
  title: string;
  metaDescription: string;
  author: string;
  publishDate: string;
  readingTime: string;
  keywords: string[];
  content: {
    intro: string;
    sections: {
      heading: string;
      content: string;
      subsections?: { subheading: string; content: string }[];
    }[];
    conclusion: string;
  };
  relatedArticles?: { title: string; url: string }[];
  canonical?: string;
}

export const BlogPostTemplate = ({
  title,
  metaDescription,
  author,
  publishDate,
  readingTime,
  keywords,
  content,
  relatedArticles = [],
  canonical
}: BlogPostTemplateProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": metaDescription,
    "author": {
      "@type": "Person",
      "name": author
    },
    "datePublished": publishDate,
    "publisher": {
      "@type": "Organization",
      "name": "SafeOrStolen",
      "logo": {
        "@type": "ImageObject",
        "url": "https://safeorstolen.com/logo.png"
      }
    },
    "keywords": keywords.join(', ')
  };

  return (
    <>
      <SEOHead
        title={`${title} | Blog`}
        description={metaDescription}
        keywords={keywords.join(', ')}
        canonical={canonical}
        ogType="article"
        publishedTime={publishDate}
        author={author}
        schemaJson={schema}
      />

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
        <article className="max-w-4xl mx-auto px-4 py-24">
          {/* Back Button */}
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{publishDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{readingTime} read</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed mb-8 text-muted-foreground">{content.intro}</p>

            {content.sections.map((section, index) => (
              <section key={index} className="mb-12">
                <h2 className="text-3xl font-bold mb-6">{section.heading}</h2>
                <p className="text-lg leading-relaxed mb-6">{section.content}</p>
                
                {section.subsections && section.subsections.map((subsection, subIndex) => (
                  <div key={subIndex} className="ml-6 mb-6">
                    <h3 className="text-2xl font-semibold mb-4">{subsection.subheading}</h3>
                    <p className="text-base leading-relaxed">{subsection.content}</p>
                  </div>
                ))}
              </section>
            ))}

            <section className="mb-12 p-8 bg-card rounded-lg border-l-4 border-primary">
              <h2 className="text-3xl font-bold mb-6">Conclusion</h2>
              <p className="text-lg leading-relaxed">{content.conclusion}</p>
            </section>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 via-destructive/10 to-primary/10 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Verify Before You Buy</h3>
            <p className="text-muted-foreground mb-6">
              Use SafeOrStolen to check if items are stolen before making your next purchase. Free verification in 3 seconds.
            </p>
            <Link to="/verify">
              <Button size="lg">Start Free Check</Button>
            </Link>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
              <div className="grid gap-4">
                {relatedArticles.map((article, index) => (
                  <Link
                    key={index}
                    to={article.url}
                    className="p-6 bg-card rounded-lg hover:bg-accent transition-colors"
                  >
                    <h4 className="font-semibold text-lg hover:text-primary">{article.title}</h4>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </>
  );
};
