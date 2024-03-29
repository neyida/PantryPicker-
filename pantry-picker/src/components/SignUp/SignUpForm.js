import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUpForm.css"; 
import Logo from '../../logoPP.png';


const SignUpForm = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser =  (name, email, password) => {
    // Implementation of createUser function
    // ...
    console.log(name, email, password);
    const userInfo = {
      userName: name,
      userEmail: email,
      userPassword: password
    }
    
    fetch('http://localhost:3002/createUser',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify({userInfo: userInfo})
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    createUser(firstname + " " + lastname, email, password);
  };

  return (
    <body>
      <div className="logo-container">
        <Link to = {"/"}>
          <img src={Logo} alt="App Logo" className="logo"/>
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <div id = "name">
          <div id = "first">
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
        <div id = "userInfo">
          <div id = "email" className="inputDiv">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="inputDiv">
            <input
              type= {showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <label for="check">Show Password</label>
                <input
                    id="check"
                    type="checkbox"
                    value={showPassword}
                    onChange={() =>
                        setShowPassword((prev) => !prev)
                    }
                />
          </div>
        </div>
        {/* needs to redirect to an email confirmation page */}
        <Link to = {"/"}>
          <button type="submit">
              Sign Up
            </button>
        </Link>
      </form>
      <div className="footer">
        <p>Already have an account?</p>
        <a href="/login">Login</a>
      </div>
    </body>
  );
};

export default SignUpForm;

//probably need to make another form that asks for email confirmation with a service