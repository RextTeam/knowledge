import Link from 'next/link'


export default function Nav() {
    const Items = [
        {
            name: "Website",
            url: "https://rt.rest.dev"
        },
        {
            name: "Docs",
            url: "https://docs.rt.rext.dev"
        }
    ]
    return (
        <div className="border-b-4 border-">
            <div className="flex mx-8 justify-between my-2 items-center">
                <div>
                    <Link href="/"><a><h1 className="text-4xl">Knowledge</h1></a></Link>
                </div>
                <div>
                    {Items.map(item => <a className="text-3xl mx-4" href={item.url} key={item.name}>{item.name}</a>}
                </div>
            </div>
        </div>
    )
}
