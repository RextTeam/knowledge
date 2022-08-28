import Image from 'next/image'


interface AuthorT {
    [name: string]: {
        url: string
    }
}

const authors: AuthorT = {
    mc_fdc: {
        url: "https://mc-fdc.com",
    }
}

type Props = {
    name: string,
}

export default function Author({ name }: Props) {
    return (
        <div>
            <div className="flex">
                <Image src={`/images/author/${name}`} alt={name} width={10} height={10} className="justify-center border rounded-full" />
                <a href={authors[name].url}>
                    <small className="text-xl content-center">{name}</small>
                </a>
            </div>
        </div>
    )
}
