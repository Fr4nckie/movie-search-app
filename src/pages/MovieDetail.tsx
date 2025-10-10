import { useEffect } from "react"
import { useMovieDetail } from "../hooks/useMovieDetail.ts"
import { getPosterUrl } from "../utils/getPosterUrl.ts"
import MovieDetailContent from "../components/MovieDetailContent.tsx"

const MovieDetail = () => {
  const { movie, isLoading, error } = useMovieDetail()

  useEffect(() => console.log(movie), [movie])

  if (isLoading) {
    return <div className="flex-1 grid place-items-center">Loading...</div>
  }

  if (error) {
    return <div className="flex-1 grid place-items-center">{error}</div>
  }

  const posterUrl = getPosterUrl(movie?.poster_path as string)

  return (
    <div className="flex-1 flex flex-col items-center md:flex-row container mx-auto px-4">
      <div className="flex flex-col items-center gap-6 md:flex-row lg:gap-12 md:items-start">
        <img
          src={posterUrl}
          alt={movie?.title}
          className="rounded-md shadow-md md:max-w-[250px] aspect-[2/3] object-cover max-w-[180px]"
        />
        {movie && <MovieDetailContent movie={movie} />}
      </div>
      <div className="my-4 md:hidden">
        <h2 className="text-xl font-semibold mb-2">Synopsis</h2>
        <p>{movie?.overview}</p>
      </div>
    </div>
  )
}

export default MovieDetail
