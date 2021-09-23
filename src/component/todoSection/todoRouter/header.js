import React from "react";
import styled from "styled-components"
import {Link, withRouter} from "react-router-dom"

const Pivot= styled.div`
position: relative;
`

const Conmtainer = styled.div`
display: flex;
width: 50%;
height: 25px;
position: fixed;
background-color : #81ecec;
`

const Item = styled(Link)`
height : 100%;
display: flex;
justify-content: center;
align-items : center;
background-color: #fdcb6e;
text-decoration: none;
box-shadow: 0 0 0 1px #000 inset; 
color: #2d3436;
&:hover{
	background-color: #ffeaa7;
}
&:active{
background-color: #fab1a0;
color: #636e72;
}
`
const FontSet = styled.div`
font-size: 5px;
display: inline-block;
padding: 0 10px 0 10px;
font-weight: 500;
`

const DefaultText = "List";
const CompleteTask = "Complete Task";

export default withRouter( ({location : {pathname}}) => { 
	return(
		<Pivot>
		<Conmtainer>
	   	<Item to="/" current={pathname === "/"}>
			   <FontSet>{DefaultText}</FontSet>
			 </Item>
			 <Item to="/complete" current={pathname === "/complete"}>
			   <FontSet>{CompleteTask}</FontSet>
			 </Item>
		</Conmtainer>
		</Pivot>
)})