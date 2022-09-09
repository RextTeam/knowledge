import { ReactNode } from 'react'


interface Props {
    title: string;
    children: ReactNode;
}

function Content({ title, children }: Props) {
    return (
        <div>
            <label>{ title }</label>
            <br />
            {children}
        </div>
    )
}

export default function NewForm() {
    return (
        <div className="px-4">
            <h2 className="text-2xl">お問い合わせフォーム</h2>
            <form method="post" action="https://hyperform.jp/api/kzhZu7sN">
                <Content title="メールアドレス">
                    <input type="email" name="email" required />
                </Content>
                <Content title="お名前">
                    <input type="text" name="お名前" required />
                </Content>
                <Content title="お問い合わせ内容">
                    <textarea name="お問い合わせ内容" required />
                </Content>
                <button type="submit" className="rounded bg-violet-700 p-2">送信</button>
            </form>
        </div>
    )
}
