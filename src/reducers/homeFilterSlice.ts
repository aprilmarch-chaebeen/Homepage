import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../app/store';

export interface HomeFilterState {
  value: string;
}

const initialState: HomeFilterState = {
  value: 'all',
};

export const homeFilterSlice = createSlice({
  name: 'homeFilter',
  initialState,
  reducers: {
    homeFilter: (state, action: PayloadAction<string>) => {
      const filter = action.payload;
      state.value = filter;
    },
  },
});

export const {homeFilter} = homeFilterSlice.actions;

export default homeFilterSlice.reducer;
export const selectHomeFilterValue = (state: RootState) => state.homeFilter.value;
