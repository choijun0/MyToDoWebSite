import React from "react";
import styled from "styled-components";
import Insert from "./insert";
import { Provider } from "react-redux";
import TodoRouter from "./todoRouter";
import {TodoContextProvider} from "data/localData/todoData/todoContext"; 

const Container = styled.div`
display: flex;
justify-contents : space-between;
`

const TodoSection = () => {
	return (
    <TodoContextProvider>
	   	<Container>
		  		<Insert />
		  		<TodoRouter />
  		</Container>
    </TodoContextProvider>
	)
}

export default TodoSection;