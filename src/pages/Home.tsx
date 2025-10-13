import { useState } from "react"
import MovieList from "../components/MovieList.tsx"
import Searchbar from "../components/Searchbar.tsx"
import { useDebounce } from "../hooks/useDebounce.ts"

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const debouncedValue = useDebounce(searchTerm, 500)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return (
    <>
      <Searchbar query={searchTerm} onChange={handleChange} />
      <MovieList query={debouncedValue} />
    </>
  )
}

export default Home
