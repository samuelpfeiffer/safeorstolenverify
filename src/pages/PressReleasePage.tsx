import { PageSEO } from '@/components/seo/PageSEO';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@/lib/router-compat';
import { Newspaper, Mail } from 'lucide-react';

/**
 * Oct 7 2026: rewritten by hand for "safeorstolen press release". The old page linked off-site
 * to four paid wire releases announcing a partnership we can't verify and a "mobile app" that is
 * actually a web app, and called SafeOrStolen "the leading" platform founded in 2017 in Peoria,
 * Arizona. With those gone there is little left to list, so the
 * page is short: what's current, where the facts live, and who to email.
 */

const PRESS_EMAIL = 'safeorstolenmail@gmail.com';

export default function PressReleasePage() {
  return (
    <>
      <PageSEO
        title="SafeOrStolen Press Releases and Announcements"
        description="Looking for a SafeOrStolen press release? Current company facts, what a check searches and pricing, plus the press email: safeorstolenmail@gmail.com."
        keywords="safeorstolen press release, safeorstolen announcement, safeorstolen news"
        canonical="/press-release"
        modifiedTime="2026-10-07"
      />
      <div className="min-h-screen bg-background pt-20">
        <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <Newspaper className="h-12 w-12 text-primary mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">SafeOrStolen Press Releases</h1>
            <p className="text-lg text-muted-foreground mb-4">
              This page no longer lists SafeOrStolen's earlier wire releases, because they made claims we can't
              confirm, and there is no new release to replace them. For accurate, current
              facts about the company, use the <Link to="/press-kit" className="text-primary hover:underline">press kit</Link>,
              and email {PRESS_EMAIL} with any question.
            </p>
            <p className="text-sm text-muted-foreground">Updated October 7, 2026</p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">What's current</h2>
            <p className="text-muted-foreground mb-4">
              SafeOrStolen is a stolen-item check for used phones, cars, guns, bikes and anything with a serial
              number, based in Peoria, AZ. As of October 2026:
            </p>
            <ul className="space-y-2 text-muted-foreground list-disc pl-6">
              <li>Gun checks search 242,839 police firearm theft and loss reports from 33 states and Washington, DC (filed through 2017; the years covered vary by state) and live Ohio law-enforcement records.</li>
              <li>Arizona VINs and plates are searched against Arizona law-enforcement stolen-vehicle records, updated twice a day.</li>
              <li>Phone checks show the make and model from the IMEI, with a paid carrier blacklist check available.</li>
              <li>An optional $1.99 verification certificate gives buyers a dated record, with its own link, showing they checked before the sale.</li>
              <li>The app is a free installable web app at <Link to="/app" className="text-primary hover:underline">safeorstolen.com/app</Link>.</li>
            </ul>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 max-w-3xl">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-2">Media questions</h2>
                <p className="text-muted-foreground mb-4">
                  Email {PRESS_EMAIL} with your outlet and deadline. Company boilerplate and the logo are on the{' '}
                  <Link to="/press-kit" className="text-primary hover:underline">press kit</Link>.
                </p>
                <Button variant="outline" asChild className="gap-2">
                  <a href={`mailto:${PRESS_EMAIL}?subject=Press inquiry`}>
                    <Mail className="h-4 w-4" />
                    {PRESS_EMAIL}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
