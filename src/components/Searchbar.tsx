import { useEffect, useState } from "react"
import { useDebounce } from "../hooks/useDebounce.ts"

type SearchbarProps = {
  onSearch: (query: string) => void
}

const Searchbar = ({ onSearch }: SearchbarProps) => {
  const searchTermStorage = sessionStorage.getItem("search-term")
  const [searchTerm, setSearchTerm] = useState(() =>
    searchTermStorage ? searchTermStorage : ""
  )
  const debouncedValue = useDebounce(searchTerm, 500)

  useEffect(() => {
    onSearch(debouncedValue)
  }, [debouncedValue, onSearch])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    sessionStorage.setItem("search-term", e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <form className="container mx-auto px-4" onSubmit={handleSubmit}>
      <label className="input w-full">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          className="grow"
          placeholder="Search a movie..."
          value={searchTerm}
          onChange={handleChange}
        />
      </label>
    </form>
  )
}

export default Searchbar
