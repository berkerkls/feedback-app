import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components"

const NavText = styled.h2`
    color: #444;
`

const Container = styled.div`
    max-width: 768px;
    margin: auto;
    padding: 0 20px;
`

const Navbar = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
    background-color: lightcoral;
`

function Header({text}) {
  return (
    <Navbar>
        <Container>
            <NavLink to="/" style={{textDecoration:"none"}}>
                <NavText>{text}</NavText>
            </NavLink>
        </Container>
    </Navbar>
  )
}

export default Header