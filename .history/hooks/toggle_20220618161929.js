import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import { ThemeProvider } from './themeContext'
import { ThemeContext } from './themeContext';

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
        <ThemeProvider>
            {theme === 'dark' ? (
                <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 text-lg text-gray-500 bg-white rounded-full shadow-none outline-none cursor-pointer dark:text-gray-400 focus:outline-none ring-transparent"
                >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    ></path>
                </svg>
                </button>
            ) : (
                <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 text-lg text-gray-500 bg-white rounded-full shadow-none outline-none cursor-pointer dark:text-gray-400 focus:outline-none ring-transparent"
                >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    ></path>
                </svg>
                </button>
            )}
        </Theme>
    </div>
  );
};

export default Toggle;