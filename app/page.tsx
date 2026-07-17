import { Sidebar } from '@/components/sidebar'
import { AboutSection } from '@/components/about-section'
import { ExperienceSection } from '@/components/experience-section'
import { ProjectsSection } from '@/components/projects-section'
import { LightboxProvider } from '@/components/lightbox'

export default function Page() {
  return (
    <LightboxProvider>
      <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:px-10 lg:flex lg:gap-4 lg:px-12 lg:py-0">
          <Sidebar />
          <main
            id="content"
            className="flex flex-col gap-20 pt-16 lg:w-3/5 lg:gap-24 lg:py-24"
          >
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
          </main>
        </div>
      </div>
    </LightboxProvider>
  )
}
