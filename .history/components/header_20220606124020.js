import * as React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import styles from '../styles/Header.module.css'


import { Example } from './SideBar/example';

export default function Header() {

    const router = useRouter()

    // const springS = {
    //     type: 'spring',
    //     stiffness: 100,
    //     damping: 30
    // }
    
    // const springM = {
    //     type: 'spring',
    //     stiffness: 700,
    //     damping: 10
    // }
    
    
    const links = [
        { id: 1, title: 'home', href: '/' },
        { id: 2, title: 'gallery', href: '/gallery' },
        { id: 3, title: 'contact', href: '/contact' }
    ]

    return (

    <header className="sticky bg-white top-0 max-w-7xl flex mx-auto justify-between z-10 h-24 shadow-md rounded-xl"
    // className={styles.header}
    >
        <motion.div className="uppercase border-transparent cursor-pointer h-14 w-56 self-center"
            exit={{ y: -100}}
            initial={{ y: -100 }}
            animate={{ y: 0, transition: { delay: .75 } }}
            transition={{ type: 'spring', stiffness: 300}}
        >
            <Link href="/">
                <div  // className="flex w-20 h-12 ml-4 text-xs align-end justify-end font-bold shadow-md"
                    className={styles.logo}
                    whileHover={{ x: 10 }}
                >
                    bf
                </div>
            </Link>
        </motion.div>

        <div className="w-2/5 uppercase flex flex-col justify-center text-xl xl:w-48">
            <ul className="links"
            // className={styles.links} 
            >
                {links.map((links, i) => (
                    <motion.div
                        key={links.id}
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0, transition: {duration: 0.2, delay: i * 0.25}}}
                        className={router.pathname === links.href ? "activePage" : "otherPage"}
                        // className={router.pathname === links.href ? styles.activePage : styles.otherPage}
                    >
                        <Link href={links.href}>
                            {links.title}
                        </Link>
                    </motion.div>
                ))}
                <div className="liMoon"
                // className={styles.liMoon}
                >
                    <Link href={''}>
                        <Icon icon='bx-moon' />
                    </Link>
                </div>
            </ul>

            <Example />
        </div>
    </header>
    )
}