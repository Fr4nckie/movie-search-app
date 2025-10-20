import { Link } from "react-router-dom"
import ToggleThemeButton from "./ToggleThemeButton.tsx"

const Header = () => {
  return (
    <header className="py-4 shadow mb-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/">
          <h1 className="text-2xl font-bold capitalize">movie search app</h1>
        </Link>
        <ToggleThemeButton />
      </div>
    </header>
  )
}

export default Header
