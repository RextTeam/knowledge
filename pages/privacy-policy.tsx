import { ReactNode } from 'react'


interface Props {
    title: string;
    children: ReactNode;
}

function Item({ title, children }: Props) {
    return (
        <div className="py-2">
            <h2 className="text-xl">{title}</h2>
            {children}
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
            </div>
        </div>
    )
}
