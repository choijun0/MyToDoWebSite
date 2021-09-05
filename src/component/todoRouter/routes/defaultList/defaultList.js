import React from "react";
import styled from "styled-components";
import {GetStateFromContext, DispatchContext} from "../../../../data/todoData/todoContext";
import TodoElement from "./todoElement";


const Container = styled.ul`
margin-top: 25px;
width: 100%;
`

const DefaultList = () => {
	const {todos} = GetStateFromContext();
	return (
		<Container>
		  {todos.map( todo => {
				const {title, detail} = todo;
				return <TodoElement title={title} detail={detail} />
			})}
		</Container>
	)
}

export default DefaultList
