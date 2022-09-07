import { ReactNode } from 'react'

import Link from 'next/link'


interface Props {
    title: string;
    children: ReactNode;
}

function Item({ title, children }: Props) {
    return (
        <div className="py-2">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="py-2">{children}</p>
        </div>
    )
}


export default function PrivacyPolicy() {
    return (
        <div className="px-4">
            <h2 className="text-4xl text-center">プライバシーポリシー</h2>
            <div>
                <Item title="個人情報の定義">
                    <p>
                        「個人情報」とは、利用者の識別に係る情報、通信サービス上の行動履歴、その他利用者又は利用者の端末に関連して生成又は蓄積された情報であって、
                        当組織が収集するものを意味するものとします。
                    </p>
                </Item>
                <Item title="利用目的">
                    <p className="pb-2">
                        Rextナウレッジ(以下当サービス)では、お問い合わせなどにメールアドレス等の個人情報を登録するときがあります。
                    </p>
                    <p>
                        お問い合わせなどで収集した個人情報は主に質問に対する回答で利用しますので、それ以外の目的で利用することはありません
                    </p>
                </Item>
                <Item title="第三者への個人情報の提供">
                    <p>
                        RextTeam(以下当組織)は、あらかじめ本人の同意を得ないで、個人データを第三者に提供しません。
                        ただし，個人情報保護法その他の法令で認められる場合を除きます。
                    </p>
                </Item>
                <Item title="広告の配信について">
                    当サービスは広告サービスである「Google Adsense」を利用しています。
                    
                    広告サービスはCookieを利用して、ユーザーの興味に応じた広告を表示しております。Cookieを無効にしたい場合は
                    <a href="https://www.google.com/intl/ja/policies/privacy/partners/" className="text-indigo-800">こちら</a>をご覧ください。
                </Item>
                <Item title="プライバシーポリシーの変更について">
                    プライバシーポリシーの変更はユーザーに通知することなく変更することができます。
                </Item>
                <Item title="お問い合わせ">
                    当サービスに関するお問い合わせは
                    <Link href="/form">
                        <a className="text-indigo-800">フォーム</a>
                    </Link>または、<a href="mailto:tasuren5@gmail.com" className="text-indigo-800">メール</a>にてお願いします。
                </Item>
            </div>
        </div>
    )
}
