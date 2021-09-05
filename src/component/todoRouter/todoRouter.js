import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Header from "./header";
import DefaultList from "./routes/defaultList";

const TodoRouter = () => {
	return (
		<Router>	
		  <Header />
			<Switch>
			  <Route path="/" exact component={DefaultList}></Route>
				<Route path=""></Route>
				<Route path=""></Route>				
			</Switch>
		</Router>
	)
}

export default TodoRouter;