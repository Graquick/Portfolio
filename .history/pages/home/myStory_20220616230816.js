import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import styles from '../../styles/myStory.module.css';
import stylesCarousel from '../../styles/Carousel.module.css';

import Header from '../../components/header';
import Carousel from '../../components/carousel';

export default function myStory() {

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowModal(true)
  //   }, 5000)
  // }, [setShowModal]);
  
  // const router = useRouter()

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
    x: -100,
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


// const [width, setWidth] = useState(0);
// const carousel = useRef();

//  useEffect(() => {
//      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
// }, [])


  return (
    <div className="px-5 py-0">
      <Head>
        <title>My Story - Brima Freeman</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header variants={pageNotLoad} />

        <motion.main className={styles.main} 
        >
            <motion.div className={styles.grid} id="myStory"
              variants={gridVariants}
              initial="hidden"
              animate="visible"
              viewport={{ once: true, amount: .8 }}
            >
              <motion.div className={styles.helloCard} variants={gridVariants}>
                <h1>About</h1>
                <p>I&apos;m a Frontend Developer based in Finland. I have spent the last 2 years as a Frontend Developer. </p>
                <br />
                <p>Still learning, of course...</p>
              </motion.div>
              
              <motion.div className={styles.helloCard} variants={gridVariants}>
                <p>I started at <span><Link href="https://www.freecodecamp.org/"><a className={styles.freeLink} style={{ textTransform: "none", fontWeight: 600, fontSize: "1.25rem", color: "#4194cb" }}>freeCodeCamp.org</a></Link></span> with the basics - HTML and CSS. While it took me some time to get a hang of it, I started building my own projects.</p>
                <br />
                <p>My favourite way of learning was watching video tutorials. Later, I started reading and understanding web documentations more and more.</p>
                
                <Link href="#myStoryCont">
                  <motion.div style={{ alignSelf: "flex-end", width: 50, height: 50, cursor: "pointer"}}
                    whileHover={{ y: 10, transition: { duration: .1 }}}
                    whileTap={{ scale: 0.9 }}
                  >
                      <a>&darr;</a>
                  </motion.div>
                </Link>
              </motion.div>

              {/* <motion.div className={styles.imgCard} variants={gridVariants}>
                <Image src="/sneakers.jpg"
                  width={140} height={210} layout="responsive"
                  objectFit={"cover"}
                  blurDataURL="/sneakers.jpg"
                  placeholder="blur"/>
              </motion.div> */}

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

            <motion.div className={styles.grid} id="myStoryCont" style={{ gridTemplateRows: "55% 35%", height: 950 }}
              variants={gridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: .2 }}
            >
              
              <motion.div className={styles.helloCard} variants={gridVariants}>
                <h1>Skills</h1>
                <p>My current favourite framework is Next JS, since it&apos;s a React framework library for production. In other words, it&apos;s a beast when it comes to Frontend development.</p>
                <br />
                <p>This website was built by Next JS.</p>
              </motion.div>
              
              <motion.div className={styles.helloCard} variants={gridVariants}>
                <p>Check out my latest work at my <span><Link href="/projects"><a className={styles.freeLink} style={{ textTransform: "none", fontWeight: 600, fontSize: "1.5rem", color: "#4194cb" }}>projects</a></Link></span> page. There you&apos;ll find a short description of every project and a preview of the live site.</p>
                <br />
                <p>In addition to web development, I love to design! In the design world, Figma is my absolute favourite platform. You can check all of my design work at my <span><Link href="https://www.freecodecamp.org/"><a className={styles.freeLink} style={{ textTransform: "none", fontWeight: 600, fontSize: "1.5rem", color: "#4194cb" }}>dribble</a></Link></span> site.</p>
                
                <Link href="#myStoryEnd">
                  <motion.div style={{ alignSelf: "flex-end", width: 50, height: 50, cursor: "pointer"}}
                    whileHover={{ y: 10, transition: { duration: .1 }}}
                    whileTap={{ scale: 0.9 }}
                  >
                      <a>&darr;</a>
                  </motion.div>
                </Link>
              </motion.div>

              <motion.div className={styles.imgCard} variants={gridVariants} style={{ gridColumnStart: "span 2" }}>
                <Image src="/sneakers.jpg"
                  width={140} height={210} layout="responsive"
                  objectFit={"cover"}
                  blurDataURL="/sneakers.jpg"
                  placeholder="blur"/>
              </motion.div>

              {/* <motion.div className={styles.imgCard} variants={gridVariants}>
                <Image src="/sneakers.jpg"
                  width={140} height={210} layout="responsive"
                  objectFit={"cover"}
                  blurDataURL="/sneakers.jpg"
                  placeholder="blur"/>
              </motion.div> */}

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
            
            
            <motion.div className={styles.grid} id="myStoryEnd"
              variants={gridVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: .8 }}
            >
              
              <motion.div className={styles.helloCard} variants={gridVariants}>
                <h1>Extras</h1>
                <p>My current favourite framework is Next JS, since it&apos;s a React framework library for production. In other words, it&apos;s a beast when it comes to Frontend development.</p>
                <br />
                <p>This website was built by Next JS.</p>
              </motion.div>
              
              <motion.div className={styles.helloCard} variants={gridVariants}>
                <p>Check out my latest work at my <span><Link href="/projects"><a className={styles.freeLink} style={{ textTransform: "none", fontWeight: 600, fontSize: "1.5rem", color: "#4194cb" }}>projects</a></Link></span> page. There you&apos;ll find a short description of every project and a preview of the live site.</p>
                <br />
                <p>In addition to web development, I love to design! In the design world, Figma is my absolute favourite platform. You can check all of my design work at my <span><Link href="https://www.freecodecamp.org/"><a className={styles.freeLink} style={{ textTransform: "none", fontWeight: 600, fontSize: "1.5rem", color: "#4194cb" }}>dribble</a></Link></span> site.</p>
                
                <Link href="#myStory">
                  <motion.div style={{ alignSelf: "flex-end", width: 50, height: 50, cursor: "pointer"}}
                    whileHover={{ y: 10, transition: { duration: .1 }}}
                    whileTap={{ scale: 0.9 }}
                  >
                      <a>&uarr;</a>
                  </motion.div>
                </Link>
              </motion.div>

              {/* <motion.div className={styles.imgCard} variants={gridVariants}>
                <Image src="/sneakers.jpg"
                  width={140} height={210} layout="responsive"
                  objectFit={"cover"}
                  blurDataURL="/sneakers.jpg"
                  placeholder="blur"/>
              </motion.div> */}

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
