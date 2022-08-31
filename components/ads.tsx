import { useEffect } from 'react'


export function AdArticle() {
    useEffect(() => {
        try {
            if !(typeof window === undefined) {
                (window.adsbygoogle = window.adsbygoogle || []).push({})
            }
        } catch (err) {
            console.log(err)
        }
    }, [])
    return (
        <ins className="adsbygoogle"
             style="display:block; text-align:center;"
             data-ad-layout="in-article"
             data-ad-format="fluid"
             data-ad-client="ca-pub-8715826596324259"
             data-ad-slot="3776860539"></ins>
    )
}
