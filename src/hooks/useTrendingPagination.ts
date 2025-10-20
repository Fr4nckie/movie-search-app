import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

export const useTrendingPagination = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [page, setPage] = useState(Number(searchParams.get("page")) || 1)

  const onNext = () => {
    setPage((prev) => prev + 1)
  }

  const onPrev = () => {
    setPage((prev) => Math.max(prev - 1, 1))
  }

  useEffect(() => {
    navigate(`/trending?page=${page}`, { replace: true })
  }, [page, navigate])

  return { page, onNext, onPrev }
}
