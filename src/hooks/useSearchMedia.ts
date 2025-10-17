import { useQuery } from "@tanstack/react-query"
import { searchMedia } from "../services/searchMedia.ts"

export const useSearchMedia = (query: string) => {
  return useQuery({
    queryKey: ["search", query],
    queryFn: () => searchMedia(query),
    enabled: !!query,
  })
}
