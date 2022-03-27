import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AppDispatch } from '../'

type Post = {
  id: number
  title: string
  body: string
}

type PostsState = {
  posts: Post[]
}

const initialState: PostsState = {
  posts: [],
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload)
    },
    removePost: (state, action: PayloadAction<number>) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload)
    },
    updatePost: (state, action: PayloadAction<Post>) => {
      const index = state.posts.findIndex((post) => post.id === action.payload.id)
      state.posts[index] = action.payload
    },
  },
})

const updatePostAsync = (post: Post) => (dispatch: AppDispatch) => {
  setTimeout(() => {
    dispatch(postsSlice.actions.updatePost(post))
  }, 1000)
}

export const postsActions = {
  ...postsSlice.actions,
  updatePostAsync,
}

export default postsSlice.reducer
