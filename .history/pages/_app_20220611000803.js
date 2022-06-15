import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion'
import '../styles/globals.css'

import Modal from '../components/Modal';
import Modal from '../components/Moda';

function MyApp({ Component, pageProps }) {

  const [showModal, setShowModal] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true)
    }, 5000)
  }, [setShowModal]);

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