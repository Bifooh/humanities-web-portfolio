import { SectionIntro } from '../components/SectionIntro'
import { sourceGroups } from '../data/sources'

export function Sources() {
  return (
    <section className="section sources-section" id="sources">
      <div className="page-grid">
        <SectionIntro
          index="04"
          label="Sources"
          title="A record of the conversation"
          description="Use this index to make the research behind each reflection visible, traceable, and easy to revisit."
        />
        <div className="sources-grid">
          {sourceGroups.map((group) => (
            <article className="source-group" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
