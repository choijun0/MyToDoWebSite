import React from "react";
import styled from "styled-components";
import Insert from "../insert";
import { Provider } from "react-redux";
import {store} from "../../data/store" 

const Container = styled.div`

`

const Space = () => {

	return (
		<Provider store={store}>
	   	<Container>
		    <span>Hello world!</span>
				<Insert />
		  </Container>
		</Provider>
	)
}

export default Space;