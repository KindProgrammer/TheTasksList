// store.ts
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer, { type TasksState } from './slices/tasksSlice';
import filterReduser, { type FilterState } from './slices/filterSlice';
import { localStorageMiddleware } from './middlewares/localStorageMiddleware';


interface RootState {
  tasks: TasksState;
  filter: FilterState;
}

const loadState = (): RootState | undefined => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (!serializedState) return undefined;
    
    const parsed = JSON.parse(serializedState) as Partial<RootState>;
    
    if (parsed.tasks && Array.isArray(parsed.tasks.list)) {
      return parsed as RootState;
    }
    return undefined;
  } catch (err) {
    console.warn('Не удалось загрузить состояние из localStorage', err);
    return undefined;
  }
};

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: filterReduser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(localStorageMiddleware),
  preloadedState: loadState(),
});

export type AppDispatch = typeof store.dispatch;
export type { RootState };