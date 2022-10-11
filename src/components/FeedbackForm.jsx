import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Card from "../shared/Card"
import Button from "../shared/Button"
import RatingSelect from './RatingSelect'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const InputForm= styled.form`
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    padding: 8px 10px;
    border-radius: 8px;
`
let InputPart = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:100%;
`

const Header = styled.h2`
    width:80%;
    margin:auto;
`
const Input= styled.input`
`
const Message = styled.div`
    color:red;
    margin: 10px 0px;
    text-align:center;
`


function FeedbackForm() {

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    const [text, setText] = useState("")
    const [rating, setRating] = useState()
    const [isDisabled, setIsDisabled] = useState(true)
    const [message, setMessage] = useState("")


    useEffect(() => {
        if(feedbackEdit.edit === true) {
            setIsDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    },[feedbackEdit])

    const handleInputChange = (e) => {
        setText(e.target.value)

        if(text === "") {
            setMessage(null)
            setIsDisabled(true)
        } else if(text !== "" && text.trim().length <=10) {
            setMessage("Feedback must be at least 10 charachters")
            setIsDisabled(true)
        } else {
            setMessage(null)
            setIsDisabled(false)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(text.trim().length > 10 ) {
            const newFeedback = {
                text,
                rating,
            }

            if(feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id,newFeedback)
            }else {
                addFeedback(newFeedback)
            }
            setText("")
        }
    }


  return (
    <Card>
        <Header>How would you rate your service with us?</Header>
        <RatingSelect select={(rating) => setRating(rating)}/>
        <InputForm onSubmit={handleSubmit}>
            <InputPart>
                <Input onChange={handleInputChange} type="text" placeholder="Enter your feedback" value={text} />
                <Button type="submit" version="secondary" isDisabled={isDisabled}>Send</Button>
            </InputPart>
        </InputForm>
        {message && <Message>{message}</Message>}
    </Card>
  )
}

export default FeedbackForm