import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Insert from "./insert";
import { Provider } from "react-redux";
import TodoRouter from "./todoRouter";
import {GetMainState} from "component/mainRouter/getContext";

const Container = styled.div`
display: flex;
justify-contents : space-between;
`

const TodoSection = () => {
  const data = GetMainState();
  const [userObj, setUserObj] = useState(null);
  useEffect(()=>{
    if(data){
      setUserObj(data.userObj)
    }
  },[data])
	return (
    <>
      {userObj ?  
      <Container>
		  		<Insert userObj={userObj} />
		  		<TodoRouter base={"todo"} userObj={userObj}/>
    	</Container> : "please sign in first"}
    </>
	)
}

export default TodoSection;