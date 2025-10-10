import { useEffect, useState } from "react"

export const useDebounce = (value: string, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value.trim())
    }, delay)

    return () => clearTimeout(timer)
  }, [delay, value])

  return debouncedValue
}
