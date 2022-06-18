import React, { useState, useEffect, useRef } from 'react';

export default function useDarkMode() {
    const [theme, setTheme] = useState("theme");
    const colorTheme = theme === "dark" ? "light" : "dark";

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove(colorTheme);
        root.classList.add(theme);

        if (window.localStorage) {
            const storedPrefs = windows.localStorage
        }
    }, [theme, colorTheme]);
    return [colorTheme, setTheme];
}
