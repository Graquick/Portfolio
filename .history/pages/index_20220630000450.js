import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import styles from '../styles/Home.module.css';
import stylesCarousel from '../styles/Carousel.module.css';
import stylesHeader from '../styles/Header.module.css'

import { useTheme } from 'next-themes';

import Header from '../components/header';
import useMounted from '../components/useMounted.js'
import Footer from '../components/footer';
import Carousel from '../components/carousel';
import TextAnimation from '../components/animations/TextAnimation';

import SnapModal from '../components/Modals/SnapModal';
import ApparellModal from '../components/Modals/ApparellModal';
import BfBlogModal from '../components/Modals/BfBlogModal';
import CalcModal from "../components/Modals/CalcModal";

export default function Home() {
  
  // const mounted = useMounted()
  const [width, setWidth] = useState(0);
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;


  const [showModal, setShowModal] = useState(false);
  const [showCModal, setShowCModal] = useState(false);
  const [showJModal, setShowJModal] = useState(false);
  const [showRModal, setShowRModal] = useState(false);
  const [showNModal, setShowNModal] = useState(false);

  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [])
  
  //  useEffect(() => {
  //    setTimeout(() => {
  //      setShowModal(true)
  //    }, 5000)
  //  }, [setShowModal]);
  
  const router = useRouter()


