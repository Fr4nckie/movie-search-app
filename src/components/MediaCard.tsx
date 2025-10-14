import { useNavigate } from "react-router-dom"
import type { MediaItem } from "../types/types.ts"
import { getPosterUrl } from "../utils/getPosterUrl.ts"

type MediaCardProps = {
  mediaItem: MediaItem
}

const MediaCard = ({ mediaItem }: MediaCardProps) => {
  const navigate = useNavigate()

  const handleClick = () => navigate(`/movie/${mediaItem.id}`)

  const posterUrl = getPosterUrl(mediaItem.poster_path)
  const title = "title" in mediaItem ? mediaItem.title : mediaItem.name
  const startDate =
    "release_date" in mediaItem
      ? mediaItem.release_date
      : mediaItem.first_air_date

  return (
    <div className="card bg-base-100 sm:w-full shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1 cursor-pointer">
      <figure className="aspect-[2/3]">
        <img
          src={posterUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
          onClick={handleClick}
        />
      </figure>
      <div className="card-body relative pb-12">
        <h2
          className="card-title text-base md:text-lg capitalize line-clamp-2 hover:underline"
          onClick={handleClick}
        >
          {title}
        </h2>
        <p className="absolute bottom-4 text-gray-400">{startDate}</p>
      </div>
    </div>
  )
}

export default MediaCard
