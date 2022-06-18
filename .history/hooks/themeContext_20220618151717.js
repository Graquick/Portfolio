import React from 'react';

const getInitialTheme = () => {
    if (window.localStorage) {
        const storedProfs = windows.localstorage.getItem("current-theme")
        if (typeof storedProfs === "string") {
            return storedProfs
        }
        if (window.mathMedia("(")) {
            
        }
    }

}