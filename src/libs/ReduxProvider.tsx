'use client';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import counterReducer from "../stores/sampleCounter"

const store = configureStore({
  reducer: {
    counter: counterReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

interface Props {
  children: React.ReactNode;
}
/**
 * ReduxのProvider
 * "use client"を使用するようにと、warningが出るのでラップしている。
 * @param children 
 * @returns 
 */
export const ReduxProvider = ({ children }: Props) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
} 
