import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [name, setName] = useState("John Doe");
  const alertName = () => {
    alert(name);
  };

  const handleNameInput = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setName(e.target.value);
  };


  return (
    <div className="App">
      <h3>This is a Functional Component</h3>
      <input
        type="text"
        onChange={handleNameInput}
        value={name}
        placeholder="Your Name"
      />
      <button onClick={alertName}>Alert</button>
    </div>
  );
};

export default App;
