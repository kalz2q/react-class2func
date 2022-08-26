import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [userName, setUsername] = useState("johndoe");
  const [firstName, setFirstname] = useState("John");
  const [lastName, setLastname] = useState("Doe");

  useEffect(() => {
    setInterval(() => {
      setUsername("janedoe");
      setFirstname("Jane");
      setLastname("Doe");
    }, 5000);
  });

  const logName = () => {
    console.log(userName);
    console.log(firstName);
    console.log(lastName);
  };

  const handleUserNameInput = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setUsername(e.target.value);
  };

  const handleFirstNameInput = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setFirstname(e.target.value);
  };

  const handleLastNameInput = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setLastname(e.target.value);
  };

  return (
    <div className="App">
      <h3>This is a Functional Component</h3>
      <input
        type="text"
        onChange={handleUserNameInput}
        value={userName}
        placeholder="Your Username"
      />
      <input
        type="text"
        onChange={handleFirstNameInput}
        value={firstName}
        placeholder="Your First Name"
      />
      <input
        type="text"
        onChange={handleLastNameInput}
        value={lastName}
        placeholder="Your Last Name"
      />
      <button className="btn btn-large right" onClick={logName}>
        Log Names
      </button>
    </div>
  );
};

export default App;
