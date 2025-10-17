import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./pages/Root.tsx"
import MediaDetail from "./pages/MediaDetail.tsx"
import TrendingList from "./components/TrendingList.tsx"
import SearchLayout from "./components/SearchLayout.tsx"
import MediaList from "./components/MediaList.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        element: <SearchLayout />,
        children: [
          { index: true, element: <TrendingList /> },
          {
            path: "search",
            element: <MediaList />,
          },
        ],
      },

      {
        path: ":mediaType/:id",
        element: <MediaDetail />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
