import type { ReactNode, PropsWithChildren } from 'react'

export type Props = PropsWithChildren<{
  store?: object
  fallbackUI?: ReactNode
}>

export type State = {
  hasError: boolean
  error: Error | null | undefined
}
