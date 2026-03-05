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
    const isString = typeof item === 'string'

    const src = isString ? item : item?.urls?.regular || item?.url
    const alt = isString
      ? 'Imagen'
      : item?.alt_description || item?.title || 'Imagen'
    const href = !isString ? item?.links?.html : null

    if (!src) return

    const card = document.createElement('article')
    card.className = 'pin'

    const media = href
      ? document.createElement('a')
      : document.createElement('div')
    media.className = 'pin__media'

    if (href) {
      media.href = href
      media.target = '_blank'
      media.rel = 'noopener noreferrer'
      media.setAttribute('aria-label', 'Abrir imagen en nueva pestaña')
    }

    const img = document.createElement('img')
    img.className = 'pin__img'
    img.src = src
    img.alt = alt
    img.loading = 'lazy'

    // overlay "Visitar" (solo visual, click va en el link)
    const overlay = document.createElement('div')
    overlay.className = 'pin__overlay'

    const visit = document.createElement('span')
    visit.className = 'pin__visit'
    visit.textContent = 'Visitar'

    overlay.appendChild(visit)
    media.append(img, overlay)

    // meta inferior (avatar + nombre + fecha)
    const meta = document.createElement('div')
    meta.className = 'pin__meta'

    const avatar = document.createElement('div')
    avatar.className = 'pin__avatar'
    avatar.textContent = getInitial(!isString ? item?.user?.name : null)

    const info = document.createElement('div')
    info.className = 'pin__info'

    const name = document.createElement('p')
    name.className = 'pin__name'
    name.textContent = !isString ? item?.user?.name || 'Usuario' : 'Usuario'

    const date = document.createElement('p')
    date.className = 'pin__date'
    date.textContent = !isString ? formatDate(item?.created_at) : ''

    info.append(name, date)
    meta.append(avatar, info)

    card.append(media, meta)
    gridEl.appendChild(card)
  })
}

const getInitial = (name) => {
  const n = (name || 'U').trim()
  return n ? n[0].toUpperCase() : 'U'
}

const formatDate = (iso) => {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  const dd = String(d.getDate()).padStart(2, '0')
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const yyyy = d.getFullYear()
  return `${dd}/${mm}/${yyyy}`
}
