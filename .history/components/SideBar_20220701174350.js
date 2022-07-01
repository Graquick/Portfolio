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

  return mounted && (
    <>  

        <AnimatePresence>
            <motion.div className="absolute top-[1.5rem] right-[1rem] z-20 text-black cursor-pointer dark:text-white" onClick={() => setOpen(!open)}
                variants={variantsIcon}
                animate={open ? "opened" : "closed"}
                exit="closed"
            >
                <Icon icon={open ? "ei:close" : "clarity:bars-line"} className={open ? "text-[2.5rem]" : "text-[2rem]"} />
            </motion.div>

            <motion.div className="bg-neutral-100/80 backdrop-blur-lg h-[850px] w-[90%] absolute top-0 -right-12  z-10 flex flex-col justify-center items-center text-black dark:bg-neutral-800/80 dark:text-white"
                initial={false}
                variants={variantsMenu}
                animate={open ? "opened" : "closed"}
                exit="closed"
            >
                <ul className="absolute top-24 left-0 flex flex-col gap-8 items-start text-left w-[250px] h-[650px] text-xl pl-12">
                            <li className="flex flex-col items-start cursor-pointer text-gray-500 font-semibold justify-between transition-all ease-in-out duration-300 relative dark:text-white">
                            <Menu>
                                {({open}) => (
                                <>
                                    <Switch checked={enabled} onChange={setEnabled} as={motion.div} whileHover={{ scale: 1.15, x: -10, y: -5 }} className={`${enabled ? 'text-violet-400 dark:text-yellow-400' : 'text-black dark:text-white'} flex items-center justify-start gap-4 focus:outline-none`}>
                                    Features <Icon icon="akar-icons:chevron-down"  className={`${enabled ? 'rotate-180' : 'rotate-0'} focus:outline-none transition-all duration-150 ease-in-out`}/>
                                    </Switch>
                                    <AnimatePresence exitBeforeEnter>
                                        {enabled && (
                                            <>
                                                <Menu.Items static 
                                                className="flex flex-col justify-center text-black h-[13rem] focus:outline-none w-56 mt-2 dark:text-white"
                                                as={motion.div}
                                                variants={variantsLinks}
                                                initial="closed"
                                                animate="opened"
                                                exit="exit"
                                                transition={spring}
                                                
                                                >
                                                <Menu.Item as={motion.div} whileHover={{ scale: 1.1 }} whileTap={{ scale: .9}} transition={spring}>
                                                    {({ active }) => (
                                                        <MyLink href="#"
                                                        className={`${
                                                            active ? 'bg-neutral-200 dark:bg-neutral-500' : 'dark:text-te'
                                                        } focus:outline-none pl-12 whitespace-nowrap py-3 px-5 flex gap-3 justify-start items-center w-full`}
                                                        >
                                                        <Icon icon="uil:clipboard-notes" /> Features
                                                        </MyLink>
                                                    )}
                                                </Menu.Item>
                                                
                                                <Menu.Item as={motion.div} whileHover={{ scale: 1.1 }} whileTap={{ scale: .9}} transition={spring}>
                                                    {({ active }) => (
                                                        <MyLink href="#"
                                                        className={`${
                                                            active ? 'bg-neutral-200 dark:bg-neutral-500' : 'dark:text-te'
                                                        } focus:outline-none pl-12 whitespace-nowrap py-3 px-5 flex gap-3 justify-start items-center w-full`}
                                                        >
                                                        <Icon icon="uil:calendar-alt" /> Calendar
                                                        </MyLink>
                                                    )}
                                                </Menu.Item>
                                                
                                                <Menu.Item as={motion.div} whileHover={{ scale: 1.1 }} whileTap={{ scale: .9}} transition={spring}>
                                                    {({ active }) => (
                                                        <MyLink href="#"
                                                        className={`${
                                                            active ? 'bg-neutral-200 dark:bg-neutral-500' : 'dark:text-white'
                                                        } focus:outline-none pl-12 whitespace-nowrap py-3 px-5 flex gap-3 justify-start items-center w-full`}
                                                        >
                                                        <Icon icon="uil:lightbulb-alt" /> Reminders
                                                        </MyLink>
                                                    )}
                                                </Menu.Item>
                                                
                                                <Menu.Item as={motion.div} whileHover={{ scale: 1.1 }} whileTap={{ scale: .9}} transition={spring}>
                                                    {({ active }) => (
                                                        <MyLink href="#"
                                                        className={`${
                                                            active ? 'bg-neutral-200 dark:bg-neutral-500' : 'dark:text-te'
                                                        } focus:outline-none pl-12 whitespace-nowrap py-3 px-5 flex gap-3 justify-start items-center w-full`}
                                                        >
                                                        <Icon icon="uil:clock-three" /> Planning
                                                        </MyLink>
                                                    )}
                                                </Menu.Item>
                                                </Menu.Items> 
                                            </>
                                        )}
                                    </AnimatePresence>
                                </>
                                )}
                            </Menu>
                            </li>


                            <li className="flex flex-col cursor-pointer text-gray-500 font-semibold justify-between  transition-all ease-in-out duration-300 relative dark:text-white">
                            <Menu>
                                {({open}) => (
                                    <>
                                    <Switch checked={enabledTwo} onChange={setEnabledTwo} as={motion.div} whileHover={{ scale: 1.15, x: -10, y: -5 }} className={`${enabledTwo ? 'text-blue-400 dark:text-purple-400' : 'text-black dark:text-white'} flex items-center justify-start gap-4 focus:outline-none`}>
                                        Company <Icon icon="akar-icons:chevron-down"  className={`${enabledTwo ? 'rotate-180' : 'rotate-0'} focus:outline-none transition-all duration-150 ease-in-out`}/>
                                    </Switch>
                                    <AnimatePresence exitBeforeEnter>
                                        {enabledTwo && (
                                            <>
                                                <Menu.Items static 
                                                    className="flex flex-col justify-center text-black h-[10rem] mt-2 focus:outline-none w-56 dark:text-white"
                                                    as={motion.div}
                                                    variants={variantsLinks}
                                                    initial="closed"
                                                    animate="opened"
                                                    exit="exit"
                                                    transition={spring}
                                                    
                                                >
                                                    <Menu.Item as={motion.div} whileHover={{ scale: 1.1 }} whileTap={{ scale: .9}} transition={spring} >
                                                        {({ active }) => (
                                                        <MyLink href="#"
                                                            className={`${
                                                            active ? 'bg-neutral-200 dark:bg-neutral-500' : 'dark:text-white'
                                                            } pl-12 whitespace-nowrap py-3 px-5 flex gap-3 justify-start items-center w-full`}
                                                        >
                                                            History
                                                        </MyLink>
                                                        )}
                                                    </Menu.Item>
                                                    
                                                    <Menu.Item as={motion.div} whileHover={{ scale: 1.1 }} whileTap={{ scale: .9}} transition={spring} >
                                                        {({ active }) => (
                                                        <MyLink href="#"
                                                            className={`${
                                                            active ? 'bg-neutral-200 dark:bg-neutral-500' : 'dark:text-white'
                                                            } focus:outline-none pl-12 whitespace-nowrap py-3 px-5 flex gap-3 justify-start items-center w-full`}
                                                        >
                                                            Our Team
                                                        </MyLink>
                                                        )}
                                                    </Menu.Item>
                                                    
                                                    <Menu.Item as={motion.div} whileHover={{ scale: 1.1 }} whileTap={{ scale: .9}} transition={spring} >
                                                        {({ active }) => (
                                                        <MyLink href="#"
                                                            className={`${
                                                            active ? 'bg-neutral-200 dark:bg-neutral-500' : 'dark:text-white'
                                                            } focus:outline-none pl-12 whitespace-nowrap py-3 px-5 flex gap-3 justify-start items-center w-full`}
                                                        >
                                                            Blog
                                                        </MyLink>
                                                        )}
                                                    </Menu.Item>
                                                    
                                                </Menu.Items>
                                            </>
                                        )}
                                    </AnimatePresence>
                                    </>
                                )}
                            </Menu>
                            </li>


                            <li className="flex items-center justify-center font-semibold text-black transition-all duration-300 ease-in-out cursor-pointer w-fit dark:text-white">Careers</li>
                            <li className="flex items-center justify-center font-semibold text-black transition-all duration-300 ease-in-out cursor-pointer w-fit dark:text-white">About</li>
                </ul>

                <div className="absolute bottom-16 left-16 flex flex-col items-center justify-center gap-4">
                    <motion.div className="cursor-pointer w-[170px] h-fit font-epilogue text-[18px] font-semibold no-underline flex items-center justify-center text-center text-black dark:text-white"
                        whileTap={{ x: 0, scale: 0.5 }}
                    >
                        Login
                    </motion.div>

                    <motion.div className="cursor-pointer w-[170px] h-[55px] border border-black rounded-[15px] font-epilogue text-[18px] font-semibold no-underline flex items-center justify-center text-center text-black hover:bg-black hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black transition-all duration-150 ease-out"
                        whileTap={{ x: 0, scale: 0.5 }}
                    >
                        Register
                    </motion.div>
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