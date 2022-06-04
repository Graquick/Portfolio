import * as React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';


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
        { id: 2, title: 'about', href: '/about' },
        { id: 3, title: 'contact', href: '/contact' }
    ]

    return (

    <header className="sticky "
    // className={styles.header}
    >
        <motion.div
            exit={{ y: -100}}
            initial={{ y: -100 }}
            animate={{ y: 0, transition: { delay: .25 } }}
            transition={{ type: 'spring', stiffness: 300}}
        >
            <Link href="/">
                <div
                // className={styles.logo}
                >
                    graquick
                    <svg
                        width={11}
                        height={22}
                        viewBox="0 0 11 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                    <path d="M4.08709 22.0001C4.25375 19.3334 3.68709 14.8 0.0870855 16C0.0870855 12 7.38709 15.8 2.58709 11C-2.21291 6.2 0.587067 1.5 3.58707 0L4.08709 3L2.58709 6C1.08708 10 9.5646 9.77337 10.5871 12.5C12.0871 16.5 6.42042 20.6667 4.08709 22.0001Z" fill="black"
                    />
                    </svg>
                </div>
            </Link>
        </motion.div>

        <ul
        // className={styles.links} 
        >
            {links.map((links, i) => (
                <motion.div
                    key={links.id}
                    initial={{ opacity: 0, translateY: -100 }}
                    animate={{ opacity: 1, translateY: 0, transition: {duration: 0.2, delay: i * 0.25}}}
                    // className={router.pathname === links.href ? styles.activePage : styles.otherPage}
                >
                    <Link href={links.href}>
                        {links.title}
                    </Link>
                </motion.div>
            ))}
            <div
            // className={styles.liMoon}
            >
                <Link href={''}>
                    <Icon icon='bx-moon' />
                </Link>
            </div>
        </ul>

        <Example />
    </header>
    )
}