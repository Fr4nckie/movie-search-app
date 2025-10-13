import type { MovieResponseType } from "../types/types.ts"
import { api } from "./api.ts"

export const searchMovie = async (
  searchTerm: string,
  signal?: AbortSignal
): Promise<MovieResponseType> => {
  const response = await api.get(`/search/movie`, {
    params: { query: searchTerm },
    signal,
  })
  return response.data
}
