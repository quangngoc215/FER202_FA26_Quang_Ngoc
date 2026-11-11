import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';

// Next.js: KHÔNG export một store toàn cục chia sẻ giữa các request.
export const makeStore = () =>
  configureStore({ reducer: { counter: counterReducer } });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
