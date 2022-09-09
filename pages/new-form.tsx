import { ReactNode } from 'react'


interface Props {
    title: string;
    children: ReactNode;
}

function Content({ title, children }: Props) {
    return (
        <div className="px-2">
            <label>{ title }</label>
            <br />
            {children}
        </div>
    )
}

export default function NewForm() {
    return (
        <div className="px-5 bg-white rounded py-2">
            <h2 className="text-2xl">お問い合わせフォーム</h2>
            <form method="post" action="https://hyperform.jp/api/kzhZu7sN">
                <Content title="メールアドレス">
                    <input className="w-64 border-b-2 rounded-none outline-none" type="email" name="email" required />
                </Content>
                <Content title="お名前">
                    <input className="w-64 border-b-2 rounded-none outline-none" type="text" name="お名前" required />
                </Content>
                <Content title="件名">
                    <input className="w-64 border-b-2 rounded-none outline-none" type="text" name="件名" required />
                </Content>
                <Content title="お問い合わせ内容">
                    <textarea className="w-64 border-b-2 rounded-none outline-none" name="お問い合わせ内容" required />
                </Content>
                <button type="submit" className="rounded bg-violet-700 p-2 text-white">送信</button>
            </form>
        </div>
    )
}
