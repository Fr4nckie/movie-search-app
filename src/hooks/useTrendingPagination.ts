import { useCallback, useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

export const useTrendingPagination = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialPage = Number(searchParams.get("page")) || 1
  const [page, setPage] = useState(initialPage)

  const goToPage = useCallback((newPage: number) => {
    setPage(newPage)
  }, [])

  useEffect(() => {
    setSearchParams({ page: String(page) })
  }, [page, setSearchParams])

  return { page, goToPage }
}
