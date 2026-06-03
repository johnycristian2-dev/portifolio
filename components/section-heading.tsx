type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className="label">{eyebrow}</span>
        <span className="h-2 w-2 rounded-full bg-crimson" />
      </div>
      <div className="h-px w-24 divider-glow" />
      <h2 className="section-title">{title}</h2>
      <p className="section-copy">{description}</p>
    </div>
  )
}
