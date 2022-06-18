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

    <header className="sticky top-0 z-10 flex justify-between w-[90%] h-24 px-8 py-4 m-auto max-w-[1400px] bg-neutral-50 opacity-85 dark:bg-neutral-900"
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
                    <div  // className="flex justify-end w-20 h-12 ml-4 text-xs font-bold shadow-md align-end"
                        className={styles.logo}
                    >
                        bf
                    </div>
                </Link>
            </motion.div>
        </AnimatePresence>

        <div className={styles.middle}>
            <ul
            className={styles.links} 
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
        
        <div className={styles.right}>
            <div className={styles.liMoon}>

                }
            </div>

            <Example />
        </div>
    </header>
    )
}