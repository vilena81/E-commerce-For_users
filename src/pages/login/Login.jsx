import React from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import AppleIcon from '@mui/icons-material/Apple';
import { useState } from 'react'; 
import Apple from '/public/apple.png'

const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitLog = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      localStorage.setItem('token', data.jwt);

      if (data.jwt && data.role === 1) {
        navigate('/admin');
      } else if (data.jwt && data.role === 0) {
        navigate('/product');
      }

      if (data.error) {
        setError(data.error);
      }

      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Login error:', error);
    }
  };


  return (
    <div className='containerLog'>
      
      <div className="wrapperLog">
        <Link to="/" style={{ fontSize: "36px", color: "grey", textDecoration: "none" }}><AppleIcon className='logo' style={{ fontSize: "42px", color: "grey", textDecoration: "none" }} />My Apple</Link>
        <div className="registration">
          <Link to="/register">
          <button className="titleReg">Sign up</button>
          </Link>
            <button className="titleReg">Log in</button>
          
        </div>
        <form className='formLog' onSubmit={submitLog}>
        <input
            className="inpLog"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input

            className="inpLog"
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='buttonLog' type='submit'>LOGIN</button>
          {error && (<p>{error}</p>)}
          {/* <Link className='linkLog'>DO NOT REMEMBER THE PASSWORD?</Link>
          <Link to="/register" className='linkLog'>CREATE a NEW ACCOUNT</Link> */}
        </form>
      </div>
      <div className="wrapperRight">
        <img src={Apple}/>
      </div>
    </div>
  )
}

export default Login


