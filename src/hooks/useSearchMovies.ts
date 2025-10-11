import { useCallback, useState } from "react"
import type { Movie, StatusType } from "../types/types.ts"
import { searchMovie } from "../services/searchMovie.ts"

export const useSearchMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [status, setStatus] = useState<StatusType>("idle")
  const [error, setError] = useState<string | null>(null)

  const search = useCallback(async (query: string) => {
    if (!query.trim()) {
      setStatus("idle")
      setMovies([])
      setError(null)
      return
    }

    const controller = new AbortController()

    try {
      setStatus("loading")
      setError(null)

      const data = await searchMovie(query, controller.signal)

      setMovies(data.results)
      setStatus("success")
    } catch (err) {
      if (err instanceof Error && err.name === "CanceledError") {
        return
      }
      const errMessage =
        err instanceof Error ? err.message : "An unexpected occured"

      setError(errMessage)
      setStatus("error")
      setMovies([])
    }

    return () => controller.abort
  }, [])

  const reset = useCallback(() => {
    setMovies([])
    setStatus("idle")
    setError(null)
  }, [])

  return {
    movies,
    isLoading: status === "loading",
    error,
    status,
    search,
    reset,
  }
}
