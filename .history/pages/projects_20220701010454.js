import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
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
        { id: 1, title: <div className="font-[Arial, Helvetica, sans-serif] text-[4rem] font-bold text-black cursor-default transition-all duration-150 ease-in-out relative group dark:text-white">  <svg
        className="absolute top-[2.5rem] -right-8 w-[26px] h-[26px] transition-all duration-500 ease-in-out group-hover:fill-black group-hover:stroke-black "
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
      </svg>snap</div>, desc: <p>Snap tested my ability to create dropdown navigation menus, a common pattern on larger sites. It also provided some nice basic layout challenges.<br/><br/><span className="font-bold uppercase text-[1.25rem]">Technologies used</span><br /> <div className="flex flex-wrap w-full gap-2 bg-fuchsia-50"><span>Figma</span><span>Next.js</span><span>React</span><span>Tailwind CSS</span><span>Headless UI</span><span>Framer Motion</span></div></p>, src: 'snap-projects-mobile-hero', srcdark: 'snap-projects-mobile-hero-dark', href: 'https://brimasnap.vercel.app/', hrefp: 'live site'},

        { id: 2, title: <div className="font-roboto text-[4rem] font-light text-black cursor-default transition-all duration-150 ease-in-out relative group dark:text-white">.apparell</div>, desc: <p>In this project, I built a beautiful product page. My JS skills were put to the test with a lightbox product gallery and cart functionality! <br/><br/> All the design was done by Figma. I developed the final product using Next.js and Vercel. </p>, src: 'apparel-projects-hero', srcdark: 'apparel-projects-hero-dark', href: '/', hrefp: 'live site'},

        { id: 3, title: <div className="w-[275px] flex gap-2 cursor-default transition-all duration-150 ease-in-out group mb-8"><div className="text-[1.5rem] font-bold uppercase bg-black text-white w-16 h-16 flex items-end justify-end py-0 px-1 transition-all duration-500 ease-in-out dark:bg-white dark:text-black">bf</div><div className="text-[1.5rem] flex items-end justify-end font-bold uppercase text-black transition-all duration-500 ease-in-out dark:text-white">blog</div></div>, desc: <p>My own Blog site! I wanted to keep both the design and front-side simple and minimalist. Simple and minimalism are one of my favourite styles.<br/><br/> All the design was done by Figma. I developed the final product using Next.js and Vercel.</p>, src: 'blog-projects-hero', srcdark: 'blog-projects-hero-dark' , href: '/', hrefp: 'live site'},
        
        { id: 4, title: <div className="font-play text-[2.5rem] font-[600] relative text-black cursor-default capitalize transition-[color] duration-color-500 transition-[transform] duration-transform-150 ease-in-out dark:text-white mb-8">Calco,inc.</div>, desc: <p>Here&apos;s my cool calculator app with different colour themes. I had so much fun creating this one.<br/><br/> All the design was done by Figma. I developed the final product using Next.js and Vercel.</p>, src: 'calc-projects-hero', srcdark: 'calc-projects-hero-dark', href: '/', hrefp: 'live site'},
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
                                viewport={{ once: true, amount: .2 }}
                            >

                                <motion.div className={i % 2 === 0 ? "flex flex-col p-8 mb-8 text-left shadow-md bg-white/80 backdrop-blur-sm dark:bg-black/50 w-full h-[625px] xl:h-[500px]" : "order-2 flex flex-col p-8 mb-8 text-left shadow-md bg-white/80 backdrop-blur-sm dark:bg-black/50 w-full h-[625px] xl:h-[500px] lg:order-1"}
                                    variants={gridVariants}
                                >
                                    <motion.div 
                                        variants={gridVariants}
                                    >
                                        <h1 className="mb-4 w-fit">{tags.title}</h1>
                                        <p className="mb-8 text-[1.425rem] leading-relaxed">{tags.desc}</p>
                                    </motion.div>

                                    <motion.div className="text-[1.5rem] uppercase h-[60px] w-[fit-content] p-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-black after:w-[0%] after:h-[2px] after:flex after:justify-end after:items-end after:transition-all after:duration-150 after:ease-in-out hover:after:w-full dark:text-gray-200 dark:after:bg-gray-200"
                                        variants={gridVariants}
                                        whileHover={{ x: 10, transition: { duration: .1 }}}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Link href={tags.href}>
                                            <div className="cursor-pointer">{tags.hrefp} &#x2197;</div>
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