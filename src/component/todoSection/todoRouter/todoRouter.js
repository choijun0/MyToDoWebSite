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
    const colId = userObj.todoColId;
    watchDataBase(colId, ({docs}) => {
      setComplete([]);
      setUnComplete([]);
      docs.forEach(doc => {
        const data = doc.data();
        if(data.complete){
          setComplete(prev => [...prev, { 
            ...data,
            docId: doc.id,
            todoColId : userObj.todoColId
          }]);
        }
        else{
          setUnComplete(prev => [...prev, { 
            ...data,
            docId: doc.id,
            todoColId : userObj.todoColId
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
          <DefaultList data={unComplete}/>
        </Route>
				<Route path="/complete" exact>
          <CompleteList data={complete}/>
        </Route>
				<Route path=""></Route>				
			</Switch>
		</Router>
	)
}

export default TodoRouter;


