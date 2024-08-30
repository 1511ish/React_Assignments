import React from "react";

const Password = ({ password, index, onEdit, onDelete }) => {
    return (
        <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{margin: '0px'}}><strong>{password.title}</strong> {password.password}</p>
            <div style={{ padding: '0px 20px' }}>
                <button onClick={() => onEdit(index)}>Edit</button>
                <button onClick={() => onDelete(index)}>Delete</button>
            </div>
        </div>
    )
}

export default Password;