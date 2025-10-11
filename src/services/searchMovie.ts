import { AxiosError } from "axios"
import type { MovieResponseType } from "../types/types.ts"
import { api } from "./api.ts"

export const searchMovie = async (
  searchTerm: string,
  signal?: AbortSignal
): Promise<MovieResponseType> => {
  try {
    const response = await api.get(`/search/movie`, {
      params: { query: searchTerm },
      signal,
    })
    return response.data
  } catch (err) {
    if (err instanceof AxiosError) {
      if (err.code === "ERR_CANCELED") {
        throw err
      }

      if (err.response) {
        const status = err.response.status
        const message = err.response.data.status_message

        throw new Error(`Request failed with status ${status}: ${message}`)
      }

      if (err.request) {
        throw new Error("Network error: Unable to reach the server")
      }
    }

    throw new Error(
      err instanceof Error ? err.message : "An unexpected error occured"
    )
  }
}
