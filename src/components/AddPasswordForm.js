import React, { useState, useEffect } from 'react';

const AddPasswordForm = ({ onAdd, editStatus, editPassword }) => {
    const [title, setTitle] = useState('');
    const [password, setPassword] = useState();

    useEffect(() => {
        if (editStatus && editPassword) {
            setTitle(editPassword.title || '');
            setPassword(editPassword.password || '');
        }
    }, [editStatus, editPassword]); // Include dependencies to re-run effect when they change

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd({ title, password });
        setTitle('');
        setPassword('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title: </label>
                <input
                    id='title'
                    type="text"
                    placeholder="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input
                    id='password'
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Submit Feedback</button>
        </form>
    );
};

export default AddPasswordForm;
