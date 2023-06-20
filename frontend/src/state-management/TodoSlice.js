import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get('http://localhost:8000/todos')
  console.log('aasdsadasd', response)
  return response.data;
})


const todoSlice = createSlice({
    name: 'addTodo',
    initialState: [],
    reducers: {
      addTodo: (state, action) => {
        if(action.payload.trim().length !== 0 && !state.includes(action.payload.trim())){
          state.push(action.payload)
        }
      },
      removeTodo: (state, action) => {
        state.splice(state.indexOf(action.payload), 1)
      },
      removeAllTodos: (state) => {
        state.splice(0,state.length)
      },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchTodos.fulfilled, (state, action) => {
        console.log(state)
        return action.payload;
      });
    },
})

export const { addTodo, removeTodo, removeAllTodos } = todoSlice.actions
export default todoSlice.reducer