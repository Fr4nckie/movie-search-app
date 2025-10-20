type MediaDetailImage = {
  posterUrl: string
  alt?: string
}

const MediaDetailImage = ({ posterUrl, alt }: MediaDetailImage) => {
  return (
    <img
      src={posterUrl}
      alt={alt}
      className="rounded-md shadow-md md:max-w-[250px] aspect-[2/3] object-cover max-w-[180px]"
    />
  )
}

export default MediaDetailImage
