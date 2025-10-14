import type { MovieDetailType } from "../types/types.ts"
import { formatDate } from "../utils/formatDate.ts"

type MovieDetailContentProps = { movie: MovieDetailType }

const MovieDetailContent = ({ movie }: MovieDetailContentProps) => {
  if (!movie) return null

  const startDate = formatDate(movie.release_date, "full")

  const country = movie?.production_countries
    .map((country) => country.name)
    .join(", ")

  const language = movie?.spoken_languages
    .map((language) => language.english_name)
    .join(", ")

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl md:text-4xl font-bold md:max-w-md">
        {movie.title}
      </h1>
      {movie.tagline && (
        <p className="md:text-md lg:text-xl italic mt-1 max-w-3xl">
          {movie.tagline}
        </p>
      )}
      <ul className="text-gray-400 flex items-center gap-4 my-4">
        {movie.genres.map((genre) => (
          <li key={genre.id} className="border py-1 px-4 rounded-full text-sm">
            {genre.name}
          </li>
        ))}
      </ul>
      <p className="text-gray-400">
        {startDate} | {movie.runtime}min | {country}
      </p>
      <div className="flex items-center gap-4 mt-2">
        <p className="text-gray-400">{language}</p>
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
              {movie.vote_average.toFixed(1)}
            </p>
          </div>
        </div>
      </div>

      <p className="mt-4 max-w-3xl hidden md:block">{movie.overview}</p>
    </div>
  )
}

export default MovieDetailContent
