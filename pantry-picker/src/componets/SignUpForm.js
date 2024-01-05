import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpForm.css"; 


const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const createUser = async (name, email, password) => {
    // Implementation of createUser function
    // ...
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createUser(name, email, password);
    navigate("/home");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;