import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col justify-between min-h-screen px-5 py-0">
      <Head>
        <title>NEW! Home - Brima Freeman</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center px-0 py-16 align-center">
        <h1 className="m-0 text-6xl leading-tight text-center">
          My name is <Link href="/"><a>Brima Freeman</a></Link>
        </h1>

        <p className="mx-0 my-16 text-2xl leading-normal text-center">
          I&apos;m a <code className="p-3 text-base bg-gray-100 rounded-md">WEB DEVELOPER</code>. You can either browse my portfolio through the links below.
        </p>

        <div className="flex flex-wrap justify-center max-w-3xl m-auto bg-red-100 align-center">
          <Link href="/">
            <a className="max-w-xs p-6 m-4 text-left no-underline border border-gray-100 border-solid cursor-pointer rounded-xl"
            // className={styles.card}
              whileHover={{ y: -10, x: -10, borderColor: "#0070f3", borderWidth: "2px", transition: { duration: .1 } }}
              whileTap={{ scale: 0.9, transition: { duration: .001 } }}
            >
              <h2 className="mx-0 mt-0 mb-4 text-2xl leading-normal">My Projects &rarr;</h2>
              <p className="m-0 text-xl leading-normal">Explore my latest work including Frontend and Backend development.</p>
            </a>
          </Link>
          
          <Link href="/about">
            <a className="max-w-xs p-6 m-4 text-left no-underline border border-gray-100 border-solid cursor-pointer rounded-xl"
            // className={styles.card}
              whileHover={{ y: -10, x: -10, borderColor: "#0070f3", borderWidth: "2px", transition: { duration: .1 } }}
              whileTap={{ scale: 0.9, transition: { duration: .001 } }}
            >
              <h2 className="mx-0 mt-0 mb-4 text-2xl leading-normal">About &rarr;</h2>
              <p className="m-0 text-xl leading-normal">Explore my latest work including Frontend and Backend development.</p>
            </a>
          </Link>
          
          <Link href="/extras">
            <a className="max-w-xs p-6 m-4 text-left no-underline border border-gray-100 border-solid cursor-pointer rounded-xl"
            // className={styles.card}
              whileHover={{ y: -10, x: -10, borderColor: "#0070f3", borderWidth: "2px", transition: { duration: .1 } }}
              whileTap={{ scale: 0.9, transition: { duration: .001 } }}
            >
              <h2 className="mx-0 mt-0 mb-4 text-2xl leading-normal">Extras &rarr;</h2>
              <p className="m-0 text-xl leading-normal">Explore my latest work including Frontend and Backend development.</p>
            </a>
          </Link>
          
          <Link href="/contact">
            <a className="max-w-xs p-6 m-4 text-left no-underline border-2 border-black border-solid cursor-pointer rounded-xl"
            // className={styles.card}
              whileHover={{ y: -10, x: -10, borderColor: "#0070f3", borderWidth: "2px", transition: { duration: .1 } }}
              whileTap={{ scale: 0.9, transition: { duration: .001 } }}
            >
              <h2 className="mx-0 mt-0 mb-4 text-2xl leading-normal">Contact &rarr;</h2>
              <p className="m-0 text-xl leading-normal">Explore my latest work including Frontend and Backend development.</p>
            </a>
          </Link>
        </div>
      </main>

      <footer
      // className={styles.footer}
      >
        <Link href="/"
              target="_blank" rel="noopener noreferrer">
            <a>
              Copyright{' '}
              <span
              // className={styles.logo}
              >
                Brima Freeman 2022 {' '}
              </span>
              All rights reserved.
            </a>
          </Link>
      </footer>
    </div>
  )
}
