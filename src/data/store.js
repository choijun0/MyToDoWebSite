import {  createSlice, configureStore } from "@reduxjs/toolkit";
import {ADD, DELETE} from "./action"

const initialState = {
	todos : []
}

const todos = createSlice({
  name : "todoData",
  initialState,
  reducers: {
      ADD : () => {

			},
			DELETE : () => {

			}
  }
})

export const store= configureStore({
	reducer : todos.reducer
});