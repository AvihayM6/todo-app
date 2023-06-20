import { createSlice } from "@reduxjs/toolkit";

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
})

export const { addTodo, removeTodo, removeAllTodos } = todoSlice.actions
export default todoSlice.reducer