import { useQuery } from "@tanstack/react-query"
import { searchMovie } from "../services/searchMovie.ts"

export const useSearchMedia = (searchTerm: string) => {
  return useQuery({
    queryKey: ["search", searchTerm],
    queryFn: () => searchMovie(searchTerm),
    enabled: !!searchTerm && searchTerm.length >= 2,
  })
}
