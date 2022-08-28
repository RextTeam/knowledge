import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Meta } from '../../interfaces/meta'
import Author from '../../components/author'
import React from 'react'
import Modal from 'react-modal'


type Param = {
    slug: string,
}

type StaticProps = {
    params: Param,
}

type Article = {
    content: MDXRemoteSerializeResult,
    meta: Meta,
    slug: string,
}

type Props = {
    article: Article,
}

function ShareModal({article}: Props) {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Share"
        >
            <p>hi</p>
            <button onClick={closeModal}>close</button>
        </Modal>
    )
}

export default function Content({ article }: Props) {
    function CopyUrl() {
        navigator.clipboard.writeText(`https://knowledge.rext.dev/articles/${article.slug}`)
    }
    return (
        <div>
            <div className="flex justify-between pb-4">
                <Author name={article.meta.author} />
                <small className="text-xl content-center">{article.meta.date}</small>
            </div>
            <h2 className="text-center text-5xl">{article.meta.title}</h2>
            <article className="prose">
                <MDXRemote {...article.content}/>
            </article>
            <div className="flex justify-end">
                <button className="border rounded p-2 text-xl" onClick={() => CopyUrl()}>Copy link</button>
                <ShareModal article=article />
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    let files = fs.readdirSync(path.join("articles"))
    files = files.filter((file) => file.split(".")[1] === "mdx");
    const paths = files.map(file => {
        return {
            params: { slug: file.replace(".mdx", "") }
        }
    })
    return {
        paths: paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }: StaticProps) {
    const filedata = fs.readFileSync(path.join("articles/", `${params.slug}.mdx`))
    const { data, content } = matter(filedata)
    const article = {
        content: await serialize(content),
        meta: data,
        slug: `${params.slug}`,
    }
    return { props: { article } }
}
