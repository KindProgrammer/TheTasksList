import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export interface FilterState {
    status: string
  };
  
const initialState: FilterState = {
    status: 'all'
  };

const filterSlice = createSlice({
name: 'filter',
initialState,
reducers: {
    setStatus: (state, action: PayloadAction<string>) => {
        const status = action.payload;
        state.status = status;
    }
}
});

export const { setStatus } = filterSlice.actions;
export default filterSlice.reducer;
export const filterSelector = (state: RootState) => state.filter.status;