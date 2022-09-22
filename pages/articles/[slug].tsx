import markdownHtml from 'zenn-markdown-html'
import { JSDOM } from 'jsdom'
import 'zenn-content-css'
import Image from 'next/image'
import Link from 'next/link'

import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Meta } from '../../interfaces/meta'
import Author from '../../components/author'
import { AdArticle } from '../../components/ads'

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

type Table = {
    content: string | null,
}

type Article = {
    content: string,
    meta: Meta,
    slug: string,
    tables: Table[],
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
        <div className="px-3 md:px-8">
            <div className="flex justify-between pb-4">
                <Author name={article.meta.author} />
                <small className="text-xl content-center">{article.meta.date}</small>
            </div>
            <h2 className="text-center text-4xl md:text-5xl pb-4">{article.meta.title}</h2>
            <div className='flex'>
                <div className="w-3/4 bg-white rounded-md py-6 px-4 md:px-8">
                    <article>
                        <div className="znc prose md:prose-lg prose-pre:p-0 md:prose-pre:p-0" dangerouslySetInnerHTML={{ __html: article.content }} />
                        <AdArticle />
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
                <aside className='w-1/4 p-4 bg-white m-2 rounded max-h-96 invisible md:visible'>
                    <h3 className='text-2xl font-semibold pb-2'>目次</h3>
                    <ol className='list-decimal list-inside'>
                        {article.tables.map(table => (
                            <li className='text-lg' key={table.content}>
                                <Link href={`${url}#${table.content}`}>{table.content}</Link>
                            </li>
                        ))}
                    </ol>
                </aside>
            </div>
            <div className="py-4" />
        </div>
    )
}

export async function getStaticPaths() {
    let files = fs.readdirSync(path.join("articles"))
    files = files.filter((file) => file.split(".")[1] === "md");
    const paths = files.map(file => {
        return {
            params: { slug: file.replace(".md", "") }
        }
    })
    return {
        paths: paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }: StaticProps) {
    const filedata = fs.readFileSync(path.join("articles/", `${params.slug}.md`))
    const { data, content } = matter(filedata)
    const html = markdownHtml(content)
    const { window: { document } } = new JSDOM(html)
    const tables: Table[] = []
    document.querySelectorAll("h2").forEach((htag) => {
        tables.push({
            content: htag.textContent
        })
    })
    const article = {
        content: html,
        meta: data,
        slug: `${params.slug}`,
        tables: tables,
    }
    return { props: { article } }
}
