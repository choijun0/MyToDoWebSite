import React from "react";
import Space from "./component/space";
import {TodoContextProvider} from "./data/todoData/todoContext"; 

const App = () => {

	return (
		<>
		  <TodoContextProvider>
		    <Space />
			</TodoContextProvider>
		</>
	)
}

export default App;