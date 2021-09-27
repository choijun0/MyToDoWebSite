import React from "react";
import styled from "styled-components";


const Container = styled.ul`
margin-top: 25px;
width: 100%;
`
const List = ({Element, data}) => {
	return (
		<Container>
		  {data.map(element => <Element key={element.id} data={element}/>) }
		</Container>
	)
}

export default List;