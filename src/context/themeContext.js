import React, { useState, createContext, useEffect, useContext } from "react"

const defaultContextData = {
  isDark: false,
  toggle: () => {},
}

const ThemeContext = createContext(defaultContextData)
const useTheme = () => useContext(ThemeContext)

const useEffectDarkMode = () => {
  const [themeState, setThemeState] = useState({
    isDark: false,
    hasThemeLoaded: false,
  })

  useEffect(() => {
    const isLocalStorageDark = localStorage.getItem("dark") === "true"

    if (isLocalStorageDark) {
      document.querySelector("body").classList.add("dark")
    }

    setThemeState({
      isDark: isLocalStorageDark,
      hasThemeLoaded: true,
    })
  }, [])

  return [themeState, setThemeState]
}

const ThemeProvider = ({ children }) => {
  const [themeState, setThemeState] = useEffectDarkMode()

  const toggle = () => {
    const darkModeToggleState = !themeState.isDark
    const bodyElement = document.querySelector("body")

    localStorage.setItem("dark", JSON.stringify(darkModeToggleState))
    darkModeToggleState
      ? bodyElement.classList.add("dark")
      : bodyElement.classList.remove("dark")
    setThemeState({ ...themeState, isDark: darkModeToggleState })
  }

  if (!themeState.hasThemeLoaded) {
    return <div />
  }

  return (
    <ThemeContext.Provider
      value={{
        isDark: themeState.isDark,
        toggle,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, useTheme }
