import type { MediaType, MovieDetailType } from "../types/types.ts"
import { api } from "./api.ts"

export const getMediaDetail = async (
  mediaType: MediaType,
  mediaItemId: string
): Promise<MovieDetailType> => {
  const response = await api.get<MovieDetailType>(
    `/${mediaType}/${mediaItemId}`
  )
  return response.data
}
