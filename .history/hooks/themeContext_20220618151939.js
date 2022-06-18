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

export const ThemeProvvider = 