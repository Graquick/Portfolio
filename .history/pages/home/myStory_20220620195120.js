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

  useEffect(() => {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
 }, [])

 const modalContent = [
  { id: 1, setShowTrue: () => setShowG1Modal(true), title: <div className={styles.gallery1}>Gallery Item 1</div>, setShowFalse: () => setShowG1Modal(false), modalType: <Gallery1Modal /> },
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

              <motion.div className={styles.helloCard} variants={gridVariants}>
                <h1>Work</h1>
                <p>I am a <span>Frontend Developer</span> based in Finland. I have focused the last 2 years on HTML, CSS, and Javascript. My main platform has been React, powered with Next.js.</p>
              </motion.div>
              
              <motion.div className={styles.helloCard} variants={gridVariants}>
                <p>I am also a <span>UI/UX Designer</span>. I have been designing for more than 5 years. My most used platforms are Figma, Canva, and Adobe XD.</p>
                <br />
                <p>I am looking for growth opportunities and new challenges, as I am very interested in improving myself.  </p>
                
                <Link href="#myStoryCont">
                  <motion.div style={{ alignSelf: "flex-end", width: 50, height: 50, cursor: "pointer"}}
                    whileHover={{ y: 10, transition: { duration: .1 }}}
                    whileTap={{ scale: 0.9 }}
                  >
                      <a>&darr;</a>
                  </motion.div>
                </Link>
              </motion.div>

              <div className={styles.subDiv}>
                gallery | 
              </div>

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
      
      <Footer />
    </div>
  )
}
