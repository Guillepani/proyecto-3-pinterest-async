import './style.css'

document.querySelector('#app').innerHTML = `
  <main class="app">
    <header class="topbar">
      <h1 class="logo">Pinterest Async</h1>

      <form class="search" id="searchForm">
        <input
          class="search__input"
          id="searchInput"
          type="search"
          placeholder="Buscar imágenes…"
          autocomplete="off"
        />
        <button class="search__btn" type="submit">Buscar</button>
      </form>
    </header>

    <section class="grid" id="grid"></section>
  </main>
`

const grid = document.querySelector('#grid')

const demoImages = [
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470',
  'https://images.unsplash.com/photo-1492724441997-5dc865305da7',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
  'https://images.unsplash.com/photo-1491553895911-0055eca6402d',
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
]

demoImages.forEach((url) => {
  const img = document.createElement('img')
  img.src = url
  img.alt = 'image'
  img.loading = 'lazy'
  grid.appendChild(img)
})
