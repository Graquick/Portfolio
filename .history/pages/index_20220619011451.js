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
import Footer from '../components/footer';
import Carousel from '../components/carousel';
import TextAnimation from '../components/animations/TextAnimation';
import SnapModal from '../components/Modals/SnapModal';
import ApparellModal from '../components/Modals/ApparellModal';
import BfBlogModal from '../components/Modals/BfBlogModal';
import CalcModal from "../components/Modals/CalcModal";

export default function Home() {
  


  const [showModal, setShowModal] = useState(false);
  const [showCModal, setShowCModal] = useState(false);
  const [showJModal, setShowJModal] = useState(false);
  const [showRModal, setShowRModal] = useState(false);
  const [showNModal, setShowNModal] = useState(false);
  
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


const [width, setWidth] = useState(0);
const carousel = useRef();

  useEffect(() => {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
 }, [])

const modalContent = [
  { id: 1, setShowTrue: () => setShowModal(true), title: <div className={styles.snap}>  <svg
  width={26}
  height={24}
  viewBox="0 0 26 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="none"
>
  <rect x="7.2" y="5.2" width="17.6" height="17.6" rx="1.8" strokeWidth="2.4" className={styles.rectBehind} />
  <rect
    x="1.2"
    y="1.2"
    width="17.6"
    height="17.6"
    rx="1.8"
    strokeWidth="2.4"
  />
  <circle cx={13} cy={7} r="2.5" />
</svg>snap</div>, setShowFalse: () => setShowModal(false), modalType: <SnapModal /> },

  { id: 2, setShowTrue: () => setShowCModal(true), title:
  <div className={styles.apparell}>.apparell</div>,
setShowFalse: () => setShowCModal(false), modalType: <ApparellModal /> },


  { id: 3, setShowTrue: () => setShowJModal(true), title: <div className={styles.bfBlog}><div className={styles.bfBlogLogo}>bf</div><div className={styles.bfBlogLogo2}>blog</div></div>, setShowFalse: () => setShowJModal(false), modalType: <BfBlogModal /> },


  { id: 4, setShowTrue: () => setShowRModal(true), title: <div className={styles.calculator}>Calco,inc.</div>, setShowFalse: () => setShowRModal(false), modalType: <CalcModal /> },
]

  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="px-5 py-0 transition duration-500 bg-gray-200 dark:bg-neutral-800" >
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
              
              <motion.div className="flex flex-col p-8 mb-8 text-left shadow-md bg-white/80 backdrop-blur-sm dark:bg-black/50" 
                // className={styles.helloCard}
                variants={gridVariants}
                initial="hidden"
                animate="visible"
              >
                <h1 className="font-medium text-[5rem] mb-4 dark:text-gray-200">Web Developer</h1>
                <p className="text-[3rem] mb-8 dark:text-gray-200">Brima Freeman</p>
                <motion.div className="w-[fit-content] text-[1.65rem] p-3 uppercase relative after:content[''] after:absolute after:bottom-0 after:left-0 after:bg-black after:w-[0%] after:h-[2px] after:flex after:items-end after:justify-end after:transition-all after:duration-150 hover:after:w-full dark:text-gray-200 dark:after:bg-gray-200"
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
                  width={140} height={210} layout="responsive"
                  objectFit={"cover"}
                  blurDataURL="/code.jpg"
                  placeholder="blur"/>
              </motion.div>

              <div className="h-full w-fit text-[1.2rem] font-semibold text-gray-400 uppercase dark:text-gray-500">
                selected projects
              </div>

              <motion.div className="w-full overflow-hidden shadow-md bg-white/80 backdrop-blur-sm cursor-grab h-[55%] mt-3 relative before:content['']"
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
                      {/* <div>HTML</div>
                      <div>CSS</div>
                      <div>JavaScript</div>
                      <div>React</div>
                      <div>Next JS</div> */}
                  </motion.div>
                </motion.div>
                
              </motion.div>

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
