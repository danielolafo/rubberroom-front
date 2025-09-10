import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Login(){

    const defaultUsername = 'user';
    const defaultPassword = 'pass';
    const defaultToken = 'Bearer tok';

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [formValues, setFormValues] = useState({
        username:   '',
        password:  ''
    });

    const handleSubmit=(event)=>{
        event.preventDefault();
        
        if(formValues.username==defaultUsername && formValues.password==defaultPassword){
            sessionStorage.setItem('token', defaultToken);
            navigate('/');
        }
    }

    const handleChange=(event)=>{
        event.preventDefault();
        const {name, value} = event.target;
        setFormValues((prevValues)=>({
            ...prevValues,
            [name]:value
        }));
    }

    return (
        <div>
            <form>
                <div>
                    <label>Username</label>
                    <input type="text" name="username" onChange={handleChange} value={formValues.username} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" name="password"  onChange={handleChange} value={formValues.password} />
                </div>
                <div>
                    <button type='submit' onClick={handleSubmit}>Login</button>
                </div>
            </form>
        </div>
    );

}

export default Login;