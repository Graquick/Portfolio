import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from 'next-themes'
import { useRouter } from 'next/router'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </AnimatePresence>
  )
}

export default MyApp