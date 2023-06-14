import './register.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AppleIcon from '@mui/icons-material/Apple';

const Register = () => {


  const navigate = useNavigate()
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function submitReg(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/register", {
      method: "POST",
      body: JSON.stringify({
        userName,
        email,
        password
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    const data = await response.json();
    if (data.message === "User registered successfully") {
      navigate('/login')
    }
    if (data.error) {
      setError(data.error);
    }
    if (response.status === 400) {
      setError(data.message)
    }

    setUserName("");
    setEmail("");
    setPassword("");
  }

  return (

    <div className='containerReg'>

      <div className="wrapperReg">
        <Link to="/" style={{ fontSize: "36px", color: "grey", textDecoration: "none" }}><AppleIcon className='logo' style={{ fontSize: "42px", color: "grey", textDecoration: "none" }} />My iPhone</Link>
        <div className="registration">
          <button className='titleReg'>Sign up</button>
          <Link to="/login">  <button className='titleReg'>Log in</button></Link>
        </div>

        <form onSubmit={submitReg}>
          <input
            className='inpReg'
            placeholder='name'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            className='inpReg'
            placeholder='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='inpReg'
            placeholder='password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="agreement">By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b></p>
          <button className='buttonReg' type="submit">Register</button>
          {error && (<p>{error}</p>)}
        </form>
      </div>
    </div>
  )
}

export default Register;