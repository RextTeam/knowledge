import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'


export async fucntion getStaticPaths() {
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

export async function getStaticProps() {
    
}
