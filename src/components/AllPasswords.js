
import React from 'react';
import Password from './Password';

const AllPasswords = ({ passwords, onEdit, onDelete }) => {
  return (
    <div>
      <h2>All Passwords</h2>
      {passwords.length === 0 && <p>No Password Available</p>}
      {passwords.map((password, index) => (
        <Password password={password} index={index} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default AllPasswords;