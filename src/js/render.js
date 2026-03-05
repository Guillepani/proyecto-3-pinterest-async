export const renderImages = (gridEl, items = []) => {
  gridEl.innerHTML = ''

  items.forEach((item) => {
    const isString = typeof item === 'string'

    const src = isString ? item : item.urls?.regular || item.url
    const alt = isString ? '' : item.alt_description || item.title || ''
    const link = !isString ? item.links?.html : null

    if (!src) return

    //crear los nodos del DOM desde JS
    const img = document.createElement('img')
    img.src = src
    img.alt = alt
    img.loading = 'lazy'

    // look Pinterest (mínimo)
    img.style.width = '100%'
    img.style.display = 'block'
    img.style.borderRadius = '14px'

    let element = img

    if (link) {
      const anchor = document.createElement('a')
      anchor.href = link
      anchor.target = '_blank'
      anchor.rel = 'noopener noreferrer'
      anchor.appendChild(img)
      element = anchor
    }

    gridEl.appendChild(element)
  })
}
