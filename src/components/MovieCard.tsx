import { useNavigate } from "react-router-dom"
import type { Movie } from "../types/types.ts"
import { getPosterUrl } from "../utils/getPosterUrl.ts"

type MovieCardProps = {
  movie: Movie
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const posterUrl = getPosterUrl(movie.poster_path)
  const navigate = useNavigate()

  const handleClick = () => navigate(`/movie/${movie.id}`)

  return (
    <div className="card bg-base-100 sm:w-full shadow-md w-60 hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1 cursor-pointer">
      <figure className="aspect-[2/3]">
        <img
          src={posterUrl}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
          onClick={handleClick}
        />
      </figure>
      <div className="card-body">
        <h2
          className="card-title capitalize text-2xl hover:underline"
          onClick={handleClick}
        >
          {movie.title}
        </h2>
        <p className="text-gray-400">{movie.release_date}</p>
      </div>
    </div>
  )
}

export default MovieCard
