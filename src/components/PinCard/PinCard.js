export const PinCard = (item) => {
  const card = document.createElement('article')
  card.className = 'pin'

  const src = item?.urls?.regular || item?.url
  const alt = item?.alt_description || item?.description || 'Imagen de Unsplash'
  const href = item?.links?.html || '#'
  const userName = item?.user?.name || 'Usuario'
  const userAvatar = item?.user?.profile_image?.medium || ''
  const likes = item?.likes ?? 0
  const views = item?.statistics?.views?.total ?? 0

  const media = document.createElement('a')
  media.className = 'pin__media'
  media.href = href
  media.target = '_blank'
  media.rel = 'noopener noreferrer'
  media.setAttribute('aria-label', 'Abrir imagen en nueva pestaña')

  const img = document.createElement('img')
  img.className = 'pin__img'
  img.src = src
  img.alt = alt
  img.loading = 'lazy'

  const overlay = document.createElement('div')
  overlay.className = 'pin__overlay'

  const visit = document.createElement('span')
  visit.className = 'pin__visit'
  visit.textContent = 'Visitar'

  overlay.appendChild(visit)
  media.append(img, overlay)

  const meta = document.createElement('div')
  meta.className = 'pin__meta'

  const avatarWrap = document.createElement('div')
  avatarWrap.className = 'pin__avatarWrap'

  if (userAvatar) {
    const avatarImg = document.createElement('img')
    avatarImg.className = 'pin__avatar'
    avatarImg.src = userAvatar
    avatarImg.alt = `Avatar de ${userName}`
    avatarImg.loading = 'lazy'
    avatarWrap.appendChild(avatarImg)
  } else {
    const avatarFallback = document.createElement('div')
    avatarFallback.className = 'pin__avatar pin__avatar--fallback'
    avatarFallback.textContent = getInitial(userName)
    avatarWrap.appendChild(avatarFallback)
  }

  const info = document.createElement('div')
  info.className = 'pin__info'

  const name = document.createElement('p')
  name.className = 'pin__name'
  name.textContent = userName

  const stats = document.createElement('div')
  stats.className = 'pin__stats'

  const likesEl = document.createElement('p')
  likesEl.className = 'pin__stat'
  likesEl.textContent = `❤ ${formatNumber(likes)}`

  const viewsEl = document.createElement('p')
  viewsEl.className = 'pin__stat'
  viewsEl.textContent = `👁 ${formatNumber(views)}`

  stats.append(likesEl, viewsEl)
  info.append(name, stats)
  meta.append(avatarWrap, info)

  card.append(media, meta)

  return card
}

const getInitial = (name) => {
  const cleanName = (name || 'U').trim()
  return cleanName ? cleanName[0].toUpperCase() : 'U'
}

const formatNumber = (value) => {
  return new Intl.NumberFormat('es-ES').format(value || 0)
}
