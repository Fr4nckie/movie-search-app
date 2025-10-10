import { useCallback, useRef, useState } from "react"
import { searchMovie } from "../services/api.ts"
import type { Movie, StatusType } from "../types/types.ts"

export const useSearchMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([])
  const [status, setStatus] = useState<StatusType>("idle")
  const [error, setError] = useState<string | null>(null)
  const abortControllerRef = useRef<AbortController | null>(null)

  const search = useCallback(async (searchTerm: string) => {
    if (!searchTerm.trim()) {
      reset()
      return
    }

    abortControllerRef.current?.abort()
    abortControllerRef.current = new AbortController()

    setStatus("loading")
    setError(null)

    try {
      const data = await searchMovie(searchTerm)
      setMovies(data.results)
      setStatus("success")
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        return
      }
      const errorMessage =
        error instanceof Error ? error.message : "Une erreur est survenue"
      setError(errorMessage)
      setStatus("error")
      setMovies([])
    }
  }, [])

  const reset = useCallback(() => {
    abortControllerRef.current?.abort()
    setMovies([])
    setError(null)
    setStatus("idle")
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
