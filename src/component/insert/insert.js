import React, {useState} from 'react';
import styled from "styled-components";
import {inputBackColor, inputFocusColor} from "./cssVar"
import {GetStateFromContext, DispatchContext} from "../../data/todoData/todoContext"
import { PUSH } from "../../data/todoData/action" 
import {v4 as uuid} from "uuid";

const InputContainer = styled.div`
display: flex;
flex-direction: column;
justify-contnent: center;
min-width: 300px;
max-height: 400px;
background-color: #81ecec;
padding: 20px;
`
const Space = styled.div`
width: 100%;
height: ${props => props.ht}%;
`


const TitleInput = styled.input`
width: 100%; 
background-color: #${() => inputBackColor};
box-sizing: border-box;
-webkit-box-sizing:border-box;
-moz-box-sizing: border-box;
outline: none;
border: none;
height:20px;
padding: 2px 3px 3px 7px;
&:focus{
	background-color: #${() => inputFocusColor};
	border-bottom: solid;
	border-width: 1px;
}
`

const DetailInput = styled.textarea`
width: 100%; 
&:placeholder : ${() => "Title"};
box-sizing: border-box;
background-color: #${() => inputBackColor};
-webkit-box-sizing:border-box;
-moz-box-sizing: border-box;
height: 300px;
outline: none;
border: none;
resize: none;
padding: 2px 3px 3px 7px;
&:focus{
	background-color: #${() => inputFocusColor};
	border: solid;
	border-width: 1px;
}
`
const ButtonContainer = styled.div`
display:flex;
width: 100%;
justify-content: flex-end;
`

const SubmitBtn = styled.div`
height: 100%;
background-color: white;
border-radius: 500px;
padding: 3px 5px 1px 5px;
font-size: fit-width | fit-height | fit-height-precise;
cursor : pointer;
color : #6c5ce7;
&:hover{
	background-color: #b2bec3;
	color:#6c5ce7;
}
`

const BtnText = styled.div`
font-size: 10px;
font-weight: 500;
`

const InitialTodoState = {
	title : "",
	detail : "",
	complete : false 
}

const Insert = () => {
	const [todoData, setTodoData] = useState(InitialTodoState);	
	const dispatch = DispatchContext();

	const changeTitleHandler = ({target}) => {
		setTodoData({...todoData, title : target.value})
	}
	const changeDetailHandler = ({target}) => {
		setTodoData({...todoData, detail : target.value})
	}
	const btnClickHandler= e => {
		dispatch({ type : PUSH , payload : { id : uuid(), ...todoData } });
		setTodoData(InitialTodoState);
	}

	return (
		<InputContainer>
		  <TitleInput placeholder="Title" type="text" onChange={e => changeTitleHandler(e)} value={todoData.title}/>
			<Space ht={10}/>
		  <DetailInput placeholder="Detail" type="text" onChange={e => changeDetailHandler(e)} value={todoData.detail}/>
			<Space ht={10}/>
			<ButtonContainer>
			  <SubmitBtn>
				   <BtnText onClick={btnClickHandler}>Submit!</BtnText>
				</SubmitBtn>
			</ButtonContainer>
		</InputContainer>
	)
}

export default Insert;

