import { execFileSync } from 'node:child_process'
import { writeFileSync } from 'node:fs'

const source = process.argv[2]
if (!source) throw new Error('Pass the path to the 19th-century .docx file.')

const xml = execFileSync('unzip', ['-p', source, 'word/document.xml'], { encoding: 'utf8' })
const decode = (value) => value.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'")
const paragraphs = [...xml.matchAll(/<w:p(?:\s[^>]*)?>[\s\S]*?<\/w:p>/g)]
  .map(([paragraph]) => decode([...paragraph.matchAll(/<w:t(?:\s[^>]*)?>([\s\S]*?)<\/w:t>/g)].map((match) => match[1]).join('')).trim())
  .filter(Boolean)

const headings = ['Cultural Overview I:', 'Cultural Overview II:', 'Visual Art Analyses', 'Music Analyses', 'References']
const sections = { romanticism: [], impressionism: [], artworks: [], music: [], references: [] }
let section = null
for (const paragraph of paragraphs) {
  if (paragraph.startsWith(headings[0])) section = 'romanticism'
  else if (paragraph.startsWith(headings[1])) section = 'impressionism'
  else if (paragraph === headings[2]) section = 'artworks'
  else if (paragraph === headings[3]) section = 'music'
  else if (paragraph === headings[4]) section = 'references'
  else if (section) sections[section].push(paragraph)
}

writeFileSync('src/data/nineteenthCentury.json', `${JSON.stringify(sections, null, 2)}\n`)
