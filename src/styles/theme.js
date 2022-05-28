import { IoConstructSharp } from 'react-icons/io5'
import { ThemeProvider } from 'styled-components'
import React, { createContext, useContext, useState } from 'react'
import { darkTheme, lightTheme } from '../themes/default'
import GlobalStyles from './globals'

const ThemeContext = createContext(null)
export const useThemeContext = () => useContext(ThemeContext)

const Theme = ({ children }) => {
  const [theme, setTheme] = useState(0)

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <GlobalStyles />
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

export default Theme
