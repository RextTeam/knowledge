import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'


type Param = {
    id: string,
}

type Meta = {
    title: string,
}

type Props = {
    content: MDXRemoteSerializeResult,
    meta: Meta,
}

export default async function Content({ content, meta }: Props) {
    return (
        <MDXRemote {...content}/>
    )
}

export async function getStaticPaths() {
    let files = fs.readdirSync(path.join("pages/articles"))
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

export async function getStaticProps({ params: { slug } }: Param) {
    const filedata = fs.readFileSync(path.join("pages/articles/", `${slug}.mdx`))
    const { data, content } = matter(filedata)
    const article = {
        content: await serialize(content),
        data: data,
    }
    return { props: { article } }
}
