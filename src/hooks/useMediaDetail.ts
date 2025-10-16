import { useQuery } from "@tanstack/react-query"
import { getMovieDetail } from "../services/getMovieDetail.ts"
import type { MediaType } from "../types/types.ts"

export const useMediaDetail = (mediaType: MediaType, mediaItemId: string) => {
  return useQuery({
    queryKey: ["detail", mediaItemId, mediaType],
    queryFn: () => getMovieDetail(mediaType, mediaItemId),
    enabled: !!mediaType && !!mediaItemId,
  })
}
