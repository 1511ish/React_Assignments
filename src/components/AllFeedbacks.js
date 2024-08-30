// src/components/AllFeedbacks.js
import React from 'react';
import Feedback from './Feedback';

const AllFeedbacks = ({ feedbacks, onEdit, onDelete }) => {
    return (
        <div>
            <h2>All Feedbacks</h2>
            {feedbacks.length === 0 && <p>No feedback available</p>}
            {feedbacks.map((feedback, index) => (
                <Feedback feedback={feedback} index={index} onEdit={onEdit} onDelete={onDelete}/>
            ))}
        </div>
    );
};

export default AllFeedbacks;
