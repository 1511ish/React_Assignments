// src/App.js
import React, { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import OverallRating from './components/OverallRating';
import AllFeedbacks from './components/AllFeedbacks';

const App = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editStatus, setEditStatus] = useState(false);

  const handleAddFeedback = (feedback) => {
    if (editIndex !== null) {
      const updatedFeedbacks = [...feedbacks];
      updatedFeedbacks[editIndex] = feedback;
      setFeedbacks(updatedFeedbacks);
      setEditIndex(null);
    } else {
      setFeedbacks([...feedbacks, feedback]);
    }
  };

  const handleEditFeedback = (index) => {
    setEditIndex(index);
    setEditStatus(true);
    console.log("working");
  };

  const handleDeleteFeedback = (index) => {
    const updatedFeedbacks = feedbacks.filter((_, i) => i !== index);
    setFeedbacks(updatedFeedbacks);
  };


  return (
    <div style={{ padding: '20px'}}>
      <h1 style={{textAlign:'center'}}>Feedback System</h1>
      <OverallRating feedbacks={feedbacks} />
      <FeedbackForm onAddFeedback={handleAddFeedback} editStatus={editStatus} editFeedback={feedbacks[editIndex]}/>
      <AllFeedbacks feedbacks={feedbacks} onEdit={handleEditFeedback} onDelete={handleDeleteFeedback} />
    </div>
  );
};

export default App;
