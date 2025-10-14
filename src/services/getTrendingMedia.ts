import type {
  MediaType,
  TimeWindow,
  TrendingAllResponseType,
} from "../types/types.ts"
import { api } from "./api.ts"

export const getTrendingMedia = async (
  mediaType: MediaType = "all",
  timeWindow: TimeWindow = "week"
): Promise<TrendingAllResponseType> => {
  const response = await api.get(`/trending/${mediaType}/${timeWindow}`)
  return response.data
}
