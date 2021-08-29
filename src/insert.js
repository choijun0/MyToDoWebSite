import React, {useState} from 'react';
import styled from "styled-components";
import { connect } from "react-redux";


const InputContainer = styled.div`
display: flex;
flex-direction: column;
`

const TitleInput = styled.input`

`

const DetailInput = styled.input`

`
const InitialTodoState = {
	title : "",
	detail : ""
}

const Insert = () => {
	const [todoData, setTodoData] = useState(InitialTodoState);	
	const changeHandler = () => {
		
	}
	return (
		<InputContainer>
		  <TitleInput onChange={changeHandler} value/>
			<DetailInput onChange={changeHandler}/>
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
