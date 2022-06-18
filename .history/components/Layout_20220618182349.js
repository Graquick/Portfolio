import Head from 'next/head'

function Layout( { children } ) {
  return (
    <div>
        <Head>
            <title>Next Tailwind Theme</title>
        </Head>
        <div>
            <main>
                {children}
            </main>
        </div>
    </div>
  )
}

export default Layout