import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Icon } from '@iconify/react';
import styles from '../styles/Projects.module.css'

import useMounted from '../components/useMounted.js'
import Header from '../components/header';
import Footer from '../components/footer';

const About = () => {
   const mounted = useMounted()

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  
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
        { id: 1, title: <div className="font-[Arial, Helvetica, sans-serif] text-[4rem] font-bold text-black cursor-default transition-all duration-150 ease-in-out relative group dark:text-white xl:text-[3rem]">  <svg
        className="absolute top-[2.5rem] -right-8 w-[26px] h-[26px] transition-all duration-500 ease-in-out group-hover:fill-black group-hover:stroke-black xl:top-[1.75rem]"
        width={26}
        height={24}
        viewBox="0 0 26 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <rect x="7.2" y="5.2" width="17.6" height="17.6" rx="1.8" strokeWidth="2.4" className="fill-white stroke-black dark:fill-black dark:stroke-white" />
        <rect
          className="fill-black stroke-black dark:fill-white dark:stroke-white"
          x="1.2"
          y="1.2"
          width="17.6"
          height="17.6"
          rx="1.8"
          strokeWidth="2.4"
        />
        <circle cx={13} cy={7} r="2.5" className="stroke-white fill-black dark:stroke-black/50 dark:fill-white"/>
      </svg>snap</div>, desc: <p>Snap tested my ability to create dropdown navigation menus, a common pattern on larger sites. It also provided some nice basic layout challenges.<div className="flex flex-wrap w-full gap-[.6rem] mt-8 h-fit xl:gap-2 xl:mt-[1.6rem]"><span className="py-2 px-3 text-black shadow-md rounded-md font-bold cursor-default text-[1.1rem] w-fit flex items-center justify-center gap-2 xl:text-[.9rem] xl:py-1 bg-white dark:shadow-neutral-700 ">Figma <Icon icon="logos:figma" className="text-[1.2rem] xl:text-[.9rem]"/></span><span className="py-2 px-3 text-black shadow-md rounded-md cursor-default w-fit flex items-center justify-center gap-1 text-[2rem] xl:text-[1.45rem] xl:py-1 bg-white dark:shadow-neutral-700 "><Icon icon="logos:nextjs" /></span><span className="py-2 px-3 text-black shadow-md rounded-md font-medium cursor-default text-[1.2rem] w-fit flex items-center justify-center gap-1 xl:text-[.9rem] xl:py-1 bg-white dark:shadow-neutral-700 ">React<Icon icon="akar-icons:react-fill" className="text-blue-400"/></span><span className="py-2 px-3 text-black shadow-md rounded-md cursor-default w-fit flex items-center justify-center gap-1 text-[1.1rem] font-medium font-roboto xl:text-[.9rem] xl:py-1 bg-white dark:shadow-neutral-700 "><Icon icon="bxl:tailwind-css" className="text-blue-400" />tailwindcss</span><span className="py-2 px-3 text-black shadow-md rounded-md cursor-default text-[1.2rem] w-fit flex items-center justify-center gap-1 xl:text-[.9rem] xl:py-1 bg-white dark:shadow-neutral-700 "><Icon icon="logos:headlessui" /></span><span className="py-2 px-3 text-black shadow-md rounded-md cursor-default w-fit flex items-center justify-center gap-1 text-[1.2rem] font-extrabold tracking-tighter xl:text-[.9rem] xl:py-1 bg-white dark:shadow-neutral-700 ">Framer Motion<Icon icon="logos:framer"/></span></div></p>, src: 'snap-projects-mobile-hero', srcdark: 'snap-projects-mobile-hero-dark', href: 'https://brimasnap.vercel.app/', hrefp: 'live demo'},

        { id: 2, title: <div className="font-roboto text-[4rem] font-light text-black cursor-default transition-all duration-150 ease-in-out relative group xl:text-[2.5rem] lg:mt-2 dark:text-white">.apparell</div>, desc: <p>This Ecommerce website has a lightbox product gallery and cart functionality! While building this website, I got to use a lot of different libraries!<div className="flex flex-wrap w-full gap-[.6rem] mt-8 h-fit xl:gap-2 xl:mt-[1.6rem]"><span className="py-2 px-3 text-black shadow-md rounded-md font-bold cursor-default text-[1.1rem] w-fit flex items-center justify-center gap-2 xl:text-[.9rem] xl:py-1 bg-white dark:shadow-neutral-700 ">Figma <Icon icon="logos:figma" className="text-[1.2rem] xl:text-[.9rem]"/></span><span className="py-2 px-3 text-black shadow-md rounded-md cursor-default w-fit flex items-center justify-center gap-1 text-[2rem] xl:text-[1.45rem] xl:py-1 bg-white dark:shadow-neutral-700 "><Icon icon="logos:nextjs" /></span><span className="py-2 px-3 text-black shadow-md rounded-md font-medium cursor-default text-[1.2rem] w-fit flex items-center justify-center gap-1 xl:text-[.9rem] xl:py-1 bg-white dark:shadow-neutral-700 ">React<Icon icon="akar-icons:react-fill" className="text-blue-400"/></span><span className="py-2 px-3 text-black shadow-md rounded-md cursor-default w-fit flex items-center justify-center gap-1 text-[1.1rem] font-medium font-roboto xl:text-[.9rem] xl:py-1 bg-white dark:shadow-neutral-700 "><Icon icon="bxl:tailwind-css" className="text-blue-400" />tailwindcss</span><span className="py-2 px-3 text-black shadow-md rounded-md cursor-default text-[1.2rem] w-fit flex items-center justify-center gap-1 xl:text-[.9rem] xl:py-1 bg-white dark:shadow-neutral-700 "><Icon icon="logos:headlessui" /></span><span className="py-2 px-3 text-black shadow-md rounded-md cursor-default w-fit flex items-center justify-center gap-1 text-[1.2rem] font-extrabold tracking-tighter xl:text-[.9rem] xl:py-1 bg-white dark:shadow-neutral-700 ">Framer Motion<Icon icon="logos:framer"/></span></div></p>, src: 'apparel-projects-hero', srcdark: 'apparel-projects-hero-dark', href: '/', hrefp: 'live site'},

        { id: 3, title: <div className="w-[275px] flex gap-2 cursor-default transition-all duration-150 ease-in-out group mb-8 lg:transform lg:scale-[80%] lg:mb-1 lg:mt-1 lg:w-[145px] "><div className="text-[1.5rem] font-bold uppercase bg-black text-white w-16 h-16 flex items-end justify-end py-0 px-1 transition-all duration-500 ease-in-out dark:bg-white dark:text-black">bf</div><div className="text-[1.5rem] flex items-end justify-end font-bold uppercase text-black transition-all duration-500 ease-in-out dark:text-white">blog</div></div>, desc: <p>My own Blog site! I wanted to keep both the design and front-side simple and minimalist. Simple and minimalism are one of my favourite styles.<div className="flex flex-wrap w-full gap-[.6rem] mt-8 h-fit xl:gap-2 xl:mt-[1.6rem]"><span className="py-2 px-3 text-black shadow-md rounded-md font-bold cursor-default text-[1.1rem] w-fit flex items-center justify-center gap-2 xl:text-[.9rem] xl:py-1 bg-white dark:shadow-neutral-700 ">Figma <Icon icon="logos:figma" className="text-[1.2rem] xl:text-[.9rem]"/></span><span className="py-2 px-3 text-black shadow-md rounded-md cursor-default w-fit flex items-center justify-center gap-1 text-[2rem] xl:text-[1.45rem] xl:py-1 bg-white dark:shadow-neutral-700 "><Icon icon="logos:nextjs" /></span><span className="py-2 px-3 text-black shadow-md rounded-md font-medium cursor-default text-[1.2rem] w-fit flex items-center justify-center gap-1 xl:text-[.9rem] xl:py-1 bg-white dark:shadow-neutral-700 ">React<Icon icon="akar-icons:react-fill" className="text-blue-400"/></span><span className="py-2 px-3 text-black shadow-md rounded-md cursor-default w-fit flex items-center justify-center gap-1 text-[1.1rem] font-medium font-roboto xl:text-[.9rem] xl:py-1 bg-white dark:shadow-neutral-700 "><Icon icon="bxl:tailwind-css" className="text-blue-400" />tailwindcss</span><span className="py-2 px-3 text-black shadow-md rounded-md cursor-default text-[1.2rem] w-fit flex items-center justify-center gap-1 xl:text-[.9rem] xl:py-1 bg-white dark:shadow-neutral-700 "><Icon icon="logos:headlessui" /></span><span className="py-2 px-3 text-black shadow-md rounded-md cursor-default w-fit flex items-center justify-center gap-1 text-[1.2rem] font-extrabold tracking-tighter xl:text-[.9rem] xl:py-1 bg-white dark:shadow-neutral-700 ">Framer Motion<Icon icon="logos:framer"/></span></div></p>, src: 'blog-projects-hero', srcdark: 'blog-projects-hero-dark' , href: '/', hrefp: 'live site'},
        
        { id: 4, title: <div className="font-play text-[2.5rem] text-wrap font-[600] relative text-black cursor-default capitalize transition-[color] duration-color-500 transition-[transform] duration-transform-150 ease-in-out dark:text-white mb-8 xl:text-[1.75rem] xl:mb-[2.5rem] xl:mt-[1.5rem] lg:mb-[1.5rem]">Calco,inc.</div>, desc: <p>Here&apos;s my cool calculator app with different colour themes. I had so much fun creating this one. It was surprisingly quite simple to do.<div className="flex flex-wrap w-full gap-[.6rem] mt-8 h-fit xl:gap-2 xl:mt-[2rem] lg:mt-[1.75rem] lg:mt-[1.25rem]"><span className="py-2 px-3 text-black shadow-md rounded-md font-bold cursor-default text-[1.1rem] w-fit flex items-center justify-center gap-2 xl:text-[.9rem] xl:py-1 bg-white dark:shadow-neutral-700 ">Figma <Icon icon="logos:figma" className="text-[1.2rem] xl:text-[.9rem]"/></span><span className="py-2 px-3 text-black shadow-md rounded-md cursor-default w-fit flex items-center justify-center gap-1 text-[2rem] xl:text-[1.45rem] xl:py-1 bg-white dark:shadow-neutral-700 "><Icon icon="logos:nextjs" /></span><span className="py-2 px-3 text-black shadow-md rounded-md font-medium cursor-default text-[1.2rem] w-fit flex items-center justify-center gap-1 xl:text-[.9rem] xl:py-1 bg-white dark:shadow-neutral-700 ">React<Icon icon="akar-icons:react-fill" className="text-blue-400"/></span><span className="py-2 px-3 text-black shadow-md rounded-md cursor-default w-fit flex items-center justify-center gap-1 text-[1.1rem] font-medium font-roboto xl:text-[.9rem] xl:py-1 bg-white dark:shadow-neutral-700 "><Icon icon="bxl:tailwind-css" className="text-blue-400" />tailwindcss</span><span className="py-2 px-3 text-black shadow-md rounded-md cursor-default text-[1.2rem] w-fit flex items-center justify-center gap-1 xl:text-[.9rem] xl:py-1 bg-white dark:shadow-neutral-700 "><Icon icon="logos:headlessui" /></span><span className="py-2 px-3 text-black shadow-md rounded-md cursor-default w-fit flex items-center justify-center gap-1 text-[1.2rem] font-extrabold tracking-tighter xl:text-[.9rem] xl:py-1 bg-white dark:shadow-neutral-700 ">Framer Motion<Icon icon="logos:framer"/></span></div></p>, src: 'calc-projects-hero', srcdark: 'calc-projects-hero-dark', href: '/', hrefp: 'live site'},
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

      
    return mounted && (
      <>
        <div className="px-5 transition duration-500 bg-gray-200 pt-36 dark:bg-neutral-800 lg:px-0 lg:pt-[6rem]">
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
                                viewport={{ once: true, amount: .2 }}
                            >

                                <motion.div className={i % 2 === 0 ? "flex flex-col items-center p-8 pt-[1.4rem] mb-8 text-left shadow-md bg-white/80 backdrop-blur-sm dark:bg-black/50 w-full h-[650px] xl:h-[550px] xl:p-[1.5rem]" : "order-2 flex flex-col items-center p-8 mb-8 text-left shadow-md bg-white/80 backdrop-blur-sm dark:bg-black/50 w-full h-[650px] xl:h-[550px] xl:p-[1.5rem] lg:order-1"}
                                    variants={gridVariants}
                                >
                                    <motion.div className="lg:w-[85%]"
                                        variants={gridVariants}
                                    >
                                        <h1 className="mb-4 w-fit">{tags.title}</h1>
                                        <p className="mb-8 text-[1.425rem] leading-relaxed xl:text-[1.1rem]">{tags.desc}</p>
                                    </motion.div>

                                    <motion.div className="text-[1.5rem] uppercase h-[45px] w-[fit-content] p-4 relative bottom-0 left-0 flex items-center justify-center border-2  rounded  dark:text-white dark:border-whitexl:bottom-1"
                                        variants={gridVariants}
                                        whileHover={{ x: 10, transition: { duration: .1 }}}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Link href={tags.href}>
                                            <div className="cursor-pointer xl:text-[1.125rem]">{tags.hrefp} &#x2197;</div>
                                        </Link>
                                    </motion.div>
                                </motion.div>


                                <motion.div className={i % 2 === 0 ? "overflow-hidden shadow-md w-full h-[675px] flex flex-col justify-center order-1 xl:h-[510px]" : "overflow-hidden shadow-md w-full h-[675px] flex flex-col justify-center order-1 xl:h-[510px]"}
                                    variants={gridVariants}
                                >
                                  {/* <img src={currentTheme === "dark" ? `/${tags.srcdark}.PNG` : `/${tags.src}.PNG`} alt="Something should show here"
                                    
                                  /> */}

                                    <Image src={currentTheme === "dark" ? `/${tags.srcdark}.PNG` : `/${tags.src}.PNG`}
                                    alt="something should show here"
                                    width={450} height={675} layout="responsive"
                                    blurDataURL={currentTheme === "dark" ? `${tags.srcdark}.PNG` : `${tags.src}.PNG`}
                                    placeholder='blur' />
                                </motion.div>
                            </motion.div>
                        )
                    })}
          </motion.main>

          <Footer />
        </div>
      </>
     );
}
 
export default About;