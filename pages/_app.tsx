import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from '../components/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
          <Head />
          <body>
              <Component {...pageProps} />
          </body>
      </>
  )
}

export default MyApp
