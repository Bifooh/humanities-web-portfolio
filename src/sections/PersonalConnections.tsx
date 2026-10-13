import { EssayBlock } from '../components/EssayBlock'
import { SectionIntro } from '../components/SectionIntro'
import { essays } from '../data/essays'

export function PersonalConnections() {
  return (
    <section className="section connections-section" id="personal-connections">
      <div className="page-grid">
        <SectionIntro
          index="03"
          label="Personal connections"
          title="Ideas that follow us home"
          description="Two reflections on power, mercy, discipleship, and the ways Renaissance texts continue into ordinary life."
        />
        <div className="essay-list">
          {essays.map((essay, index) => <EssayBlock key={essay.id} essay={essay} index={index} />)}
        </div>
      </div>
    </section>
  )
}
