import React from "react";
import styled from "styled-components"
import {Link, withRouter} from "react-router-dom"

const Pivot= styled.div`
position: relative;
`

const Conmtainer = styled.div`
dispaly: flex;
width: 50%;
height: 25px;
position: fixed;
background-color : #81ecec;
`

const Item = styled(Link)`
height : 100%;
width: 50px;
display: flex;
justify-content: center;
align-items : center;
background-color: #74b9ff;
`
const FontSet = styled.div`
font-size: 5px;
display: inline-block;
`

const DefaultText = "Default";

export default withRouter( ({location : {pathname}}) => { 
	return(
		<Pivot>
		<Conmtainer>
	   	<Item to="/" current={pathname === "/"}>
			   <FontSet>{DefaultText}</FontSet>
			 </Item>
		</Conmtainer>
		</Pivot>
)})