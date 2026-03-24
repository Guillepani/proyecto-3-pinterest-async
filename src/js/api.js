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
  try {
    return await fetchJson(
      `${BASE_URL}/photos/${photoId}/statistics?client_id=${ACCESS_KEY}`
    )
  } catch {
    return null
  }
}

export const getPhotos = async (query = 'nature') => {
  if (!ACCESS_KEY) {
    throw new Error('Falta la variable de entorno VITE_ACCESS_KEY')
  }

  const randomPage = Math.floor(Math.random() * 10) + 1

  try {
    const data = await fetchJson(
      `${BASE_URL}/search/photos?query=${encodeURIComponent(query)}&per_page=12&page=${randomPage}&client_id=${ACCESS_KEY}`
    )

    const results = data.results || []

    const enrichedResults = await Promise.all(
      results.map(async (photo) => {
        const statistics = await getPhotoStatistics(photo.id)

        return {
          ...photo,
          statistics
        }
      })
    )

    return enrichedResults
  } catch (error) {
    console.error('Error al obtener imágenes:', error)
    throw error
  }
}
