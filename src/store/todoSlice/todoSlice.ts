import { createSlice, AnyAction, PayloadAction } from '@reduxjs/toolkit';
import {
  fetchTodo,
  addNewFetchTask,
  deleteTask,
  toggleTaskCompleted,
} from '../../api/fetchTodo';
import { TodoState } from '../../types/types';
import { Todo } from '../../types/types';

const initialState: TodoState = {
  list: [],
  trashBasketList: [],
  loading: false,
  error: null,
};

const errorFunction = (action: AnyAction) => {
  return action.type.endsWith('rejected');
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    sendNewTask(state, action: PayloadAction<string>) {
      const trashTask: Todo = state.list.find(
        (item) => item.id === action.payload
      ) as Todo;

      state.trashBasketList.push(trashTask);
    },
    removeTaskFromTrashList(state, action: PayloadAction<string>) {
      state.trashBasketList = state.trashBasketList.filter(
        (item) => item.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodo.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.list = action.payload;
        state.loading = false;
      })
      .addCase(addNewFetchTask.pending, (state) => {
        state.error = null;
      })
      .addCase(addNewFetchTask.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.list = state.list.filter((item) => item.id !== action.payload);
      })
      .addCase(toggleTaskCompleted.fulfilled, (state, action) => {
        const toggleTodoTask = state.list.find(
          (item) => item.id === action.payload.id
        );
        if (toggleTodoTask) {
          toggleTodoTask.completed = !toggleTodoTask.completed;
        }
      })
      .addMatcher(errorFunction, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { sendNewTask, removeTaskFromTrashList } = todoSlice.actions;

export default todoSlice.reducer;
