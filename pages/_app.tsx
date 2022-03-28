import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ErrorBoundary from '../src/components/ErrorBoundary'
import { Provider } from 'react-redux'
import store from '../src/store'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const { pathname } = router

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>

      <ErrorBoundary>
        <ChakraProvider>
          <Provider store={store}>
            {pathname !== '/' && (
              <div className="w-screen absolute top-0 left-0">
                <Link href="/">
                  <a className="font-mono font-semibold">&lt; Home</a>
                </Link>
              </div>
            )}
            <Component {...pageProps} />
          </Provider>
        </ChakraProvider>
      </ErrorBoundary>
    </>
  )
}

export default MyApp
