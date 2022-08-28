import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from '../components/head'
import Nav from '../components/nav'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
          <Head />
          <body className="flex flex-col min-h-screen">
              <Nav />
              <main className="px-7 pt-10 grow">
                  <Component {...pageProps} />
              </main>
              <footer>
                  <p>
              </footer>
          </body>
      </>
  )
}

export default MyApp
