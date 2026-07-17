export function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About me"
      className="scroll-mt-24 lg:mb-24"
    >
      <h2 className="mb-6 text-xs font-bold uppercase tracking-widest text-foreground lg:sr-only">
        About
      </h2>
      <div className="space-y-4 leading-relaxed text-muted-foreground">
        <p>
          I&apos;m an Informatics student exploring the worlds of{' '}
          <span className="font-medium text-foreground">backend logic</span> and{' '}
          <span className="font-medium text-foreground">ethical hacking</span>. I enjoy getting my hands dirty with coding, tinkering with{' '}
          <span className="font-medium text-foreground">hardware (Arduino)</span>, and learning how to build apps that don&apos;t just work well under the hood, but also feel good for the user.
        </p>
        <p>
          Beyond the screen, I&apos;m an active student leader. My journey from leading{' '}
          <span className="font-medium text-foreground">organizational media</span> to advocating for{' '}
          <span className="font-medium text-foreground">student welfare</span> has trained me to manage people, streamline digital services, and build solutions that actually help my campus community.
        </p>
        <p>
          Whether I&apos;m learning to secure a web app from attackers, designing a relational database, or leading a team under tight deadlines, my goal remains simple: to leave things more secure, functional, and better organized than I found them.
        </p>
      </div>
    </section>
  )
}
