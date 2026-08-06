import HeroScene from "@/components/hero-scene";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#050609] text-white">
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-24 lg:px-16">
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

        <div
          id="home"
          className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]"
        >
          {/* Hero text */}
          <div className="max-w-2xl">
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
          <div className="relative mx-auto flex aspect-square w-full max-w-[650px] items-center justify-center">
            <div className="absolute inset-[10%] rounded-full border border-white/10" />
            <div className="absolute inset-[18%] rounded-full border border-cyan-300/10" />

            <div className="absolute left-[12%] top-1/2 h-px w-[76%] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute left-1/2 top-[12%] h-[76%] w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />

            <div className="relative h-[72%] w-[72%] overflow-hidden rounded-[3rem] border border-white/10 bg-white/[0.025] shadow-2xl backdrop-blur-sm">
  <div className="pointer-events-none absolute inset-0 z-10 rounded-[3rem] bg-gradient-to-br from-cyan-300/[0.06] via-transparent to-blue-500/[0.08]" />

  <HeroScene />
</div>

            <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 text-center">
              <div className="mx-auto mb-3 h-10 w-px bg-gradient-to-b from-white/30 to-transparent" />
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/30">
                Scroll to explore
              </p>
            </div>
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