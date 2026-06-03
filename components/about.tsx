import Image from 'next/image'

import { aboutPillars, profile } from '@/data/site'
import { SectionHeading } from '@/components/section-heading'

export function About() {
  return (
    <section id="sobre" className="section-shell py-16 md:py-24">
      <div className="panel p-8 md:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <aside className="space-y-5">
            <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-white/[0.03] p-3 shadow-card">
              <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-crimson/[0.12] blur-2xl" />
              <div className="relative overflow-hidden rounded-[14px] border border-white/10 bg-black/40">
                <Image
                  src={profile.photoSrc}
                  alt={profile.photoAlt}
                  width={640}
                  height={800}
                  sizes="(min-width: 1024px) 30rem, 100vw"
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>

            <div className="border-l border-crimson/30 pl-5 text-sm leading-7 text-white/[0.58]">
              <p className="font-display text-lg text-mist">{profile.name}</p>
              <p className="mt-2">{profile.title}</p>
            </div>
          </aside>

          <div>
            <SectionHeading
              eyebrow="Sobre mim"
              title="Tecnologia aplicada a problemas reais, com leitura técnica e visão de processo."
              description={profile.about}
            />

            <div className="grid gap-x-10 gap-y-6 md:grid-cols-2">
              {aboutPillars.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className="border-l border-crimson/30 pl-5 transition duration-300 hover:border-crimson/60"
                >
                  <span className="text-xs uppercase tracking-[0.3em] text-crimson/80">
                    0{index + 1}
                  </span>
                  <h3 className="mt-4 font-display text-xl text-mist">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-white/[0.72]">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
