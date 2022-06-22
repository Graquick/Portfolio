import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import styles from '../../styles/myStory.module.css';
import stylesCarousel from '../../styles/Carousel.module.css';

import Gallery1Modal from '../../components/Modals/Gallery1Modal';
import SnapModal from '../../components/Modals/SnapModal';
import ApparellModal from '../../components/Modals/ApparellModal';
import BfBlogModal from '../../components/Modals/BfBlogModal';
import CalcModal from "../../components/Modals/CalcModal";
import TannerModal from "../../components/Modals/TannerModal";

import Footer from '../../components/footer';
import Header from '../../components/header';
import Carousel from '../../components/carousel';

export default function MyStory() {
  const [showG1Modal, setShowG1Modal] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [showCModal, setShowCModal] = useState(false);
  const [showJModal, setShowJModal] = useState(false);
  const [showRModal, setShowRModal] = useState(false);
  const [showNModal, setShowNModal] = useState(false);
  
  const [showTannerModal, setShowTannerModal] = useState(false);

  //  useEffect(() => {
  //    setTimeout(() => {
  //      setShowModal(true)
  //    }, 5000)
  //  }, [setShowModal]);
  
  const router = useRouter()


const gridVariants = {
  hidden: {
    x: -600,
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


const [width, setWidth] = useState(0);
const carousel = useRef();

   useEffect(() => {
       setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [])

  const frontEndModalContent = [
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

  const designModalContent = [
    { id: 1, setShowTrue: () => setShowTannerModal(true), title: <div className="w-40 h-40  bg-black/50"></div>, setShowFalse: () => setShowRModal(false), modalType: <TannerModal /> },
  ]

  const extraModalContent = [
    {id: 1, }
  ]

  return (
    <div className="px-5 py-0 transition duration-500 bg-gray-200 dark:bg-neutral-800">
      <Head>
        <title>My Story - Brima Freeman</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header variants={pageNotLoad} />

      {/* ModalS */}
      <Gallery1Modal showG1Modal={showG1Modal} setShowG1Modal={setShowG1Modal} />
      <SnapModal showModal={showModal} setShowModal={setShowModal} />
      <ApparellModal showCModal={showCModal} setShowCModal={setShowCModal} />
      <BfBlogModal showJModal={showJModal} setShowJModal={setShowJModal} />
      <CalcModal showRModal={showRModal} setShowRModal={setShowRModal} />
      <TannerModal showTannerModal={showTannerModal} setShowTannerModal={setShowTannerModal} />
      {/* ModalS */}

        <motion.main className={styles.main} 
        >
            <motion.div className={styles.myStory} id="myStory"
              variants={gridVariants}
              initial="hidden"
              animate="visible"
              viewport={{ once: true, amount: .8 }}
            >

              <div className="flex justify-around w-full h-full col-span-2"
                // INTRO
              >
                <motion.div className="flex w-[45%] flex-col p-8 mb-8 text-left shadow-md bg-white/80 backdrop-blur-sm dark:bg-black/50"
                  // className={styles.helloCard}
                variants={gridVariants}>
                  <h1 className="font-medium text-[5rem] mb-4">Work</h1>
                  <p className="text-[1.7rem] mb-8 leading-relaxed text-justify ">I am a <span className="inline-block px-4 py-0 text-white transition-all duration-150 ease-in-out bg-gray-700 hover:transform hover:translate-y-[-7px]">Frontend Developer</span> based in Finland. I have focused the last 2 years on HTML, CSS, and Javascript. My main platform has been React, powered with Next.js.</p>
                </motion.div>
                
                <motion.div className="flex w-[45%] flex-col p-8 mb-8 text-left shadow-md bg-white/80 backdrop-blur-sm dark:bg-black/50"
                  // className={styles.helloCard}
                  variants={gridVariants}>
                  <p className="text-[1.7rem] mb-8 leading-relaxed text-justify ">I am also a <span className="inline-block px-4 py-0 text-white transition-all duration-150 ease-in-out bg-gray-700 hover:transform hover:translate-y-[-7px]">UI/UX Designer</span>. I have been designing for more than 5 years. My most used platforms are Figma, Canva, and Adobe XD.</p>
                  <br />
                  <p className="text-[1.7rem] mb-8 leading-relaxed text-justify ">I am looking for growth opportunities and new challenges, as I am very interested in improving myself.  </p>
                </motion.div>
              </div>

              <div className="flex flex-col w-full h-full col-span-2 row-span-1"
                 // FRONTEND WORK
              >
                <div className="h-[5%] w-fit text-[1.2rem] font-semibold text-gray-400 uppercase dark:text-gray-500"
                  // className={styles.subDiv}
                >
                  frontend work
                </div>

                <motion.div className="w-full overflow-hidden shadow-md bg-white/80 backdrop-blur-sm cursor-grab h-[85%] relative before:content-['scrollable_\1f91a'] before:absolute before:bottom-0 before:left-0 before:font-medium before:text-[1.125rem] before:w-[140px] before:h-[30px] before:py-0 before:px-2 before:text-gray-400 before:cursor-default dark:bg-black/50 dark:text-gray-200 col-span-2" 
                  // className={styles.modalCard}
                variants={gridVariants}
                  initial="hidden"
                  animate="visible"        
                >
                  <motion.div className={stylesCarousel.carousel} ref={carousel}>
                    <motion.div className={stylesCarousel.innerCarousel}
                    drag="x" dragConstraints={{ right: 0, left: -width }}
                    >
                      {frontEndModalContent.map((modal) => {
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


              {/* ====== ====== ===== */}

              <div className="flex flex-col w-full h-full col-span-2 row-span-1"
                 // DESIGN WORK
              >
                <div className="h-[5%] w-fit text-[1.2rem] font-semibold text-gray-400 uppercase dark:text-gray-500"
                  // className={styles.subDiv}
                >
                  design work
                </div>

                <motion.div className="w-full overflow-hidden shadow-md bg-white/80 backdrop-blur-sm cursor-grab h-[85%] relative before:content-['scrollable_\1f91a'] before:absolute before:bottom-0 before:left-0 before:font-medium before:text-[1.125rem] before:w-[140px] before:h-[30px] before:py-0 before:px-2 before:text-gray-400 before:cursor-default dark:bg-black/50 dark:text-gray-200 col-span-2" 
                  // className={styles.modalCard}
                variants={gridVariants}
                  initial="hidden"
                  animate="visible"        
                >
                  <motion.div className={stylesCarousel.carousel} ref={carousel}>
                    <motion.div className={stylesCarousel.innerCarousel}
                    drag="x" dragConstraints={{ right: 0, left: -width }}
                    >
                      {designModalContent.map((modal) => {
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


              {/* ====== ====== ===== */}

              <div className="flex flex-col w-full h-full col-span-2 row-span-1"
                 // EXTRAS
              >
                <div className="h-[5%] w-fit text-[1.2rem] font-semibold text-gray-400 uppercase dark:text-gray-500"
                  // className={styles.subDiv}
                >
                  extras
                </div>

                <motion.div className="w-full overflow-hidden shadow-md bg-white/80 backdrop-blur-sm cursor-grab h-[85%] relative before:content-['scrollable_\1f91a'] before:absolute before:bottom-0 before:left-0 before:font-medium before:text-[1.125rem] before:w-[140px] before:h-[30px] before:py-0 before:px-2 before:text-gray-400 before:cursor-default dark:bg-black/50 dark:text-gray-200 col-span-2" 
                  // className={styles.modalCard}
                variants={gridVariants}
                  initial="hidden"
                  animate="visible"        
                >
                  <motion.div className={stylesCarousel.carousel} ref={carousel}>
                    <motion.div className={stylesCarousel.innerCarousel}
                    drag="x" dragConstraints={{ right: 0, left: -width }}
                    >
                      {extraModalContent.map((modal) => {
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
              
             
            </motion.div>
            
        </motion.main>
      
      <Footer />
    </div>
  )
}
