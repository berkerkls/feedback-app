import React from 'react'
import Card from '../shared/Card'
import { FaTimes } from "react-icons/fa"
import styled from 'styled-components'
import FeedbackContext from '../context/FeedbackContext'
import { useContext } from 'react'

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  background: none;
  border: none;
`



function FeedbackItem({item}) {

  const {deleteFeedback} = useContext(FeedbackContext)

  return (
    <Card >
        <div className='num-display'>{item.rating}</div>
        <CloseButton onClick={() => deleteFeedback(item.id)}>
          <FaTimes color='orange' />
        </CloseButton>
        <div className='text-display'>{item.text}</div>
    </Card>
  )
}

export default FeedbackItem