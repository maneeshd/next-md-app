import Head from 'next/head'

import { useAppSelector, useAppDispatch } from '../hooks'
import { todoListActions } from '../store'

const Counter: NextPage = () => {
  const todos = useAppSelector((state) => state.todoList.todos)
  const dispatch = useAppDispatch()

  return (
    <>
      <Head>
        <title>MD-APP :: ToDo List</title>
        <meta name="description" content="A simple todo list app with Next.js and Redux" />
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-start space-y-8">
        <div>
          <h1 className="text-6xl font-light py-2 mb-2">ToDo List</h1>
          <hr />
        </div>
      </div>
    </>
  )
}

export default Counter
