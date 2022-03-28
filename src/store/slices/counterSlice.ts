import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AppDispatch } from '..'

// Define a type for the slice state
type CounterState = {
  value: number
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload
    },
    reset: () => initialState,
  },
})

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
const incrementAsync = (amount: number) => (dispatch: AppDispatch) => {
  setTimeout(() => {
    dispatch(counterSlice.actions.incrementByAmount(amount))
  }, 1000)
}

export const counterActions = {
  ...counterSlice.actions,
  incrementAsync,
}

export default counterSlice.reducer
