import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../app/store';

export interface PortfolioFilterState {
  value: string;
}

const initialState: PortfolioFilterState = {
  value: 'all',
};

export const portfolioFilterSlice = createSlice({
  name: 'potfolioFilter',
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<string>) => {
      const filter = action.payload;
      state.value = filter;
    },
  },
});

export const {changeFilter} = portfolioFilterSlice.actions;

export default portfolioFilterSlice.reducer;
export const selectPortfolioFilterValue = (state: RootState) => state.portfolioFilter.value;
