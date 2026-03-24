import { PinCard } from '../components/PinCard/PinCard.js'

export const renderImages = (gridEl, items = []) => {
  if (!gridEl) return

  gridEl.textContent = ''

  if (!Array.isArray(items) || items.length === 0) {
    const empty = document.createElement('p')
    empty.className = 'empty'
    empty.textContent = 'No se han encontrado resultados.'
    gridEl.appendChild(empty)
    return
  }

  items.forEach((item) => {
    const card = PinCard(item)
    gridEl.appendChild(card)
  })
}

export const renderError = (
  gridEl,
  message = 'Ha ocurrido un error al cargar las imágenes.'
) => {
  if (!gridEl) return

  gridEl.textContent = ''

  const error = document.createElement('p')
  error.className = 'error-message'
  error.textContent = message

  gridEl.appendChild(error)
}

export const renderLoading = (gridEl, message = 'Cargando imágenes...') => {
  if (!gridEl) return

  gridEl.textContent = ''

  const loading = document.createElement('p')
  loading.className = 'loading-message'
  loading.textContent = message

  gridEl.appendChild(loading)
}
