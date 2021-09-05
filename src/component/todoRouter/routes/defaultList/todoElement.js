import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
display : flex;
flex-direction : column;
width : 50%;
height : 50px;
`

const TitleContainer = styled.div`
width: 100%;
height: 40%;
`
const TitleText = styled.div`
display: inline-block;
overflow: hidden;
`

const DetailContainer = styled.div`
width: 100%;
height: 60%;
`

const DetailText = styled.div`
display: inline-block;
overflow: hidden;
`

const TodoElement = ({title, detail}) => {
	return (
		<MainContainer>
		  <TitleContainer>
		    <TitleText>{`Title: ${title}`}</TitleText>
  		</TitleContainer>
			<DetailContainer>
			  <DetailText>{`Detail: ${detail}`}</DetailText>
			</DetailContainer>
		</MainContainer>
	) 
}

export default TodoElement;