import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react';
import styles 

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
      <motion.div 
      >
      <Head>
        <title>Brima Freeman</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.main
        variants={containerVariants}
        initial="hidden"
        animate="visible"        
      >
        <motion.h1 variants={childVariants}>404 | Oops!</motion.h1>
        <motion.p variants={childVariants}>The page you were looking for was not found.</motion.p>
        <motion.div
          variants={childVariants}
          whileTap={{ scale: 0.9 }}
        >&larr;<Link href="/"><a>Head back.</a></Link></motion.div>
      </motion.main>
      </motion.div>
  )
}
 
export default notFound;