import { useTheme } from "../hooks/useTheme.ts"
import type { MediaDetailItem } from "../types/types.ts"
import {
  getMediaCountries,
  getMediaLanguages,
  getMediaRuntime,
  getMediaStartDate,
  getMediaTitle,
} from "../utils/getMediaContent.ts"

type MovieDetailContentProps = { mediaDetailItem: MediaDetailItem }

const MediaDetailContent = ({ mediaDetailItem }: MovieDetailContentProps) => {
  const { isDark } = useTheme()

  if (!mediaDetailItem) return null

  const mediaDuration =
    "runtime" in mediaDetailItem
      ? `${getMediaRuntime(mediaDetailItem)}min`
      : `${mediaDetailItem.number_of_seasons
          .toString()
          .padStart(2, "0")} seasons`

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl md:text-4xl font-bold md:max-w-md">
        {getMediaTitle(mediaDetailItem)}
      </h1>
      {mediaDetailItem.tagline && (
        <p className="md:text-md lg:text-xl italic mt-1 max-w-3xl">
          {mediaDetailItem.tagline}
        </p>
      )}
      <ul
        className={`flex flex-wrap items-center gap-4 my-4 ${
          isDark ? "text-gray-400" : "text-gray-500"
        }`}
      >
        {mediaDetailItem.genres.map((genre) => (
          <li key={genre.id} className="border py-1 px-4 rounded-full text-sm">
            {genre.name}
          </li>
        ))}
      </ul>
      <p className={`${isDark ? "text-gray-400" : "text-gray-500"}`}>
        {getMediaStartDate(mediaDetailItem)} | {mediaDuration} |{" "}
        {getMediaCountries(mediaDetailItem)}
      </p>
      <div className="flex items-center gap-4 mt-2">
        <p className={`${isDark ? "text-gray-400" : "text-gray-500"}`}>
          {getMediaLanguages(mediaDetailItem)}
        </p>
        <span>|</span>
        <div className="badge py-4">
          <div className="flex items-center gap-2">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                aria-label="1 star"
                defaultChecked
              />
            </div>
            <p className="text-lg font-semibold">
              {mediaDetailItem.vote_average.toFixed(1)}
            </p>
          </div>
        </div>
      </div>

      <p className="mt-4 max-w-3xl hidden md:block">
        {mediaDetailItem.overview}
      </p>
    </div>
  )
}

export default MediaDetailContent
