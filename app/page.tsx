import { About } from '@/components/about'
import { Certifications } from '@/components/certifications'
import { Contact } from '@/components/contact'
import { Experience } from '@/components/experience'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_82%_18%,rgba(179,32,45,0.16),transparent_0,transparent_18%),radial-gradient(circle_at_16%_6%,rgba(244,239,230,0.07),transparent_24%)]" />
        <div className="absolute right-12 top-20 h-64 w-64 rounded-full bg-crimson/[0.08]" />
        <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/12 to-transparent" />
        <div className="absolute left-0 top-28 h-px w-40 bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      </div>

      <Header />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
