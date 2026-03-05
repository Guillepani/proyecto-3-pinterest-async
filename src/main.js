import './style.css'
import { renderImages } from './js/render.js'
import { getDemoImagesMock, searchImages } from './js/data.js'

const $ = (selector, root = document) => root.querySelector(selector)

const icon = (name) => {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.setAttribute('viewBox', '0 0 24 24')
  svg.setAttribute('aria-hidden', 'true')
  svg.classList.add('icon')

  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')

  // iconos simples dibujados con SVG (path)
  const paths = {
    search:
      'M10 4a6 6 0 104.472 10.03l3.249 3.25 1.414-1.415-3.25-3.249A6 6 0 0010 4zm0 2a4 4 0 110 8 4 4 0 010-8z',
    bell: 'M12 22a2.2 2.2 0 002.2-2.2h-4.4A2.2 2.2 0 0012 22zm6-6v-4.5A6 6 0 0013.5 5.1V4a1.5 1.5 0 00-3 0v1.1A6 6 0 006 11.5V16l-2 2v1h16v-1l-2-2z',
    chat: 'M20 3H4a2 2 0 00-2 2v12a2 2 0 002 2h3v3l4-3h9a2 2 0 002-2V5a2 2 0 00-2-2zm0 14H10.3L8 18.7V17H4V5h16v12z',
    pinterest:
      'M12 2C6.477 2 2 6.21 2 11.5c0 3.9 2.3 7.2 5.6 8.7-.08-.74-.15-1.87.03-2.67.16-.72 1.05-4.6 1.05-4.6s-.27-.54-.27-1.34c0-1.26.74-2.2 1.66-2.2.78 0 1.16.58 1.16 1.28 0 .78-.5 1.95-.76 3.03-.22.9.46 1.64 1.36 1.64 1.64 0 2.9-1.73 2.9-4.22 0-2.2-1.58-3.75-3.85-3.75-2.62 0-4.16 1.96-4.16 3.99 0 .79.31 1.64.69 2.1a.28.28 0 01.06.27c-.07.3-.24.95-.28 1.08-.05.17-.16.2-.37.12-1.38-.64-2.24-2.65-2.24-4.26 0-3.47 2.52-6.66 7.27-6.66 3.82 0 6.79 2.72 6.79 6.36 0 3.8-2.4 6.86-5.73 6.86-1.12 0-2.18-.58-2.54-1.27l-.69 2.63c-.25.95-.93 2.15-1.39 2.88.99.3 2.04.46 3.13.46 5.52 0 10-4.21 10-9.5S17.523 2 12 2z'
  }

  path.setAttribute('d', paths[name] || paths.search)
  svg.appendChild(path)
  return svg
}

const buildApp = () => {
  const app = $('#app')
  if (!app) throw new Error('No se encontró #app')

  app.textContent = ''

  // MAIN
  const main = document.createElement('main')
  main.className = 'app'

  // HEADER
  const header = document.createElement('header')
  header.className = 'topbar'

  // izquierda: Pinterest e inicio
  const left = document.createElement('div')
  left.className = 'topbar__left'

  const pinBtn = document.createElement('button')
  pinBtn.className = 'pinBtn'
  pinBtn.type = 'button'
  pinBtn.setAttribute('aria-label', 'Inicio')
  pinBtn.appendChild(icon('pinterest'))

  const nav = document.createElement('nav')
  nav.className = 'nav'
  nav.setAttribute('aria-label', 'Navegación principal')

  const linkInicio = document.createElement('button')
  linkInicio.type = 'button'
  linkInicio.className = 'nav__item nav__item--active'
  linkInicio.textContent = 'Inicio'

  const linkExplorar = document.createElement('button')
  linkExplorar.type = 'button'
  linkExplorar.className = 'nav__item'
  linkExplorar.textContent = 'Explorar'

  const linkCrear = document.createElement('button')
  linkCrear.type = 'button'
  linkCrear.className = 'nav__item'
  linkCrear.textContent = 'Crear'

  nav.append(linkInicio, linkExplorar, linkCrear)
  left.append(pinBtn, nav)

  // centro: buscar
  const form = document.createElement('form')
  form.className = 'search'
  form.id = 'searchForm'

  const searchWrap = document.createElement('div')
  searchWrap.className = 'search__wrap'

  const searchIcon = icon('search')
  searchIcon.classList.add('search__icon')

  const input = document.createElement('input')
  input.className = 'search__input'
  input.id = 'searchInput'
  input.type = 'search'
  input.placeholder = 'Buscar'
  input.autocomplete = 'off'
  input.setAttribute('aria-label', 'Buscar imágenes')

  searchWrap.append(searchIcon, input)
  form.appendChild(searchWrap)

  // derecha: iconos y avatar
  const right = document.createElement('div')
  right.className = 'topbar__right'

  const bell = document.createElement('button')
  bell.type = 'button'
  bell.className = 'iconBtn'
  bell.setAttribute('aria-label', 'Notificaciones')
  bell.appendChild(icon('bell'))

  const chat = document.createElement('button')
  chat.type = 'button'
  chat.className = 'iconBtn'
  chat.setAttribute('aria-label', 'Mensajes')
  chat.appendChild(icon('chat'))

  const avatar = document.createElement('button')
  avatar.type = 'button'
  avatar.className = 'avatar'
  avatar.setAttribute('aria-label', 'Perfil')
  avatar.textContent = 'G'

  right.append(bell, chat, avatar)

  header.append(left, form, right)

  // GRID
  const grid = document.createElement('section')
  grid.className = 'grid'
  grid.id = 'grid'
  grid.setAttribute('aria-label', 'Galería de imágenes')

  // FOOTER
  const footer = document.createElement('footer')
  footer.className = 'footer'
  footer.textContent = `© ${new Date().getFullYear()} Pinterest Async · Mock (sin API)`

  main.append(header, grid, footer)
  app.append(main)

  return { grid, form, input, pinBtn, linkInicio }
}

const init = () => {
  const { grid, form, input, pinBtn, linkInicio } = buildApp()

  const initialImages = getDemoImagesMock()
  renderImages(grid, initialImages)

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const query = input.value || ''
    const results = searchImages(query, initialImages)
    renderImages(grid, results)
  })

  const reset = () => {
    input.value = ''
    renderImages(grid, initialImages)
  }

  pinBtn.addEventListener('click', reset)
  linkInicio.addEventListener('click', reset)
}

init()
