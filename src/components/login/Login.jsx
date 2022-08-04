import React from "react";
import './login.css'
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {

  }

  return (
    <div className="login-page">
      <form className="form-signin">
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

        <div class="form-floating">
          <input type="text" class="form-control" id="username" placeholder="username"/>
          <label for="username">Username</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control" id="password" placeholder="Password"/>
          <label for="password">Password</label>
        </div>

        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
      </form>
    </div>
  )
}

export default Login;