import Searchbar from "./Searchbar.tsx"
import { Outlet } from "react-router-dom"

const SearchLayout = () => {
  return (
    <>
      <Searchbar />
      <Outlet />
    </>
  )
}

export default SearchLayout
