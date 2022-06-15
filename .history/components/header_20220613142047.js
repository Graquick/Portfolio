import * as React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import styles from '../styles/Header.module.css'


import { Example } from './SideBar/example';

export default function Header(props) {

    const router = useRouter();
    
    const links = [
        { id: 1, title: 'home', href: '/', icon: 'ic:round-home' },
        { id: 2, title: 'projects', href: '/projects', icon: 'bxs:user' },
        { id: 3, title: 'contact', href: '/contact', icon: 'bxs:contact' }
    ]
    
    return (

    <header className="sticky top-0 z-10 flex justify-between py-4 mx-auto bg-white border-b-4 border-black xs:w-full h-36 max-w-7xl"
    // className={styles.header}
    >
        <motion.div className="self-center w-56 uppercase border-transparent cursor-pointer h-14"
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

        <div className="flex flex-col justify-center w-2/5 text-lg xl:w-48">
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