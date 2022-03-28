import Head from 'next/head'

import { useAppSelector, useAppDispatch } from '../src/hooks'
import { postsActions } from '../src/store'

const Counter: NextPage = () => {
  const posts = useAppSelector((state) => state.posts.posts)
  const dispatch = useAppDispatch()

  return (
    <>
      <Head>
        <title>MD-APP :: Posts</title>
        <meta
          name="description"
          content="A simple posts app with Next.js and Redux"
        />
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-start space-y-8">
        <div>
          <h1 className="text-6xl font-light py-2 mb-2">Posts</h1>
          <hr />
        </div>
      </div>
    </>
  )
}

export default Counter
