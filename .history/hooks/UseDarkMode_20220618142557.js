import React, { useState, useEffect, useRef } from 'react';

export default function useDarkMode() {
    const [theme, setTheme] = useState("theme");
    const colorTheme = theme === "dark" ? "light" : "dark";

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove(colorTheme);
        root.classList.add(theme);

        if (window.localStorage) {
            const storedPrefs = windows.localstorage.getItem("current-theme");
            if (typeof storedPrefs === "string") {
                return storedPrefs
            }
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return "dark";
            }
        }
        return "light"
    }, [theme, colorTheme]);
    return [colorTheme, setTheme];
}
