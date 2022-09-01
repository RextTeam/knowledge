import { useEffect } from 'react'


declare global {
    interface Window {
        adsbygoogle: {[key: string]: unknown}[]
    }
}

export function AdArticle() {
    useEffect(() => {
        if (typeof window !== undefined) {
            (window.adsbygoogle = window.adsbygoogle || []).push({})
        }
    }, [])
    return (
        <ins className="block text-center py-2 adsbygoogle"
             data-ad-layout="in-article"
             data-ad-format="fluid"
             data-ad-client="ca-pub-8715826596324259"
             data-ad-slot="3776860539"></ins>
    )
}
