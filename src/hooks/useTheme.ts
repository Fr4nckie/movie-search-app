import { createContext, useContext } from "react"
import type { ThemeContextType } from "../types/theme.ts"

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
)

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error("ThemeContext must be used within ThemeProvider")
  }

  return {
    theme: context.theme,
    toggleTheme: context.toggleTheme,
    isDark: context.theme === "dark",
  }
}
