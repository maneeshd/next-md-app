import { Component } from 'react'
import type { ErrorInfo } from 'react'
import Head from 'next/head'

import { Props, State } from './types'
import styles from './styles.module.css'

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
    }
    this.onBtnClick = this.onBtnClick.bind(this)
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo)
    // You can also log the error to an error reporting service
  }

  onBtnClick() {
    window.open('/', '_self')
  }

  render() {
    if (this.state.hasError) {
      if (this?.props?.fallbackUI) {
        // You can render any custom fallback UI
        return this.props.fallbackUI
      }

      return (
        <>
          <Head>
            <title>MD-APP :: Error</title>
            <meta name="description" content="React Error Boundary" />
          </Head>

          <div className={styles.container}>
            <div className={styles.item}>
              <h1 className={styles.text}>&#128556;</h1>
              <h1 className={styles.text}>Oops! Something went wrong.</h1>
            </div>
            <div className={styles.item}>
              <h4>
                <button className={styles.reloadBtn} onClick={this.onBtnClick}>
                  Reload App
                </button>
              </h4>
            </div>
          </div>
        </>
      )
    }

    return this.props.children
  }
}
