import {configureStore} from '@reduxjs/toolkit';
import homeFilterReducer from '../reducers/homeFilterSlice';
import homeMenuReducer from '../reducers/homeMenuSlice';
import portfolioFilterReducer from '../reducers/portfolioFilterSlice';
import projectCurIdxReducer from '../reducers/projectCurIdxSlice';

export const store = configureStore({
  reducer: {
    homeFilter: homeFilterReducer,
    homeMenu: homeMenuReducer,
    portfolioFilter: portfolioFilterReducer,
    projectCurIdx: projectCurIdxReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
