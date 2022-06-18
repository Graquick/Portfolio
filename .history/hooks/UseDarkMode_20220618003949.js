import React, { useState, useEffect, useRef } from 'react';

export default function useDarkMode() {
    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.add("dark");
    }, []);
}
