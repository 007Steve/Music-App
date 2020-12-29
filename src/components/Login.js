import React, { useState } from "react";
import "../styles/Login.css";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const setUserHandler = (e) => {
    e.preventDefault();
    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedin: true,
      })
    );
  };
  console.log(email);
  return (
    <div className="login">
      <iframe
        id="b5f265b1-cfc1-4e17-bd8d-53bbaf3c9736"
        src="https://www.vectary.com/viewer/v1/?model=b5f265b1-cfc1-4e17-bd8d-53bbaf3c9736&env=studio3"
        frameborder="0"
        width="100%"
        height="480"
      ></iframe>
      <h2 className="login-title">Sign in </h2>
      <form className="login-form">
        <label>Username</label>
        <input
          className="login-input name"
          type="name"
          required
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>E-Mail</label>
        <input
          className="login-input email"
          type="text"
          required
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="login-input email"
          type="password"
          required
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <button
        className="login-btn"
        disabled={!name}
        type="submit"
        onClick={setUserHandler}
      >
        Sign in
      </button>
      <br />
    </div>
  );
}

export default Login;
