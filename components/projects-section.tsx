'use client'
import { ArrowUpRight } from 'lucide-react'
import { useLightbox } from '@/components/lightbox'

type Project = {
  title: string
  link?: string
  description: React.ReactNode
  tags: string[]
  images: string[]
}

// Sw these placeholder URLs for real project screenshots later.ap
const PROJECTS: Project[] = [
 {
    title: 'Offensive Security Final Project (KDJ)',
    link: 'https://github.com/username-lu/repo-kdj', 
    description: (
      <>
        Conducted a sanctioned vulnerability assessment and penetration test simulation on a controlled web application as a final examination. Identified and exploited critical vulnerabilities such as SQL injection and XSS, then delivered a{' '}
        <a 
          href="https://link-google-drive-laporan-lu.com" 
          target="_blank" 
          rel="noreferrer"
          className="font-medium text-foreground hover:text-primary hover:underline focus-visible:text-primary"
        >
          comprehensive mitigation report
        </a>.
      </>
    ),
    tags: ['Kali Linux', 'Burp Suite', 'SQLi', 'XSS', 'Security Reporting'],
    images: [
      'https://picsum.photos/seed/kdj-security-1/800/450',
      'https://picsum.photos/seed/kdj-security-2/800/450',
      'https://picsum.photos/seed/kdj-security-3/800/450',
    ],
  },
  {
    title: 'UniTask',
    link: 'https://github.com/yourusername/unitask',
    description: (
      <>
      'A hyperlocal gig economy platform connecting students with nearby tasks. Focused on robust backend logic, a well-structured relational database, and Progressive Web App (PWA) integration for a native-like experience.',then delivered a{' '}
      <a 
          href="https://link-google-drive-laporan-lu.com" 
          target="_blank" 
          rel="noreferrer"
          className="font-medium text-foreground hover:text-primary hover:underline focus-visible:text-primary"
        >
          comprehensive mitigation report
        </a>.
      </>
    ),
    tags: ['Backend', 'Database Design', 'PWA', 'Python'],
    images: [
      'https://picsum.photos/seed/unitask/800/450',
      'https://picsum.photos/seed/unitask-2/800/450',
      'https://picsum.photos/seed/unitask-3/800/450',
    ],
  },
  {
    title: 'NongkiBib',
    link: 'https://github.com/yourusername/nongkibib',
    description: (
      <>
        'A gamified time management mobile app concept built around strict penalty logic — turning focus and accountability into a game that discourages procrastination.',then delivered a{' '}
      <a 
          href="https://link-google-drive-laporan-lu.com" 
          target="_blank" 
          rel="noreferrer"
          className="font-medium text-foreground hover:text-primary hover:underline focus-visible:text-primary"
        >
          comprehensive mitigation report
        </a>.
      </>
    ),
    tags: ['Mobile', 'Gamification', 'UX', 'Figma'],
    images: [
      'https://picsum.photos/seed/nongkibib/800/450',
      'https://picsum.photos/seed/nongkibib-2/800/450',
      'https://picsum.photos/seed/nongkibib-3/800/450',
    ],
  },
  {
    title: 'Kesma Web',
    link: 'https://github.com/yourusername/kesma-web',
    description: (
      <>
        'A student welfare web platform designed to streamline advocacy workflows, manage organizational data, and improve digital services for students.',then delivered a{' '}
      <a 
          href="https://link-google-drive-laporan-lu.com" 
          target="_blank" 
          rel="noreferrer"
          className="font-medium text-foreground hover:text-primary hover:underline focus-visible:text-primary"
        >
          comprehensive mitigation report
        </a>.
      </>
    ),
    tags: ['Web App', 'Tailwind', 'Backend', 'Data Management'],
    images: [
      'https://picsum.photos/seed/kesma-web/800/450',
      'https://picsum.photos/seed/kesma-web-2/800/450',
      'https://picsum.photos/seed/kesma-web-3/800/450',
    ],
  },
  {
    title: 'Spotify Data Processor',
    link: 'https://github.com/yourusername/spotify-data-processor',
    description: (
      <>
        'An academic final exam project focused on music data selection and processing, applying core algorithms and complex data structures to efficiently handle and query large datasets.',then delivered a{' '}
      <a 
          href="https://link-google-drive-laporan-lu.com" 
          target="_blank" 
          rel="noreferrer"
          className="font-medium text-foreground hover:text-primary hover:underline focus-visible:text-primary"
        >
          comprehensive mitigation report
        </a>.
      </>
    ),
    tags: ['C++', 'Data Structures', 'Algorithms'],
    images: [
      'https://picsum.photos/seed/spotify-data/800/450',
      'https://picsum.photos/seed/spotify-data-2/800/450',
      'https://picsum.photos/seed/spotify-data-3/800/450',
    ],
  },
  {
    title: 'Scholarship Selection System',
    link: 'https://github.com/yourusername/scholarship-selection-system',
    description: (
      <>
        'A decision support system leveraging the Fuzzy Sugeno logic algorithm to objectively evaluate applicants and determine scholarship recipients based on weighted criteria.',then delivered a{' '}
      <a 
          href="https://link-google-drive-laporan-lu.com" 
          target="_blank" 
          rel="noreferrer"
          className="font-medium text-foreground hover:text-primary hover:underline focus-visible:text-primary"
        >
          comprehensive mitigation report
        </a>.
      </>
    ),
    tags: ['Fuzzy Logic', 'Python', 'Decision Support', 'Algorithms'],
    images: [
      'https://picsum.photos/seed/scholarship-dss/800/450',
      'https://picsum.photos/seed/scholarship-dss-2/800/450',
      'https://picsum.photos/seed/scholarship-dss-3/800/450',
    ],
  },
]

export function ProjectsSection() {
  const { open } = useLightbox()
  return (
    <section
      id="projects"
      aria-label="Selected projects"
      className="scroll-mt-24"
    >
      <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-foreground lg:sr-only">
        Projects
      </h2>
      <ul className="grid gap-4 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <li key={project.title} className="group">
            <article className="relative flex h-full flex-col rounded-lg border border-border bg-card/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-card">
              <button
                type="button"
                onClick={() =>
                  open({
                    images: project.images,
                    alt: `${project.title} screenshot`,
                  })
                }
                aria-label={`View ${project.title} images`}
                className="group/thumb relative mb-4 block aspect-video overflow-hidden rounded-lg border border-border focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <img
                  src={project.images[0] || '/placeholder.svg'}
                  alt={`${project.title} thumbnail`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                />
                {project.images.length > 1 && (
                  <span className="absolute bottom-2 right-2 rounded-full bg-black/70 px-2 py-0.5 text-xs font-medium text-white tabular-nums">
                    {`+${project.images.length - 1}`}
                  </span>
                )}
              </button>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group/link flex items-start justify-between gap-3 focus:outline-none"
                >
                  <h3 className="font-semibold leading-snug text-foreground transition-colors group-hover:text-primary group-hover/link:underline focus-visible:underline">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-hover/link:text-primary"
                    aria-hidden="true"
                  />
                </a>
              ) : (
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                </div>
              )}
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2 pt-1">
                {project.tags.map((tag) => (
                  <li key={tag}>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {tag}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
