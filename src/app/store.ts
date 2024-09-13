import {configureStore} from '@reduxjs/toolkit';
import homeFilterReducer from '../reducers/homeFilterSlice';

export const store = configureStore({
  reducer: {
    homeFilter: homeFilterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
