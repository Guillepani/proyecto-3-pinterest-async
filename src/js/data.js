const demoImages = [
  {
    urls: {
      regular:
        'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800'
    },
    alt_description: 'mountain lake',
    links: { html: 'https://unsplash.com/photos/1501785888041-af3ef285b470' },
    color: '#2e4a3d'
  },
  {
    urls: {
      regular:
        'https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800'
    },
    alt_description: 'forest road',
    links: { html: 'https://unsplash.com/photos/1492724441997-5dc865305da7' },
    color: '#334455'
  },
  {
    urls: {
      regular:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800'
    },
    alt_description: 'city skyline',
    links: { html: 'https://unsplash.com/photos/1500530855697-b586d89ba3ee' },
    color: '#222222'
  },
  {
    urls: {
      regular:
        'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800'
    },
    alt_description: 'desert dunes',
    links: { html: 'https://unsplash.com/photos/1491553895911-0055eca6402d' },
    color: '#aa7744'
  },
  {
    urls: {
      regular:
        'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800'
    },
    alt_description: 'ocean waves',
    links: { html: 'https://unsplash.com/photos/1470770841072-f978cf4d019e' },
    color: '#004466'
  },
  {
    urls: {
      regular:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800'
    },
    alt_description: 'beach sunset',
    links: { html: 'https://unsplash.com/photos/1507525428034-b723cf961d3e' },
    color: '#ddeeff'
  },
  {
    urls: {
      regular:
        'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800'
    },
    alt_description: 'mountain landscape',
    links: { html: 'https://unsplash.com/photos/1469474968028-56623f02e42e' },
    color: '#223344'
  },
  {
    urls: {
      regular:
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800'
    },
    alt_description: 'road in mountains',
    links: { html: 'https://unsplash.com/photos/1500534314209-a25ddb2bd429' },
    color: '#445566'
  },
  {
    urls: {
      regular:
        'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800'
    },
    alt_description: 'snow mountains',
    links: { html: 'https://unsplash.com/photos/1519681393784-d120267933ba' },
    color: '#ccddee'
  },
  {
    urls: {
      regular:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800'
    },
    alt_description: 'nature landscape',
    links: { html: 'https://unsplash.com/photos/1506744038136-46273834b3fb' },
    color: '#334455'
  },
  {
    urls: {
      regular:
        'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800'
    },
    alt_description: 'forest waterfall',
    links: { html: 'https://unsplash.com/photos/1518837695005-2083093ee35b' },
    color: '#445566'
  },
  {
    urls: {
      regular:
        'https://images.unsplash.com/photo-1500534623283-312aade485b7?w=800'
    },
    alt_description: 'mountain sunrise',
    links: { html: 'https://unsplash.com/photos/1500534623283-312aade485b7' },
    color: '#667788'
  }
]

export const getDemoImages = () => demoImages.map((it) => it.urls.regular)

export const getDemoImagesMock = () => demoImages

export const searchImages = (query = '', images = []) => {
  const q = query.trim().toLowerCase()
  if (!q) return images
  return images.filter((img) =>
    (img.alt_description || '').toLowerCase().includes(q)
  )
}
