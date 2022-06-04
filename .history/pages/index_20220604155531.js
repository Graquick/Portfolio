import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {

  const container = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: .6,
      },
    },
    hidden: {
      x: "100vw",
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }

  const children = {
    visible: {
      x: 0,
      opacity: 1,
    },
    hidden: {
      x: "100vw",
      opacity: 0,
      transition : {
        type: "spring",
        mass: .7
      }
    }
  }
  
  return (
    <motion.div className="flex flex-col justify-between px-5 py-0"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <Head>
        <title>NEW! Home - Brima Freeman</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center min-h-screen px-0 py-16 align-center">
        <motion.h1 className="m-0 text-6xl leading-tight text-center"
          variants={children}
        >
          My name is <Link href="/"><a>Brima Freeman</a></Link>
        </motion.h1>

        <motion.p className="mx-0 my-16 text-2xl leading-normal text-center"
          variants={children}
        >
          I&apos;m a <code className="p-3 text-base text-white bg-black">WEB DEVELOPER</code>. You can either browse my portfolio through the links below.
        </motion.p>

        <motion.div className="flex flex-wrap justify-center m-auto h-700px max-w-7xl align-center bg-slate-500"
          variants={children}
        >
          <Link href="/">
            <motion.a className="max-w-xs p-6 m-4 text-left no-underline border border-gray-200 border-solid cursor-pointer rounded-xl"
            // className={styles.card}
              whileHover={{ y: -10, x: -10, borderColor: "#000", borderWidth: "2px", transition: { duration: .1 } }}
              whileTap={{ scale: 0.9, transition: { duration: .001 } }}
            >
              <h2 className="mx-0 mt-0 mb-4 text-2xl leading-normal">My Projects &rarr;</h2>
              <p className="m-0 text-xl leading-normal">Explore my latest work including Frontend and Backend development.</p>
            </motion.a>
          </Link>
          
          <Link href="/about">
            <motion.a className="max-w-xs p-6 m-4 text-left no-underline border border-gray-200 border-solid cursor-pointer rounded-xl"
              whileHover={{ y: -5, x: -5, borderColor: "#000", borderWidth: "2px", transition: { duration: .1 } }}
              whileTap={{ scale: 0.9, transition: { duration: .001 } }}
            >
              <h2 className="mx-0 mt-0 mb-4 text-2xl leading-normal">About &rarr;</h2>
              <p className="m-0 text-xl leading-normal">Explore my latest work including Frontend and Backend development.</p>
            </motion.a>
          </Link>
          
          <Link href="/extras">
            <motion.a className="max-w-xs p-6 m-4 text-left no-underline border border-gray-200 border-solid cursor-pointer rounded-xl"
              whileHover={{ y: -5, x: -5, borderColor: "#000", borderWidth: "2px", transition: { duration: .1 } }}
              whileTap={{ scale: 0.9, transition: { duration: .001 } }}
            >
              <h2 className="mx-0 mt-0 mb-4 text-2xl leading-normal">Extras &rarr;</h2>
              <p className="m-0 text-xl leading-normal">Explore my latest work including Frontend and Backend development.</p>
            </motion.a>
          </Link>
          
          <Link href="/hobbies">
            <motion.a className="max-w-xs p-6 m-4 text-left no-underline border border-gray-200 border-solid cursor-pointer rounded-xl"
              whileHover={{ y: -5, x: -5, borderColor: "#000", borderWidth: "2px", transition: { duration: .1 } }}
              whileTap={{ scale: 0.9, transition: { duration: .001 } }}
            >
              <h2 className="mx-0 mt-0 mb-4 text-2xl leading-normal">Hobbies &rarr;</h2>
              <p className="m-0 text-xl leading-normal">Explore my latest work including Frontend and Backend development.</p>
            </motion.a>
          </Link>
          
          <Link href="/something">
            <motion.a className="max-w-xs p-6 m-4 text-left no-underline border border-gray-200 border-solid cursor-pointer rounded-xl"
              whileHover={{ y: -5, x: -5, borderColor: "#000", borderWidth: "2px", transition: { duration: .1 } }}
              whileTap={{ scale: 0.9, transition: { duration: .001 } }}
            >
              <h2 className="mx-0 mt-0 mb-4 text-2xl leading-normal">Something &rarr;</h2>
              <p className="m-0 text-xl leading-normal">Explore my latest work including Frontend and Backend development.</p>
            </motion.a>
          </Link>
          
          <Link href="/contact">
            <motion.a className="max-w-xs p-6 m-4 text-left no-underline border-2 border-black border-solid cursor-pointer rounded-xl"
              whileHover={{ y: -5, x: -5, borderWidth: "2px", transition: { duration: .1 } }}
              whileTap={{ scale: 0.9, transition: { duration: .001 } }}
            >
              <h2 className="mx-0 mt-0 mb-4 text-2xl leading-normal">Contact &rarr;</h2>
              <p className="m-0 text-xl leading-normal">Explore my latest work including Frontend and Backend development.</p>
            </motion.a>
          </Link>
        </motion.div>
      </main>

      <footer className="flex justify-center flex-1 px-0 py-5 border-t border-gray-200 align-center"
      // className={styles.footer}
      >
        <Link className="flex justify-center flex-grow align-center"
          href="/"
          target="_blank" rel="noopener noreferrer"
        >
            <a>
              Copyright{' '}
              <span
              // className={styles.logo}
              >
               &copy; Brima Freeman 2022 {' '}
              </span>
              All rights reserved
            </a>
          </Link>
      </footer>
    </motion.div>
  )
}
