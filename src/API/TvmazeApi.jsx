const BASE_URL = "https://api.tvmaze.com"

const APIget = async (queryString) => {
    const response = await fetch(`${BASE_URL}${queryString}`)
    const body = await response.json()
  return body
}

export const SearchForShows = (query)=> APIget(`/search/shows?q=${query}`)
