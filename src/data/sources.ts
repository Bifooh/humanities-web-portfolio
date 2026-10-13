export type SourceGroup = {
  title: string
  description: string
  items: string[]
}

export const sourceGroups: SourceGroup[] = [
  {
    title: 'Cultural research',
    description: 'Sources used in the five-paragraph Renaissance Cultural Overview.',
    items: [
      'The Metropolitan Museum of Art. “Florence and Central Italy, 1400–1600 A.D.” Heilbrunn Timeline of Art History.',
      'Department of Medieval Art and The Cloisters. “Classical Antiquity in the Middle Ages.” The Metropolitan Museum of Art, October 2001.',
      'The Metropolitan Museum of Art. “Painting the Life of Christ in Medieval and Renaissance Italy.” June 2008.',
      'The Metropolitan Museum of Art. “The Reformation.” October 2002; and “Central Europe (including Germany), 1400–1600 A.D.”',
      'Library of Congress. “The Gutenberg Bible.” Library of Congress Bible Collection.',
      'Leonardo da Vinci. Codex Forster II, approximately 1495–1497. National Art Library, Victoria and Albert Museum.',
    ],
  },
  {
    title: 'Artwork sources',
    description: 'Museum and archive sources supporting the ten visual-art analyses.',
    items: [
      'Vatican Museums. “Handing over of the Keys.” Artwork by Pietro Perugino.',
      'Vatican Museums. “School of Athens.” Artwork by Raphael.',
      'Vatican Museums. “Creation of Adam.” Artwork by Michelangelo.',
      'National Gallery, London. “Jan van Eyck: The Arnolfini Portrait.”',
      'National Gallery, London. “Dogs.” Glossary.',
      'National Gallery, London. “Reflections: Behind the Inspiration.”',
      'Campbell, Lorne. “The Arnolfini Portrait.” The Fifteenth Century Netherlandish Paintings, National Gallery, 1998.',
      'Musée du Louvre. “From the ‘Mona Lisa’ to ‘The Wedding Feast at Cana’: The Salle des États.”',
      'Museo del Cenacolo Vinciano. “A Powerful Theatrical Machine.”',
      'Opera di Santa Maria del Fiore. “Domenico di Michelino, Dante, Firenze e la Divina Commedia.”',
      'Italian Ministry of Culture. “Madonna Assunta.” Catalogo Generale dei Beni Culturali.',
      'Smarthistory. “Titian, Assumption of the Virgin.”',
      'National Gallery, London. “Sandro Botticelli: ‘Mystic Nativity.’”',
      'National Gallery, London. “Primary Teachers’ Notes: Saint George and the Dragon by Uccello.”',
    ],
  },
  {
    title: 'Image credits',
    description: 'Artwork images are linked from Wikimedia Commons and credited by collection in the Visual Art gallery.',
    items: [
      'Image URLs are stored with each artwork in src/data/artworks.ts.',
      'Replace a URL with a local file in public/images/ if your course requires locally hosted images.',
    ],
  },
  {
    title: 'Personal Connections',
    description: 'Texts and lectures referenced in the two Personal Connections essays.',
    items: [
      'Machiavelli, The Prince, chapters 8 and 17.',
      'William Shakespeare, The Tempest, 5.1.',
      'Hugh Nibley, Teachings of the Book of Mormon, Semester 4, Lecture 103.',
    ],
  },
]
