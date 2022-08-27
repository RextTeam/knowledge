import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

interface Article {
    title: string;
}

interface PropsT {
    articles: Article;
}

const Home: NextPage = ({ articles }) => {
    return (
        <>
            <p>工事中</p>
            <div>
                {articles.map(article => (
                    <a href={article.url} key={article.url}>{article.meta.title}</a>
                ))}
            </div>
        </>
    )
}

export default Home

export default async function getStaticProps() {
    let files = fs.readdirSync(path.join("pages/articles"))
    files = files.filter((file) => file.split(".")[1] === "mdx");
    const articles = await Promiss.all(
        files.map(file => {
            const filedata = fs.readFileSync(path.json("pages/articles/", file))
            const { data } = matter(filedata)
            return {
                meta: data,
                url: file,
            }
        })
    )
    return {
        Props: {
            articles,
        },
    }
}
