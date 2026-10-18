import { Link } from "@/lib/router-compat";

export const AUTHOR_PERSON = {
  "@type": "Person",
  name: "Samuel Pfeiffer",
  jobTitle: "Founder",
  url: "https://safeorstolen.com/our-story",
  image: "https://safeorstolen.com/images/samuel-pfeiffer.jpg",
  worksFor: { "@type": "Organization", name: "SafeOrStolen", url: "https://safeorstolen.com" },
  sameAs: [
    "https://twitter.com/safeorstolen",
    "https://www.youtube.com/@safeorstolen",
    "https://www.crunchbase.com/organization/safe-or-stolen",
  ],
};

export const PRIMARY_SOURCES = [
  { name: "ATF Data and Statistics", url: "https://www.atf.gov/resource-center/data-statistics" },
  { name: "FBI Uniform Crime Reporting", url: "https://ucr.fbi.gov/" },
];

export function AuthorByline() {
  return (
    <p className="text-sm text-muted-foreground">
      By <Link to="/our-story" className="text-primary hover:underline">Samuel Pfeiffer</Link>, founder of SafeOrStolen.
    </p>
  );
}

export function PrimarySources() {
  return (
    <section className="mt-8 border-t border-border pt-4">
      <h2 className="text-lg font-bold mb-2">Primary sources</h2>
      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
        {PRIMARY_SOURCES.map((s) => (
          <li key={s.url}>
            <a className="text-primary hover:underline" href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}