const gridVariants = {
  hidden: {
    x: 600,
    opacity: 0
  },
  visible: {
    x: 0,
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
          delay: .75,
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


const modalContent = [
  { id: 1, setShowTrue: () => setShowModal(true), title: <div className="font-[Arial, Helvetica, sans-serif] text-[4rem] font-bold text-gray-200 cursor-pointer transition-all duration-150 ease-in-out relative hover:text-black group dark:text-zinc-600 dark:hover:text-zinc-300">  <svg
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
</svg>snap</div>, setShowFalse: () => setShowModal(false), modalType: <SnapModal /> },

  { id: 2, setShowTrue: () => setShowCModal(true), title:
  <div className="font-roboto text-[4rem] font-light text-gray-200 cursor-pointer transition-all duration-150 ease-in-out relative hover:text-black group dark:text-zinc-600 dark:hover:text-zinc-300">.apparell</div>,
setShowFalse: () => setShowCModal(false), modalType: <ApparellModal /> },


  { id: 3, setShowTrue: () => setShowJModal(true), title: <div className="w-[275px] flex gap-2 cursor-pointer transition-all duration-150 ease-in-out group"><div className="text-[1.5rem] font-bold uppercase bg-gray-200 text-white/70 w-16 h-16 flex items-end justify-end py-0 px-1 transition-all duration-500 ease-in-out dark:bg-zinc-600 dark:text-zinc-500 dark:group-hover:bg-zinc-300 dark:group-hover:text-zinc-600 group-hover:text-white group-hover:bg-black">bf</div><div className="text-[1.5rem] flex items-end justify-end font-bold uppercase text-gray-200 transition-all duration-500 ease-in-out dark:text-zinc-600 group-hover:text-black dark:group-hover:text-zinc-300">blog</div></div>, setShowFalse: () => setShowJModal(false), modalType: <BfBlogModal /> },


  { id: 4, setShowTrue: () => setShowRModal(true), title: <div className="font-play text-[2.5rem] font-[600] relative text-gray-200 cursor-pointer capitalize transition-[color] duration-color-500 transition-[transform] duration-transform-150 ease-in-out hover:text-black dark:text-zinc-600 dark:hover:text-zinc-300">Calco,inc.</div>, setShowFalse: () => setShowRModal(false), modalType: <CalcModal /> },
]


  return (
      <div className="px-5 py-0 lg:p-0 transition duration-500 bg-gray-200 dark:bg-neutral-800" >
        <Head>
          <title>NEW! Home - Brima Freeman</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header variants={pageNotLoad} />
        
        {/* ModalS */}
        <SnapModal showModal={showModal} setShowModal={setShowModal} />
        <ApparellModal showCModal={showCModal} setShowCModal={setShowCModal} />
        <BfBlogModal showJModal={showJModal} setShowJModal={setShowJModal} />
        <CalcModal showRModal={showRModal} setShowRModal={setShowRModal} />
        {/* ModalS */}
        
          <motion.main className={styles.main}
          >
              <motion.div className={styles.grid}
              >
                
                <motion.div className="h-[95%] flex flex-col p-8 text-left shadow-md bg-white/80 backdrop-blur-sm dark:bg-black/50" 
                  // className={styles.helloCard}
                  variants={gridVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <h1 className="font-medium text-[5rem] mb-4 dark:text-gray-200 2xl:text-[4rem] xl:text-[2.25rem] ">Web Developer</h1>
                  <p className="text-[3rem] mb-8 dark:text-gray-200 2xl:text-[2rem] xl:text-[1.25rem] xl:mb-[1.5rem]">Brima Freeman</p>
                  <motion.div className="w-[fit-content] text-[1.65rem] p-3 uppercase relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:bg-black after:w-[0%] after:h-[2px] after:flex after:items-end after:justify-end after:transition-all after:duration-150 hover:after:w-full dark:text-gray-200 dark:after:bg-gray-200 2xl:p-0 2xl:text-[1.4rem] 2xl:after:-bottom-2 xl:text-[.9rem] xl:after:h-[1.5px]"
                          whileHover={{ x: 10, transition: { duration: .1 }}}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Link href="/home/myStory">
                            <a>my story &rarr;</a>
                          </Link>
                  </motion.div>
                </motion.div>

                <motion.div className={styles.imgCard} variants={gridVariants}
                >
                  <Image src="/code.jpg"
                    alt="Picture of the author - Brima Freeman"
                    width={140} height={210} layout="responsive"
                    objectFit={"cover"}
                    blurDataURL="/code.jpg"
                    placeholder="blur"/>
                </motion.div>

                <div>
                      <div className="h-fit w-fit text-[1.2rem] font-semibold text-gray-400 uppercase flex items-center justify-center bg-white dark:text-gray-500 xl:order-3">
                        selected projects
                      </div>

                      <motion.div className="w-full overflow-hidden shadow-md bg-white/80 backdrop-blur-sm cursor-grab h-3/5 relative before:content-['scrollable_\1f91a'] before:absolute before:bottom-0 before:left-0 before:font-medium before:text-[1.125rem] before:w-[140px] before:h-[30px] before:py-0 before:px-2 before:text-gray-400 before:cursor-default dark:bg-black/50 dark:text-gray-200 2xl:h-[65%] xl:order-2"
                        // className={styles.modalCard}
                        variants={gridVariants}
                        initial="hidden"
                        animate="visible"        
                      >
                        <motion.div className={stylesCarousel.carousel} ref={carousel}>
                          <motion.div className={stylesCarousel.innerCarousel}
                          drag="x" dragConstraints={{ right: 0, left: -width }}
                          >
                            {modalContent.map((modal) => {
                                return (
                                  <motion.div className={stylesCarousel.item}
                                  key={modal}
                                  onTap={modal.setShowTrue}
                                  >
                                    {modal.title}
                                    <AnimatePresence exitBeforeEnter onExitComplete={modal.setShowFalse}>
                                      {modal.modalType}
                                    </AnimatePresence>
                                  </motion.div>
                                )
                              })}
                          </motion.div>
                        </motion.div>
                        
                      </motion.div>
                </div>

                {/* <motion.div className={styles.modalCard} variants={gridVariants}>
                  <motion.div className={stylesCarousel.carousel} ref={carousel}>
                    <motion.div className={stylesCarousel.innerCarousel}
                    drag="x" dragConstraints={{ right: 0, left: -width }}
                    >
                        {modalContent.map((modal) => {
                          return (
                            <motion.div className={stylesCarousel.item}
                            key={modal}
                            onTap={modal.setShowTrue}
                            >
                                <Image src={`/${modal.src}.jpg`}
                                width={140} height={210} layout="responsive"
                                objectFit={"cover"}
                                blurDataURL="`${modal.src}.jpg`"
                                placeholder="blur"
                                />
                              <AnimatePresence exitBeforeEnter onExitComplete={modal.setShowFalse}>
                                {modal.modalType}
                              </AnimatePresence>
                            </motion.div>
                          )
                        })}
                    </motion.div>
                  </motion.div>
                </motion.div> */}
                
              </motion.div>
          </motion.main>

          <Footer />
      </div>
  )
}
