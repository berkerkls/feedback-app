import { useState } from 'react';
import {v4 as uuidv4} from "uuid"
import './App.css';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import Home from './pages/Home';
import {FeedbackProvider} from "./context/FeedbackContext"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <FeedbackProvider>
    <Router>
      <Header text="Feedback UI" />
      <Routes>
      <Route path="/" exact element={<Home />}/>
      <Route path='/about' element={<AboutPage />} />
      </Routes>
    </Router>
    </FeedbackProvider>
  );
}

export default App