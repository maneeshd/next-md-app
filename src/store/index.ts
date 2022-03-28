import { configureStore, combineReducers } from '@reduxjs/toolkit'

import counterReducer, { counterActions } from './slices/counterSlice'
import postsReducer, { postsActions } from './slices/postsSlice'
import todoListReducer, { todoListActions } from './slices/todoListSlice'

const reducer = combineReducers({
  counter: counterReducer,
  posts: postsReducer,
  todoList: todoListReducer,
})

const store = configureStore({ reducer })

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof reducer>
export type AppDispatch = typeof store.dispatch

// Export store as default
export default store

// Export the action generators
export { counterActions, postsActions, todoListActions }
