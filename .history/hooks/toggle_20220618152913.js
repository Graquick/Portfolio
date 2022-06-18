import React from 'react'
import {ThemeContext} from "./themecontext"

export default function Toggle() {

    const { theme, setTheme } = React.useContext(ThemeContext)
    return theme === "dark" ? (
        
    ) : (<div></d>)
}

