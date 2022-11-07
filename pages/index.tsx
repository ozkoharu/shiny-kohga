import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter();

  const onClickPage2 = () => {
    router.push('/ababa');
  }
  const onClickPage3 = () => {
    router.push('/hoge')
  }
  return (
    <>
      <h1>ページ１</h1>
      <button onClick={onClickPage2}>
        ページ２
      </button>
      <button onClick={onClickPage3}>
        ページ３
      </button>
    </>
  )
}

export default Home
