// Testing Error Boundary Component
import Head from 'next/head'
import useSwr from 'swr'
import { usersFetcher } from '../utils'

const Test: NextPage = () => {
  const { data, error } = useSwr('/api/users', usersFetcher)

  if (!data) return <div>Loading...</div>

  if (error) console.error(error)

  return (
    <>
      <Head>
        <title>Test Page</title>
        <meta name="description" content="A test page to check react error boundary" />
      </Head>

      <h1>Test Page</h1>
      <div>User 69: {data[69].name}</div>
    </>
  )
}

export default Test
