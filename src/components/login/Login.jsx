import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './login.css';
// Store
import { selectAuth, authenticate } from "../../store/userSlice";


const Login = () => {
  const dispatch = useDispatch();
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [failedAttempt, setFailedAttempt] = useState(false);
  const authenticated = useSelector(selectAuth);

  // On input change set username and password to be autheticated
  const handleChange = (e) => {
    const input = e.target.value;
    const type = e.target.id;
    if (type === 'username') {
      setUsernameInput(input);
    } else {
      setPasswordInput(input);
    }
  }

  // On submit check authentication
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authenticate(usernameInput, passwordInput));
    if (!authenticated) {
      setFailedAttempt(true);
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
        {/* Username Field */}
        <div className="form-floating">
          <input type="text" className={failedAttempt ? "form-control is-invalid" : "form-control"} id="username" placeholder="username" onChange={handleChange}/>
          <label htmlFor="username">Username</label>
        </div>
        {/* Password Field */}
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
        {/* Submit Buttons */}
        <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">Sign in</button>
        <button className="w-100 btn btn-lg btn-primary mt-3" type="button" onClick={handleClick}>Sign in with mock-user</button>
      </form>
    </div>
  )
}

export default Login;