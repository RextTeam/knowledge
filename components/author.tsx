import Image from 'next/image'


const authors = {
    mc_fdc: {
        url: "https://mc-fdc.com",
        introduce: "式守さん好き"
    }
}

export default function Author(name: string) {
    return (
        <div>
            <div className="flex">
                <Image src={`/images/author/${name}`} alt={name} width={30} height={30} className="justify-center border rounded-full" />
                <h3 className="text-2xl">{name}</h3>
            </div>
            <p className="pt-3">{authors[name].introduce}</p>
        </div>
    )
}
