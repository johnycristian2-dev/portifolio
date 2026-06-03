import { profile } from '@/data/site'

export function Footer() {
  return (
    <footer className="section-shell py-8">
      <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/[0.45] md:flex-row md:items-center md:justify-between">
        <p>Portfólio profissional de {profile.name}.</p>
        <p>Desenvolvimento web, sistemas, suporte e dados.</p>
      </div>
    </footer>
  )
}
