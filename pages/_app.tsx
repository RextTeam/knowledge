import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(()=> import("zenn-embed-elements"),[])

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
