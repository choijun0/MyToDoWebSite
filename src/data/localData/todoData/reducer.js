import { PUSH, POP, COMPLETE } from "./action"

export const InitialState = {
	main : [],
	complete: []
}

export const reducer = (state, action) => {
	const {main : lastTodo, complete : lastComplete} = state;
	switch(action.type){
		case PUSH:
		  return {...state, main : [...lastTodo, action.payload]}
		case COMPLETE:
		  const id = action.payload;
			console.log(lastTodo, id);
			const target = lastTodo.find(todo => todo.id === id);
			return {...state, main : lastTodo.filter(todo => todo.id !== id), complete : [...lastComplete, {...target, complete : true}]}
	}
} 