import Link from 'next/link'


export default function Nav() {
    return (
        <div className="border-b-4 border-">
            <div className="flex mx-8 justify-between my-2 items-center">
                <div>
                    <Link href="/"><a><h1 className="text-4xl">Knowledge</h1></a></Link>
                </div>
                <div>
                    <a className="text-3xl mx-2" href="https://rt.rext.dev">Website</a>
                    <a className="text-3xl mx-2" href="https://docs.rt.rext.dev">Docs</a>
                </div>
            </div>
        </div>
    )
}
