export const renderImages = (gridEl, urls = []) => {
  gridEl.innerHTML = ''

  urls.forEach((url) => {
    const img = document.createElement('img')
    img.src = url
    img.alt = 'image'
    img.loading = 'lazy'
    gridEl.appendChild(img)
  })
}
