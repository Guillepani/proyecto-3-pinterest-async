export const renderImages = (gridEl, items = []) => {
  gridEl.innerHTML = ''

  items.forEach((item) => {
    const isString = typeof item === 'string'

    const src = isString ? item : item.urls?.regular || item.url
    const alt = isString ? '' : item.alt_description || item.title || ''
    const link = !isString ? item.links?.html : null
    const color = !isString ? item.color : null

    if (!src) return

    const img = document.createElement('img')
    img.src = src
    img.alt = alt
    img.loading = 'lazy'

    let element = img

    if (color) {
      const div = document.createElement('div')
      div.style.borderRadius = '14px'
      div.style.border = `2px solid ${color}`
      div.style.display = 'block'
      div.appendChild(img)
      element = div
    }

    if (link) {
      const anchor = document.createElement('a')
      anchor.href = link
      anchor.target = '_blank'
      anchor.rel = 'noopener noreferrer'
      anchor.appendChild(element)
      element = anchor
    }

    gridEl.appendChild(element)
  })
}
