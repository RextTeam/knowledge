import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import Image from 'next/image'

import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Meta } from '../../interfaces/meta'
import Author from '../../components/author'

import { 
    TwitterShareButton,
    TwitterIcon,
    FacebookShareButton,
    FacebookIcon
} from 'react-share'


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

export default function Content({ article }: Props) {
    const url = `https://knowledge.rext.dev/articles/${article.slug}`
    const CopyUrl = () => {
        navigator.clipboard.writeText(url)
        toast.success("Copied!", {
            position: "top-right",
            autoClose: 5000,
        })
    }
    return (
        <div className="px-4 md:px-20">
            <div className="flex justify-between pb-4">
                <Author name={article.meta.author} />
                <small className="text-xl content-center">{article.meta.date}</small>
            </div>
            <h2 className="text-center text-4xl md:text-5xl pb-4">{article.meta.title}</h2>
            <div className="bg-white rounded-md">
                <article className="prose">
                    <MDXRemote {...article.content}/>
                </article>
                <div className="flex justify-center md:justify-end pt-6">
                    <TwitterShareButton url={url} title={article.meta.title} className="mx-2">
                        <TwitterIcon size={32} round={true} />
                    </TwitterShareButton>
                    <FacebookShareButton url={url} quote={article.meta.title} className="mx-2">
                        <FacebookIcon size={32} round={true} />
                    </FacebookShareButton>
                    <button className="mx-2" onClick={CopyUrl}>
                       <Image src="/images/copy.webp" alt="Copy" width={32} height={32} />
                    </button>
                    <ToastContainer />
                </div>
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
