import React,{useState, useEffect, useContext, createContext} from "react";
import MainRouter from "component/mainRouter"
import {authService} from "data/fireBase/func";

const App = () => {
	return (
		<>
		  <MainRouter />
		</>
	)
}

export default App;