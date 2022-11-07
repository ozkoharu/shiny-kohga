import { NextPage } from "next";
import { useRouter } from "next/router";

const hoge: NextPage = () => {
    const router = useRouter();
    const onClickPage3 = () => {
        router.push('/')
    }
    return (
        <>
            <h1>ページ３</h1>
            <button onClick={onClickPage3}>
                ページ１へ
            </button>
        </>
    )
}
export default hoge;