import React, { useState } from 'react';
import "../css/signin.css"

function SigninPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name:username, email:email, password:password })
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
  };

  return (
    <div id="signin-container">
    <h1>Sign In</h1>
    <form onSubmit={handleSubmit}>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" onChange={handleUsernameChange} required/>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" onChange={handleEmailChange} required/>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" onChange={handlePasswordChange} required/>
      <input type="submit" value="Sign In" />
    </form>
  </div>
  );
}

export default SigninPage;
