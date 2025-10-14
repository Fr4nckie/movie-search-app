import { useQuery } from "@tanstack/react-query"
import { getTrendingMedia } from "../services/getTrendingMedia.ts"

export const useTrendingMedia = () => {
  return useQuery({
    queryKey: ["trending"],
    queryFn: () => getTrendingMedia(),
  })
}
