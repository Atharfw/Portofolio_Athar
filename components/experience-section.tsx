'use client'

import { useLightbox } from '@/components/lightbox'

type Experience = {
  period: string
  role: string
  org: string
  description: string
  tags: string[]
  image: string
}

// Swap these placeholder URLs for real photos later.
const EXPERIENCES: Experience[] = [
  {
    period: 'Jan 2026 - Present',
    role: 'Head of Kesejahteraan Mahasiswa',
    org: 'Himpunan Mahasiswa Informatika',
    description:
      'Lead the student welfare division, championing advocacy and strategic problem-solving. Manage welfare programs end to end, mediate student concerns, and drive organizational advocacy initiatives that improve day-to-day student life.',
    tags: ['Leadership', 'Advocacy', 'Strategy', 'Data Management'],
    image: 'Kesma.JPG',
  },
  {
    period: 'MedkomInfo 2025 - 2026',
    role: 'Head of Media Komunikasi dan Informasi',
    org: 'Himpunan Mahasiswa Informatika',
    description:
      'Directed public communication and media strategy for the association. Led a full division, shaped the organization’s digital voice, and coordinated content across channels to keep members informed and engaged.',
    tags: ['Media Strategy', 'Communication', 'Team Leadership', 'Branding'],
    image: 'Medkom.JPG',
  },
  {
    period: 'High School (2022 - 2023)',
    role: 'Security Staff',
    org: 'Organizational Committees',
    description:
      'Managed crowd control and tactical management under pressure and reliable execution across varied operational roles.',
    tags: ['Crowd Control', 'Event Ops', 'Coordination'],
    image: 'Thallasic.JPG',
  },
]

export function ExperienceSection() {
  const { open } = useLightbox()

  return (
    <section
      id="experience"
      aria-label="Experience"
      className="scroll-mt-24 lg:mb-24"
    >
      <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-foreground lg:sr-only">
        Experience
      </h2>
      <ol className="group/list space-y-4">
        {EXPERIENCES.map((exp) => (
          <li key={exp.role}>
            <div className="group relative grid gap-4 rounded-lg p-4 transition-all duration-300 hover:bg-card/60 sm:grid-cols-8 sm:gap-6 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute inset-0 hidden rounded-lg border border-transparent transition group-hover:border-border group-hover:bg-card/50 lg:block" />
              <header className="z-10 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
                {exp.period}
              </header>
              <div className="z-10 sm:col-span-6">
                <button
                  type="button"
                  onClick={() =>open({ images: [exp.image], alt: `${exp.role} photo` })}
                  aria-label={`View ${exp.role} image`}
                  className="group/thumb mb-4 block aspect-video w-full overflow-hidden rounded-lg border border-border/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <img
                    src={exp.image || '/placeholder.svg'}
                    alt={`${exp.role} thumbnail`}
                    className="h-full w-full object-cover object-top opacity-80 transition-all duration-500 group-hover/thumb:scale-105 group-hover/thumb:opacity-100"
                  />
                </button>

                <h3 className="font-semibold leading-snug text-foreground">
                  {exp.role}
                </h3>
                <p className="text-sm text-primary">{exp.org}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <li key={tag}>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
