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
  const data = GetMainState();
  console.log(data.userObj);
	return (
    <>
      {data ?  
      <Container>
		  		<Insert userObj={data.userObj} />
		  		<TodoRouter />
    	</Container> : "please sign in first"}
    </>
	)
}

export default TodoSection;