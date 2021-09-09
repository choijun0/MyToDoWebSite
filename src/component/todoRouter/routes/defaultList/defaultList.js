import React from "react";
import styled from "styled-components";
import {GetStateFromContext, DispatchContext} from "../../../../data/todoData/todoContext";
import TodoElement from "./todoElement";


const Container = styled.ul`
margin-top: 25px;
width: 100%;
`

const DefaultList = ({propName}) => {
	const todos = getData(propName);
	return (
		<Container>
		  {todos.map( todo => {
				const {title, detail, id, complete} = todo;
				return <TodoElement title={title} detail={detail} id={id} complete={complete}/>
			})}
		</Container>
	)
}
const getData = (propName) =>{
	switch(propName){
		case "main" :
		  const {main} = GetStateFromContext();
		  return main;
		case "complete" :
		  const {complete} = GetStateFromContext();
		  return complete;
	}
}

export default DefaultList
