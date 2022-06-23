import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react';
import styles from '../styles/Success.module.css'

const notFound = () => {

  const containerVariants = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: .07,
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

  const childVariants = {
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
      <motion.div className={styles.container}
      >
      <Head>
        <title>404</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.main className={styles.main}
        variants={containerVariants}
        initial="hidden"
        animate="visible"        
      >
        <motion.h1 variants={childVariants} className={styles.title}>404 | Oops!</motion.h1>
        <motion.p variants={childVariants} className={styles.description}>The page you were looking for was not found.</motion.p>
        <motion.div className={styles.btn}
          variants={childVariants}
          whileTap={{ scale: 0.9 }}
        >&larr;<Link href="/"><a>Head back.</a></Link></motion.div>
      </motion.main>
      </motion.div>
  )
}
 
export default notFound;