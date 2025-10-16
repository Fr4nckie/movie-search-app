import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home.tsx"
import Root from "./pages/Root.tsx"
import MediaDetail from "./pages/MediaDetail.tsx"

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
        path: "/:mediaType/:id",
        element: <MediaDetail />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
