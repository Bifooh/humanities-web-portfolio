import { useState } from 'react'
import { ArtworkModal } from '../components/ArtworkModal'
import { ArtworkCard } from '../components/ArtworkCard'
import { SectionIntro } from '../components/SectionIntro'
import { artworks, type Artwork } from '../data/artworks'

export function VisualArt() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null)

  return (
    <section className="section art-section" id="visual-art">
      <div className="page-grid">
        <SectionIntro
          index="02"
          label="Visual art"
          title="Ten works, ten ways of seeing"
          description="A visual index of ten works. Start with the short reading, then open the full analysis when you want the detail."
        />
        <div className="artwork-grid">
          {artworks.map((artwork, index) => <ArtworkCard key={artwork.id} artwork={artwork} number={index + 1} onOpen={setSelectedArtwork} />)}
        </div>
      </div>
      {selectedArtwork && <ArtworkModal artwork={selectedArtwork} onClose={() => setSelectedArtwork(null)} />}
    </section>
  )
}
