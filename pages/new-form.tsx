export default function NewForm() {
    return (
        <div className="px-4">
            <h2 className="text-2xl">お問い合わせフォーム</h2>
            <form method="post" action="https://hyperform.jp/api/kzhZu7sN">
                <div>
                    <label>メールアドレス</label>
                    <input type="email" name="email" required />
                </div>
                <div>
                    <label>お名前</label>
                    <input type="text" name="お名前" required />
                </div>
                <div>
                    <label>お問い合わせ内容</label>
                    <textarea name="お問い合わせ内容" required />
                </div>
                <button type="submit">送信</button>
            </form>
        </div>
    )
}
