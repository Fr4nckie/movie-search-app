export const getPosterUrl = (posterPath: string, size: string = "w500") => {
  const baseUrl = import.meta.env.VITE_BASE_URL_IMG
  return `${baseUrl}/${size}/${posterPath}`
}
