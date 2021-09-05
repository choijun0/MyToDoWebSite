import React from "react";
import styled from "styled-components";
import Insert from "../insert";
import { Provider } from "react-redux";
import {store} from "../../data/store";
import TodoRouter from "../todoRouter";

const Container = styled.div`
display: flex;
justify-contents : space-between;
`

const Space = () => {
	
	return (
		<Provider store={store}>
	   	<Container>
				<Insert />
				<TodoRouter />
		  </Container>
		</Provider>
	)
}

export default Space;