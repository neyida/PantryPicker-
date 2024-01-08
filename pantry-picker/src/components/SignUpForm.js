import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpForm.css"; 
import Logo from '../logoPP.png';


const SignUpForm = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const createUser = async (name, email, password) => {
    // Implementation of createUser function
    // ...
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createUser(firstname,lastname, email, password);
    navigate("/home");
  };

  return (
    <div>
      <div className="logo-container">
        <img src={Logo} alt="App Logo" className="logo" />
      </div>
      <form onSubmit={handleSubmit}>
        <div id = "name">
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={firstname}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              value={lastname}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <div className="footer">
        <p>Already have an account?</p>
        <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default SignUpForm;