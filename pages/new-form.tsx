export default function NewForm() {
    return (
        <>
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
            </form>
        </>
    )
}