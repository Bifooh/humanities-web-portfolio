import content from '../data/nineteenthCentury.json'
import { CitedImage } from '../components/CitedImage'

const artImages: Record<number, { src: string; alt: string; href: string }> = {
  0: { src: '/images/raft-of-medusa.jpg', alt: 'Survivors on a raft signal to a distant ship', href: 'https://commons.wikimedia.org/wiki/File:Th%C3%A9odore_G%C3%A9ricault,_Le_Radeau_de_la_M%C3%A9duse.jpg' },
  1: { src: '/images/fighting-temeraire.jpg', alt: 'Turner’s old warship being towed at sunset', href: 'https://commons.wikimedia.org/wiki/File:Turner_-_The_Fighting_Temeraire.jpg' },
  2: { src: '/images/gleaners.jpg', alt: 'Three women gather grain in a harvested field', href: 'https://commons.wikimedia.org/wiki/File:Millet_Gleaners.jpg' },
  3: { src: '/images/impression-sunrise.jpg', alt: 'Monet’s misty harbor at sunrise', href: 'https://commons.wikimedia.org/wiki/File:Monet_-_Impression,_Sunrise.jpg' },
  4: { src: '/images/moulin-galette.jpg', alt: 'Crowd dancing and talking beneath trees', href: 'https://commons.wikimedia.org/wiki/File:Pierre-Auguste_Renoir,_Le_Moulin_de_la_Galette.jpg' },
  5: { src: '/images/starry-night.jpg', alt: 'Van Gogh’s swirling night sky above a village', href: 'https://commons.wikimedia.org/wiki/File:Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg' },
  6: { src: '/images/the-scream.jpg', alt: 'A figure on a bridge beneath a turbulent orange sky', href: 'https://commons.wikimedia.org/wiki/File:Edvard_Munch_-_The_Scream.jpg' },
}

function Overview({ title, paragraphs, image }: { title: string; paragraphs: string[]; image: { src: string; alt: string; caption: string; href: string } }) {
  return <section className="century-overview"><h2>{title}</h2><div className="essay-longform">{paragraphs.map((paragraph, index) => <div key={index}><p>{paragraph}</p>{index === 1 && <CitedImage {...image} />}</div>)}</div></section>
}

export function NineteenthCentury() {
  return <>
    <div className="period-heading century-heading"><p>02 / 19TH CENTURY</p><h1>A changing world.</h1><span>Romanticism, Realism, Impressionism, and their legacy.</span></div>
    <div className="section century-content">
      <Overview title="Romanticism and the nineteenth century" paragraphs={content.romanticism} image={{ src: '/images/fighting-temeraire.jpg', alt: 'Turner’s The Fighting Temeraire, a sailing ship towed by a steam tug at sunset', caption: 'J. M. W. Turner, The Fighting Temeraire (1839)', href: 'https://commons.wikimedia.org/wiki/File:Turner_-_The_Fighting_Temeraire.jpg' }} />
      <Overview title="Impressionism and the changing modern world" paragraphs={content.impressionism} image={{ src: '/images/impression-sunrise.jpg', alt: 'Claude Monet’s atmospheric harbor painting Impression, Sunrise', caption: 'Claude Monet, Impression, Sunrise (1872)', href: 'https://commons.wikimedia.org/wiki/File:Monet_-_Impression,_Sunrise.jpg' }} />
    </div>
    <div className="section-transition"><span>FROM HISTORY TO ART</span><p>These movements gave visible form to political change, industrial life, ordinary work, fleeting light, and inner feeling.</p></div>
    <section className="section century-gallery" aria-labelledby="century-art-title"><div className="wide-heading"><p className="section-kicker">VISUAL ART</p><h2 id="century-art-title">Seven ways of seeing change</h2></div><div className="century-art-grid">{Array.from({ length: 7 }, (_, index) => { const title = content.artworks[index * 2]; return <article className="century-art-card" key={title}><CitedImage {...artImages[index]} caption={title} /><h3>{title}</h3><details><summary>Read analysis ↗</summary><p>{content.artworks[index * 2 + 1]}</p></details></article> })}</div></section>
    <section className="section music-section" aria-labelledby="music-title"><div className="wide-heading"><p className="section-kicker">MUSIC</p><h2 id="music-title">The century in sound</h2><p>Five pieces from the Romantic era and its transition into modernism.</p></div><div className="music-grid">{Array.from({ length: 5 }, (_, index) => <article key={index}><span>{String(index + 1).padStart(2, '0')}</span><h3>{content.music[index * 2]}</h3><details><summary>Read analysis ↗</summary><p>{content.music[index * 2 + 1]}</p></details></article>)}</div></section>
    <section className="section century-references"><div className="wide-heading"><p className="section-kicker">REFERENCES</p><h2>Research and image sources</h2></div><ul>{content.references.map((reference) => <li key={reference}>{reference}</li>)}</ul><p>Artwork image file pages are linked beneath each reproduction.</p></section>
  </>
}
