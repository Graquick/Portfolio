import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import styles from '../styles/Projects.module.css'

import Header from '../components/header';
import Footer from '../components/footer';

const About = () => {
  
    const container = {
        visible: {
          x: 0,
          opacity: 1,
          transition: {
            when: "beforeChildren",
            staggerChildren: .6,
          },
        },
        hidden: {
          x: "100vw",
          opacity: 0,
          transition: {
            when: "afterChildren",
          },
        },
        exit: {
          x: "100vw",
          opacity: 0,
          transition: {
            when: "afterChildren",
          },
        }
      }
    
      const children = {
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
        }
      }

      const aboutContent = [
        { id: 1, title: <div className="font-[Arial, Helvetica, sans-serif] text-[4rem] font-bold text-gray-200 cursor-pointer transition-all duration-150 ease-in-out relative hover:text-black group dark:text-zinc-600 dark:hover:text-zinc-300">  <svg
        className="absolute top-[2.5rem] -right-8 w-[26px] h-[26px] transition-all duration-500 ease-in-out group-hover:fill-black group-hover:stroke-black "
        width={26}
        height={24}
        viewBox="0 0 26 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <rect x="7.2" y="5.2" width="17.6" height="17.6" rx="1.8" strokeWidth="2.4" className="fill-white/80 stroke-gray-200 dark:fill-black/50 dark:stroke-zinc-600 dark:group-hover:fill-black dark:group-hover:stroke-zinc-300 group-hover:stroke-black group-hover:fill-white" />
        <rect
          className="fill-gray-200 stroke-gray-200 group-hover:fill-black group-hover:stroke-black dark:fill-zinc-600 dark:stroke-zinc-600 dark:group-hover:fill-zinc-300 dark:group-hover:stroke-zinc-300"
          x="1.2"
          y="1.2"
          width="17.6"
          height="17.6"
          rx="1.8"
          strokeWidth="2.4"
        />
        <circle cx={13} cy={7} r="2.5" className="stroke-white/80 fill-white/80 group-hover:fill-black group-hover:stroke-white dark:stroke-zinc-600 dark:fill-black/50 dark:group-hover:fill-zinc-300 dark:group-hover:stroke-black/50"/>
      </svg>snap</div>, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', src: 'snap-projects-mobile-hero', href: '/'},

        { id: 2, title: <div className="font-roboto text-[4rem] font-light text-gray-200 cursor-pointer transition-all duration-150 ease-in-out relative hover:text-black group dark:text-zinc-600 dark:hover:text-zinc-300">.apparell</div>, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', src: 'apparel-hero', href: '/'},

        { id: 3, title: <div className="w-[275px] flex gap-2 cursor-pointer transition-all duration-150 ease-in-out group mb-8"><div className="text-[1.5rem] font-bold uppercase bg-gray-200 text-white/70 w-16 h-16 flex items-end justify-end py-0 px-1 transition-all duration-500 ease-in-out dark:bg-zinc-600 dark:text-zinc-500 dark:group-hover:bg-zinc-300 dark:group-hover:text-zinc-600 group-hover:text-white group-hover:bg-black">bf</div><div className="text-[1.5rem] flex items-end justify-end font-bold uppercase text-gray-200 transition-all duration-500 ease-in-out dark:text-zinc-600 group-hover:text-black dark:group-hover:text-zinc-300">blog</div></div>, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', src: 'blog-hero', href: '/'},
        
        { id: 4, title: <div className="font-play text-[2.5rem] font-[600] relative text-gray-200 cursor-pointer capitalize transition-[color] duration-color-500 transition-[transform] duration-transform-150 ease-in-out hover:text-black dark:text-zinc-600 dark:hover:text-zinc-300 mb-8">Calco,inc.</div>, desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', src: 'calc-hero', href: '/'},
    ]

    const gridVariants = {
        offscreen: {
          y: 100,
          opacity: 0
        },
        onscreen: {
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1.4
          }
        }
      };

      const pageLoad = {
        exit: {
            y: -200
        },
        hidden: {
            y: -200
        },
        visible: {
            y: 0,
            transition: {
                delay: .75
            }
        }
      };
      
      const pageNotLoad = {
        exit: {
            y: -200
        },
        hidden: {
            y: 0
        },
        visible: {
            y: 0,
            transition: {
                delay: .75
            }
        }
      };

    return ( 
<div className="px-5 py-0 transition duration-500 bg-gray-200 dark:bg-neutral-800">
      <Head>
        <title>Projects - Brima Freeman</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header variants={pageNotLoad} />
      
      <motion.main // className="flex flex-col justify-center flex-1 max-w-6xl min-h-screen gap-64 px-0 py-16 m-auto align-center"
      className={styles.main}
      >
                {aboutContent.map((tags, i) => {
                    return (
                        <motion.div
                            className="grid"
                            key={tags.id}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: .8 }}
                        >

                            <motion.div className={i % 2 === 0 ? "flex flex-col p-8 mb-8 text-left shadow-md bg-white/80 backdrop-blur-sm dark:bg-black/50 w-[450px] h-[525px]" : "order-2 flex flex-col p-8 mb-8 text-left shadow-md bg-white/80 backdrop-blur-sm dark:bg-black/50 w-[450px] h-[525px]"}
                                variants={gridVariants}
                            >
                                <motion.div 
                                    variants={gridVariants}
                                >
                                    <h1 className="mb-4 w-fit">{tags.title}</h1>
                                    <p className="mb-8 text-[1.425rem] leading-relaxed">{tags.desc}</p>
                                </motion.div>

                                <motion.div className="text-[1.5rem] uppercase h-[60px] w-[210px] p-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-black after:w-[0%] after:h-[2px] after:flex after:justify-end after:items-end after:transition-all after:duration-150 after:ease-in-out hover:after:w-full dark:text-gray-200 dark:after:bg-gray-200"
                                    variants={gridVariants}
                                    whileHover={{ x: 10, transition: { duration: .1 }}}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Link href={tags.href}>
                                        learn more &#x2197;
                                    </Link>
                                </motion.div>
                            </motion.div>


                            <motion.div className={i % 2 === 0 ? "overflow-hidden shadow-md w-[450px] h-[675px] flex flex-col justify-center" : "imageReverse"}
                                variants={gridVariants}
                            >
                                <Image src={`/${tags.src}.PNG`}
                                alt="something should show here"
                                width={450} height={675} layout="responsive"
                                blurDataURL='`${tags.src}.PNG`'
                                placeholder='blur' />
                            </motion.div>
                        </motion.div>
                    )
                })}
      </motion.main>

      <Footer />
    </div>
     );
}
 
export default About;