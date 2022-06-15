import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion'
import '../styles/globals.css'

import Header from '../components/header';
import Modal from '../components/Modal';

function MyApp({ Component, pageProps }) {

  const [showModal, setShowModal] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true)
    }, 5000)
  }, [setShowModal]);

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

  return (
    <>
      <Header variants={pageLoad} />
      <Modal showModal={showModal} setShowModal={setShowModal}/>
      <AnimatePresence exitBeforeEnter onExitComplete={() => setShowModal(false)}>
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  )
}

export default MyApp