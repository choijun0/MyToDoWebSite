import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import SignInSection from "./signInSection";
import JoinSection from "./joinSection";
import Header from "./header";

const AuthRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <SignInSection />
        </Route>
        <Route path="/join" exact>
          <JoinSection />
        </Route>
      </Switch>
    </Router>
  )
}

export default AuthRouter;