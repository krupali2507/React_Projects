import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "Todo",
  initialState: {
    todos: [{ title: "Hello World!", id: nanoid() }],
  },
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        title: action.payload.title,
        id: nanoid(),
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
