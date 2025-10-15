export type StatusType = "idle" | "loading" | "success" | "error"

export type MediaType = "movie" | "tv"

export type MediaTypeParams = "movie" | "tv" | "all"

export type TimeWindow = "day" | "week"

export type SearchCategory =
  | "movie"
  | "tv"
  | "multi"
  | "person"
  | "keyword"
  | "company"
  | "collection"

export type BaseMedia = {
  adult: boolean
  backdrop_path: string
  id: number
  original_language: string
  genre_ids: number[]
  overview: string
  popularity: number
  poster_path: string
  media_type: MediaType
  vote_average: number
  vote_count: number
}

export type Movie = BaseMedia & {
  original_title: string
  release_date: string // Date ISO
  title: string
  video: boolean
}

export type TVShow = BaseMedia & {
  name: string
  original_name: string
  first_air_date: string // Date ISO
  origin_country: string[]
}

export type MediaListResponse = {
  page: number
  results: MediaItem[]
  total_pages: number
  total_results: number
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

export type CreatedBy = {
  id: number
  credit_id: string
  name: string
  gender: number
  profile_path: string
}

export type LastEpisodeToAir = {
  id: number
  name: string
  overview: string
  vote_average: number
  vote_count: number
  air_date: string
  episode_number: number
  production_code: string
  runtime: number
  season_number: number
  show_id: number
  still_path: string
}

export type Network = {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

export type Season = {
  air_date: string
  episode_count: number
  id: number
  name: string
  overview: string
  poster_path: string
  season_number: number
  vote_average: number
}

export type BaseMediaDetail = {
  adult: boolean
  backdrop_path: string
  id: number
  genres: Genre[]
  original_language: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: Company[]
  production_countries: Country[]
  spoken_languages: Language[]
  status: string
  tagline: string
  vote_average: number
  vote_count: number
}

export type MovieDetailType = BaseMediaDetail & {
  belongs_to_collection: string
  budget: number
  homepage: string
  imdb_id: string
  original_title: string
  release_date: string
  revenue: number
  runtime: number
  title: string
  video: boolean
}

export type TVShowDetailType = BaseMediaDetail & {
  created_by: CreatedBy[]
  episode_run_time: number[]
  first_air_date: string // date ISO
  homepage: string
  in_production: boolean
  languages: string[]
  last_air_date: string // date ISO
  last_episode_to_air: LastEpisodeToAir
  name: string
  next_episode_to_air: string
  networks: Network[]
  number_of_episodes: number
  number_of_seasons: number
  origin_country: string[]
  original_name: string
  seasons: Season[]
}

export type MediaItem = Movie | TVShow

export type MediaDetailItem = MovieDetailType | TVShowDetailType

export type DateFormat = "full" | "year" | "monthAndYear"
