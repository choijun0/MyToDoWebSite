import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Header from "./header";
import DefaultList from "./routes/defaultList";
import CompleteList from "./routes/completeList";
import { createBrowserHistory } from "history";
import {watchDataBase} from "data/fireBase/func"

const TodoRouter = ({base, userObj}) => {
  const [complete, setComplete] = useState([]);
  const [unComplete, setUnComplete] = useState([]);
  useEffect(()=>{
    const colId = `userTodo${userObj.uid}`;
    watchDataBase(colId, ({docs}) => {
      setComplete([]);
      setUnComplete([]);
      docs.forEach(doc => {
        const data = doc.data();
        if(data.todoData.complete){
          setComplete(prev => [...prev, { 
            ...data,
            id: doc.id
          }]);
        }
        else{
          setUnComplete(prev => [...prev, { 
            ...data,
            id: doc.id
          }]);
        }
      })
    })
  },[])
	return (
		<Router basename={base}>	
		  <Header />
			<Switch>
			  <Route path="/" exact>
          <DefaultList userObj={userObj} data={unComplete}/>
        </Route>
				<Route path="/complete" exact>
          <CompleteList userObj={userObj} data={complete}/>
        </Route>
				<Route path=""></Route>				
			</Switch>
		</Router>
	)
}

export default TodoRouter;