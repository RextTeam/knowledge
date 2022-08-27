import BaseHead from 'next/head'


export default function Head() {
    return (
        <BaseHead>
            <title>Rextナウレッジ</title>
            <meta property='og:title' content='Rextナウレッジ' />
            <meta property='og:description' content='Rextたちのブログサイト。' />
            <meta property='og:type' content='article' />
        </BaseHead>
    )
}
