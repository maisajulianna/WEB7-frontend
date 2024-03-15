import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useLogin  from "../hooks/useLogin";
import useField from "../hooks/useField";

const Login = () => {
  const emailInput = useField("email");
  const passwordInput = useField("password");
  const navigate = useNavigate();

  const { handleLogin, isLoading, error } = useLogin();

  const handler = (e) => {
    e.preventDefault();
    handleLogin({ 
      email: emailInput.value, 
      password: passwordInput.value
    });

    if (!error) {
      console.log("Login successful");
      navigate("/home");
    }
  };
  
  return (
    <form className="login-box" onSubmit={handler}>
      <h2>Login</h2>
      <p>Welcome to our website!</p>
      <label>
        <input id="email" placeholder="Email" required {...emailInput}/>     
      </label>
      <br />

      <label>
        <input id="password" placeholder="Password" {...passwordInput}/>
      </label>
      <br />
      
      <div className="buttons">
        <button type="submit" className="turq-btn">Log in</button>
      </div>
      
      <p>Don't have an account?<br />
        <Link className="link-btn" to="/signup">Sign up here!</Link>
      </p>

    </form>
  );
};

export default Login;
