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
          I&apos;m a <code className="p-3 text-base bg-gray-100 rounded-md"
          // className={styles.code}
          >WEB DEVELOPER</code>. You can either browse my portfolio through the links below.
        </p>

        <div
        // className={styles.grid}
        >
          <Link href="/">
            <a
            // className={styles.card}
              whileHover={{ y: -10, x: -10, borderColor: "#0070f3", borderWidth: "2px", transition: { duration: .1 } }}
              whileTap={{ scale: 0.9, transition: { duration: .001 } }}
            >
              <h2>My Projects &rarr;</h2>
              <p>Explore my latest work including Frontend and Backend development.</p>
            </a>
          </Link>

          <Link href="/about">
            <a
            // className={styles.card}
              whileHover={{ y: -10, x: -10, borderColor: "#0070f3", borderWidth: "2px", transition: { duration: .1 } }}
              whileTap={{ scale: 0.9, transition: { duration: .001 } }}
            >
              <h2>About &rarr;</h2>
              <p>Learn about my exciting journey and everything in between.</p>
            </a>
          </Link>

          <Link href="/about">
            <a
            // className={styles.card}
              whileHover={{ y: -10, x: -10, borderColor: "#0070f3", borderWidth: "2px", transition: { duration: .1 } }}
              whileTap={{ scale: 0.9, transition: { duration: .001 } }}
            >
              <h2>Extras &rarr;</h2>
              <p>My most favourite hobbies that nurture my creativity in web development.</p>
            </a>
          </Link>

          <Link href="/contact">
            <a
            // className={styles.contactcard}
              whileHover={{ y: -10, x: -10, transition: { duration: .1 } }}
              whileTap={{ scale: 0.9, transition: { duration: .001 } }}
            >
              <h2>Contact &rarr;</h2>
              <p>
                All of my contact details and socials. I&apos;m looking forward to getting in touch!
              </p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
