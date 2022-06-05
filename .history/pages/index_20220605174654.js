import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import styles from '../styles/Home.module.css'

import Header from '../components/header'

export default function Home() {

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
    { id: 1, title: 'Howdy!', desc: 'My name is Brima Freeman and I am a web developer. Welcome to my website! I will be the one to show you around.', href: '/journey', src: }
]

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
  
  return (
    <div className="px-5 py-0">
      <Head>
        <title>NEW! Home - Brima Freeman</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <motion.main className={styles.main}

      >
          {mainContent.map((tags, i) => {
                    return (
                        <motion.div
                            className="grid"
                            key={tags.id}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: .8 }}
                        >

                            <motion.div className="description"
                                variants={gridVariants}
                            >
                                <motion.div 
                                    variants={gridVariants}
                                >
                                    <h1 className="text-5xl leading-tight mb-4 font-medium">{tags.title}</h1>
                                    <p className="mb-8">{tags.desc}</p>
                                </motion.div>

                                <motion.div className="aboutBtn"
                                    variants={gridVariants}
                                    whileHover={{ x: 10, color: "#000", transition: { duration: .1 }}}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Link href={tags.href}>
                                        my journey &rarr;
                                    </Link>
                                </motion.div>
                            </motion.div>

                            <motion.div className="image"
                                variants={gridVariants}
                            >
                                <Image src={`/${tags.src}.jpg`}
                                alt="something should show here"
                                width={140} height={210} layout="responsive"
                                blurDataURL='`${tags.src}.jpg`'
                                placeholder='blur' />
                            </motion.div>
                        </motion.div>
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
