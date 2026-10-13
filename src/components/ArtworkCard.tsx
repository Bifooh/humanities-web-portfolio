import type { Artwork } from '../data/artworks'

type ArtworkCardProps = {
  artwork: Artwork
  number: number
  onOpen: (artwork: Artwork) => void
}

export function ArtworkCard({ artwork, number, onOpen }: ArtworkCardProps) {
  return (
    <article className="artwork-card" id={artwork.id}>
      <div className="artwork-image-wrap">
        <button className="artwork-image-trigger" type="button" onClick={() => onOpen(artwork)} aria-label={`Open ${artwork.title}`}>
          <img src={artwork.image} alt={artwork.alt} loading="lazy" />
        </button>
        <span className="artwork-number">{String(number).padStart(2, '0')}</span>
      </div>
      <div className="artwork-card-body">
        <p className="artwork-meta">{artwork.artist} · {artwork.year}</p>
        <h3>{artwork.title}</h3>
        <p className="artwork-summary">{artwork.summary}</p>
        <button className="artwork-open" type="button" onClick={() => onOpen(artwork)}>
          Read full analysis <span aria-hidden="true">↗</span>
        </button>
      </div>
    </article>
  )
}
