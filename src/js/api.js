const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY
const BASE_URL = 'https://api.unsplash.com'

const fetchJson = async (url) => {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Error en la API: ${response.status}`)
  }

  return response.json()
}

const getPhotoStatistics = async (photoId) => {
  return fetchJson(
    `${BASE_URL}/photos/${photoId}/statistics?client_id=${ACCESS_KEY}`
  )
}

export const getPhotos = async (query = 'nature') => {
  if (!ACCESS_KEY) {
    throw new Error('Falta la variable de entorno VITE_ACCESS_KEY')
  }

  try {
    const data = await fetchJson(
      `${BASE_URL}/search/photos?query=${encodeURIComponent(query)}&per_page=20&page=1&client_id=${ACCESS_KEY}`
    )

    const results = data.results || []

    if (!results.length) return []

    const statisticsResults = await Promise.allSettled(
      results.map((photo) => getPhotoStatistics(photo.id))
    )

    const enrichedPhotos = results.map((photo, index) => {
      const statistics = statisticsResults[index]

      return {
        ...photo,
        statistics:
          statistics.status === 'fulfilled'
            ? statistics.value
            : { views: { total: 0 } }
      }
    })

    return enrichedPhotos
  } catch (error) {
    console.error('Error al obtener imágenes:', error)
    return []
  }
}
