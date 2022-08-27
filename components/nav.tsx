import Link from 'next/link'


export default function Nav() {
    const Items = [
        {
            name: "Website",
            url: "https://rt.rest.dev",
        },
        {
            name: "Docs",
            url: "https://docs.rt.rext.dev",
        }
    ]
    return (
        <div className="border-b-4">
            <div className="flex mx-8 justify-between my-2 items-center">
                <div>
                    <Link href="/"><a><h1 className="text-4xl">Knowledge</h1></a></Link>
                </div>
                <ul className="flex">
                    {Items.map(item => (
                        <li className="mx-4" key={item.name}>
                            <a className="text-3xl" href={item.url} key={item.name}>{item.name}</a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}
