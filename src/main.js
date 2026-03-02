import './style.css'
import { renderImages } from './js/render.js'
import { getDemoImages } from './js/data.js'

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

renderImages(grid, getDemoImages())
