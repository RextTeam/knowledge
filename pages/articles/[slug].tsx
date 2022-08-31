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
                         data-ad-layout="in-article"
                         data-ad-format="fluid"
                         data-ad-client="ca-pub-8715826596324259"
                         data-ad-slot="3776860539" />
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
            <div className="py-4" />
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
