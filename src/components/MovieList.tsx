import type { Movie, StatusType } from "../types/types.ts"
import MovieCard from "./MovieCard.tsx"

type MovieListProps = {
  status: StatusType
  isLoading: boolean
  error: string | null
  movies: Movie[]
}

const MovieList = ({ status, isLoading, error, movies }: MovieListProps) => {
  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-center text-gray-400">Loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-center text-red-500">{error}</p>
      </div>
    )
  }

  if (status === "idle") {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-center text-gray-400 text-2xl">Search a movie to begin</p>
      </div>
    )
  }

  if (status === "success" && movies.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-center text-gray-400">No results found.</p>
      </div>
    )
  }

  return (
    <div className="flex-1 container mx-auto px-4 my-4 grid gap-4 justify-center sm:grid-cols-2 md:gap-6 md:grid-cols-3 lg:grid-cols-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default MovieList
