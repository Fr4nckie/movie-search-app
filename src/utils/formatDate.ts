import type { DateFormat } from "../types/types.ts"

/**
 * Converts a date string into a formatted string
 * @param dateString - The date string to format (e.g: 2025-03-06)
 * @param format - The desired format: "full", "monthAndYear" or "year"
 * @returns A formatted date string in "en-US" locale
 */
export const formatDate = (dateString: string, format: DateFormat = "full") => {
  const dateObj = new Date(dateString)

  switch (format) {
    case "full":
      return dateObj.toLocaleDateString("en-US", {
        month: "long",
        day: "2-digit",
        year: "numeric",
      })

    case "monthAndYear":
      return dateObj.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      })

    case "year":
      return dateObj.toLocaleDateString("en-US", { year: "numeric" })

    default:
      return dateObj.toLocaleDateString("en-US")
  }
}
