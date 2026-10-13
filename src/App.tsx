import { CulturalOverview } from './sections/CulturalOverview'
import { PersonalConnections } from './sections/PersonalConnections'
import { Sources } from './sections/Sources'
import { VisualArt } from './sections/VisualArt'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Cultural overview', href: '#overview' },
  { label: 'Visual art', href: '#visual-art' },
  { label: 'Personal connections', href: '#personal-connections' },
  { label: 'Sources', href: '#sources' },
]

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Renaissance ePortfolio home">
          <span className="wordmark-mark" aria-hidden="true">
            <svg viewBox="0 0 48 48" role="presentation">
              <circle cx="24" cy="24" r="21" />
              <text x="11" y="35">R</text>
              <path d="M32 11c3 0 5 2 5 5-3 0-5-2-5-5Z" />
              <path d="M31 14c-2 2-3 4-2 7" />
            </svg>
          </span>
          <span>Humanities<br /><em>ePortfolio</em></span>
        </a>
        <nav aria-label="Primary navigation">
          {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="hero-kicker">BYU–Idaho · Humanities</p>
            <h1>Renaissance<span className="hero-period">.</span></h1>
            <p className="hero-subtitle">A portfolio about culture, art, ideas, and the personal lessons that survive their century.</p>
            <a className="text-link hero-link" href="#overview">Enter the portfolio <span aria-hidden="true">↘</span></a>
          </div>
          <div className="hero-art" aria-label="Collage of Renaissance artwork details">
            <div className="hero-art-frame">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Mona_Lisa.jpg" alt="Renaissance portrait detail" />
            </div>
            <span className="hero-art-caption">Fig. 00 — looking closely</span>
            <span className="hero-vertical-label">STUDY · REFLECT · CONNECT</span>
          </div>
          <div className="hero-note">01 / 04<br /><span>Portfolio<br />in progress</span></div>
        </section>

        <CulturalOverview />
        <VisualArt />
        <PersonalConnections />
        <Sources />
      </main>

      <footer className="site-footer">
        <p>Renaissance <span>·</span> Humanities ePortfolio</p>
        <a className="text-link" href="#home">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
