import React from "react";
import {Link} from "react-router-dom"
import styled from "styled-components"


const Container = styled.div`
display: flex;
width: 100%;

`
const Item = styled(Link)`
height: 100%;
`


const MainHeader = () => {
  return (
    <>
    <Container>
      <Item to="/">Home(Auth)</Item>
      <Item to="/todo">Todo</Item>
    </Container>
    </>
  )
}

export default MainHeader;