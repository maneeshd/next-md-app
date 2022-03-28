import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AppDispatch } from '..'

interface Todo {
  id: number
  text: string
  completed: boolean
}

interface TodosState {
  todos: Todo[]
}

const initialState: TodosState = {
  todos: [],
}

const todoListSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload)
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id,
      )
      state.todos[index] = action.payload
    },
  },
})

const updateTodoAsync = (todo: Todo) => (dispatch: AppDispatch) => {
  setTimeout(() => {
    dispatch(todoListSlice.actions.updateTodo(todo))
  }, 1000)
}

export const todoListActions = {
  ...todoListSlice.actions,
  updateTodoAsync,
}

export default todoListSlice.reducer
