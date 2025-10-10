import { useEffect } from "react"
import { useMovieDetail } from "../hooks/useMovieDetail.ts"
import { getPosterUrl } from "../utils/getPosterUrl.ts"

const MovieDetail = () => {
  const { movie } = useMovieDetail()
  const posterUrl = getPosterUrl(movie?.poster_path as string)
  const date = new Date(movie?.release_date as string).toLocaleDateString(
    "en-US",
    { month: "long", day: "2-digit", year: "numeric" }
  )
  const country = movie?.production_countries
    .map((country) => country.name)
    .join(", ")
  const language = movie?.spoken_languages
    .map((language) => language.english_name)
    .join(", ")

  useEffect(() => console.log(movie), [movie])

  return (
    <div className="flex-1 flex items-center container mx-auto px-4">
      <div className="flex gap-12 items-start">
        <img
          src={posterUrl}
          alt={movie?.title}
          className="rounded-md shadow-md max-w-[250px] aspect-[2/3] object-cover"
        />
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold max-w-md">{movie?.title}</h1>
          {movie?.tagline && <p className="text-xl italic mt-1">{movie?.tagline}</p>}
          <ul className="text-gray-400 flex items-center gap-4 my-4">
            {movie?.genres.map((genre) => (
              <li
                key={genre.id}
                className="border py-1 px-4 rounded-full text-sm"
              >
                {genre.name}
              </li>
            ))}
          </ul>
          <p className="text-gray-400">
            {date} | {movie?.runtime}min | {country}
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
                  {movie?.vote_average.toFixed(1)}
                </p>
              </div>
            </div>
          </div>

          <p className="mt-4 max-w-3xl">{movie?.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail
