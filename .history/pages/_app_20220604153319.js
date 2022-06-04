import { AnimatePresence } from 'framer-motion'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence></AnimatePresence>
      <Component {...pageProps} />
    )
}

export default MyApp
