import type { MovieDetailType } from "../types/types.ts"
import { api } from "./api.ts"

export const getMovieDetail = async (
  movieId: string,
  signal?: AbortSignal
): Promise<MovieDetailType> => {
  const response = await api.get<MovieDetailType>(`/movie/${movieId}`, {
    signal,
  })
  return response.data
}
