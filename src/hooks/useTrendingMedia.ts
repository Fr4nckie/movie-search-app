import { useQuery } from "@tanstack/react-query"
import { getTrendingMedia } from "../services/getTrendingMedia.ts"

export const useTrendingMedia = (page: number = 1) => {
  return useQuery({
    queryKey: ["trending", page],
    queryFn: () => getTrendingMedia(page),
    enabled: !!page,
  })
}
