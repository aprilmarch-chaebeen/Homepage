import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../app/store';

export interface HomeFilterState {
  filter: string;
  num: number;
}

const initialState: HomeFilterState = {
  filter: 'all',
  num: 28,
};

export const homeFilterSlice = createSlice({
  name: 'homeFilter',
  initialState,
  reducers: {
    homeFilter: (state, action: PayloadAction<string>) => {
      const filter = action.payload;
      state.filter = filter;
    },
    filterNum: (state, action: PayloadAction<number>) => {
      const num = action.payload;
      state.num = num;
    },
  },
});

export const {homeFilter, filterNum} = homeFilterSlice.actions;

export default homeFilterSlice.reducer;
export const selectHomeFilterValue = (state: RootState) => state.homeFilter;
