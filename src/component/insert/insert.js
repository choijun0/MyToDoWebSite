import React, {useState} from 'react';
import styled from "styled-components";
import { connect } from "react-redux";
import {inputBackColor, inputFocusColor} from "./cssVar"

const InputContainer = styled.div`
display: flex;
flex-direction: column;
width: 400px;
height: 400px;
background-color: #9b59b6;
padding: 20px;
`
const Space = styled.div`
width: 100%;
height: 20px;
`

const Cover = styled.div`

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
border-radius: 10px;
&:focus{
	background-color: #${() => inputFocusColor};
}
`

const DetailInput = styled.textarea`
width: 100%; 
box-sizing: border-box;
background-color: #${() => inputBackColor};
-webkit-box-sizing:border-box;
-moz-box-sizing: border-box;
height: 300px;
outline: none;
border: none;
resize: none;
padding: 2px 3px 3px 7px;
border-radius: 10px;
&:focus{
	background-color: #${() => inputFocusColor};
}
`
const Title = "Title";
const Detail = "Detail";

const InitialTodoState = {
	[Title] : "",
	[Detail] : ""
}

const Insert = () => {
	const [todoData, setTodoData] = useState(InitialTodoState);	
	const changeHandler = ({target}, type) => {
		setTodoData({...todoData, [type] : target.value})
	}
	return (
		<InputContainer>
		  <TitleInput type="text" onChange={e => changeHandler(e,Title)} value={todoData.Title}/>
			<Space />
		  <DetailInput type="text" onChange={e => changeHandler(e,Detail)} value={todoData.Detail}/>
		</InputContainer>
	)
}

/*
const mapStateToProps​ = (state, ownProps) => {
	return null;
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return null;
}
export default connect(mapStateToProp, mapDispatchToProps)(Insert);
*/

export default Insert;
