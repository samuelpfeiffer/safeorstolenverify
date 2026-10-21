import { PageSEO } from '@/components/seo/PageSEO';
import { MessageSquare } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@/lib/router-compat';
import { StoryForm } from '@/components/stories/StoryForm';
import { StoryWall } from '@/components/stories/StoryWall';
import { TrustpilotReviews } from '@/components/stories/TrustpilotReviews';

/**
 * Oct 7 2026: rewritten by hand for "safeorstolen reviews". The page was titled "Press &
 * Credentials" and listed paid wire releases (about a partnership we can't verify) as "real press
 * coverage", with off-site links. SafeOrStolen has no testimonials it can verify, so the page now
 * says that plainly, explains how to judge the service yourself, and how to send feedback.
 */

const FEEDBACK_EMAIL = 'safeorstolenmail@gmail.com';

const TestimonialsPage = () => (
  <>
    <PageSEO
      title="SafeOrStolen Reviews and Feedback"
      description="SafeOrStolen reviews: rated 4.0 out of 5 on Trustpilot. Read what users say, judge the stolen-item check yourself with 2 free checks, and send feedback."
      keywords="safeorstolen reviews, safeorstolen feedback, is safeorstolen legit, safeorstolen testimonials"
      canonical="/testimonials"
      modifiedTime="2026-10-18"
      structuredData={[
        {
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'SafeOrStolen Reviews and Feedback',
          description: 'How to judge SafeOrStolen yourself and how to send feedback.',
          dateModified: '2026-10-18',
        },
      ]}
    />
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 pt-12 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">SafeOrStolen Reviews and Feedback</h1>
          <p className="text-lg text-muted-foreground mb-4">
            SafeOrStolen only shows reviews you can check for yourself. Below are the reviews from our Trustpilot
            page, word for word, with a link so you can see them there. The best way to judge the service is still to
            run the 2 free checks yourself, with no account or credit card, and see what a result tells you.
          </p>
          <p className="text-sm text-muted-foreground mb-6">Updated October 18, 2026</p>
          <div className="-mx-4 mb-6"><TrustpilotReviews heading="Reviews on Trustpilot" /></div>

          <h2 className="text-2xl font-bold mb-4">How to judge it yourself</h2>
          <ul className="space-y-3 text-muted-foreground list-disc pl-6 mb-10">
            <li>
              Every result lists each source that was searched, so you can see exactly what was
              checked. The list is also on <Link to="/data-sources" className="text-primary hover:underline">data sources</Link>.
            </li>
            <li>
              A result reads "reported stolen", "possible match", or "no report found in the records searched". Before
              you pay for anything, also ask the seller for proof of ownership, like a receipt or the original box.
            </li>
            <li>
              Gun serials are searched against police firearm theft and loss reports from 33 states and Washington, DC,
              bikes against a national stolen-bicycle registry, and Arizona VINs and plates against Arizona
              law-enforcement stolen-vehicle records.
            </li>
            <li>
              The monthly plan ($10) can be cancelled anytime and has a 30-day refund. Details are on{' '}
              <Link to="/pricing" className="text-primary hover:underline">pricing</Link>.
            </li>
          </ul>

          <Card className="p-8 bg-primary/5 border-primary/20">
            <div className="text-center">
              <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Send feedback</h2>
              <p className="text-muted-foreground mb-6">
                Used SafeOrStolen before buying or selling something? Tell us what happened, good or bad, and what
                was missing from the result. Complaints and bug reports go to the same address:{' '}
                {FEEDBACK_EMAIL}.
              </p>
              <Button asChild>
                <a href={`mailto:${FEEDBACK_EMAIL}?subject=SafeOrStolen feedback`}>Email your feedback</a>
              </Button>
            </div>
          </Card>

          <div className="mt-10">
            <StoryWall limit={20} title="Stories from real users" />
            <StoryForm />
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link to="/verify">Run a free check</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default TestimonialsPage;
