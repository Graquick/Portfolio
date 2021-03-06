import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react';
import styles from '../styles/'

const Error = () => {

  const containerVariants = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: .5,
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
        <motion.h1 variants={childVariants}>Something went wrong.</motion.h1>
        <motion.p variants={childVariants}>Don&apos;t worry. I will take care of it.</motion.p>
        <motion.div
          variants={childVariants}
          whileTap={{ scale: 0.9 }}
        >&larr;<Link href="/"><a>Head back.</a></Link></motion.div>
      </motion.main>
      </motion.div>
  )
}
 
export default Error;