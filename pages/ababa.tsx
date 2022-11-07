import { NextPage } from "next";
import { useRouter } from "next/router";

const Url = 'http://192.168.54.246:8080/';

const ababa = () => {
    const router = useRouter();
    const onClickPage1 = async () => {
        try {
            const res = await fetch(Url);
            if (res.status === 200 && (await res.json()).ok) {
                router.push('/')
                console.log('残留思念')
            } else {
                alert('しっぱい')
            }
        } catch (e) {
            console.log('e', e);
        }
    }
    return (
        <>
            <h1>ページ２</h1>
            <button onClick={onClickPage1}>
                ページ１へ
            </button>
        </>
    )
}
export default ababa;