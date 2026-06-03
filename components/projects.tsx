import { SectionHeading } from '@/components/section-heading'
import { projectList } from '@/data/site'

export function Projects() {
  return (
    <section id="projetos" className="section-shell py-16 md:py-24">
      <SectionHeading
        eyebrow="Projetos"
        title="Projetos estruturados como casos reais, com problema, solução e contexto técnico."
        description="Mais do que peças visuais, cada projeto apresenta uma proposta clara, uma lógica de construção e um objetivo de uso. Isso ajuda a mostrar processo, raciocínio técnico e capacidade de execução."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {projectList.map((project) => (
          <article
            key={project.name}
            className="panel flex h-full flex-col p-7 md:p-8"
          >
            <div
              className={`relative overflow-hidden rounded-[14px] border border-white/10 p-5 ${project.mockup.surfaceClass}`}
            >
              <div
                className={`absolute right-4 top-4 h-24 w-24 rounded-full blur-2xl ${project.mockup.orbClass}`}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4 text-[11px] uppercase tracking-[0.28em] text-white/55">
                  <span>{project.mockup.eyebrow}</span>
                  <span>{project.year}</span>
                </div>

                <div className="mt-8 rounded-[12px] border border-white/10 bg-black/30 p-5 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${project.mockup.dotClass}`}
                    />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                  </div>

                  <h3 className="mt-8 max-w-sm font-display text-3xl leading-tight text-mist">
                    {project.mockup.headline}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-7 text-white/[0.62]">
                    {project.mockup.supporting}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.mockup.chips.map((chip) => (
                      <span
                        key={chip}
                        className={`border px-3 py-1 text-[11px] uppercase tracking-[0.22em] ${project.mockup.tagClass}`}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-crimson/80">
                  {project.category}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.26em] text-white/[0.35]">
                  {project.year}
                </p>
              </div>
              <span className="border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white/[0.52]">
                {project.status}
              </span>
            </div>

            <h3 className="mt-6 font-display text-2xl text-mist">
              {project.name}
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/[0.72] md:text-base">
              {project.summary}
            </p>

            <div className="mt-6 space-y-5 text-sm leading-7 text-white/[0.62] md:text-base">
              <div>
                <p className="text-xs uppercase tracking-[0.26em] text-white/[0.38]">
                  Problema
                </p>
                <p className="mt-2">{project.problem}</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.26em] text-white/[0.38]">
                  Solução
                </p>
                <p className="mt-2">{project.solution}</p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.26em] text-white/[0.38]">
                  Valor demonstrado
                </p>
                <p className="mt-2">{project.impact}</p>
              </div>
            </div>

            <p className="mt-6 text-xs uppercase tracking-[0.28em] text-white/[0.45]">
              {project.stack.join(' / ')}
            </p>

            <div className="mt-8 flex flex-wrap gap-5 text-sm text-white/[0.72]">
              {project.live ? (
                <a
                  href={project.live}
                  className="transition duration-300 hover:text-crimson"
                >
                  Ver projeto
                </a>
              ) : (
                <span className="text-white/[0.38]">Demo sob solicitação</span>
              )}

              {project.repo ? (
                <a
                  href={project.repo}
                  className="transition duration-300 hover:text-crimson"
                >
                  Repositório
                </a>
              ) : (
                <span className="text-white/[0.38]">Código não público</span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
