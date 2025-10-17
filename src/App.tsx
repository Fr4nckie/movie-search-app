import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./pages/Root.tsx"
import MediaDetail from "./pages/MediaDetail.tsx"
import TrendingList from "./components/TrendingList.tsx"
import SearchPage from "./pages/SearchPage.tsx"
import SearchLayout from "./components/SearchLayout.tsx"

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
            element: <SearchPage />,
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
