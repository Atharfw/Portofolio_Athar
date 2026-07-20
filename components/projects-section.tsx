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

const PROJECTS: Project[] = [
 {
    title: 'Offensive Security Final Project (KDJ)',
    description: (
      <>
        A comprehensive penetration testing simulation project designed to evaluate system resilience. It focuses on identifying, exploiting, and mitigating critical security vulnerabilities such as SQL Injection (SQLi) and Cross-Site Scripting (XSS), complete with professional-grade mitigation reporting.{' '}
        <a 
          href="https://drive.google.com/file/d/1VU9Xu0ege5InZJUIjgzEpiDFndcaJ-at/view?usp=sharing" 
          target="_blank" 
          rel="noreferrer"
          className="font-medium text-foreground hover:text-primary hover:underline focus-visible:text-primary"
        >
          View the project report
        </a>.
      </>
    ),
    tags: ['Kali Linux','Metaspoitable2', 'Burp Suite', 'SQLi', 'XSS', 'Security Reporting', 'Penetration Testing', 'Vulnerability Assessment', 'Blue Teaming', 'Red Teaming'],
    images: [
      '/kdj1.jpeg',
      '/kdj1a.jpeg',
      '/kdj1c.jpeg',
      '/kdj2.jpeg',
      '/kdj3.jpeg',
      '/kdj4.jpeg',
      '/kdj5.jpeg',
      '/kdj6.jpeg',
      '/kdj7.jpeg',
      '/kdj8.jpeg',
      '/kdj9.jpeg',
      '/kdj10.jpeg',
    ],
  },
  {
    title: 'UniTask',
    description: (
      <>
       A UI/UX design concept and mockup for a hyperlocal gig economy platform tailored specifically for university ecosystems. This project visualizes how students can seamlessly connect to offer and seek freelance services through an intuitive, modern, and user-friendly interface.{' '}
      <a 
          href="https://drive.google.com/file/d/1xEecLI6U4GLBYGGlqFXZle_QgZG9xYez/view?usp=sharing" 
          target="_blank" 
          rel="noreferrer"
          className="font-medium text-foreground hover:text-primary hover:underline focus-visible:text-primary"
        >
          View the project report
        </a>.
      </>
    ),
    tags: ['Front End', 'UI/UX Design', 'Database Design', 'PWA', 'Mockup', 'Figma'],
    images: [
      '/uni1.jpg',
      '/uni2.jpg',
      '/uni3.jpg',
      '/uni4.jpg',
      '/uni5.jpg',
    ],
  },
  {
    title: 'NongkiBib',
    link: 'https://github.com/beeb1709/Project_NongkiBib',
    description: (
      <>
        A gamified time management mobile application concept. Rather than just tracking schedules, this app is built around a strict penalty system to discipline its users turning focus and accountability into an engaging challenge to break the habit of procrastination.{' '}
      <a 
          href="https://drive.google.com/file/d/1OdVHvCqjPf27vOHFTKxSYIw0O4z5fpv0/view?usp=sharing" 
          target="_blank" 
          rel="noreferrer"
          className="font-medium text-foreground hover:text-primary hover:underline focus-visible:text-primary"
        >
          View the project report
        </a>
        {' & '}
        <a 
          href="https://drive.google.com/file/d/1OdVHvCqjPf27vOHFTKxSYIw0O4z5fpv0/view?usp=sharing" 
          target="_blank" 
          rel="noreferrer"
          className="font-medium text-foreground hover:text-primary hover:underline focus-visible:text-primary"
        >
          View Our Presentation Video
        </a>.
      </>
    ),
    tags: ['Mobile', 'Gamification', 'Android Studio', 'Kotlin', 'Figma', 'UI/UX Design', 'Prototyping', 'MySQL'],
    images: [
      '/bib1.jpg',
      '/bib2.jpg',
      '/bib3.jpg',
      '/bib4.jpg',
      '/bib5.jpg',
    ],
  },
  {
    title: 'Kesma Web',
    link: 'https://github.com/Atharfw/Web_Kesma',
    description: (
      'A student welfare web platform initiated to digitalize organizational services. This system facilitates a highly structured advocacy workflow, centralizes data management, and significantly improves the accessibility of digital services for students.'
    ),
    tags: ['Web App', 'Tailwind', 'Backend', 'JavaScript', 'MySQL', 'Prototyping'],
    images: [
      '/k1.jpg',
      '/k2.jpg',
      '/k3.jpg',
    ],
  },
  {
    title: 'Spotify Data Processor',
    link: 'https://github.com/Atharfw/project_uas/blob/main/spotifyFix.cpp',
    description: (
      <>
        An academic-scale data analytics project focused on the selection and processing of music datasets. This system implements core algorithms and complex data structures to efficiently sort, manage, and execute queries across large volumes of data.{' '}
      <a 
          href="https://drive.google.com/drive/folders/1P8JcmeBWSslD-dWE4WQytXpck-fihBKe?usp=sharing" 
          target="_blank" 
          rel="noreferrer"
          className="font-medium text-foreground hover:text-primary hover:underline focus-visible:text-primary"
        >
          View the project report
        </a>.
      </>
    ),
    tags: ['C++', 'Data Structures', 'Algorithms'],
    images: [
      '/1.jpg',
      '/2.jpg',
      '/3.jpg',
      '/4.jpg',
      '/5.jpg',
      '/6.jpg',
      '/7.jpg',
      '/8.jpg',
    ],
  },
  {
    title: 'Scholarship Selection System',
    link: 'https://github.com/Atharfw/kecerdasan_buatan',
    description: (
      <>
        An intelligent Decision Support System (DSS) built using the Fuzzy Sugeno logic algorithm. Designed to minimize subjective bias in evaluating scholarship applicants, this system delivers highly precise recipient recommendations based on measurable, weighted criteria.{' '}
      <a 
          href="https://drive.google.com/file/d/1SDa-Deqxl9lJiMjAHC-IqdC1GXCPhaqq/view?usp=sharing" 
          target="_blank" 
          rel="noreferrer"
          className="font-medium text-foreground hover:text-primary hover:underline focus-visible:text-primary"
        >
          View the project report
        </a>
        {' & '}
        <a 
          href="https://youtu.be/nQO77D9lo0A?si=Avsd-k3dOSO8y8EI" 
          target="_blank" 
          rel="noreferrer"
          className="font-medium text-foreground hover:text-primary hover:underline focus-visible:text-primary"
        >
          View Our Presentation Video
        </a>.
      </>
    ),
    tags: ['Fuzzy Logic', 'Python', 'Decision Support', 'Algorithms', 'Programming', 'Mathematics'],
    images: [
      '/AI.JPG',
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
