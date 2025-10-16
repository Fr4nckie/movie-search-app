import { useQuery } from "@tanstack/react-query"
import { searchMedia } from "../services/searchMedia.ts"

export const useSearchMedia = (searchTerm: string) => {
  return useQuery({
    queryKey: ["search", searchTerm],
    queryFn: () => searchMedia(searchTerm),
    enabled: !!searchTerm && searchTerm.length >= 2,
  })
}
