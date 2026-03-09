const ACCES_KEY = '2C9zC1qMyj9hj8C_UmnnhQCykkDEq0IczsWUhsqIp6I'
const BASE_URL = 'https://api.unsplash.com'
export const getPhotos = async (query = 'nature') => {
  const randomPage = Math.floor(Math.random() * 10) + 1

  const response = await fetch(
    `${BASE_URL}/search/photos?query=${query}&per_page=30&page=${randomPage}&client_id=${ACCES_KEY}`
  )

  const data = await response.json()
  return data.results
}
