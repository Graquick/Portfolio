import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence o>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </AnimatePresence>
  )
}

export default MyApp