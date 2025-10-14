import { useSearchMovies } from "../hooks/useSearchMovies.ts"
import MovieCard from "./MovieCard.tsx"

const MovieList = ({ query }: { query: string }) => {
  const { data, isLoading, isError, error } = useSearchMovies(query)

  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-center text-gray-400">Loading...</p>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-center text-red-500">{error.message}</p>
      </div>
    )
  }

  if (!data || data.results.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-center text-gray-400">No results found.</p>
      </div>
    )
  }

  return (
    <div className="flex-1 container mx-auto px-4 my-4 grid gap-4 justify-center sm:grid-cols-2 md:gap-6 md:grid-cols-3 lg:grid-cols-4">
      {data?.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default MovieList
