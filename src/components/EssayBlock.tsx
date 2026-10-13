import type { Essay } from '../data/essays'

type EssayBlockProps = {
  essay: Essay
  index: number
}

export function EssayBlock({ essay, index }: EssayBlockProps) {
  return (
    <article className="essay-block" id={essay.id}>
      <div className="essay-index">0{index + 1}</div>
      <div className="essay-content">
        <p className="essay-eyebrow">{essay.eyebrow} <span>{essay.topic}</span></p>
        <h3>{essay.title}</h3>
        {essay.image && <img className="essay-image" src={essay.image} alt={essay.imageAlt ?? ''} />}
        <p className="essay-excerpt">{essay.excerpt}</p>
        <details className="essay-reading">
          <summary>Read reflection <span aria-hidden="true">↗</span></summary>
          <div className="essay-prose">
            {essay.paragraphs.map((paragraph, paragraphIndex) => <p key={`${essay.id}-${paragraphIndex}`}>{paragraph}</p>)}
          </div>
          {essay.references && (
            <div className="essay-references">
              <p className="mini-label">References</p>
              {essay.references.map((reference) => <p key={reference}>{reference}</p>)}
            </div>
          )}
        </details>
      </div>
    </article>
  )
}
