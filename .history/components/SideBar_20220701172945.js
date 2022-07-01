import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

import { useTheme } from 'next-themes';

function SideBar() {
    const [open, setOpen] = useState(false);

    const variantsIcon = {
        opened: {
            rotate: 90
        },
        closed: {
            rotate: 0
        }
    }

    const variantsMenu = {
        opened: {
            x: 0,
            display: "block"
        },
        closed: {
            x: 350,
            transitionEnd: {
                display: "none"
            }
        }
    }

    const links = [
        { id: 1, title: 'home', href: '/', icon: 'ic:round-home' },
        { id: 2, title: 'projects', href: '/projects', icon: 'bxs:user' },
        { id: 3, title: 'contact', href: '/contact', icon: 'bxs:contact' }
    ]

    const router = useRouter();

  return (
    <>
        <AnimatePresence>
            <motion.div className="text-[2rem] hidden xl:block"
                variants={variantsIcon}
                animate={open ? "opened" : "closed"}
                exit="closed"
                transition={spring}
                onClick={() => setOpen(!open)}
            >
                <Icon icon={open ? "ei:close" : "clarity:bars-line"} />
            </motion.div>

            <motion.div className=""
                variants={variantsMenu}
                animate={open ? "opened" : "closed"}
                exit="closed"
                transition={spring}
                onClick={() => setOpen(!open)}
            >
                <div>
                    <ul className="absolute left-0 botflex flex-col items-center justify-around h-full text-xl uppercase transition duration-500 dark:text-white"
                        // className={styles.links} 
                    >
                        {links.map((links, i) => (
                            <div key={links}>
                                        <motion.div
                                            key={links.id}
                                            // className={router.pathname === links.href ? "font-medium p-4 relative border-b-2" : "font-medium p-4 relative" }
                                            className={router.pathname === links.href ? "font-medium p-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-black after:w-1/4 after:h-[3px] after:transition-all after:duration-150 after:ease-in-out hover:after:w-full dark:text-gray-200 dark:after:bg-gray-200" : "dark:text-gray-200 dark:after:bg-gray-200 font-medium p-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-black after:w-[0%] after:h-[3px] after:transition-all after:duration-150 after:ease-in-out hover:after:w-full"}
                                            // className={router.pathname === links.href ? styles.activePage : styles.otherPage}
                                        >
                                            <Link href={links.href}>
                                                {links.title}
                                            </Link>
                                            
                                        </motion.div>
                            </div>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </AnimatePresence>
    </>
  )
}

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };

export default SideBar