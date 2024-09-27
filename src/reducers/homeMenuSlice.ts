import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../app/store';

export interface HomeMenuState {
  value: boolean;
}

const initialState: HomeMenuState = {
  value: false,
};

export const homeMenuSlice = createSlice({
  name: 'homeMenu',
  initialState,
  reducers: {
    openMenu: (state) => {
      state.value = true;
    },
    closeMenu: (state) => {
      state.value = false;
    },
  },
});

export const {openMenu, closeMenu} = homeMenuSlice.actions;

export default homeMenuSlice.reducer;
export const menuValue = (state: RootState) => state.homeMenu.value;
