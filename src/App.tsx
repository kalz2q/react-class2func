import React from "react";
import "./App.css";
// 
const { useState } = React;
const App = () => {
  const [name, setName] = useState("John Doe");
  const [name2, setName2] = useState("jon do");

  const handleNameInput = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setName(e.target.value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName2(e.target.value);
  };

  return (
    <div className="App">
      <h3>onchange の研究その1 素のママ</h3>
      <input
        type="text"
        placeholder="Your Name"
      ></input>
      <h3>onchange の研究その2 handleNameInput</h3>
      <input
        type="text"
        onChange={(e) => handleNameInput(e)}
        value={name}
        placeholder="Your Name"
      />
      <h3>onchange の研究その3 handleChange</h3>
      <input
        value={name2}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default App;
