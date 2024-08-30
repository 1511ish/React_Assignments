import React, { useState, useEffect } from 'react';

const FeedbackForm = ({ onAddFeedback, editStatus, editFeedback }) => {
    const [username, setUsername] = useState('');
    const [rating, setRating] = useState('');

    useEffect(() => {
        if (editStatus && editFeedback) {
            setUsername(editFeedback.username || '');
            setRating(editFeedback.rating || '');
        }
    }, [editStatus, editFeedback]); // Include dependencies to re-run effect when they change

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddFeedback({ username, rating });
        setUsername('');
        setRating('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Feedback Form</h2>
            <label htmlFor="name">Enter Your Name: </label>
            <input
                id='name'
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <label htmlFor="rating">Choose Rating: </label>
            <input
                id='rating'
                type="number"
                min="1"
                max="5"
                placeholder="Rating (1-5)"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
            />
            <button type="submit">Submit Feedback</button>
        </form>
    );
};

export default FeedbackForm;
