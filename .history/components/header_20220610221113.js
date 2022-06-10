import * as React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import styles from '../styles/Header.module.css'


import { Example } from './SideBar/example';

export default function Header(props) {

    const router = useRouter();

    const linksVariants = {
        open: {
            opacity: 1,
            transition: {
              opacity: { stiffness: 1000, velocity: -100 },
              staggerChildren: 0.07, delayChildren: 0.2
            },
            transitionEnd: {
              display: 'flex',
              visibility: 'visible'
            }
          },
          closed: {
            opacity: 0,
            transition: {
              opacity: { stiffness: 1000 },
              staggerChildren: 0.05, staggerDirection: -1
            },
            transitionEnd: {
              display: 'none',
              visibility: 'hidden'
            }
          }
    }

    const variants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
              y: { stiffness: 1000, velocity: -100 }
            },
            display: 'flex',
            visibility: 'visible'
          },
          closed: {
            y: 50,
            opacity: 0,
            transition: {
              y: { stiffness: 1000 }
            },
            transitionEnd: {
              display: 'none',
              visibility: 'hidden'
            }
          }
    }
    
    const links = [
        { id: 1, title: 'home', href: '/', icon: 'ic:round-home' },
        { id: 2, title: 'projects', href: '/projects', icon: 'bxs:user' },
        { id: 3, title: 'contact', href: '/contact', icon: 'bxs:contact' }
    ]
    
    return (

    <header className="sticky top-0 z-10 flex justify-between h-24 mx-auto bg-white shadow-sm max-w-7xl rounded-xl"
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

        <div className="flex flex-col justify-center w-2/5 text-lg uppercase xl:w-48">
            <ul className="links"
            // className={styles.links} 
            >
                {links.map((links, i) => (
                    <motion.div
                        key={links.id}
                        variants={linksVariants}
                        initial="closed"
                        animate="open"
                        className={router.pathname === links.href ? "activePage" : "otherPage"}
                        // className={router.pathname === links.href ? styles.activePage : styles.otherPage}
                    >
                        <motion.div
                            variants={variants}
                        >
                            <Link href={links.href}>
                                {links.title}
                            </Link>
                        </motion.div>
                        
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