import { Todo, TodoState } from '../types/types';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodo = createAsyncThunk<
  Todo[],
  undefined,
  { rejectValue: string }
>('todo/fetchTodo', async function (_, { rejectWithValue }) {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=6'
  );
  if (!response.ok) {
    return rejectWithValue('Error!');
  }

  const data = await response.json();

  return data;
});

export const addNewFetchTask = createAsyncThunk<
  Todo,
  string,
  { rejectValue: string }
>('todo/addNewFetchTask', async function (text, { rejectWithValue }) {
  const todoObj = {
    userId: 1,
    title: text,
    completed: false,
  };

  const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todoObj),
  });

  if (!response.ok) {
    return rejectWithValue('Error!');
  }
  return (await response.json()) as Todo;
});

export const deleteTask = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>('todo/deleteTask', async function (id, { rejectWithValue }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    {
      method: 'DELETE',
    }
  );

  if (!response.ok) {
    return rejectWithValue('Error!');
  }

  return id;
});

export const toggleTaskCompleted = createAsyncThunk<
  Todo,
  string,
  { rejectValue: string; state: { todo: TodoState } }
>(
  'todo/toggleTaskCompleted',
  async function (id, { rejectWithValue, getState }) {
    const state = getState().todo.list.find((item) => item.id === id);

    if (state) {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            completed: !state.completed,
          }),
        }
      );

      if (!response.ok) {
        return rejectWithValue('Error!');
      }
      return (await response.json()) as Todo;
    }
    return rejectWithValue('Server');
  }
);
