import Searchbar from "../components/Searchbar.tsx"
import TrendingList from "../components/TrendingList.tsx"
import MediaList from "../components/MediaList.tsx"
import { usePersistentSearch } from "../hooks/usePersistentSearch.ts"

const Home = () => {
  const { searchTerm, setSearchTermWithPersistence, debouncedSearchTerm } =
    usePersistentSearch()

  return (
    <>
      <Searchbar query={searchTerm} onChange={setSearchTermWithPersistence} />
      {debouncedSearchTerm ? (
        <MediaList query={debouncedSearchTerm} />
      ) : (
        <TrendingList />
      )}
    </>
  )
}

export default Home
