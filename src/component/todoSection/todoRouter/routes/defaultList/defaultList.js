import React from "react";
import styled from "styled-components";
import TodoElement from "./todoElement";


const Container = styled.ul`
margin-top: 25px;
width: 100%;
`

const getData = (propName) =>{
	switch(propName){
		case "main" :

		case "complete" :

	}
}



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

export default DefaultList
