import type {
  MediaListResponse,
  MediaTypeParams,
  TimeWindow,
} from "../types/types.ts"
import { api } from "./api.ts"

export const getTrendingMedia = async (
  page: number,
  mediaType: MediaTypeParams = "all",
  timeWindow: TimeWindow = "week"
): Promise<MediaListResponse> => {
  const response = await api.get(`/trending/${mediaType}/${timeWindow}`, {
    params: { page },
  })
  return response.data
}
