import React, { useState, useEffect, useRef } from 'react';

export default function useDarkMode() {
    const [theme, setTheme] = useState('dark')
    co

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.add(theme);
    }, [theme]);

    return [setTheme];
}
