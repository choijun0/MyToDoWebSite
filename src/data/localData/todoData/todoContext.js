import { createContext, useContext, useReducer } from "react";
import { reducer, InitialState } from "./reducer";

const TodoContext = createContext();

export const TodoContextProvider = ({children}) => {
	const [state, dispatch] = useReducer(reducer, InitialState);
	return (
		<TodoContext.Provider value={ { state, dispatch } }>{children}</TodoContext.Provider>
	)
}

export const GetStateFromContext = () => {
	const {state} = useContext(TodoContext);
	return state;
}

export const DispatchContext = () => {
	const {dispatch} = useContext(TodoContext);
	return dispatch;
}
