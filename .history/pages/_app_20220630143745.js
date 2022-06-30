import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from 'next-themes'
import { useRouter } from 'next/router'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const timeoutRef = useRef();

  const clearTimer = useCallback(
    () => clearTimeout(timeoutRef.current),
    []
  );

  // useEffect(() => {
  //   if (timeoutRef.current) clearTimer();

  //   timeoutRef.current = setTimeout(() => {
  //     window.scrollTo(0, 0);
  //   }, 10);

  //   return () => {
  //     clearTimer();
  //   };
  // }, [clearTimer]);

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);
  

  return (
    <AnimatePresence>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </AnimatePresence>
  )
}

export default MyApp