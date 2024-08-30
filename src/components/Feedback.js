import React from "react";

const Feedback = ({ feedback, index, onEdit, onDelete }) => {
    return (
        <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{margin: '0px'}}><strong>{feedback.username}</strong> {feedback.rating}</p>
            <div style={{ padding: '0px 20px' }}>
                <button onClick={() => onEdit(index)}>Edit</button>
                <button onClick={() => onDelete(index)}>Delete</button>
            </div>
        </div>
    )
}

export default Feedback;