import { AnimatePresence } from 'framer-motion'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (

    <Modal showModal={showModal} setShowModal={setShowModal}/>
    <AnimatePresence  exitBeforeEnter onExitComplete={() => setShowModal(false)}>
      <Component {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp