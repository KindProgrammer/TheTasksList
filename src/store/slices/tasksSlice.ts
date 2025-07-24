import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
}

export interface TasksState {
  list: Task[];
}

const initialState: TasksState = {
  list: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Omit<Task, 'status'>>) => {
        state.list.push({
          ...action.payload,
          status: 'pending'
        });
      },
    removeTask: (state, action: PayloadAction<string>) => {
        state.list = state.list.filter(task => task.id !== action.payload);
      },
    setStatus: (state, action: PayloadAction<{taskId: string, status: string}>) => {
        const { taskId, status} = action.payload;
        state.list.find(t => {
            if (t.id === taskId) {
                t.status = status;
            }
        })
    }
  }
});

export const { addTask, removeTask, setStatus } = tasksSlice.actions;
export default tasksSlice.reducer;
export const tasksSelector = (state: RootState) => state.tasks.list;

