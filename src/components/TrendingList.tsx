import { useTrendingMedia } from "../hooks/useTrendingMedia.ts"
import MediaCard from "./MediaCard.tsx"

const TrendingList = () => {
  const { data, isLoading, isError, error } = useTrendingMedia()

  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-center text-gray-400">Loading...</p>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-center text-red-500">{error.message}</p>
      </div>
    )
  }

  return (
    <div className="flex-1 container mx-auto px-4 my-4 grid grid-cols-2 gap-6 justify-center md:grid-cols-3 lg:grid-cols-5">
      {data?.results.map((item) => (
        <MediaCard key={item.id} mediaItem={item} />
      ))}
    </div>
  )
}

export default TrendingList
