import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import Header from '../components/header'

const About = () => {

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

      const aboutContent = [
        { id: 1, title: 'WHO AM I', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', src: 'Boots', href: '/'},

        { id: 2, title: 'WHY I CODE', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', src: 'Shoes', href: '/'},

        { id: 3, title: 'EXTRAS', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', src: 'Sneakers', href: '/'}
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
<div className="px-5 py-0 ">
      <Head>
        <title>NEW! Home - Brima Freeman</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <motion.main className="min-h-screen flex flex-col justify-center flex-1 px-0 py-16 align-center"
        variants={container}
        initial="hidden"
        animate="visible"
        exit="exit"
      // className={styles.main}
      >
                {aboutContent.map((tags, i) => {
                    return (
                        <motion.div
                            className={i % 2 === 0 ? "grid" : "gridReverse"}
                            key={tags.id}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: .8 }}
                        >

                            <motion.div 
                                variants={gridVariants}
                            >
                                <motion.div 
                                    variants={gridVariants}
                                >
                                    <h1>{tags.title}</h1>
                                    <p>{tags.desc}</p>
                                </motion.div>

                                <motion.div className="aboutBtn"
                                    variants={gridVariants}
                                    whileHover={{ x: 10, color: "#000", transition: { duration: .1 }}}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <Link href={tags.href}>
                                        learn more &rarr;
                                    </Link>
                                </motion.div>
                            </motion.div>


                            <motion.div 
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
     );
}
 
export default About;