import type { MovieDetailType, ResponseType } from "../types/types.ts"

const BASE_URL = import.meta.env.VITE_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY

const options = {
  method: "GET",
  headers: { accept: "application/json", Authorization: `Bearer ${API_KEY}` },
}

export const searchMovie = async (
  searchTerm: string,
  signal?: AbortSignal
): Promise<ResponseType> => {
  try {
    const response = await fetch(
      `${BASE_URL}/search/movie?query=${encodeURIComponent(searchTerm)}`,
      { ...options, signal }
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data: ResponseType = await response.json()

    if (!data.results) {
      throw new Error("Format de réponse invalide")
    }

    return data
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw error
    }
    console.error("Erreur lors de la recherche:", error)
    throw new Error(
      error instanceof Error ? error.message : "Echec de la recherche"
    )
  }
}

export const getMovieDetail = async (
  movieId: string,
  signal?: AbortSignal
): Promise<MovieDetailType> => {
  try {
    const response = await fetch(`${BASE_URL}/movie/${movieId}`, {
      ...options,
      signal,
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw error
    }
    console.error("Erreur lors de la recherche:", error)
    throw new Error(
      error instanceof Error ? error.message : "Echec de la recherche"
    )
  }
}
