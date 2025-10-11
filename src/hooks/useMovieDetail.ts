import { useEffect, useState } from "react"
import type { MovieDetailType, StatusType } from "../types/types.ts"
import { useParams } from "react-router-dom"
import { getMovieDetail } from "../services/getMovieDetail.ts"
import { CanceledError } from "axios"

export const useMovieDetail = () => {
  const [movie, setMovie] = useState<MovieDetailType | null>(null)
  const [status, setStatus] = useState<StatusType>("idle")
  const [error, setError] = useState<string | null>(null)
  const { id: movieId } = useParams()

  useEffect(() => {
    const controller = new AbortController()
    let isCancelled = false

    const fetchMovie = async () => {
      if (!movieId) {
        setStatus("idle")
        setMovie(null)
        return
      }

      setStatus("loading")
      setError(null)

      try {
        const data = await getMovieDetail(movieId, controller.signal)

        if (!isCancelled) {
          setMovie(data)
          setStatus("success")
        }
      } catch (error: unknown) {
        if (error instanceof CanceledError) {
          return
        }
        if (!isCancelled) {
          const errorMessage =
            error instanceof Error ? error.message : "An unexpected occured"

          setError(errorMessage)
          setStatus("error")
          setMovie(null)
        }
      }
    }

    fetchMovie()

    return () => {
      isCancelled = true
      controller.abort()
    }
  }, [movieId])

  return {
    movie,
    status,
    isLoading: status === "loading",
    error,
  }
}
