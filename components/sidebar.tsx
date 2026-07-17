'use client'

import { useEffect, useState } from 'react'
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
} from '@/components/social-icons'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
]

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/Atharfw', Icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/athar-fajle-mawla-wicaksono', Icon: LinkedinIcon },
  { label: 'Instagram', href: 'https://www.instagram.com/atharfajle.m.w', Icon: InstagramIcon },
]

const PROFILE_IMAGES = [
  'Athar1.JPG',
  'Athar2.JPG',
  'Athar3.JPG',
]

export function Sidebar() {
  const [active, setActive] = useState('about')
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % PROFILE_IMAGES.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id),
    ).filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleNav = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="flex flex-col lg:sticky lg:top-0 lg:h-screen lg:max-h-screen lg:w-2/5 lg:justify-between lg:py-24 lg:pr-8">
      <div className="lg:pr-4">
        <div className="relative mb-6 h-48 w-48 overflow-hidden rounded-2xl border border-border shadow-lg">
          {PROFILE_IMAGES.map((src, index) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={src}
              src={src || '/placeholder.svg'}
              alt="Portrait of Athar Fajle Mawla Wicaksono"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
                slide === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Athar Fajle Mawla Wicaksono
        </h1>
        <h2 className="mt-3 text-lg font-medium text-foreground sm:text-xl">
          Faculty of Computer Science
          Informatics Student <br />
          UPN "Veteran" Jakarta
        </h2>
        <p className="mt-1 text-sm font-medium tracking-wide text-primary">
          Back-End &amp; Cybersecurity Enthusiast
        </p>
        <p className="mt-4 max-w-sm text-pretty leading-relaxed text-muted-foreground">
          Developing my skills in backend architecture and web vulnerabilities, driven by a passion to build secure digital systems.
        </p>

        <nav aria-label="In-page navigation" className="mt-16 hidden lg:block">
          <ul className="space-y-4">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.id
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id)}
                    className="group flex items-center gap-4 py-1"
                  >
                    <span
                      className={`h-px bg-muted-foreground transition-all duration-300 group-hover:w-16 group-hover:bg-primary ${
                        isActive ? 'w-16 bg-primary' : 'w-8'
                      }`}
                    />
                    <span
                      className={`text-xs font-semibold uppercase tracking-widest transition-colors duration-300 group-hover:text-primary ${
                        isActive ? 'text-primary' : 'text-muted-foreground'
                      }`}
                    >
                      {item.label}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      <ul className="mt-8 flex items-center gap-5">
        {SOCIALS.map(({ label, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="block text-muted-foreground transition-colors duration-300 hover:text-primary"
            >
              <Icon className="h-6 w-6" />
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}
