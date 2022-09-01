import { useEffect } from 'react'


declare global {
    interface Window {
        adsbygoogle: {[key: string]: unknown}[]
    }
}

export function AdArticle() {
    useEffect(() => {
        if (typeof window !== undefined) {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({})
            } catch (error) {
                console.error(error)
            }
        }
    }, [])
    return (
        <ins className="block text-center py-4 adsbygoogle"
             data-ad-layout="in-article"
             data-ad-format="fluid"
             data-ad-client="ca-pub-8715826596324259"
             data-ad-slot="3776860539"></ins>
    )
}

export function Ad() {
    useEffect(() => {
        if (typeof window !== undefined) {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({})
            } catch (error) {
                console.error(error)
            }
        }
    }, [])
    return (
        <ins className="block justify-center adsbygoogle"
             data-ad-client="ca-pub-8715826596324259"
             data-ad-slot="9147556969"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins>
    )
}
