import React from "react";
import styled from "styled-components";
import CompleteBtn from "./completeBtn";

const MainContainer = styled.div`
display : flex;
width : 50%;
`

const TitleContainer = styled.div`
width: 70%;
`
const TitleText = styled.div`
display: inline-block;
overflow: hidden;
font-size: 15px;
`

const DetailContainer = styled.div`
width: 70%;
max-height: 200px;
`

const DetailText = styled.div`
display: inline-block;
overflow: hidden;
font-size: 15px;
`
const ContentContainer = styled.div`
width : 100%;
height : 50px;
display : flex;
flex-direction : column;
`

const BtnContainer = styled.div`
`

const TodoElement = ({data}) => {
  const { todoColId, docId, title, detail, complete } = data;
	return (
		<MainContainer>
		  <ContentContainer>
	  	  <TitleContainer>
		      <TitleText>{`Title: ${title}`}</TitleText>
  	  	</TitleContainer>
		  	<DetailContainer>
			    <DetailText>{`Detail: ${detail}`}</DetailText>
			  </DetailContainer>
			</ContentContainer>
			{complete ? null : <CompleteBtn todoColId={todoColId} docId={docId}/>}
		</MainContainer>
	) 
}

export default TodoElement;