import { SectionIntro } from '../components/SectionIntro'

const paragraphs = [
  'Imagine standing in front of a painting and noticing that a tiny mirror in the background reflects people who are outside the main scene. That detail makes the painting feel like a real place that continues beyond its frame. Jan van Eyck’s The Arnolfini Portrait creates this experience, and its mirror is one of the details that interested me most. Many Renaissance artists explored ways to make people, spaces, and emotions feel more convincing. Their work developed in a culture that placed renewed importance on classical learning and human abilities. [1] Looking at these paintings helps me understand how artistic choices could express beliefs and ideas about the world. The Renaissance’s historical setting, religious beliefs, and artistic and technical innovations shaped European culture and offer a meaningful connection to my interest in software engineering.',
  'The Renaissance developed in Italy and became influential across Europe, with Florence serving as an especially important center during the fifteenth century. Florence was supported by wealthy merchants and bankers, including the Medici family, whose patronage helped artists and scholars pursue their work. [1] Rome also became an important artistic center, while places such as Bruges contributed to the developments we associate with the Northern Renaissance. [7, 8] Renaissance scholars and artists studied Greek and Roman literature, ideas, and objects with renewed interest. Humanism encouraged the study of classical learning and emphasized people’s intellectual abilities and potential. [1] However, this movement did not appear out of nowhere, because medieval scholars and artists had already preserved and adapted parts of classical culture. [2] To me, what makes the Renaissance interesting is how people used knowledge from the past to develop new ways of thinking and creating.',
  'Christianity remained central to Renaissance culture, and the Catholic Church played an important role in the subjects and purposes of art. Paintings of Christ, Mary, and the saints helped people reflect on religious teachings through recognizable stories and human experiences. [3] For example, Perugino’s Delivery of the Keys to Saint Peter presents Christ giving Peter authority, using the biblical account in Matthew 16:13–20. [4] Peter’s kneeling position and the keys make that relationship visible without requiring a long explanation. Humanist interests could also exist alongside religious belief, as shown by Raphael’s painting of ancient philosophers inside the pope’s apartments. [7] Religious thinking became more divided during the sixteenth-century Reformation, when reformers challenged Catholic teachings and authority. [5] I think these examples show a period when faith continued to shape culture even as people debated how religious authority should work.',
  'Two important Renaissance contributions were the expansion of printing in Europe and new methods of representing space in art. In Mainz, Germany, Johannes Gutenberg and his collaborators produced a Bible using movable metal type in the mid-1450s. [6] This system made it possible to produce multiple copies without writing out every page by hand, changing how written information could circulate. Its importance extended beyond one book because printing helped make both classical and contemporary texts more available. [5] In painting, linear perspective gave artists a mathematical way to suggest depth on a flat surface. Raphael’s The School of Athens demonstrates this through architectural lines that lead the viewer toward Plato and Aristotle in the center. [7] These developments mattered because they gave people new tools for sharing knowledge and making ideas visible.',
  'The connection I see between the Renaissance and software engineering is the combination of creativity and technical understanding. Leonardo da Vinci is an interesting example because his notebooks include artistic drawings alongside investigations of geometry and machinery. In Codex Forster II, for example, designs for weaving equipment appear alongside studies of proportions, architecture, and human figures. [9] I like that connection because building software also requires thinking about how something works and how people will experience it. A useful application needs reliable functionality, but its design should also help people understand what to do. My interest in entrepreneurship makes this especially relevant because I want to build products that solve practical problems for other people. To me, Leonardo’s example is a reminder to stay curious and allow ideas from different subjects to improve the things I create.',
]

const references = [
  '[1] The Metropolitan Museum of Art. “Florence and Central Italy, 1400–1600 A.D.” Heilbrunn Timeline of Art History.',
  '[2] Department of Medieval Art and The Cloisters. “Classical Antiquity in the Middle Ages.” The Metropolitan Museum of Art, October 2001.',
  '[3] The Metropolitan Museum of Art. “Painting the Life of Christ in Medieval and Renaissance Italy.” June 2008.',
  '[4] Vatican Museums. “Handing over of the Keys.” Artwork by Pietro Perugino.',
  '[5] The Metropolitan Museum of Art. “The Reformation.” October 2002; and “Central Europe (including Germany), 1400–1600 A.D.”',
  '[6] Library of Congress. “The Gutenberg Bible.” Library of Congress Bible Collection.',
  '[7] Vatican Museums. “School of Athens.” Artwork by Raphael.',
  '[8] National Gallery, London. “Jan van Eyck: The Arnolfini Portrait.”',
  '[9] Leonardo da Vinci. Codex Forster II, approximately 1495–1497. National Art Library, Victoria and Albert Museum.',
]

export function CulturalOverview() {
  return (
    <section className="section overview-section" id="overview">
      <div className="page-grid">
        <SectionIntro
          index="01"
          label="Cultural overview"
          title="A changing picture of the human person"
          description="An essay on the Renaissance’s cultural conditions, intellectual energy, and enduring questions."
        />
        <article className="essay-longform">
          <p className="essay-dek">Culture, creativity, and belief—read through the details that make Renaissance art feel alive.</p>
          {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <details className="citation-box">
            <summary className="mini-label">Citations & references</summary>
            <div className="reference-list">{references.map((reference) => <p key={reference}>{reference}</p>)}</div>
          </details>
        </article>
      </div>
    </section>
  )
}
