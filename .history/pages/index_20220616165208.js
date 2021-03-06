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

import Header from '../components/header';
import Carousel from '../components/carousel';
import TextAnimation from '../components/animations/TextAnimation';
import HtmlModal from '../components/Modals/HtmlModal';
import CssModal from '../components/Modals/CssModal';
import JavaModal from '../components/Modals/JavaModal';
import ReactModal from "../components/Modals/ReactModal";
import NextModal from "../components/Modals/NextModal";

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
  <rect x="7.2" y="5.2" width="17.6" height="17.6" rx="1.8" stroke-width="2.4" className={styles.rectBehind} />
  <rect
    x="1.2"
    y="1.2"
    width="17.6"
    height="17.6"
    rx="1.8"
    stroke-width="2.4"
  />
  <circle cx={13} cy={7} r="2.5" />
</svg>snap</div>, setShowFalse: () => setShowModal(false), modalType: <HtmlModal /> },
  { id: 2, setShowTrue: () => setShowCModal(true), title: <div className={styles.markCity}>apparell<svg
  width={63}
  height={72}
  viewBox="0 0 63 72"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="none"
>
  <rect y={11} width={42} height={48} className={styles.rectBehind}/>
  <rect x={21} width={42} height={48} className={styles.rectMiddle}/>
  <rect x={8} y={24} width={42} height={48} className={styles.rectFront}/>
</svg></div>, setShowFalse: () => setShowCModal(false), modalType: <CssModal /> },
  { id: 3, setShowTrue: () => setShowJModal(true), title: <div className={styles.bfBlog}><div className={styles.blogLogo}>bf</div><div className={styles.blogLogo2}>my story</div></div>, setShowFalse: () => setShowJModal(false), modalType: <JavaModal /> },
  { id: 4, setShowTrue: () => setShowRModal(true), title: <div className={styles.snap}>snap</div>, setShowFalse: () => setShowRModal(false), modalType: <ReactModal /> },
  { id: 5, setShowTrue: () => setShowNModal(true), title: <div className={styles.snap}>snap</div>, setShowFalse: () => setShowNModal(false), modalType: <NextModal /> },
]

  return (
    <div className="px-5 py-0" >
      <Head>
        <title>NEW! Home - Brima Freeman</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header variants={pageNotLoad} />
      
      {/* ModalS */}
      <HtmlModal showModal={showModal} setShowModal={setShowModal} />
      <CssModal showCModal={showCModal} setShowCModal={setShowCModal} />
      <JavaModal showJModal={showJModal} setShowJModal={setShowJModal} />
      <ReactModal showRModal={showRModal} setShowRModal={setShowRModal} />
      <NextModal showNModal={showNModal} setShowNModal={setShowNModal} />
      {/* ModalS */}
        <motion.main className={styles.main}
        >
            <motion.div className={styles.grid}
            >
              
              <motion.div className={styles.helloCard} variants={gridVariants}
                initial="hidden"
                animate="visible"
              >
                <h1>Web Developer</h1>
                <p>Brima Freeman</p>
                <motion.div
                  whileHover={{ x: 10, color: "#000", transition: { duration: .1 }}}
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

              <motion.div className={styles.modalCard} variants={gridVariants}
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
            <motion.div className={styles.gridAfter}>
              <span>&#10532;</span>
              <p>hold and scroll to explore - click to learn more</p>
            </motion.div>
        </motion.main>
      
      <footer // className="flex justify-center flex-1 px-0 py-8 bg-white border-t-4 border-black align-center"
      className="footer"
      >
        <Link className="flex justify-center flex-grow align-center"
          href="/"
          target="_blank" rel="noopener noreferrer"
        >
            <a>
              Copyright{' '}
              <span className="h-4 ml-2"
              // className={styles.logo}
              >
               &copy; Brima Freeman 2022 {' '}
              </span>
              All rights reserved
            </a>
          </Link>
      </footer>
    </div>
  )
}
