import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import useSignup from "../hooks/useSignup";
import useField from "../hooks/useField";

const Signup = () => {
  const emailInput = useField("email");
  const passwordInput = useField("password");
  const firstNameInput = useField("text");
  const lastNameInput = useField("text");
  const phoneNumberInput = useField("text");
  const navigate = useNavigate();

  const { handleSignup, error } = useSignup();
  console.log(emailInput, passwordInput, firstNameInput, lastNameInput, phoneNumberInput);

  const handler = (e) => {
    e.preventDefault();
    handleSignup( 
      emailInput.value,
      passwordInput.value,
      firstNameInput.value,
      lastNameInput.value,
      phoneNumberInput.value);
    if (!error) {
      console.log("Signed up successfully");
    } else {
      console.log("Error: ", error);
    }
    console.log("moi")
    navigate("/home");
  };
  
  return (
    <form className="login-box" onSubmit={handler}>
      <h2>Sign up</h2>
      <p>Please fill the form to register.</p>
      <label>
        <input id="email" placeholder="Email" required {...emailInput} />
      </label>
      <br />

      <label>
        <input placeholder="Password" {...passwordInput}/>
      </label>
      <br />

      <label>
        <input id="firstname" placeholder="First Name" {...firstNameInput}/>     
      </label>
      <br />

      <label>
        <input id="lastname" placeholder="Last Name" {...lastNameInput}/>
      </label>
      <br />

      <label>
        <input id="phonenumber" placeholder="Phonenumber" {...phoneNumberInput}/>
      </label>
      <br />
      
      <div className="buttons">
        <button>Sign up</button>
      </div>

      <p className='login-footer'>Already have an account?<br />
        <Link className="link-btn" to="/login">Login here!</Link>
      </p>
    </form>
  );
};

export default Signup;