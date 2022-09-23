import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  const handleDemoUser = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(
        sessionActions.login({credential: 'Demo-lition', password: 'password'})
    ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
    });
};

  return (
    <div id="loginContainer">
    <form onSubmit={handleSubmit}>
    <div id="loginTitle">Log In</div>
      <div id="fieldContainer">
      <div id="welcomeDiv">Welcome to AirBnB</div>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <div className="inputContainer" id="emailContainer">
      <label className="inputLabel">
        Username or Email
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
          className="inputField"
        />
      </label>
      </div>
      <div className="inputContainer" id="passwordContainer">
      <label className="inputLabel">
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
      <div>
      <button className="styledButton" type="submit">Log In</button>
      <button className="styledButton" onClick={handleDemoUser}>Demo User</button>
      </div>
    </div>
    </form>
    </div>
  );
}

export default LoginForm;
