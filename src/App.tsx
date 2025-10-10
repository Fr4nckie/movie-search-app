import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home.tsx"
import Root from "./pages/Root.tsx"
import MovieDetail from "./pages/MovieDetail.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetail />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
