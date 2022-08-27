import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import fs, { Promiss } from 'fs'
import path from 'path'
import matter from 'gray-matter'

const Home: NextPage = () => {
    return <p>工事中</p>
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
