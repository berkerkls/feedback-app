import React from 'react'
import Card from '../shared/Card'
import { FaTimes } from "react-icons/fa"
import styled from 'styled-components'

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  background: none;
  border: none;
`



function FeedbackItem({item, handleDelete}) {

  return (
    <Card >
        <div className='num-display'>{item.rating}</div>
        <CloseButton onClick={() => handleDelete(item.id)}>
          <FaTimes color='orange' />
        </CloseButton>
        <div className='text-display'>{item.text}</div>
    </Card>
  )
}

export default FeedbackItem