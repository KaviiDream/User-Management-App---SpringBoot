import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function UserForm() {

    const [userId, setUserId] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(
            !userId ||
            !userName||
            !email||
            !phone
        ){
            alert("All fields are mandatory!");
            return;
        }

    const newUser = {
        id: userId,
        name: userName,
        email: email,
        phone: phone
    }

    axios.post("http://localhost:8085/api/v1/addUser", newUser).
    then(()=>{
        alert("User added successfully");
        navigate("/users");
        setUserId('');
        setUserName('');
        setEmail('');
        setPhone('');
    }).catch((err)=>{
        alert("Error adding user");
        console.log(err);
    })
        
    }

  return (
    <div>

        <h2>User Managing Form</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="userId">User ID:</label>
                <input
                    type="text"
                    id="userId"
                    name="userId"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="username">User Name:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input

                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="phone">Phone:</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>
            <button type='submit'>Add User</button>

        </form>
    </div>
  )
}

export default UserForm
