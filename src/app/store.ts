import {configureStore} from '@reduxjs/toolkit';
import homeFilterReducer from '../reducers/homeFilterSlice';
import homeMenuReducer from '../reducers/homeMenuSlice';

export const store = configureStore({
  reducer: {
    homeFilter: homeFilterReducer,
    homeMenu: homeMenuReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
