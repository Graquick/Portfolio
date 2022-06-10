import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react';
import styles from '../styles/Home.module.css'

import Header from '../components/header'
import Carousel from '../components/carousel'

export default function Home() {

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

  const mainContent = [
    { id: 1, title: 'Hello!', desc: 'Welcome to my website! I have been looking forward to meeting you. Click the link below to start.', href: '/home/index2', href2: 'how i became a web developer', src: 'me'}
]

const items = [
  { id: 1, title: 'hello', subtitle: 'this is my item number 1' },
  { id: 2, title: 'hello', subtitle: 'this is my item number 2' },
  { id: 3, title: 'hello', subtitle: 'this is my item number 3' },
  { id: 4, title: 'hello', subtitle: 'this is my item number 4' },
]

const gridVariants = {
  offscreen: {
    y: 100,
    opacity: 0
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.4
    }
  },
  exit: {
    y: 100,
    opacity: 0
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
  
const [selectedId, setSelectedId] = useState(null)
  return (
    <div className="px-5 py-0">
      <Head>
        <title>NEW! Home - Brima Freeman</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header variants={pageLoad} />

      <motion.main className="flex flex-col justify-start flex-1 max-w-6xl min-h-screen gap-64 px-0 py-16 m-auto mb-32 align-center"

      >
          {mainContent.map((tags, i) => {
                    return (
                      <AnimatePresence>
                        <motion.div
                            className={styles.grid}
                            key={tags.id}
                            exit="exit"
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: .8 }}
                        >
                            <motion.div className={styles.gridInfo}>
                              <motion.div className={styles.description}
                                  variants={gridVariants}
                              >
                                  <motion.div 
                                      variants={gridVariants}
                                  >
                                      <h1 className="mb-4 text-5xl font-medium leading-tight">{tags.title}</h1>
                                      <p className="mb-8">{tags.desc}</p>
                                  </motion.div>

                                  <motion.div className={styles.aboutBtn}
                                      variants={gridVariants}
                                      whileHover={{ x: 10, color: "#000", transition: { duration: .1 }}}
                                      whileTap={{ scale: 0.9 }}
                                  >
                                      <Link href={tags.href}>
                                          <div>{tags.href2} &rarr;</div>
                                      </Link>
                                  </motion.div>
                              </motion.div>
                              <motion.div className="w-full h-68 "
                                variants={gridVariants}
                              >
                                <Carousel />
                              </motion.div>
                            </motion.div>

                            <motion.div className="image"
                                variants={gridVariants}
                            >
                                <Image src={`/${tags.src}.jpg`}
                                alt="something should show here"
                                width={140} height={180} layout="responsive"
                                objectFit={'cover'}
                                blurDataURL='`${tags.src}.jpg`'
                                placeholder='blur' />
                            </motion.div>
                        </motion.div>
                      </AnimatePresence>
                    )
                })}
      </motion.main>

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
