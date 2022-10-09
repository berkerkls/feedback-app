import React from 'react'
import styled from 'styled-components'


const FeedbackStatsDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #f4f4f4;
    padding: 0 10px;
`

const LengthFeedback = styled.h4``
const AverageRating = styled.h4``


function FeedbackStats({ feedback }) {

    let average = feedback.reduce((prev, curr) => {
        return prev + curr.rating
    }, 0) / feedback.length
    
    average = average.toFixed(1)

  return (
    <FeedbackStatsDiv>
    <LengthFeedback>{feedback.length === 0  ? "No Feedback Yet" : `${feedback.length} Reviews`}</LengthFeedback>
    <AverageRating>Average: {isNaN(average) ? 0 : average}</AverageRating>
    </FeedbackStatsDiv>
  )
}

export default FeedbackStats