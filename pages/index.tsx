import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Meta from '../interfaces/meta'


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
            <p>工事中</p>
            <div>
                {articles.map(article => (
                    <Link href={`/articles/${article.url}`} key={article.url}>{article.meta.title}</Link>
                ))}
            </div>
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
