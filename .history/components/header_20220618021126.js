import * as React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/Header.module.css'

import useDarkMode from '../hooks/useDarkMode'

import { Example } from './SideBar/example';

export default function Header(props) {
    
    const [colorTheme, setTheme] = useDarkMode();

    const router = useRouter();
    
    const links = [
        { id: 1, title: 'home', href: '/', icon: 'ic:round-home' },
        { id: 2, title: 'projects', href: '/projects', icon: 'bxs:user' },
        { id: 3, title: 'contact', href: '/contact', icon: 'bxs:contact' }
    ]
    
    return (

    <header className="shadow-sm backdrop-blur-sm sticky transition duration-500 delay-300 top-0 z-10 flex justify-between w-[90%] h-24 px-8 py-4 m-auto max-w-[1400px] bg-white/90 dark:bg-neutral-700"
        // className={styles.header}
    >
        <AnimatePresence>
            <motion.div // className="self-center w-56 uppercase border-transparent cursor-pointer h-14"
                className={styles.left}
                variants={props.variants}
                exit="exit"
                initial="hidden"
                animate="visible"
                transition={{ type: 'spring', stiffness: 300}}
                whileHover={{ x: 10 }}
            >
                <Link href="/">
                    <div   className="flex items-end justify-end w-16 h-16 px-1 py-0 text-lg font-bold uppercase transition duration-500 delay-700 bg-gray-200 shadow-sm dark:bg-black dark:text-white"
                        // className={styles.logo}
                    >
                        bf
                    </div>
                </Link>
            </motion.div>
        </AnimatePresence>

        <div className={styles.middle}>
            <ul className="flex items-center justify-around h-full text-xl font-medium uppercase transition duration-500 delay-300 dark:text-white"
                // className={styles.links} 
            >
                {links.map((links, i) => (
                    <motion.div
                        key={links.id}
                        className={router.pathname === links.href ? "activePage" : "otherPage"}
                        // className={router.pathname === links.href ? styles.activePage : styles.otherPage}
                    >
                        <Link href={links.href}>
                            {links.title}
                        </Link>
                        
                    </motion.div>
                ))}
            </ul>
        </div>
        
        <div className={styles.right} onClick={() => setTheme(colorTheme)}>
            {colorTheme === "light" ?
            (
                <div   className="w-[50px] h-[50px] rounded-full flex justify-center items-center text-2xl bg-gray-200 cursor-pointer transition-all duration-200 ease hover:rotate-[360deg]"
                    // className={styles.liMoon}
                >
                    <Icon icon="ri:sun-foggy-fill" />
                </div>
                )    :
            (
                <div className={styles.liMoon}>
                    <Icon icon="ri:moon-foggy-fill" />
                </div>
            )
        }

            <Example />
        </div>
    </header>
    )
}