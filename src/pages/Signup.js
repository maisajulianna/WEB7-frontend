// components/Registration.js
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import useSignup from "../hooks/useSignup";
import useField from "../hooks/useField";

const SignupComponent = ({ setIsAuthenticated }) => {
  const usernameInput = useField("text");
  const emailInput = useField("email");
  const passwordInput = useField("password");
  const password2Input = useField("password");
  const navigate = useNavigate();

  const { handleSignup } = useSignup();

  const handler = (e) => {
    e.preventDefault();
    handleSignup( 
      usernameInput.value,
      emailInput.value,
      passwordInput.value,
      password2Input.value
    );
    if (!e) {
      console.log("Registration successful");
    }
    navigate("/");
  };
  
  return (
    <form className="login-box" onSubmit={handler}>
      <h2>Sign up</h2>
      <p>Please fill the form to register.</p>
      <label>
        <input id="username" placeholder="Username" required {...usernameInput}/>     
      </label>
      <br />
      <label>
        <input id="email" name="email" placeholder="Email" required {...emailInput} />
      </label>
      <br />
      <label>
        <input placeholder='Password' {...passwordInput}/>
      </label>
      <label>
        <input placeholder='Confirm Password' {...password2Input}/>
      </label>
      <br />
      
      <div className="buttons">
        <button className="turq-btn">Sign up</button>
      </div>
      <p>Already have an account?<br />
        <Link className="link-btn" to="/login">Login here!</Link>
        </p>
    </form>
  );
};

export default SignupComponent;