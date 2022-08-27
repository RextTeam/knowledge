import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from '../components/head'
import Nav from '../components/nav'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
          <Head />
          <body>
              <Nav />
              <main className="px-7 pt-10">
                  <Component {...pageProps} />
              </main>
          </body>
      </>
  )
}

export default MyApp
