import { useQuery } from "@tanstack/react-query"
import { searchMovie } from "../services/searchMovie.ts"

export const useSearchMovies = (searchTerm: string) => {
  return useQuery({
    queryKey: ["search", searchTerm],
    queryFn: ({ signal }) => searchMovie(searchTerm, signal),
    enabled: !!searchTerm && searchTerm.length > 2,
  })
}
