import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Header from "./header";
import {connect} from "react-redux"
import DefaultList from "./routes/defaultList";

const TodoRouter = ({state : {todos}}) => {
	return (
		<Router>	
		  <Header />
			<Switch>
			  <Route path="/" exact render={() => <DefaultList todos={todos}/>}></Route>
				<Route path=""></Route>
				<Route path=""></Route>				
			</Switch>
		</Router>
	)
}

const mapStateToProps = (state, ownProps) => {
	return { state };
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoRouter);