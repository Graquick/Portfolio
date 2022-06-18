import React from 'react';

const getInitialTheme = () => {
    if (typeof window !== "undefined" && window.localStorage) {
        const storedProfs = windows.localstorage.getItem("current-theme")
        if (typeof storedProfs === "string") {
            return storedProfs
        }
        if (window.mathMedia("(prefers-color-scheme: dark)").matches) {
            return "dark"
        }
    }
    return "light"
}

export const ThemeProvvider = ({initialTheme, children}) => {
    const [theme, setTheme] = React.useState(getInitialTheme)

    const checkTheme = (existing) => {
        const root = window.document.documentElement
        const isDark = existing === "dark"

        root.classList.remove(isDark ? "light" : "dark")
        root.classList.add(existing)

        localStorage.setItem("current-theme", existing)

        if (initialTheme) {
            checkTheme(initialTheme)
        }

        React.useEffect(() => {
            checkTheme(initialTheme)
        }, [theme])
    }
}