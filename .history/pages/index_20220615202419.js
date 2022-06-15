import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import styles from '../styles/Home.module.css';
import stylesCarousel from '../styles/Carousel.module.css';

import Header from '../components/header';
import Carousel from '../components/carousel';
import TextAnimation from '../components/animations/TextAnimation';
import SneakersLM from '../components/Modals/SneakersLM';
import ShoesLM from '../components/Modals/ShoesLM';
import BootsLM from '../components/Modals/BootsLM';

export default function Home() {

  const [showModal, setShowModal] = useState(false);
  const [showBLM, setShowBLM] = useState(false);
  const [showSLM, setShowSLM] = useState(false);
  
  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowModal(true)
  //   }, 5000)
  // }, [setShowModal]);
  
  const router = useRouter()

  const container = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: .3,
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
      y: 0,
      opacity: 1,
    },
    hidden: {
      x: 100,
      y: 100,
      opacity: 0
    }
  }

const gridVariants = {
  hidden: {
    y: 100,
    opacity: 0
  },
  visible: {
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

const links = [
  { id: 1, icon: 'akar-icons:github-fill', href: '/' },
  { id: 2, icon: 'akar-icons:linkedin-box-fill', href: '/gallery' },
  { id: 3, icon: 'simple-icons:codesandbox', href: '/contact' }
]


const [width, setWidth] = useState(0);
const carousel = useRef();

//  useEffect(() => {
//      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
// }, [])

const modalContent = [
  { id: 1, setShowTrue: () => setShowBLM(true), src: 'boots', setShowFalse: () => setShowBLM(false), modalType: <BootsLM showBLM={showBLM} setShowBLM={setShowBLM} /> },
  { id: 2, setShowTrue: () => setShowSLM(true), src: 'banana', setShowFalse: () => setShowSLM(false), modalType: <ShoesLM showSLM={showSLM} setShowSLM={setShowSLM} /> },
  { id: 3, setShowTrue: () => setShowModal(true), src: 'sneakers', setShowFalse: () => setShowModal(false), modalType: <SneakersLM showModal={showModal} setShowModal={setShowModal} /> },
]

  return (
    <div className="px-5 py-0">
      <Head>
        <title>NEW! Home - Brima Freeman</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header variants={pageNotLoad} />
      
        <motion.main className={styles.main}
        >
            <motion.div className={styles.grid}
            >
              
              <motion.div className={styles.helloCard} variants={gridVariants}>
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

              <motion.div className={styles.imgCard} variants={gridVariants}>
                <Image src="/code.jpg"
                  width={140} height={210} layout="responsive"
                  objectFit={"cover"}
                  blurDataURL="/code.jpg"
                  placeholder="blur"/>
              </motion.div>

              <motion.div className={styles.helloCard} variants={gridVariants}>
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

      <div className="animBg">
        <div id="dots"></div>
      </div>
      
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
