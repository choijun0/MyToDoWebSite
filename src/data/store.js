import {  createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
	todos : []
}

const todos = createSlice({
  name : "todoData",
  initialState,
  reducers: {
      ADD : (state, action) => {
				const { payload : todoElement } = action;
				state.todos.push(todoElement);
			},
			DELETE : () => {

			}
  }
})

export const {ADD, DELETE} = todos.actions;

export const store= configureStore({
	reducer : todos.reducer
});