import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Header from "./header";
import MainList from "./routes/mainList";
import CompleteList from "./routes/completeList";

const TodoRouter = () => {
	return (
		<Router>	
		  <Header />
			<Switch>
			  <Route path="/" exact component={MainList}></Route>
				<Route path="/complete" exact component={CompleteList} ></Route>
				<Route path=""></Route>				
			</Switch>
		</Router>
	)
}

export default TodoRouter;