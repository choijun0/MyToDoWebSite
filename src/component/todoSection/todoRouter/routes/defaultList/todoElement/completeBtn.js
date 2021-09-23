import React from "react";
import styled from "styled-components";
import {GetStateFromContext, DispatchContext} from "data/localData/todoData/todoContext"
import {COMPLETE} from "data/localData/todoData/action"

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 30px;
height: 30px;
background-color: #f368e0;
border-radius: 15px;
cursor: pointer;
&:hover{
	background-color: #fab1a0;
}
&:active{
background-color: #c44569;
color: #636e72;
}
`

const BtnImage = styled.div`
width: 20px;
height: 20px;
border-radius: 10px;
background-color: #ff9ff3;
display: flex;
justify-content: center;
align-items: center;
&:hover{
	background-color: #f8a5c2;
}
&:active{
background-color: #cf6a87;
color: #636e72;
}
`


const CompleteBtn = ({ id }) => {
	const dispatch = DispatchContext();
	const clickBtnHandler = () => {
		dispatch({ type: COMPLETE, payload : id })
	}
	return (
		<Container onClick={clickBtnHandler}>
		  <BtnImage>
        <span>C</span>
      </BtnImage>
		</Container>
	)
}


export default CompleteBtn;