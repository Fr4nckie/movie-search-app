import axios, { CanceledError } from "axios"
import type { MovieDetailType } from "../types/types.ts"
import { api } from "./api.ts"

export const getMovieDetail = async (
  movieId: string,
  signal?: AbortSignal
): Promise<MovieDetailType> => {
  try {
    const response = await api.get<MovieDetailType>(`/movie/${movieId}`, {
      signal,
    })
    return response.data
  } catch (err: unknown) {
    if (err instanceof CanceledError) {
      throw err
    }

    if (axios.isAxiosError(err)) {
      // if (err.code === "ERR_CANCELED") {
      //   throw err
      // }

      if (err.response) {
        const status = err.response.status
        const message =
          err.response.data.status_message ||
          err.response.statusText ||
          "Unknown error"
        throw new Error(`Request failed with status ${status}: ${message}`)
      }

      if (err.request) {
        throw new Error("Network error: unable to reach the server")
      }

      throw new Error(err.message)
    }

    if (err instanceof Error) {
      throw new Error(err.message)
    }

    throw new Error("An unexpected error occurred")
  }
}
