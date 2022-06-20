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

import Footer from '../../components/footer';
import Header from '../../components/header';
import Carousel from '../../components/carousel';

export default function MyStory() {
  const [showG1Modal, setShowG1Modal] = useState(false);
  
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

//   useEffect(() => {
//       setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
//  }, [])

 const modalContent = [
  { id: 1, setShowTrue: () => setShowG1Modal(true), title: <div className="font-roboto text-[4rem] font-light text-gray-200 cursor-pointer transition-all duration-150 ease-in-out relative hover:text-black group dark:text-zinc-600 dark:hover:text-zinc-300">Gallery Item 1</div>, setShowFalse: () => setShowG1Modal(false), modalType: <Gallery1Modal /> },
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
      {/* ModalS */}

        <motion.main className={styles.main} 
        >
            <motion.div className={styles.myStory} id="myStory"
              variants={gridVariants}
              initial="hidden"
              animate="visible"
              viewport={{ once: true, amount: .8 }}
            >

              <div className="flex justify-around w-full h-full col-span-2 bg-green-500"
                // INTRO
              >
                <motion.div className="flex w-[45%] flex-col p-8 mb-8 text-left shadow-md bg-white/80 backdrop-blur-sm dark:bg-black/50"
                  // className={styles.helloCard}
                variants={gridVariants}>
                  <h1 className="">Work</h1>
                  <p>I am a <span>Frontend Developer</span> based in Finland. I have focused the last 2 years on HTML, CSS, and Javascript. My main platform has been React, powered with Next.js.</p>
                </motion.div>
                
                <motion.div className="flex w-[45%] flex-col p-8 mb-8 text-left shadow-md bg-white/80 backdrop-blur-sm dark:bg-black/50"
                  // className={styles.helloCard}
                  variants={gridVariants}>
                  <p>I am also a <span>UI/UX Designer</span>. I have been designing for more than 5 years. My most used platforms are Figma, Canva, and Adobe XD.</p>
                  <br />
                  <p>I am looking for growth opportunities and new challenges, as I am very interested in improving myself.  </p>
                </motion.div>
              </div>

              <div className="w-full overflow-hidden shadow-md bg-white/80 backdrop-blur-sm cursor-grab h-full relative before:content-['scrollable_\1f91a'] before:absolute before:bottom-0 before:left-0 before:font-medium before:text-[1.125rem] before:w-[140px] before:h-[30px] before:py-0 before:px-2 before:text-gray-400 before:cursor-default dark:bg-black/50 dark:text-gray-200 col-span-2"
                 // FRONTEND WORK
              >
                <div className="h-full w-fit text-[1.2rem] font-semibold text-gray-400 bg-red-500 uppercase dark:text-gray-500"
                  // className={styles.subDiv}
                >
                  frontend work
                </div>

                <motion.div className="w-full overflow-hidden shadow-md bg-white/80 backdrop-blur-sm cursor-grab h-full relative before:content-['scrollable_\1f91a'] before:absolute before:bottom-0 before:left-0 before:font-medium before:text-[1.125rem] before:w-[140px] before:h-[30px] before:py-0 before:px-2 before:text-gray-400 before:cursor-default dark:bg-black/50 dark:text-gray-200 col-span-2" 
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


              {/* ====== ====== ===== */}

              <div className="w-full overflow-hidden shadow-md bg-white/80 backdrop-blur-sm cursor-grab h-full relative before:content-['scrollable_\1f91a'] before:absolute before:bottom-0 before:left-0 before:font-medium before:text-[1.125rem] before:w-[140px] before:h-[30px] before:py-0 before:px-2 before:text-gray-400 before:cursor-default dark:bg-black/50 dark:text-gray-200 col-span-2"
                 // DESIGN WORK
              >
                <div className="h-full w-fit text-[1.2rem] font-semibold text-gray-400 uppercase dark:text-gray-500"
                  // className={styles.subDiv}
                >
                  design work
                </div>

                <motion.div className="w-full overflow-hidden shadow-md bg-white/80 backdrop-blur-sm cursor-grab h-full mt-3 relative before:content-['scrollable_\1f91a'] before:absolute before:bottom-0 before:left-0 before:font-medium before:text-[1.125rem] before:w-[140px] before:h-[30px] before:py-0 before:px-2 before:text-gray-400 before:cursor-default dark:bg-black/50 dark:text-gray-200 col-span-2" 
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


              {/* ====== ====== ===== */}

              <div className="w-full overflow-hidden shadow-md bg-white/80 backdrop-blur-sm cursor-grab h-full relative before:content-['scrollable_\1f91a'] before:absolute before:bottom-0 before:left-0 before:font-medium before:text-[1.125rem] before:w-[140px] before:h-[30px] before:py-0 before:px-2 before:text-gray-400 before:cursor-default dark:bg-black/50 dark:text-gray-200 col-span-2"
                // EXTRAS
              >
                <div className="h-full w-fit text-[1.2rem] font-semibold text-gray-400 uppercase dark:text-gray-500"
                  // className={styles.subDiv}
                >
                  extras
                </div>

                <motion.div className="w-full overflow-hidden shadow-md bg-white/80 backdrop-blur-sm cursor-grab h-full mt-3 relative before:content-['scrollable_\1f91a'] before:absolute before:bottom-0 before:left-0 before:font-medium before:text-[1.125rem] before:w-[140px] before:h-[30px] before:py-0 before:px-2 before:text-gray-400 before:cursor-default dark:bg-black/50 dark:text-gray-200 col-span-2" 
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
              
             
            </motion.div>
            
        </motion.main>
      
      <Footer />
    </div>
  )
}
