import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/Header.module.css';
import { useTheme } from 'next-themes';

function Footer() {

  const [show, setShow] = useState(true)

  const controlFoot = () => {
    if (window.scrollY = window + 100) {
      setShow(false)
  } else {
      setShow(true)
  }
  }

  useEffect(() => {
    window.addEventListener("scroll",
      controlFoot
    )
    return () => {
      window.removeEventListener("scroll",
          controlFoot
      )
    }
  }, [])

  return (
    <div>
      <footer className={`${show ? "max-w-[1400px] w-[90%] m-auto bg-white/90 backdrop-blur-sm shadow-sm flex py-6 px-0 justify-center text-md uppercase fixed left-0 right-0 z-20 bottom-0 dark:bg-black/80 dark:text-gray-300" : "max-w-[1400px] w-[90%] m-auto bg-green-400 backdrop-blur-sm shadow-sm flex py-6 px-0 justify-center text-md uppercase fixed left-0 right-0 z-20 bottom-0 dark:bg-black/80 dark:text-gray-300"}`} 
      // className="max-w-[1400px] w-[90%] m-auto bg-white/90 backdrop-blur-sm shadow-sm flex py-6 px-0 justify-center text-md uppercase fixed left-0 right-0 z-20 bottom-0 dark:bg-black/80 dark:text-gray-300"
       // className="footer"
      >
          <Link className="flex justify-center flex-grow align-center"
            href="/"
            target="_blank" rel="noopener noreferrer"
          >
              <a>
                Copyright{' '}
                <span className="h-4 ml-2"
                // className={styles.logo}
                >
                &copy; Brima Freeman 2022 {' '}
                </span>
                All rights reserved
              </a>
            </Link>
        </footer>
    </div>
  )
}

export default Footer