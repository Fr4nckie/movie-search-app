export type StatusType = "idle" | "loading" | "success" | "error"

export type Movie = {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string // Date ISO
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type MovieResponseType = {
  page: number
  results: Movie[]
  total_pages: number
  total_results: number
}

export type Genre = {
  id: number
  name: string
}

export type Company = {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

export type Country = {
  iso_3166_1: string
  name: string
}

export type Language = {
  english_name: string
  iso_639_1: string
  name: string
}

export type MovieDetailType = {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: string
  budget: number
  genres: Genre[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: Company[]
  production_countries: Country[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: Language[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
