import HeroScene from "@/components/hero-scene";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#070A17] text-white">
      <section id="home" className="relative h-[175vh] bg-[#070A17]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden px-6 py-24 lg:px-16">
          {/* Full-screen 3D background */}
          <div className="absolute inset-0 z-0">
            <HeroScene />
            <div className="absolute inset-0 z-0">
              <HeroScene />
            </div>

            <div
              className="pointer-events-none absolute inset-0 z-[1]"
              style={{
                background: `
      radial-gradient(
        circle at 78% 28%,
        rgba(34, 211, 238, 0.22),
        transparent 27%
      ),
      radial-gradient(
        circle at 88% 78%,
        rgba(124, 58, 237, 0.24),
        transparent 34%
      ),
      radial-gradient(
        circle at 52% 110%,
        rgba(249, 115, 22, 0.14),
        transparent 40%
      )
    `,
              }}
            />
          </div>

          {/* Readability and cinematic overlays */}
          <div
            className="pointer-events-none absolute inset-0 z-[2]"
            style={{
              background:
                "linear-gradient(90deg, #070A17 0%, rgba(7,10,23,0.97) 24%, rgba(7,10,23,0.72) 43%, rgba(7,10,23,0.18) 69%, transparent 100%)",
            }}
          />
          <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-[#070A17] via-transparent to-[#070A17]/20" />
          {/* Background effects */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-[-20rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
            <div className="absolute bottom-[-18rem] right-[-12rem] h-[38rem] w-[38rem] rounded-full bg-blue-700/10 blur-[130px]" />

            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
                backgroundSize: "64px 64px",
              }}
            />
          </div>

          {/* Navigation */}
          <header className="absolute left-0 top-0 z-20 flex w-full items-center justify-between px-6 py-7 lg:px-16">
            <a
              href="#home"
              className="font-mono text-sm font-semibold tracking-[0.25em] text-white"
            >
              KADIR.CODES
            </a>

            <nav className="hidden items-center gap-8 text-sm text-white/60 md:flex">
              <a className="transition hover:text-white" href="#about">
                About
              </a>
              <a className="transition hover:text-white" href="#projects">
                Projects
              </a>
              <a className="transition hover:text-white" href="#contact">
                Contact
              </a>
            </nav>
          </header>

          <div className="relative z-10 mx-auto w-full max-w-7xl">
            {/* Hero text */}
            <div className="max-w-2xl py-24">
              <p className="mb-6 font-mono text-xs uppercase tracking-[0.35em] text-cyan-300/80">
                Software Engineer · Interactive Systems
              </p>

              <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
                I build systems
                <span className="block text-white/35">that see, think</span>
                <span className="block">and interact.</span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-8 text-white/55 sm:text-lg">
                Computer vision, artificial intelligence and modern web
                experiences shaped into useful, measurable products.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.03] hover:bg-cyan-100"
                >
                  Explore my work
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/75 transition hover:border-white/35 hover:text-white"
                >
                  Get in touch
                </a>
              </div>
            </div>

            {/* Future 3D scene */}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="flex min-h-screen items-center border-t border-white/5 px-6 py-24 lg:px-16"
      >
        <div className="mx-auto w-full max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
            01 · About
          </p>

          <h2 className="mt-6 max-w-5xl text-4xl font-medium leading-tight tracking-[-0.04em] text-white/90 sm:text-6xl">
            Engineering intelligent products across computer vision, data,
            backend systems and interactive interfaces.
          </h2>
        </div>
      </section>

      <section
        id="projects"
        className="flex min-h-screen items-center border-t border-white/5 px-6 py-24 lg:px-16"
      >
        <div className="mx-auto w-full max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
            02 · Selected projects
          </p>

          <h2 className="mt-6 text-4xl font-medium tracking-[-0.04em] sm:text-6xl">
            Project case studies will live here.
          </h2>
        </div>
      </section>

      <section
        id="contact"
        className="flex min-h-[70vh] items-center border-t border-white/5 px-6 py-24 lg:px-16"
      >
        <div className="mx-auto w-full max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-cyan-300/70">
            03 · Contact
          </p>

          <h2 className="mt-6 text-5xl font-medium tracking-[-0.05em] sm:text-7xl">
            Let&apos;s build something meaningful.
          </h2>
        </div>
      </section>
    </main>
  );
}
