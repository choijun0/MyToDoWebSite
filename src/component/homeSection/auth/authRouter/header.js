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

const Header = () => {
  return (
    <>
    <Container>
      <Item to="/">SignIn</Item>
      <Item to="/join">Join</Item>
    </Container>
    </>
  )
}

export default Header;