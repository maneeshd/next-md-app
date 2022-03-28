import Head from 'next/head'

import { useAppSelector, useAppDispatch } from '../src/hooks'
import { counterActions } from '../src/store'

const Counter: NextPage = () => {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  const increment = () => {
    count < 9999 && dispatch(counterActions.increment())
  }

  const decrement = () => {
    count < 1
      ? dispatch(counterActions.reset())
      : dispatch(counterActions.decrement())
  }

  const reset = () => dispatch(counterActions.reset())

  return (
    <>
      <Head>
        <title>MD-APP :: Counter</title>
        <meta
          name="description"
          content="A simple counter app with Next.js and Redux"
        />
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-start space-y-8">
        <div>
          <h1 className="text-6xl font-light py-2 mb-2">Counter</h1>
          <hr />
        </div>

        <div className="w-1/6 mx-auto shadow-xl rounded-2xl bg-white flex flex-col space-y-4 justify-center p-4 align-middle">
          <div className="text-4xl align-middle text-center">
            <span className="font-light">Count:</span>&nbsp;
            <span className="font-mono">{count}</span>
          </div>

          <div className="flex justify-between space-x-8 items-center">
            <div>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={reset}
                title="Reset"
              >
                &#8634;
              </button>
            </div>

            <div className="flex space-x-4 justify-evenly items-center">
              <button
                className="bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full"
                onClick={decrement}
                title="Decrement"
              >
                &minus;
              </button>

              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={increment}
                title="Increment"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Counter
