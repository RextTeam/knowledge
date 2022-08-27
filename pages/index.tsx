import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import { Meta } from '../interfaces/meta'


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
            <h2 className="text-5xl">記事一覧</h2>
            <li>
                {articles.map(article => (
                    <ul key={article.url}>
                        <Link href={`/articles/${article.url}`}>
                            <a className="text-3xl">{article.meta.title}</a>
                        </Link>
                        <p className="text-xl">{article.meta.description}</p>
                    </ul>
                ))}
            </li>
        </>
    )
}

export async function getStaticProps() {
    let files = fs.readdirSync(path.join("articles"))
    files = files.filter((file) => file.split(".")[1] === "mdx");
    const articles = await Promise.all(
        files.map(file => {
            const filedata = fs.readFileSync(path.join("articles/", file))
            const { data } = matter(filedata)
            return {
                meta: data,
                url: file.replace(".mdx", ""),
            }
        })
    )
    return {
        props: {
            articles: articles,
        },
    }
}
