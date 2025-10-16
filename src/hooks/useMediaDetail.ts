import { useQuery } from "@tanstack/react-query"
import { getMediaDetail } from "../services/getMediaDetail.ts"
import type { MediaType } from "../types/types.ts"

export const useMediaDetail = (mediaType: MediaType, mediaItemId: string) => {
  return useQuery({
    queryKey: ["detail", mediaItemId, mediaType],
    queryFn: () => getMediaDetail(mediaType, mediaItemId),
    enabled: !!mediaType && !!mediaItemId,
  })
}
