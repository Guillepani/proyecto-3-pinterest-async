const demoImages = [
  {
    urls: {
      regular: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470'
    },
    alt_description: 'Moon over the mountains',
    links: { html: 'https://unsplash.com/photos/1' },
    color: '#0a0a0a'
  },
  {
    urls: {
      regular: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7'
    },
    alt_description: 'Forest pathway',
    links: { html: 'https://unsplash.com/photos/2' },
    color: '#123456'
  },
  {
    urls: {
      regular: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee'
    },
    alt_description: 'City skyline at dusk',
    links: { html: 'https://unsplash.com/photos/3' },
    color: '#334455'
  },
  {
    urls: {
      regular: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d'
    },
    alt_description: 'Desert dunes',
    links: { html: 'https://unsplash.com/photos/4' },
    color: '#aa7744'
  },
  {
    urls: {
      regular: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e'
    },
    alt_description: 'Ocean waves',
    links: { html: 'https://unsplash.com/photos/5' },
    color: '#004466'
  },
  {
    urls: {
      regular: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
    },
    alt_description: 'Snowy peaks',
    links: { html: 'https://unsplash.com/photos/6' },
    color: '#ddeeff'
  }
]

// Mantener compatibilidad con el uso actual en render.js/main.js
export const getDemoImages = () => demoImages.map((it) => it.urls.regular)

// Devuelve el mock completo con estructura tipo Unsplash
export const getDemoImagesMock = () => demoImages

// Búsqueda local: case-insensitive, filtra por alt_description
export const searchImages = (query = '', images = []) => {
  const q = (query || '').trim().toLowerCase()
  if (!q) return images
  return images.filter((img) => {
    const text = (img.alt_description || '').toLowerCase()
    return text.includes(q)
  })
}
