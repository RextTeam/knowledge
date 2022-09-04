import PageHead from './head';
import Nav from './nav'
import { ReactNode } from 'react'

import Link from 'next/link'


interface Props {
    children: ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <>
            <PageHead />
            <div className="flex flex-col min-h-screen">
                <Nav />
                <main className="px-7 pt-10 grow bg-violet-200">
                    {children}
                </main>
                <footer className="bg-gray-800 text-white">
                    <div className="py-10 flex flex-col-reverse md:flex-row justify-between">
                        <p className="text-xs p-2">&copy; RextTeam 2022</p>
                        <div className="flex flex-col md:flex-row">
                            <Link href="/form">
                                <a className="p-2">フォーム</a>
                            </Link>
                            <Link href="/privacy-policy">
                                <a className="p-2">プライバシーポリシー</a>
                            </Link>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
