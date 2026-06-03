import { navigation, profile } from '@/data/site'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="section-shell flex h-20 items-center justify-between gap-4">
        <a
          href="#inicio"
          className="flex items-center gap-4 text-sm text-white/[0.88]"
        >
          <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-crimson/35 bg-crimson/[0.1] font-display text-sm text-mist">
            J
            <span className="absolute inset-[5px] rounded-full border border-white/12" />
          </span>
          <span className="font-display text-sm tracking-[0.24em] text-mist/80">
            {profile.name}
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/60 transition duration-300 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="border border-crimson/35 bg-crimson/[0.08] px-5 py-2 text-xs uppercase tracking-[0.3em] text-mist transition duration-300 hover:border-crimson hover:bg-crimson/[0.14]"
        >
          Vamos conversar
        </a>
      </div>
    </header>
  )
}
