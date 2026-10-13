import { useEffect, useState } from 'react'
import type { Artwork } from '../data/artworks'

type ArtworkModalProps = {
  artwork: Artwork
  onClose: () => void
}

export function ArtworkModal({ artwork, onClose }: ArtworkModalProps) {
  const [isImageExpanded, setIsImageExpanded] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isImageExpanded) setIsImageExpanded(false)
        else onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isImageExpanded, onClose])

  return (
    <div className="artwork-modal" role="dialog" aria-modal="true" aria-labelledby={`modal-title-${artwork.id}`} onMouseDown={(event) => {
      if (event.target === event.currentTarget) onClose()
    }}>
      <div className="artwork-modal-panel">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close artwork analysis">
          <span>Close</span><b aria-hidden="true">×</b>
        </button>
        <div className="modal-image-column">
          <div className="modal-image-frame">
            <button className="modal-image-trigger" type="button" onClick={() => setIsImageExpanded(true)} aria-label={`View full image of ${artwork.title}`}>
              <img src={artwork.image} alt={artwork.alt} />
              <span className="image-expand-hint">View full image <b aria-hidden="true">⤢</b></span>
            </button>
          </div>
          <p className="modal-image-credit">Image: {artwork.source}</p>
        </div>
        <article className="modal-copy">
          <p className="artwork-meta">{artwork.artist} · {artwork.year}</p>
          <h2 id={`modal-title-${artwork.id}`}>{artwork.title}</h2>
          <dl className="modal-details">
            <div><dt>Medium</dt><dd>{artwork.medium}</dd></div>
            <div><dt>Collection</dt><dd>{artwork.location}</dd></div>
          </dl>
          <p className="modal-analysis">{artwork.analysis}</p>
          <p className="modal-citations">Citations {artwork.citations.join(' ')}</p>
        </article>
      </div>
      {isImageExpanded && (
        <div className="image-lightbox" role="dialog" aria-modal="true" aria-label={`Full image view of ${artwork.title}`} onMouseDown={(event) => {
          if (event.target === event.currentTarget) setIsImageExpanded(false)
        }}>
          <button className="lightbox-close" type="button" onClick={() => setIsImageExpanded(false)} aria-label="Close full image view">
            <span>Close image</span><b aria-hidden="true">×</b>
          </button>
          <figure className="image-lightbox-figure">
            <img src={artwork.image} alt={artwork.alt} />
            <figcaption>{artwork.title} · {artwork.artist}</figcaption>
          </figure>
        </div>
      )}
    </div>
  )
}
