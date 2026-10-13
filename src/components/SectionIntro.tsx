type SectionIntroProps = {
  index: string
  label: string
  title: string
  description: string
}

export function SectionIntro({ index, label, title, description }: SectionIntroProps) {
  return (
    <div className="section-intro">
      <p className="section-kicker"><span>{index}</span>{label}</p>
      <h2>{title}</h2>
      <p className="section-description">{description}</p>
    </div>
  )
}
