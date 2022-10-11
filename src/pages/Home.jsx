import React from 'react'
import {v4 as uuidv4} from "uuid"
import { useState } from 'react'
import FeedbackForm from '../components/FeedbackForm'
import FeedbackStats from '../components/FeedbackStats'
import FeedbackList from '../components/FeedbackList'
import FeedbackData from '../data/FeedbackData'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Link = styled.div`
    display:flex;
    justify-content:center;
    align-items: center;
    margin-bottom: 20px;
    font-size: 20px;`

export default function Home() {
    const [feedback, setFeedback] = useState(FeedbackData)

  

  

  return (
    <div className='container'>
          <Link>
            <NavLink to="/about" style={{textDecoration:"none",color:"#ffaa77"}}>About Us</NavLink>
          </Link>
          <FeedbackForm  />
          <FeedbackStats />
          <FeedbackList />
    </div>
  )
}
