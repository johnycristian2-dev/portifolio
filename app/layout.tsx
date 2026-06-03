import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Johny Bolis | Analista de Sistemas e Suporte',
  description:
    'Portfólio de Johny Bolis com experiência em suporte de sistemas, desenvolvimento web e projetos autorais com Next.js, Nuxt, React e Java.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="bg-ink font-sans text-white antialiased">
        {children}
      </body>
    </html>
  )
}
