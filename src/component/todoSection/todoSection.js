import React from "react";
import styled from "styled-components";
import Insert from "./insert";
import { Provider } from "react-redux";
import TodoRouter from "./todoRouter";
import {GetMainState} from "component/mainRouter/getContext";

const Container = styled.div`
display: flex;
justify-contents : space-between;
`

const TodoSection = () => {
  const {userObj} = GetMainState();
	return (
    <>
      {userObj ?  
      <Container>
		  		<Insert userObj={userObj} />
		  		<TodoRouter userObj={userObj}/>
    	</Container> : "please sign in first"}
    </>
	)
}

export default TodoSection;