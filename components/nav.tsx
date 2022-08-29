import Link from 'next/link'
import React from 'react'
import Modal from 'react-modal'
import Image from 'next/image'


type Props = {
    className?: string,
    aclassName?: string,
}

const customStyles = {
    content : {
        top: '20%',
        left: '50%',
        right: '10%',
        bottom: '40%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
}

export function NavItems({ className="mx-4", aclassName="text-3xl" }: Props) {
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
        <>
            {Items.map(item => (
                <li key={item.name} className={className}>
                    <a className={aclassName} href={item.url}>{item.name}</a>
                </li>
            ))}
        </>
    )
}

export default function Nav() {
    const [modalIsOpen, setModalIsOpen] = React.useState(false)

    function openModal() {
        setModalIsOpen(true)
    }

    function closeModal() {
        setModalIsOpen(false)
    }
    return (
        <header className="border-b-4">
            <div className="flex mx-8 justify-between my-2 items-center">
                <div>
                    <h1>
                        <Link href="/">
                            <a className="text-4xl">Rext Knowledge</a>
                        </Link>
                    </h1>
                </div>
                <ul className="hidden md:flex">
                    <NavItems />
                </ul>
                <button className="md:hidden" onClick={openModal}>Menu</button>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Menu"
                    style={customStyles}>
                        <div className="flex">
                            <h2 className="text-3xl">Menu</h2>
                            <button className="ml-auto" onClick={closeModal}>
                                <Image alt="close" src="/images/x.webp" width={24} height={24} />
                            </button>
                        </div>
                        <ul>
                            <NavItems
                                className="my-2 border rounded border-violet-600 py-2"
                                aclassName="text-xl" />
                        </ul>
                </Modal>
            </div>
        </header>
    )
}
