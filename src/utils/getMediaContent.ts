import type { MediaDetailItem, MediaItem } from "../types/types.ts"
import { getPosterUrl } from "./getPosterUrl.ts"

export const getMediaTitle = (
  mediaItem: MediaDetailItem | MediaItem
): string => {
  return "title" in mediaItem ? mediaItem.title : mediaItem.name
}

export const getMediaStartDate = (
  mediaItem: MediaDetailItem | MediaItem
): string => {
  return "release_date" in mediaItem
    ? mediaItem.release_date
    : mediaItem.first_air_date
}

export const getMediaPosterUrl = (
  mediaItem: MediaDetailItem | MediaItem
): string => {
  return getPosterUrl(mediaItem.poster_path)
}

export const getMediaRuntime = (
  mediaItem: MediaDetailItem | MediaItem
): number | null => {
  return "runtime" in mediaItem ? mediaItem.runtime : null
}

export const getMediaLanguages = (mediaItem: MediaDetailItem): string => {
  return mediaItem.spoken_languages
    .map((language) => language.english_name)
    .join(", ")
}

export const getMediaCountries = (mediaItem: MediaDetailItem): string => {
  return mediaItem.production_countries.map((country) => country.name).join(", ")
}
