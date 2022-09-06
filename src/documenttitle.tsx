import React, { useState, useEffect } from "react";
import "./App.css";
// no.5 change title

const App = () => {
  const [header, setHeader] = useState("Welcome to React Hooks");

  useEffect(() => {
    // const newheader = document.querySelectAll("#header")[0];
    // setTimeout(() => {
    //   document.title = `${header}`;
    // }, 5000);
    document.title = `${header}`;
  });

  const handleHeaderInput = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setHeader(e.target.value);
  };

  return (
    <div className="App">
      <h3 id="header">This is a Functional Component</h3>
      <input type="text" onChange={handleHeaderInput} value={header} />
    </div>
  );
};

export default App;
