import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Card from '../shared/Card'

const Wrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

function AboutPage() {
  return (
    <Card>
        <Wrapper>
            <p>Feedback App by Berker Kelesoglu</p>
            <span>2022&copy;</span>
        </Wrapper>
    </Card>
  )
}

export default AboutPage