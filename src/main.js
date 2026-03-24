import './style.css'

import './components/Header/Header.css'
import './components/Gallery/Gallery.css'
import './components/PinCard/PinCard.css'
import './components/Footer/Footer.css'

import { Header } from './components/Header/Header.js'
import { Gallery } from './components/Gallery/Gallery.js'
import { Footer } from './components/Footer/Footer.js'
import { getPhotos } from './js/api.js'
import { renderError, renderImages, renderLoading } from './js/render.js'

const $ = (selector, root = document) => root.querySelector(selector)

const buildApp = () => {
  const app = $('#app')
  if (!app) throw new Error('No se encontró #app')

  app.textContent = ''

  const main = document.createElement('main')
  main.className = 'app'

  const { header, form, input, pinBtn, linkInicio } = Header()
  const gallery = Gallery()
  const footer = Footer()

  main.append(header, gallery, footer)
  app.append(main)

  return { gallery, form, input, pinBtn, linkInicio }
}

const loadImages = async (gridEl, query = 'nature') => {
  try {
    renderLoading(gridEl)
    const images = await getPhotos(query)
    renderImages(gridEl, images)
  } catch {
    renderError(
      gridEl,
      'No se pudieron cargar las imágenes. Inténtalo de nuevo.'
    )
  }
}

const init = async () => {
  const { gallery, form, input, pinBtn, linkInicio } = buildApp()

  await loadImages(gallery)

  form.addEventListener('submit', async (event) => {
    event.preventDefault()

    const query = input.value.trim() || 'nature'
    input.value = ''

    await loadImages(gallery, query)
  })

  const reset = async () => {
    input.value = ''
    await loadImages(gallery, 'nature')
  }

  pinBtn.addEventListener('click', reset)
  linkInicio.addEventListener('click', reset)
}

init()
