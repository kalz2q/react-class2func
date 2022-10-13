import React from "react";
import "./App.css";

const App = () => {
  const alertName = () => {
    alert("John Doe");
  };
  return (
    <div className="App">
      <h3>This is a Functional Component</h3>
      <button onClick={alertName}>Alert</button>
    </div>
  );
};

export default App;
