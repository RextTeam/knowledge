import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8715826596324259" crossOrigin="anonymous" />
                <script dangerouslySetInnerHTML={{
                    __html: `
                        (adsbygoogle = window.adsbygoogle || []).push({
                            google_ad_client: "YOUR_ID",
                            enable_page_level_ads: true
                        })
                `}} />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
