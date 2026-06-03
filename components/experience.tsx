import { SectionHeading } from '@/components/section-heading'
import { experienceTimeline, profile } from '@/data/site'

export function Experience() {
  return (
    <section id="experiencia" className="section-shell py-16 md:py-24">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border-l border-crimson/30 pl-6 md:pl-8">
          <SectionHeading
            eyebrow="Experiência"
            title="Experiência aplicada em desenvolvimento, sustentação e organização de dados."
            description={profile.experience}
          />
        </div>

        <div className="space-y-6">
          {experienceTimeline.map((item) => (
            <article key={item.title} className="panel p-6 md:p-7">
              <div className="flex flex-col gap-3 border-b border-white/10 pb-5 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-crimson/80">
                    {item.scope}
                  </p>
                  <h3 className="mt-3 font-display text-2xl text-mist">
                    {item.title}
                  </h3>
                </div>
                <span className="text-xs uppercase tracking-[0.26em] text-white/[0.4]">
                  {item.period}
                </span>
              </div>

              <p className="mt-5 text-sm leading-7 text-white/[0.66] md:text-base">
                {item.description}
              </p>

              <div className="mt-6 grid gap-3">
                {item.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="flex gap-3 border-l border-white/10 pl-4 text-sm leading-7 text-white/[0.58] md:text-base"
                  >
                    <span className="mt-3 inline-flex h-1.5 w-1.5 rounded-full bg-crimson" />
                    <p>{bullet}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
