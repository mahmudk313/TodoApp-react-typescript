import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Todo from '../models/todo';

const initialState : Todo[] = []

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action : PayloadAction<Todo>) => {
            state.push(action.payload)
        }
    }
})

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;