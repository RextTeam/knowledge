import Image from 'next/image'


interface AuthorT {
    [name: string]: {
        url: string
    }
}

const authors: AuthorT = {
    mc_fdc: {
        url: "https://mc-fdc.com",
    },
    tasuren: {
        url: "https://tasuren.f5.si",
    }
}

type Props = {
    name: string,
}

export default function Author({ name }: Props) {
    return (
        <div>
            <div className="flex">
                <Image src={`/images/authors/${name}.webp`} alt={name} width={30} height={30} className="justify-center border rounded-full" />
                <a href={authors[name].url} className="pl-2">
                    <small className="text-xl content-center">{name}</small>
                </a>
            </div>
        </div>
    )
}
