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
                    <div className="py-10 flex justify-between">
                        <p className="text-xs">&copy; RextTeam 2022</p>
                        <div className="flex">
                            <Link href="/form" className="px-2">フォーム</Link>
                            <Link href="/privacy-policy" className="px-2">プライバシーポリシー</Link>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
