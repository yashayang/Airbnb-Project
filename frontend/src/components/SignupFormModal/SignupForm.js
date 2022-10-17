import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupForm() {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);



  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ firstName, lastName, email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
          // console.log("signupForm errors", data.errors)
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <div id="signupContainer">
    <form onSubmit={handleSubmit}>
      <div id='signupTitle'>Sign up</div>
      <div id='fieldContainer'>
        <div id='welcomeDiv'>Welcome to Airbnb</div>
        <ul>
          {errors && errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>
        <div className="inputContainer" id="fNameContainer">
          <label className="signuplabel">First Name
            <input
              // placeholder="First Name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="inputField"
            />
          </label>
        </div>
        <div className="inputContainer" id="lNameContainer">
          <label className="signuplabel">
            Last Name
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="inputField"
            />
          </label>
        </div>
        <div className="inputContainer" id="userNameContainer">
          <label className="signuplabel">
            Username
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="inputField"
            />
          </label>
        </div>
        <div className="inputContainer" id="emailContainer">
          <label className="signuplabel">
            Email
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="inputField"
            />
          </label>
        </div>
        <div className="inputContainer" id="passwordField">
          <label className="signuplabel">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="inputField"
            />
          </label>
        </div>
        <div className="inputContainer" id="cPasswordField">
          <label className="signuplabel">
            Confirm Password
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="inputField"
            />
          </label>
        </div>
        <div>
          <button type="submit" className="styledButton">Sign Up</button>
        </div>
      </div>
    </form>
    </div>
  );
}

export default SignupForm;
