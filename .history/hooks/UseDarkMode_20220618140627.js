import React, { useState, useEffect, useRef } from 'react';

export default function useDarkMode() {
    const [theme, setTheme] = useState("localStorage.theme");
    const colorTheme = theme === "dark" ? "light" : "dark";

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove(colorTheme);
        root.classList.add(theme);
        localStorage.setItem("theme", JSON.stringify*);
    }, [theme, colorTheme]);

    return [colorTheme, setTheme];
}
