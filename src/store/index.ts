import { configureStore } from '@reduxjs/toolkit'
import countReducer from './slices/counter'
import {CounterSliceName} from "./slices/counter/types";

export const store = configureStore({
    reducer: {
        [CounterSliceName]: countReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
