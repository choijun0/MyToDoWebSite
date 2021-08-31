import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const TestTodo = styled.li`
height: 50px;
border: solid;
background-color: #00cec9;
display: flex;
justify-content: center;
align-items: center;
` 

const TestTodoCon = styled.ul`
margin-top: 25px;
`

const DefaultList = ({todos}) => {
	console.log(todos)
	return (
		<TestTodoCon>
		  {todos.map(todo => <TestTodo><span>{todo.Title}</span></TestTodo>)}
		</TestTodoCon>
	)
}

export default DefaultList
