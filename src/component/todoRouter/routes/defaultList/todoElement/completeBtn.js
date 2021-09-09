import React from "react";
import styled from "styled-components";
import {GetStateFromContext, DispatchContext} from "../../../../../data/todoData/todoContext"
import {COMPLETE} from "../../../../../data/todoData/action"

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 30px;
height: 30px;
background-color: #f368e0;
border-radius: 9px;
`

const BtnImage = styled.div`
width: 20px;
height: 20px;
background-color: #ff9ff3;
border-radius: 6px;
`


const CompleteBtn = ({ id }) => {
	const dispatch = DispatchContext();
	const clickBtnHandler = () => {
		dispatch({ type: COMPLETE, payload : id })
	}
	return (
		<Container onClick={clickBtnHandler}>
		  <BtnImage>C</BtnImage>
		</Container>
	)
}


export default CompleteBtn;