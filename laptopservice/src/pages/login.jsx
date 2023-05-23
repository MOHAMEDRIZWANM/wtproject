import React, { useState,useNavigate} from 'react';
import "../css/login.css"

import { Link } from 'react-router-dom';
function LoginPage() {
    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:3000/user/${email}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
          })
          .then(res => res.json())
          .then(data => {
            if(data?.email===email){
                alert('Login');
            }
            else{
                alert('Not found');
            }
            console.log(data)
          })
          .catch(err => console.log(err));
    };

    return (

        <div id="login-container">
            <h1>Login</h1>
            <form>
                <label for="usermail">Usermail:</label>
                <input type="text" name="username" required placeholder='Email' onChange={handleUsernameChange}/>
                    <label for="password">Password:</label>
                    <input type="password" id="password" name="password" required  placeholder='Password' onChange={handlePasswordChange}/>
                    <Link to='/sign'><input type="submit" value="Login" onClick={handleSubmit}/></Link>
             </form>
            </div>

                    );
}

export default LoginPage
