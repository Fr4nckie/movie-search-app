import MovieList from "../components/MovieList.tsx"
import Searchbar from "../components/Searchbar.tsx"
import { useSearchMovies } from "../hooks/useSearchMovies.ts"

const Home = () => {
  const { search, status, isLoading, error, movies } = useSearchMovies()

  return (
    <>
      <Searchbar onSearch={search} />
      <MovieList
        status={status}
        isLoading={isLoading}
        error={error}
        movies={movies}
      />
    </>
  )
}

export default Home
