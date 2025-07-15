"use client"

import { createContext, useContext, useEffect, useState } from "react"

const ThemeProviderContext = createContext({
  theme: "light",
  setTheme: () => null,
})

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "ui-theme",
  ...props
}) {
  const [theme, setTheme] = useState(defaultTheme)

  useEffect(() => {
    // İlk yüklemede localStorage'dan tema al
    const storedTheme = localStorage.getItem(storageKey)
    if (storedTheme) {
      setTheme(storedTheme)
    } else {
      // Kullanıcının sistem tercihini kontrol et
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setTheme(prefersDark ? "dark" : "light")
    }
  }, [storageKey])

  useEffect(() => {
    const root = window.document.documentElement
    
    // Eski tema sınıflarını temizle
    root.classList.remove("light", "dark")
    
    // Yeni temayı uygula
    root.classList.add(theme)
    
    // localStorage'a kaydet
    localStorage.setItem(storageKey, theme)
  }, [theme, storageKey])

  const value = {
    theme,
    setTheme: (theme) => {
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}