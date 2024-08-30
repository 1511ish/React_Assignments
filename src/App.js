// src/App.js
import React, { useState, useEffect } from 'react';
import AddPasswordForm from './components/AddPasswordForm';
import SearchForm from './components/SearchForm';
import AllPasswords from './components/AllPasswords';

const App = () => {
  // const [feedbacks, setFeedbacks] = useState([]);
  // const [editIndex, setEditIndex] = useState(null);
  // const [editStatus, setEditStatus] = useState(false);
  const [passwords, setPasswords] = useState([]);
  const [filteredPasswords, setFilteredPasswords] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editStatus, setEditStatus] = useState(false);

  useEffect(() => {
    setFilteredPasswords(passwords);
  }, [passwords])

  const onAdd = (password) => {
    if (editIndex !== null) {
      const updatedPasswords = [...passwords];
      updatedPasswords[editIndex] = password;
      setPasswords(updatedPasswords);
      setEditIndex(null);
    } else {
      setPasswords([...passwords, password]);
    }
  };

  const onEdit = (index) => {
    setEditIndex(index);
    setEditStatus(true);
    console.log("working");
  };

  const onDelete = (index) => {
    const updatedPasswords = passwords.filter((_, i) => i !== index);
    setPasswords(updatedPasswords);
  };

  const searchPassword = (e) => {
    let title = e.target.value;
    title = title.trim();

    const filteredPassword = passwords.filter((password) => {
      return password.title.includes(e.target.value);
    })

    setFilteredPasswords(filteredPassword);
  }


  return (
    <div style={{ padding: '20px' }}>
      <header style={{textAlign:'center'}}>
        <h1 style={{ textAlign: 'center' }}>Password Keeper</h1>
        <label>Total Password: {passwords.length}</label>
        <br />
        <SearchForm search={searchPassword} />
      </header>
      <AddPasswordForm onAdd={onAdd} editStatus={editStatus} editPassword={passwords[editIndex]} />
      <AllPasswords passwords={filteredPasswords} onEdit={onEdit} onDelete={onDelete}/>
    </div>
  );
};

export default App;
