import React from 'react'
import {ThemeContext} from "./themecontext"

export default function Toggle() {

    const { theme, setTheme } = React.useContext(ThemeContext)

  return (
    <div>toggle</div>
  )
}

