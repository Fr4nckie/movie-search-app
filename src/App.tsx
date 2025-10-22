import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import Root from "./pages/Root.tsx"
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
          { index: true, element: <Navigate to="trending?page=1" replace /> },
          { path: "trending", element: <TrendingList /> },
          {
            path: "search",
            element: <MediaList />,
          },
        ],
      },

      {
        path: ":mediaType/:id",
        lazy: async () => {
          const MediaDetail = await import("./pages/MediaDetail")
          return { Component: MediaDetail.default }
        },
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
