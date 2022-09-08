import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { useEffect } from 'react'
import initTwitterScriptInner from 'zenn-embed-elements/lib/init-twitter-script-inner'

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(()=> import("zenn-embed-elements"),[])

    return (
        <Layout>
            <Component {...pageProps} />
            <script
                dangerouslySetInnerHTML={{
                    __html: initTwitterScriptInner
                }}
            />
        </Layout>
    )
}

export default MyApp
