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

      <main className="flex flex-col justify-center px-0 py-10 bg-red-500 align-center">
        <h1>
          My name is <Link></Link>
        </h1>
      </main>
      
      

    </div>
  )
}
