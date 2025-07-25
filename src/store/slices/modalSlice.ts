import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store';

export interface ModalState {
  isOpened: boolean;
}

const initialState: ModalState = {
    isOpened: false,
  }

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
      openModal(state) {
        state.isOpened = true;
      },
      closeModal(state) {
        state.isOpened = false
      }
    }
})

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
export const isOpenedSelector = (state: RootState) => state.modal.isOpened;