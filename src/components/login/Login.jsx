import React from "react";
import './login.css'
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { selectAuth, authenticate } from "../../store/userSlice";


const Login = () => {
  const dispatch = useDispatch();
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [failedAttempt, setFailedAttempt] = useState(false);
  const authenticated = useSelector(selectAuth)

  const handleChange = (e) => {
    const input = e.target.value;
    const type = e.target.id;
    if (type === 'username') {
      setUsernameInput(input)
    } else {
      setPasswordInput(input)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authenticate(usernameInput, passwordInput))
    if (!authenticated) {
      setFailedAttempt(true)
    }
  }

  // Submit mock-user data
  const handleClick = () => {
    dispatch(authenticate('johnd', 'm38rmF$'))
  }

  return (
    <div className="login-page">
      <form className="form-signin" onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input type="text" className={failedAttempt ? "form-control is-invalid" : "form-control"} id="username" placeholder="username" onChange={handleChange}/>
          <label htmlFor="username">Username</label>
        </div>
        <div className="form-floating">
          <input type="password" className={failedAttempt ? "form-control is-invalid" : "form-control"} id="password" placeholder="Password" onChange={handleChange}/>
          <label htmlFor="password">Password</label>
        </div>
        {failedAttempt ? 
          <div className="invalid-feedback d-block">
            Invalid username or password
          </div>
          :
          <div className="invalid-feedback d-block">
          </div>
        }
        
        <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">Sign in</button>
        <button className="w-100 btn btn-lg btn-primary mt-3" type="button" onClick={handleClick}>Sign in with mock-user</button>
      </form>
    </div>
  )
}

export default Login;