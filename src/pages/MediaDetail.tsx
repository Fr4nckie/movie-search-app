import { useMediaDetail } from "../hooks/useMediaDetail.ts"
import MediaDetailContent from "../components/MediaDetailContent.tsx"
import { Navigate, useParams } from "react-router-dom"
import type { MediaType } from "../types/types.ts"
import { getMediaPosterUrl, getMediaTitle } from "../utils/getMediaContent.ts"
import BackButton from "../components/BackButton.tsx"
import Loading from "../components/Loading.tsx"
import ErrorMessage from "../components/ErrorMessage.tsx"
import MediaDetailImage from "../components/MediaDetailImage.tsx"

const MediaDetail = () => {
  const params = useParams()
  const mediaType = params.mediaType as MediaType
  const mediItemId = params.id as string

  const {
    data: mediaDetailItem,
    isLoading,
    error,
    isError,
  } = useMediaDetail(mediaType, mediItemId)

  if (!mediItemId || !mediaType) {
    return <Navigate to="/" replace />
  }

  if (isLoading) {
    return (
      <div className="flex-1 grid place-items-center">
        <Loading />
      </div>
    )
  }

  if (isError) {
    return (
      <div className="flex-1 grid place-items-center">
        <ErrorMessage message={error.message} />
      </div>
    )
  }

  return (
    <>
      <div className="container mx-auto px-4 md:text-right mb-4">
        <BackButton />
      </div>
      <div className="flex-1 flex flex-col md:flex-row md:gap-6 lg:gap-12 container mx-auto px-4 mb-8">
        {mediaDetailItem && (
          <>
            <div className="mx-auto mb-8 md:mb-0 md:mx-0">
              <MediaDetailImage
                posterUrl={getMediaPosterUrl(mediaDetailItem)}
                alt={getMediaTitle(mediaDetailItem)}
              />
            </div>
            <MediaDetailContent mediaDetailItem={mediaDetailItem} />
            <div className="my-4 md:hidden">
              <h2 className="text-xl font-semibold mb-2">Synopsis</h2>
              <p>{mediaDetailItem?.overview}</p>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default MediaDetail
