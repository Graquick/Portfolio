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
    { id: 1, title: 'My Projects', desc: 'Explore my latest work including. I specialize in Frontend developement using Next.js and Tailwind CSS.', href: '/'},
    { id: 2, title: 'About', desc: 'Explore my latest work including. I specialize in Frontend developement using Next.js and Tailwind CSS.', href: '/about'},
    { id: 3, title: 'Contact', desc: 'Explore my latest work including. I specialize in Frontend developement using Next.js and Tailwind CSS.', href: '/content'},
    { id: 3, title: 'Contact', desc: 'Explore my latest work including. I specialize in Frontend developement using Next.js and Tailwind CSS.', href: '/content'},
    { id: 3, title: 'Contact', desc: 'Explore my latest work including. I specialize in Frontend developement using Next.js and Tailwind CSS.', href: '/content'},
    { id: 3, title: 'Contact', desc: 'Explore my latest work including. I specialize in Frontend developement using Next.js and Tailwind CSS.', href: '/content'}
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
        <div className="w-full flex flex-col text-center justify-around h-40">
          <motion.h1 className="m-0 text-6xl"
            // className={styles.title}
          >
            My name is <Link href="/"><a>Brima Freeman</a></Link>
          </motion.h1>

          <motion.p className="m-0 text-2xl"
            // className={styles.description}
          >
            I&apos;m a <code className="p-3 text-base text-white bg-black">WEB DEVELOPER</code>. You can either browse my portfolio through the links below.
          </motion.p>
        </div>

        <motion.div className={styles.grid}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: .8 }}
        >
          {mainContent.map((tags, i) => {
            return (
              <Link href={tags.href}>
                <motion.div className=" p-4 text-left no-underline border border-gray-300 border-solid cursor-pointer h-64 rounded-xl w-72"
                  key={tags.id}
                  variants={gridVariants}
                >
                  <motion.h2 className="mx-0 mt-0 mb-4 text-3xl uppercase"
                    whileHover={{ x: 10, color: "#000", transition: { duration: .1 }}}
                    whileTap={{ scale: 0.9 }}
                  >{tags.title} &rarr;</motion.h2>
                  <p className="m-0 text-xl">{tags.desc}</p>
                </motion.div>
              </Link>
            )
          })}
            {/* <Link href="/">
              <motion.a className=" p-4 text-left no-underline border border-gray-200 border-solid cursor-pointer h-48 rounded-xl w-72"
              // className={styles.card}
                
                whileHover={{ y: -10, x: -10}}

              >
                <h2 className="mx-0 mt-0 mb-4 text-3xl uppercase">My Projects &rarr;</h2>
                <p className="m-0 text-xl">Explore my latest work including Frontend and Backend development.</p>
              </motion.a>
            </Link> */}
        </motion.div>

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