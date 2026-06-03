import { SectionHeading } from '@/components/section-heading'
import { skillGroups } from '@/data/site'

export function Skills() {
  return (
    <section id="competencias" className="section-shell py-16 md:py-24">
      <SectionHeading
        eyebrow="Competências"
        title="Base técnica sólida, repertório amplo e execução consistente."
        description="Domínio de linguagens, ferramentas e práticas profissionais para desenvolver, analisar, manter e evoluir soluções com qualidade e organização."
      />

      <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="border-t border-white/10 pt-5 transition duration-300 hover:border-crimson/35"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-display text-xl text-mist">{group.title}</h3>
              <span className="h-px w-10 bg-gradient-to-l from-crimson/80 to-transparent" />
            </div>

            <ul className="mt-6 space-y-3 text-sm leading-6 text-white/[0.72]">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 inline-flex h-1.5 w-1.5 rounded-full bg-crimson" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
