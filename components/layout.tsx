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
                <main className="px-7 pt-10 grow bg-violet-400">
                    {children}
                </main>
                <footer>
                    <p className="py-5 text-center text-xs">&copy; RextTeam 2022</p>
                </footer>
            </div>
        </>
    )
}
