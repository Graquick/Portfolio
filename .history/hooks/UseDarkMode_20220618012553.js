import React, { useState, useEffect, useRef } from 'react';

export default function useDarkMode() {
    const [theme, setTheme] = useState(theme);
    const colorTheme = theme === "dark" ? "light" : "dark";

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove(colorTheme);
        root.classList.add(theme);
        if (typeof window !== 'undefined') {
            console.log('You are on the browser')
            // 👉️ can use localStorage here
          } else {
            console.log('You are on the server')
            // 👉️ can't use localStorage
          }
    }, [theme, colorTheme]);

    return [colorTheme, setTheme];
}
