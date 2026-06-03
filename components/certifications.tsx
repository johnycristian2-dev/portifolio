import Image from 'next/image'

import { SectionHeading } from '@/components/section-heading'
import { learningItems } from '@/data/site'

export function Certifications() {
  return (
    <section id="certificados" className="section-shell py-16 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Cursos e certificados"
            title="Um espaço dedicado para mostrar sua formação contínua e credenciais relevantes."
            description="Esta seção foi preparada para exibir cursos, certificados, bootcamps e formações complementares com título, instituição, ano e, quando existir, o link da credencial."
          />

          <div className="panel p-6 text-sm leading-7 text-white/[0.58]">
            Atualize os itens em data/site.ts e, se quiser mostrar imagens dos
            certificados, adicione os arquivos em public e preencha o campo
            imageSrc de cada card.
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-1">
          {learningItems.map((item) => (
            <article
              key={`${item.title}-${item.type}`}
              className="panel overflow-hidden"
            >
              <div className="relative border-b border-white/10 bg-[linear-gradient(135deg,rgba(179,32,45,0.16),rgba(255,255,255,0.02))] p-6">
                <div className="absolute right-5 top-5 h-20 w-20 rounded-full bg-crimson/[0.12] blur-2xl" />
                <div className="relative z-10 rounded-[12px] border border-white/10 bg-black/35 p-5 backdrop-blur-sm">
                  <div className="flex items-center justify-between gap-4 text-[11px] uppercase tracking-[0.28em] text-white/[0.45]">
                    <span>{item.type}</span>
                    <span>{item.year}</span>
                  </div>

                  {item.imageSrc ? (
                    <div className="mt-6 overflow-hidden rounded-[10px] border border-white/10">
                      <Image
                        src={item.imageSrc}
                        alt={item.title}
                        width={960}
                        height={540}
                        className="h-44 w-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="mt-6 rounded-[10px] border border-dashed border-white/15 bg-white/[0.03] p-6 text-sm leading-7 text-white/[0.46]">
                      Espaço reservado para imagem do certificado ou capa do
                      curso.
                    </div>
                  )}
                </div>
              </div>

              <div className="p-6 md:p-7">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-crimson/80">
                    {item.institution}
                  </p>
                  <span className="border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-white/[0.48]">
                    {item.status}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-2xl text-mist">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/[0.66] md:text-base">
                  {item.description}
                </p>

                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-6 inline-flex text-sm text-white/[0.78] transition duration-300 hover:text-crimson"
                  >
                    Ver credencial
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
