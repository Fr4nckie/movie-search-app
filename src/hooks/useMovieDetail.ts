import { useEffect, useRef, useState } from "react"
import type { MovieDetailType, StatusType } from "../types/types.ts"
import { getMovieDetail } from "../services/api.ts"
import { useParams } from "react-router-dom"

export const useMovieDetail = () => {
  const [movie, setMovie] = useState<MovieDetailType | null>(null)
  const [status, setStatus] = useState<StatusType>("idle")
  const [error, setError] = useState<string | null>(null)
  const { id: movieId } = useParams()
  const abortControllerRef = useRef<AbortController | null>(null)

  useEffect(() => {
    const fetchMovie = async () => {
      if (!movieId) {
        setStatus("idle")
        setMovie(null)
        return
      }

      abortControllerRef.current?.abort()
      abortControllerRef.current = new AbortController()

      setStatus("loading")
      setError(null)

      try {
        const data = await getMovieDetail(
          movieId,
          abortControllerRef.current?.signal
        )
        setMovie(data)
        setStatus("success")
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          return
        }

        const errorMessage =
          error instanceof Error ? error.message : "Une erreur est survenue"
        setError(errorMessage)
        setStatus("error")
        setMovie(null)
      }
    }

    fetchMovie()

    return () => {
      abortControllerRef.current?.abort()
    }
  }, [movieId])

  return {
    movie,
    status,
    isLoading: status === "loading",
    error,
  }
}
