import { SectionHeading } from '@/components/section-heading'
import { contactItems } from '@/data/site'

export function Contact() {
  return (
    <section id="contato" className="section-shell py-16 md:py-24">
      <div className="panel relative overflow-hidden p-8 md:p-12">
        <div className="absolute right-10 top-10 h-28 w-28 rounded-full bg-crimson/[0.1]" />
        <div className="relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow="Contato"
            title="Disponível para projetos, oportunidades e conexões profissionais."
            description="Se você busca alguém com base técnica, leitura analítica e compromisso com entrega bem estruturada, este é um bom ponto para começarmos uma conversa."
          />

          <div className="grid gap-5">
            {contactItems.map((item) => {
              const content = (
                <>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                    {item.label}
                  </p>
                  <p className="mt-3 text-base text-white/[0.86] md:text-lg">
                    {item.value}
                  </p>
                </>
              )

              if (!item.href) {
                return (
                  <div
                    key={item.label}
                    className="border-b border-white/10 pb-5"
                  >
                    {content}
                  </div>
                )
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="border-b border-white/10 pb-5 transition duration-300 hover:border-crimson/35"
                >
                  {content}
                </a>
              )
            })}

            <p className="pt-2 text-sm leading-7 text-white/[0.45]">
              Respondo melhor por LinkedIn e email para conversas sobre
              projetos, freelas e oportunidades na area de tecnologia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
