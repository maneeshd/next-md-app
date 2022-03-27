import '../styles/globals.css'
import type { AppProps } from 'next/app'
import ErrorBoundary from '../components/ErrorBoundary'
import { Provider } from 'react-redux'
import store from '../store'
import Link from 'next/link'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const { pathname } = router

  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  )
}

export default MyApp
