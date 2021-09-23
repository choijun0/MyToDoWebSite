import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import HomeSection from "component/homeSection"
import TodoSection from "component/todoSection"
import MainHeader from "component/mainHeader"

const MainRouter = () => {
  
  return (
    <>
    <Router>
      <MainHeader />
      <Switch>
        <Route path="/" exact>
          <HomeSection />
        </Route>
        <Route path="/todo" exact>
          <TodoSection base={"todo"}/>
        </Route>
      </Switch>
    </Router>
    </>
  )
}

export default MainRouter;