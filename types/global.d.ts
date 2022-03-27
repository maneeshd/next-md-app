import type { FunctionComponent } from 'react'
import type { NextPage as NextPageType } from 'next'

import { RootState, AppDispatch } from '../store'

declare global {
  /* Here, declare things that go in the global namespace, or augment
   * existing declarations in the global namespace
   */

  // React  Function Component with Props
  type FCWithProps<P> = FunctionComponent<P>

  // React  Function Component without Props
  type FC = FunctionComponent<{}>

  // Next.js Page Component with Props
  type NextPageWithProps<P> = NextPageType<P>

  // Next.js Page Component without Props
  type NextPage = NextPageType<{}>

  type User = { name: string }

  type Users = Array<User>

  type StoreState = RootState

  type StoreDispatch = AppDispatch
}

export {}
