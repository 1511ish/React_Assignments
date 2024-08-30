// src/components/OverallRating.js
import React from 'react';

const OverallRating = ({ feedbacks }) => {
  // Initialize counters for each star rating
  const starCounts = [0, 0, 0, 0, 0];

  // Count the number of feedbacks for each star rating
  feedbacks.forEach(feedback => {
    const rating = parseInt(feedback.rating, 10);
    if (rating >= 1 && rating <= 5) {
      starCounts[rating - 1]++;
    }
  });

  return (
    <div>
      <h2>Overall Rating</h2>
      {starCounts.map((count, index) => (
        <div key={index}>
          {/* Display stars corresponding to the rating level */}
          <span>{'*'.repeat(index + 1)}</span>
          <span style={{ marginLeft: '5px' }}>{count}</span>
        </div>
      ))}
    </div>
  );
};

export default OverallRating;
