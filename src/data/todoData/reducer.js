import { ADD } from "./action"

export const InitialState = {
	todos : []
}

export const reducer = (state, action) => {
	const {todos : lastTodo} = state;
	switch(action.type){
		case ADD:
		  return {...state, todos : [...lastTodo, action.payload]}
	}
} 