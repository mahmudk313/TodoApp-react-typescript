import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Todo from '../models/todo';

const initialState : Todo[] = []

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action : PayloadAction<Todo>) => {
            state.push(action.payload)
        },
        editTodo: (state, action : PayloadAction<{ id: number, text: string}>) => {
            const {id, text} = action.payload
            return state.map((todo : Todo) => {
                return todo.id === id
                    ? {...todo, title: text}
                    : todo
            })
        },
        deleteTodo: (state, action : PayloadAction<number>) => {
            return state.filter((todo : Todo) => todo.id !== action.payload )
        }
    }
})

export const { addTodo, editTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;