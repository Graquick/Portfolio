import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import styles from '../styles/Home.module.css';
import stylesCarousel from '../styles/Home.module.css';

import Header from '../components/header';
import Carousel from '../components/carousel';
import Modal from '../components/Modal';

export default function Home() {

  const [showModal, setShowModal] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true)
    }, 5000)
  }, [setShowModal]);
  
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
      y: -100
  },
  hidden: {
      y: -100
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
      y: 0
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

 useEffect(() => {
     setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
}, [])

const [selectedId, setSelectedId] = useState(null)
  return (
    <div className="px-5 py-0">
      <Head>
        <title>NEW! Home - Brima Freeman</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header variants={pageLoad} />
      <Modal showModal={showModal} setShowModal={setShowModal}/>
      
      <AnimatePresence exitBeforeEnter onExitComplete={() => setShowModal(false)}>
        <motion.main className={styles.main}
          variants={gridVariants}
        >
          <div className={styles.grid}>
            <div className={styles.helloCard}>
              <h1>Hello</h1>
              <p>Welcome to my website! I have been looking forward to meeting you. Click the link below to start.</p>
              <motion.div
                whileHover={{ x: 10, color: "#000", transition: { duration: .1 }}}
                whileTap={{ scale: 0.9 }}
              >
                <Link href="">
                  <a>how i became a web developer &rarr;</a>
                </Link>
              </motion.div>
            </div>

            <div className={styles.imgCard}>

            </div>

            <div className={styles.modalCard}>
              <motion.div className={styles.carousel} ref={carousel}>
                <motion.div className={styles.innerCarousel}
                drag="x" dragConstraints={{ right: 0, left: -width }}
                >
                      <motion.div className={isVisible1 ? styles.itemOpen : styles.item}
                      onTap={() => setVisible1(!isVisible1)}
                      >
                          <Image src="/sneakers.jpg"
                          width={140} height={210} layout="responsive"
                          objectFit={"cover"}
                          blurDataURL="sneakers.jpg"
                          placeholder="blur"
                          />
                          <AnimatePresence>
                            {isVisible1 ?
                                  <motion.div
                                      style={{
                                          zIndex: 10,
                                          position: "absolute",
                                          top: 0, left: 0, bottom: 0, right: 0,
                                          margin: "auto",
                                          width: 900,
                                          height: 400,
                                          borderRadius: 15,
                                          backgroundColor: "#fff",
                                          pointerEvents: "none"
                                      }}
                                      initial={{ opacity: 0, scale: 0.75 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      exit={{ opacity: 0, scale: 0 }}
                                  ><h1>Number 1</h1><button style={{ pointerEvents: "auto", cursor: "pointer" }}>Close</button></motion.div>
                              : isVisible1}
                          </AnimatePresence>
                      </motion.div>


                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.main>
      </AnimatePresence>

      <footer className="flex justify-center flex-1 px-0 py-8 border-t border-gray-200 align-center"
      // className={styles.footer}
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
