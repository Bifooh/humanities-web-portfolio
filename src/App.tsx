import { useEffect, useState } from 'react'
import { CulturalOverview } from './sections/CulturalOverview'
import { PersonalConnections } from './sections/PersonalConnections'
import { Sources } from './sections/Sources'
import { VisualArt } from './sections/VisualArt'
import { NineteenthCentury } from './sections/NineteenthCentury'
import { asset } from './data/asset'

type Page = 'home' | 'early-modern' | 'nineteenth-century' | 'personal-connections' | 'sources'
const pages: { id: Page; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'early-modern', label: 'Early Modern World' },
  { id: 'nineteenth-century', label: '19th Century' },
  { id: 'personal-connections', label: 'Personal Connections' },
  { id: 'sources', label: 'Sources' },
]
function currentPage(): Page {
  const hash = window.location.hash.slice(1)
  return pages.find((page) => page.id === hash)?.id ?? 'home'
}
function App() {
  const [page, setPage] = useState<Page>(currentPage)
  useEffect(() => {
    const onHashChange = () => { setPage(currentPage()); window.scrollTo(0, 0) }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Humanities ePortfolio home"><span className="wordmark-mark" aria-hidden="true"><svg viewBox="0 0 48 48" role="presentation"><circle cx="24" cy="24" r="21" /><text x="11" y="35">R</text><path d="M32 11c3 0 5 2 5 5-3 0-5-2-5-5Z" /><path d="M31 14c-2 2-3 4-2 7" /></svg></span><span>Humanities<br /><em>ePortfolio</em></span></a>
        <nav aria-label="Primary navigation">{pages.map((item) => <a key={item.id} href={`#${item.id}`} aria-current={page === item.id ? 'page' : undefined}>{item.label}</a>)}</nav>
      </header>
      <main>
        {page === 'home' && <>
          <section className="hero"><div className="hero-copy"><p className="hero-kicker">BYU–Idaho · Humanities</p><h1>Ways of <em>seeing.</em></h1><p className="hero-subtitle">Art, ideas, and personal connections across the Early Modern World and the nineteenth century.</p><a className="text-link hero-link" href="#early-modern">Explore the portfolio <span aria-hidden="true">↘</span></a></div><div className="hero-art"><div className="hero-art-frame"><img src={asset('/images/mona-lisa.jpg')} alt="Detail of Leonardo da Vinci’s Mona Lisa" /></div><span className="hero-art-caption">Leonardo da Vinci · Mona Lisa · <a href="https://commons.wikimedia.org/wiki/File:Mona_Lisa.jpg">image source</a></span></div></section>
          <section className="section home-map" aria-labelledby="map-title"><div className="home-map-heading"><p className="section-kicker">THE PORTFOLIO</p><h2 id="map-title">Choose a chapter</h2></div><div className="chapter-grid"><div className="chapter-card"><a href="#early-modern"><img src={asset('/images/school-of-athens.jpg')} alt="Raphael’s School of Athens" /><span>01 · EARLY MODERN WORLD</span><h3>Renaissance</h3><p>Culture, faith, invention, and ten works of visual art.</p></a><small>Image: Raphael, <a href="https://commons.wikimedia.org/wiki/File:Raphael_School_of_Athens.jpg" target="_blank" rel="noreferrer">Wikimedia Commons ↗</a></small></div><div className="chapter-card"><a href="#nineteenth-century"><img src={asset('/images/impression-sunrise.jpg')} alt="Claude Monet’s Impression, Sunrise" /><span>02 · 19TH CENTURY</span><h3>A changing world</h3><p>Romanticism, Impressionism, social change, art, and music.</p></a><small>Image: Monet, <a href="https://commons.wikimedia.org/wiki/File:Monet_-_Impression,_Sunrise.jpg" target="_blank" rel="noreferrer">Wikimedia Commons ↗</a></small></div><a className="chapter-card chapter-card-text" href="#personal-connections"><span>03 · REFLECTIONS</span><h3>Personal connections</h3><p>Machiavelli, Shakespeare, leadership, and mercy.</p><b>Read the essays ↗</b></a></div></section>
        </>}
        {page === 'early-modern' && <><div className="period-heading"><p>01 / EARLY MODERN WORLD</p><h1>Renaissance.</h1><span>Culture and art in an age of renewed inquiry.</span></div><CulturalOverview /><div className="section-transition"><span>FROM CONTEXT TO CANVAS</span><p>The cultural shifts described above become visible in portraits, sacred scenes, and experiments with perspective. Explore how ten artists gave those ideas form.</p></div><VisualArt /></>}
        {page === 'nineteenth-century' && <NineteenthCentury />}
        {page === 'personal-connections' && <PersonalConnections />}
        {page === 'sources' && <Sources />}
      </main>
      <footer className="site-footer"><p>Humanities <span>·</span> ePortfolio</p><a className="text-link" href="#home">Back to home ↑</a></footer>
    </div>
  )
}
export default App
