import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'


type Param = {
    id: string;
}

export default async function Content({  }) {}

export async fucntion getStaticPaths() {
    let files = fs.readdirSync(path.join("pages/articles"))
    files = files.filter((file) => file.split(".")[1] === "mdx");
    const paths = files.map(file => {
        return {
            params: { id: file.replace(".mdx", "") }
        }
    })
    return {
        paths: paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { id } }: Param) {
    const article = await Promise.all(
        const filedata = fs.readFileSync(path.join("pages/articles/", `${id}.mdx`))
        const { data, content } = matter(filedata)
        return {
            content: content,
            data: data,
        }
    )
    return { props: { article } }
}
