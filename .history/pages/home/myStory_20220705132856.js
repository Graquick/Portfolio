import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import styles from '../../styles/myStory.module.css';
import stylesCarousel from '../../styles/Carousel.module.css';

import SnapModal from '../../components/Modals/SnapModal';
import ApparellModal from '../../components/Modals/ApparellModal';
import BfBlogModal from '../../components/Modals/BfBlogModal';
import CalcModal from "../../components/Modals/CalcModal";
import TannerModal from "../../components/Modals/TannerModal";
import SnapMyModal from "../../components/Modals/SnapMyModal";
import ApparelMyModal from "../../components/Modals/ApparelMyModal";
import SteppModal from "../../components/Modals/SteppModal";

import useMounted from '../../components/useMounted.js'

import Footer from '../../components/footer';
import Header from '../../components/header';
import Carousel from '../../components/carousel';

export default function MyStory() {
  // const mounted = useMounted()
  const [showG1Modal, setShowG1Modal] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [showCModal, setShowCModal] = useState(false);
  const [showJModal, setShowJModal] = useState(false);
  const [showRModal, setShowRModal] = useState(false);
  const [showNModal, setShowNModal] = useState(false);
  
  const [showTannerModal, setShowTannerModal] = useState(false);
  const [showSnapMyModal, setShowSnapMyModal] = useState(false);
  const [showApparelMyModal, setShowApparelMyModal] = useState(false);
  const [showSteppModal, setShowSteppModal] = useState(false);

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
    { id: 1, setShowTrue: () => setShowModal(true), title: <div className="font-[Arial, Helvetica, sans-serif] text-[4rem] font-bold text-gray-200 cursor-pointer transition-all duration-150 ease-in-out relative hover:text-black group dark:text-zinc-500 dark:hover:text-zinc-300 lg:text-[3rem]">  <svg
  className="absolute top-[2.5rem] -right-8 w-[26px] h-[26px] transition-all duration-500 ease-in-out group-hover:fill-black group-hover:stroke-black lg:top-[1.9rem]"
  width={26}
  height={24}
  viewBox="0 0 26 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="none"
>
  <rect x="7.2" y="5.2" width="17.6" height="17.6" rx="1.8" strokeWidth="2.4" className="fill-white/80 stroke-gray-200 dark:fill-neutral-700 dark:stroke-zinc-500 dark:group-hover:fill-neutral-700 dark:group-hover:stroke-zinc-300 group-hover:stroke-black group-hover:fill-white" />
  <rect
    className="fill-gray-200 stroke-gray-200 group-hover:fill-black group-hover:stroke-black dark:fill-zinc-500 dark:stroke-zinc-500 dark:group-hover:fill-zinc-300 dark:group-hover:stroke-zinc-300"
    x="1.2"
    y="1.2"
    width="17.6"
    height="17.6"
    rx="1.8"
    strokeWidth="2.4"
  />
  <circle cx={13} cy={7} r="2.5" className="stroke-white/80 fill-white/80 group-hover:fill-black group-hover:stroke-white dark:stroke-zinc-500 dark:fill-black/50 dark:group-hover:fill-zinc-300 dark:group-hover:stroke-black/50"/>
</svg>snap</div>, setShowFalse: () => setShowModal(false), modalType: <SnapModal /> },

  { id: 2, setShowTrue: () => setShowCModal(true), title:
  <div className="font-roboto text-[4rem] font-light text-gray-200 cursor-pointer transition-all duration-150 ease-in-out relative hover:text-black group dark:text-zinc-500 dark:hover:text-zinc-300 lg:text-[3rem]">.apparell</div>,
setShowFalse: () => setShowCModal(false), modalType: <ApparellModal /> },


  { id: 3, setShowTrue: () => setShowJModal(true), title: <div className=" w-[275px] flex justify-center gap-2 cursor-pointer transition-all duration-150 ease-in-out group"><div className="text-[1.5rem] font-bold uppercase bg-gray-200 text-white/70 w-16 h-16 flex items-end justify-end py-0 px-1 transition-all duration-500 ease-in-out dark:bg-zinc-500 dark:text-zinc-400 dark:group-hover:bg-zinc-300 dark:group-hover:text-zinc-500 group-hover:text-white group-hover:bg-black">bf</div><div className="text-[1.5rem] flex items-end justify-end font-bold uppercase text-gray-200 transition-all duration-500 ease-in-out dark:text-zinc-500 group-hover:text-black dark:group-hover:text-zinc-300">blog</div></div>, setShowFalse: () => setShowJModal(false), modalType: <BfBlogModal /> },


  { id: 4, setShowTrue: () => setShowRModal(true), title: <div className="font-play text-[2.5rem] font-[600] relative text-gray-200 cursor-pointer capitalize transition-[color] duration-color-500 transition-[transform] duration-transform-150 ease-in-out hover:text-black dark:text-zinc-500 dark:hover:text-zinc-300 lg:text-[1.5rem] lg:relative lg:right-20">Calco,inc.</div>, setShowFalse: () => setShowRModal(false), modalType: <CalcModal /> },
  ]

  const designModalContent = [
    { id: 1, setShowTrue: () => setShowTannerModal(true), title: <div className="w-64 h-64 bg-no-repeat bg-cover transition-all duration-300 ease-in-out cursor-pointer bg-[url('/tanner-hero.PNG')] 2xl:w-40 2xl:h-40"></div>, setShowFalse: () => setShowTannerModal(false), modalType: <TannerModal /> },

    { id: 2, setShowTrue: () => setShowSnapMyModal(true), title: <div className="w-64 h-64 bg-no-repeat bg-cover transition-all duration-300 ease-in-out cursor-pointer bg-[url('/snap-my-hero.PNG')] 2xl:w-40 2xl:h-40"></div>, setShowFalse: () => setShowSnapMyModal(false), modalType: <SnapMyModal /> },

    { id: 3, setShowTrue: () => setShowApparelMyModal(true), title: <div className="w-64 h-64 bg-no-repeat bg-cover transition-all duration-300 ease-in-out cursor-pointer bg-[url('/apparel-my-hero.PNG')] 2xl:w-40 2xl:h-40"></div>, setShowFalse: () => setShowApparelMyModal(false), modalType: <ApparelMyModal /> },

    { id: 4, setShowTrue: () => setShowSteppModal(true), title: <div className="w-64 h-64 bg-no-repeat bg-cover transition-all duration-300 ease-in-out cursor-pointer bg-[url('/stepp-hero.PNG')] 2xl:w-40 2xl:h-40"></div>, setShowFalse: () => setShowSteppModal(false), modalType: <SteppModal /> },
  ]

  const extraModalContent = [
    {id: 1, title: <div className=" w-fit h-fit text-[2rem] text-gray-300 dark:text-zinc-400 cursor-default uppercase">Coming soon</div>},
    {id: 2, title: <div className=" w-fit h-fit text-[2rem] text-gray-300 dark:text-zinc-400 cursor-default uppercase">Coming soon</div>},
    {id: 3, title: <div className=" w-fit h-fit text-[2rem] text-gray-300 dark:text-zinc-400 cursor-default uppercase">Coming soon</div>},
  ]

  return (
    <>
      <div className="px-5 transition duration-500 bg-gray-200 pt-40 dark:bg-neutral-800 lg:px-0 lg:pt-[6.5rem]">
        <Head>
          <title>My Story - Brima Freeman</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header variants={pageNotLoad} />

        {/* ModalS */}
        <SnapModal showModal={showModal} setShowModal={setShowModal} />
        <ApparellModal showCModal={showCModal} setShowCModal={setShowCModal} />
        <BfBlogModal showJModal={showJModal} setShowJModal={setShowJModal} />
        <CalcModal showRModal={showRModal} setShowRModal={setShowRModal} />
        <TannerModal showTannerModal={showTannerModal} setShowTannerModal={setShowTannerModal} />
        <SnapMyModal showSnapMyModal={showSnapMyModal} setShowSnapMyModal={setShowSnapMyModal} />
        <ApparelMyModal showApparelMyModal={showApparelMyModal} setShowApparelMyModal={setShowApparelMyModal} />
        <SteppModal showSteppModal={showSteppModal} setShowSteppModal={setShowSteppModal} />
        {/* ModalS */}

          <motion.main className={styles.main} 
          >
              <motion.div className={styles.myStory} id="myStory"
                variants={gridVariants}
                initial="hidden"
                animate="visible"
                viewport={{ once: true, amount: .8 }}
              >

                <div className="items-center justify-center  w-full h-[80%] 2xl:h-[50%] xl:text-[1.55rem] lg:text-[1rem]"
                  // INTRO
                >
                  <motion.div className="w-full h-full backdrop-blur-sm lg:w-full bg-white/80 shadow dark:bg-neutral-700 dark:text-gray-200"
                    // className={styles.helloCard}
                  variants={gridVariants}>
                    <p className="px-12 flex flex-col justify-center items-center text-[2.25rem] h-full leading-relaxed text-justify 2xl:text-[1.55rem] xl:text-[1.55rem] lg:text-[1rem] lg:hidden">I&apos;m Brima Freeman, a Frontend Developer and a UI/UX Designer based in Finland. I specialize in designing and developing websites and mobile applications. More specifically, I work with React and Next.js to build my projects. I use Figma, Canva, and Adobe products for designing.</p>

                    <p className="px-8 flex-col justify-center items-center text-[2.25rem] h-full leading-relaxed text-justify 2xl:text-[1.55rem] xl:text-[1.55rem] lg:text-[1.3rem] hidden lg:flex">I&apos;m a Frontend Developer and a UI/UX Designer based in Finland. I specialize in designing and developing websites and mobile applications.</p>
                  </motion.div>
                </div>

                <div className="flex flex-col w-full h-full col-span-2 row-span-1"
                  // FRONTEND WORK
                >
                      <div className="h-fit mb-1 w-fit text-[1.2rem] font-semibold text-gray-400 uppercase flex items-center justify-center dark:text-gray-500 xl:text-[1rem] lg:text-[.8rem]">
                        selected projects
                      </div>

                      <motion.div className="w-full h-full overflow-hidden shadow-md bg-white/80 backdrop-blur-sm cursor-grab relative before:content-['scrollable_\1f91a'] before:absolute before:bottom-0 before:left-0 before:font-medium before:text-[1.125rem] before:w-[140px] before:h-[30px] before:py-0 before:px-2 before:text-gray-400 before:cursor-default dark:bg-neutral-700 dark:text-gray-200"
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
                                  <motion.div
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
                  <div className="h-[8.5%] w-fit text-[1.2rem] font-semibold text-gray-400 uppercase dark:text-gray-500  xl:text-[1rem] lg:text-[.8rem]"
                    // className={styles.subDiv}
                  >
                    design work
                  </div>

                  <motion.div className="w-full overflow-hidden shadow-md bg-white/80 backdrop-blur-sm cursor-grab h-[85%] relative before:content-['scrollable_\1f91a'] before:absolute before:bottom-0 before:left-0 before:font-medium before:text-[1.125rem] before:w-[140px] before:h-[30px] before:py-0 before:px-2 before:text-gray-400 before:cursor-default dark:bg-neutral-700 dark:text-gray-200 col-span-2" 
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
                              <motion.div
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
                  <div className="h-[8.5%] w-fit text-[1.2rem] font-semibold text-gray-400 uppercase dark:text-gray-500 xl:text-[1rem] lg:text-[.8rem]"
                    // className={styles.subDiv}
                  >
                    extras
                  </div>

                  <motion.div className="w-full overflow-hidden shadow-md bg-white/80 backdrop-blur-sm cursor-grab h-[85%] relative before:content-['scrollable_\1f91a'] before:absolute before:bottom-0 before:left-0 before:font-medium before:text-[1.125rem] before:w-[140px] before:h-[30px] before:py-0 before:px-2 before:text-gray-400 before:cursor-default dark:bg-neutral-700 dark:text-gray-200 col-span-2" 
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
                              <motion.div
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
              
                <div className="flex w-[1400px] m-auto mb-4 col-span-2 row-span-1 h-fit 2xl:w-[1000px] xl:w-[750px] lg:w-[355px] cursor-pointer">
                  <Link href="/">
                    <motion.div className="text-[1.5rem] uppercase h-[60px] w-[fit-content] p-2 relative flex items-center justify-center gap-4 dark:text-gray-200 dark:after:bg-gray-200"
                          whileHover={{ x: 10, transition: { duration: .1 }}}
                          whileTap={{ scale: 0.5 }}
                      >
                          <Icon icon="carbon:arrow-up-left" className="bg-neutral-800 text-white dark:bg-neutral-200 dark:text-black" /> Head Back Home
                    </motion.div>
                  </Link>
                </div>
              
          </motion.main>
        
        <Footer />
      </div>
    </>
  )
}
