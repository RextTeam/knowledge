import Link from 'next/link'


export default function Nav() {
    const Items = [
        {
            name: "Website",
            url: "https://rext.dev",
        },
        {
            name: "Docs",
            url: "https://docs.rt.rext.dev",
        }
    ]
    return (
        <header className="border-b-4">
            <div className="flex mx-8 justify-between my-2 items-center">
                <div>
                    <h1>
                        <Link href="/">
                            <a className="text-4xl">Knowledge</a>
                        </Link>
                    </h1>
                </div>
                <ul className="flex">
                    {Items.map(item => (
                        <li className="mx-4" key={item.name}>
                            <a className="text-3xl" href={item.url}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}
