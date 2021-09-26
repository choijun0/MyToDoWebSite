import React, {useState, useEffect, useContext, createContext} from "react";
import {BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import {authService} from "data/fireBase/func";

import HomeSection from "component/homeSection"
import TodoSection from "component/todoSection"
import MainHeader from "component/mainHeader"

export const MainContext = createContext();

const MainRouter = () => {
  const [init, setInit] = useState(false);
  const [mainState, setMainState] = useState(null);
  useEffect(()=>{
    authService.onAuthStateChanged((user)=>{
      if(user){
        const container = {
          userObj : {
            displayName : user.displayName,
            uid : user.uid
          }
        }
        setMainState(container);
      }
      else{
        setMainState(null);
      }
      setInit(true);
    })
  },[]);
  return(
  <>
    {init ? <MainContext.Provider value={mainState}>
      <Router>
        <MainHeader />
        <Switch>
          <Route path="/" exact>
            <HomeSection />
          </Route>
          <Route path="/todo" exact>
            <TodoSection base={"todo"} />
          </Route>
        </Switch>
      </Router>
    </MainContext.Provider> : "Initializing....."} 
  </>
  )
}

export default MainRouter;