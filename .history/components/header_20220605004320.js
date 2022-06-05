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
    
    const containerLinks = {
        visible: {
          opacity: 1,
          transition: {
            when: "beforeChildren",
            staggerChildren: .6,
          },
        },
        hidden: {
          opacity: 0,
          transition: {
            when: "afterChildren",
          },
        },
        exit: {
          opacity: 0,
          transition: {
            when: "afterChildren",
          },
        }
      }
    
      const childrenLinks = {
        visible: {
          x: 0,
          opacity: 1,
        },
        hidden: {
          x: "100vw",
          opacity: 0,
          transition : {
            type: "spring",
            mass: .7
          }
        },
        exit: {
          x: "100vw",
          opacity: 0,
          transition : {
            type: "spring",
            mass: .7
          }
        }
      }

    const links = [
        { id: 1, title: 'home', href: '/' },
        { id: 2, title: 'about', href: '/about' },
        { id: 3, title: 'contact', href: '/contact' }
    ]

    return (

    <header className="sticky bg-white top-0 max-w-7xl flex mx-auto justify-between z-10 h-24"
    // className={styles.header}
    >
        <motion.div className="uppercase border-transparent text-3xl font-medium cursor-pointer h-14 w-56 self-center flex flex-col justify-center"
            exit={{ y: -100}}
            initial={{ y: -100 }}
            animate={{ y: 0, transition: { delay: .75 } }}
            transition={{ type: 'spring', stiffness: 300}}
        >
            <Link href="/">
                <div className="flex w-full text-center align-center justify-center"
                // className={styles.logo}
                >
                    graquick
                    <svg className="relative top-1 left-3"
                        width={16}
                        height={28}
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

        <div className="w-96 font-medium uppercase flex flex-col justify-center text-md">
            <ul className="flex align-center justify-around h-12"
            // className={styles.links} 
            >
                {links.map((links, i) => (
                    <motion.div
                        key={links.id}
                        variants={containerLinks}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className={router.pathname === links.href ? "activePage" : "otherPage"}
                        // className={router.pathname === links.href ? styles.activePage : styles.otherPage}
                    >
                        <motion.div
                            variants={childrenLinks}
                        >
                            <Link href={links.href}>
                                <a></a>{links.title}
                            </Link>
                        </motion.div>
                    </motion.div>
                ))}
                <motion.div className="w-12 h-12 bg-black flex justify-center align-center text-lg rounded-full cursor-pointer"
                    whileHover={{ rotate: 360, transition: { duration: .3 } } }
                    whileTap={{ scale: .5, transition: { duration: .1 } }}
                // className={styles.liMoon}
                >
                    <Link href={''}>
                        <Icon className="h-full text-white" icon='bx-moon' />
                    </Link>
                </motion.div>
            </ul>

            <Example />
        </div>
    </header>
    )
}