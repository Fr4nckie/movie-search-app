import { useState } from "react"
import { useDebounce } from "./useDebounce.ts"

export const usePersistentSearch = () => {
  const initialSearch =
    typeof window !== "undefined"
      ? sessionStorage.getItem("search-term") || ""
      : ""
  const [searchTerm, setSearchTerm] = useState(initialSearch)
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  const setSearchTermWithPersistence = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(e.target.value)
    sessionStorage.setItem("search-term", e.target.value)
  }

  return { searchTerm, debouncedSearchTerm, setSearchTermWithPersistence }
}
