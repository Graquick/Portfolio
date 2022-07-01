import React, { useState, useEffect, useRef, forwardRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Disclosure } from '@headlessui/react'
import { Menu } from '@headlessui/react'
import { Switch } from '@headlessui/react'

import useMounted from '../components/useMounted.js'

const MyLink = forwardRef((props, ref) => {
    let { href, children, ...rest } = props
    return (
      <Link href={href}>
        <a ref={ref} {...rest}>
          {children}
        </a>
      </Link>
    )
})

MyLink.displayName = 'MyLink';

function SideBar() {
    const [open, setOpen] = useState(false)
    const [enabled, setEnabled] = useState(false)
    const [enabledTwo, setEnabledTwo] = useState(false)
  
    const mounted = useMounted()

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
            y: 0,
            display: "block"
        },
        closed: {
            y: -1000,
            transitionEnd: {
                display: "none"
            }
        }
    }

    const variantsLinks = {
        opened: {
            y: 0,
            display: "block"
        },
        closed: {
            y: 100,
            transitionEnd: {
                display: "none"
            }
        },
        exit: {
            y: 100,
            opacity: 0,
            transition: {
                duration: .15
            }
        }
    }

    const links = [
        { id: 1, title: 'home', href: '/', icon: 'ic:round-home' },
        { id: 2, title: 'projects', href: '/projects', icon: 'bxs:user' },
        { id: 3, title: 'contact', href: '/contact', icon: 'bxs:contact' }
    ]
  return mounted && (
    <>  

        <AnimatePresence>
            <motion.div className="hidden z-20 text-black cursor-pointer text-[2rem] dark:text-white xl:block" onClick={() => setOpen(!open)}
                variants={variantsIcon}
                animate={open ? "opened" : "closed"}
                exit="closed"
            >
                <Icon icon={open ? "ei:close" : "clarity:bars-line"} />
            </motion.div>

            <motion.div className="bg-neutral-100/80 backdrop-blur-lg h-[150px] w-[90%] absolute top-12 left-0 right-0 m-auto z-10 flex flex-col justify-center items-center text-black dark:bg-neutral-800/80 dark:text-white"
                initial={false}
                variants={variantsMenu}
                animate={open ? "opened" : "closed"}
                exit="closed"
            >
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