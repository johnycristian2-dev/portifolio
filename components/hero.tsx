import { heroLinks, heroMetrics, profile } from '@/data/site'

export function Hero() {
  return (
    <section
      id="inicio"
      className="section-shell relative pb-16 pt-16 md:pb-24 md:pt-24"
    >
      <div className="absolute right-8 top-10 hidden h-60 w-60 rounded-full bg-crimson/[0.12] lg:block" />
      <div className="absolute left-0 top-20 hidden h-52 w-px bg-gradient-to-b from-transparent via-white/18 to-transparent lg:block" />

      <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="animate-fadeUp">
          <span className="label">Portfólio pessoal</span>
          <div className="mt-6 flex items-center gap-4">
            <span className="h-px w-16 bg-crimson/70" />
            <span className="text-xs uppercase tracking-[0.3em] text-white/[0.45]">
              Desenvolvimento, análise de sistemas e suporte técnico
            </span>
          </div>

          <h1 className="mt-8 max-w-4xl font-display text-5xl leading-[1.06] text-mist sm:text-6xl xl:text-7xl">
            {profile.name}
            <span className="mt-5 block max-w-3xl text-2xl font-medium leading-tight text-white/[0.82] sm:text-3xl">
              {profile.title}
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/[0.68] md:text-lg">
            {profile.subtitle}
          </p>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/[0.55] md:text-base">
            Construo soluções com foco em clareza, organização e funcionamento
            real, da interface ao apoio operacional, passando por dados, regras
            de negócio e experiência do usuário.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {heroLinks.map((link) => {
              const baseClass =
                'inline-flex items-center justify-center border px-6 py-3 text-xs uppercase tracking-[0.28em] transition duration-300'

              const variantClass =
                link.variant === 'primary'
                  ? 'border border-crimson bg-crimson text-white hover:bg-ember hover:border-ember'
                  : link.variant === 'secondary'
                    ? 'border border-white/10 bg-white/[0.03] text-mist hover:border-white/20 hover:bg-white/[0.06]'
                    : 'border border-transparent bg-transparent text-white/[0.72] hover:text-mist'

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`${baseClass} ${variantClass}`}
                >
                  {link.label}
                </a>
              )
            })}
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-3">
            {heroMetrics.map((item) => (
              <div key={item.value} className="border-t border-white/10 pt-4">
                <p className="text-sm text-white/[0.8]">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-white/[0.52]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="panel relative overflow-hidden p-8 md:p-10">
          <div className="absolute inset-y-8 left-8 w-px bg-gradient-to-b from-transparent via-white/12 to-transparent" />
          <div className="absolute right-10 top-10 h-24 w-24 rounded-full bg-crimson/[0.14]" />
          <div className="absolute left-12 top-9 border border-crimson/35 bg-black/50 px-3 py-1 text-[11px] uppercase tracking-[0.34em] text-mist/75">
            Wa
          </div>

          <div className="relative z-10">
            <span className="label">Como eu agrego valor</span>

            <div className="mt-14 space-y-7 pl-6">
              {heroMetrics.map((item) => (
                <div
                  key={item.value}
                  className="border-b border-white/10 pb-5 transition duration-300 hover:border-crimson/30"
                >
                  <p className="text-xs uppercase tracking-[0.26em] text-white/40">
                    {item.value}
                  </p>
                  <p className="mt-3 max-w-sm text-base leading-7 text-white/[0.82]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 pl-6 text-sm leading-7 text-white/[0.5]">
              <span className="inline-flex h-2 w-2 rounded-full bg-crimson" />
              Disponível para projetos, oportunidades e conexões profissionais.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
