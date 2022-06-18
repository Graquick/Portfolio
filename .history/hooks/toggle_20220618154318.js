import React, { useState, useEffect, useRef } from 'react';
import { ThemeContext } from "./themeContext"

const Toggle() {

    const { theme, setTheme } = React.useContext(ThemeContext)
    return theme === "dark" ? (
        <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
            className="w-[50px] h-[50px] rounded-full flex justify-center items-center text-2xl bg-gray-200 cursor-pointer transition-all duration-300 ease hover:rotate-[360deg] active:scale-50 xl:mr-20 dark:bg-neutral-800 dark:text-white"
        // className={styles.liMoon}
        >
            <Icon icon="ri:sun-foggy-fill" />
        </div>
    ) : (
        <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
            className="w-[50px] h-[50px] rounded-full flex justify-center items-center text-2xl bg-gray-200 cursor-pointer transition-all duration-300 ease hover:rotate-[360deg] active:scale-50 xl:mr-20 dark:bg-neutral-800 dark:text-white"
        // className={styles.liMoon}
        >
            <Icon icon="ri:moon-foggy-fill" />
        </div>
    )
}

