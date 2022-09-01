import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import { Meta } from '../interfaces/meta'
import { Ad } from '../components/ads'


type Article = {
    url: string,
    meta: Meta,
}

type Props = {
    articles: Article[],
}

export default function Home({ articles }: Props) {
    return (
        <>
            <h2 className="text-4xl">記事一覧</h2>
            <ul className="pt-4 list-none">
                {articles.map(article => (
                    <li key={article.url} className="p-6">
                        <Link href={`/articles/${article.url}`}>
                            <a className="text-3xl">{article.meta.title}</a>
                        </Link>
                        <div className='flex justify-between'>
                            <p className="text-xl">{article.meta.description}</p>
                            <small className="text-xl">{article.meta.date}</small>
                        </div>
                    </li>
                ))}
            </ul>
            <Ad />
            <div className="py-4" />
        </>
    )
}

export async function getStaticProps() {
    let files = fs.readdirSync(path.join("articles"))
    files = files.filter((file) => file.split(".")[1] === "mdx");
    let articles = await Promise.all(
        files.map(file => {
            const filedata = fs.readFileSync(path.join("articles/", file))
            const { data } = matter(filedata)
            return {
                meta: data,
                url: file.replace(".mdx", ""),
            }
        })
    )
    articles = [...articles].sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime())
    return {
        props: {
            articles: articles,
        },
    }
}
