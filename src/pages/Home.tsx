import { useState } from "react"
import MovieList from "../components/MovieList.tsx"
import Searchbar from "../components/Searchbar.tsx"
import { useDebounce } from "../hooks/useDebounce.ts"
import TrendingList from "../components/TrendingList.tsx"

const Home = () => {
  const [searchTerm, setSearchTerm] = useState(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("search-term") || ""
    }
    return ""
  })
  const debouncedValue = useDebounce(searchTerm, 500)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    sessionStorage.setItem("search-term", e.target.value)
  }

  return (
    <>
      <Searchbar query={searchTerm} onChange={handleChange} />
      {!debouncedValue ? (
        <TrendingList />
      ) : (
        <MovieList query={debouncedValue} />
      )}
    </>
  )
}

export default Home
