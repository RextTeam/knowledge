import Image from 'next/image'


const authors = {
    mc_fdc: {
        url: "https://mc-fdc.com",
    }
}

type Props = {
    name: string,
}

export default function Author({ author }: Props) {
    return (
        <div>
            <div className="flex">
                <Image src={`/images/author/${name}`} alt={name} width={10} height={10} className="justify-center border rounded-full" />
                <a href={authors[name].url}>
                    <h3 className="text-2xl content-center">{name}</h3>
                </a>
            </div>
        </div>
    )
}
