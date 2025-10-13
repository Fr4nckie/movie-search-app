import { useQuery } from "@tanstack/react-query"
import { getMovieDetail } from "../services/getMovieDetail.ts"

export const useMovieDetail = (movieId: string) => {
  return useQuery({
    queryKey: ["movie-detail", movieId],
    queryFn: ({ signal }) => getMovieDetail(movieId, signal),
    enabled: !!movieId,
  })
}
