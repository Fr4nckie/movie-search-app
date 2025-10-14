import type { MediaItem } from "../types/types.ts"
import { getPosterUrl } from "./getPosterUrl.ts"

export const getMediaCardContent = (mediaItem: MediaItem) => {
  const posterUrl = getPosterUrl(mediaItem.poster_path)
  const startDate =
    "release_date" in mediaItem
      ? mediaItem.release_date
      : mediaItem.first_air_date
  const title = "title" in mediaItem ? mediaItem.title : mediaItem.name

  return { posterUrl, startDate, title }
}
