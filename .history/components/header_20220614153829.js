import * as React from 'react'
import { useRouter, useLocation } from 'next/router'
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import styles from '../styles/Header.module.css'


import { Example } from './SideBar/example';

export default function Header(props) {

    const router = useRouter();
    const 
    
    const links = [
        { id: 1, title: 'home', href: '/', icon: 'ic:round-home' },
        { id: 2, title: 'projects', href: '/projects', icon: 'bxs:user' },
        { id: 3, title: 'contact', href: '/contact', icon: 'bxs:contact' }
    ]
    
    return (

    <header // className="sticky top-0 z-10 flex justify-between py-4 mx-auto border-b-4 border-black sm:w-full h-36 max-w-7xl"
     className={styles.header}
    >
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

        <div className={styles.middle}>
            <ul
            className={styles.links} 
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
            </ul>
        </div>
        
        <div className={styles.right}>
            <div className={styles.liMoon}>
                <Link href={''}>
                    <Icon icon='ri:moon-foggy-fill' />
                </Link>
            </div>

            <Example />
        </div>
    </header>
    )
}