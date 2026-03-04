import './style.css'
import { renderImages } from './js/render.js'
import { getDemoImagesMock, searchImages } from './js/data.js'

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

// estado inicial: array de objetos (mock tipo Unsplash)
const initialImages = getDemoImagesMock()

// helper para extraer URLs compatibles con render.js
const toUrls = (images) =>
  images.map((it) => (it.urls && it.urls.regular ? it.urls.regular : it))

// render inicial
renderImages(grid, toUrls(initialImages))

// manejar búsqueda
const form = document.querySelector('#searchForm')
const input = document.querySelector('#searchInput')
const logo = document.querySelector('.logo')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const query = input.value || ''
  const results = searchImages(query, initialImages)
  renderImages(grid, toUrls(results))
  input.value = ''
})

// reset por click en logo al estado inicial
logo.addEventListener('click', () => {
  renderImages(grid, toUrls(initialImages))
})
