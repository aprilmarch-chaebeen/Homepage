import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../app/store';

export interface ProjectCurIdxState {
  value: number;
}

const initialState: ProjectCurIdxState = {
  value: 1,
};

export const projectCurIdxSlice = createSlice({
  name: 'projectCurIdx',
  initialState,
  reducers: {
    changeIdx: (state, action: PayloadAction<number>) => {
      const idx = action.payload;
      state.value = idx;
    },
  },
});

export const {changeIdx} = projectCurIdxSlice.actions;

export default projectCurIdxSlice.reducer;
export const selectProjectIdxValue = (state: RootState) => state.projectCurIdx.value;
