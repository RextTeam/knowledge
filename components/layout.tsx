import PageHead from './head';
import Nav from './nav'
import { ReactNode } from 'react'


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
                <footer className="bg-gray-800">
                    <p className="py-5 text-center text-xs text-white">&copy; RextTeam 2022</p>
                </footer>
            </div>
        </>
    )
}
