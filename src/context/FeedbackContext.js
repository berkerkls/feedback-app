import { createContext, useState } from "react";
import {v4 as uuidv4} from "uuid"

const FeedbackContext = createContext()

export const FeedbackProvider= ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id:1,
            rating:2,
            text: "This is feedback 1"
    },
        {
            id:2,
            rating:4,
            text: "This is feedback 2"
    },
        {
            id:3,
            rating:6,
            text: "This is feedback 3"
    },

])
    
    const deleteFeedback=(id) => {
        if(window.confirm("Are you sure you want to delete this?")) {
          setFeedback(feedback.filter((item) => item.id != id))
        }
      }

      const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback,...feedback])
    
      }
    
    return (
        <FeedbackContext.Provider value={{
            feedback,
            deleteFeedback,
            addFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext