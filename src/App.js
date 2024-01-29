import React, { useState } from "react";
import "./App.css";
import Grid from "./components/Grid";

function App() {
  const [inputText, setInputText] = useState("");
  const [elements, setElements] = useState([]);

  const parseInput = (text) => {
    // each line is a new element
    const lines = text.trim().split("\n");
    const elements = lines.map((line) => {
      const parts = line.split(";");
      // Adjusted for SELECT values
      const value = parts[3] === "SELECT" ? parts[4].split(",") : parts[4];
      return {
        line: parseInt(parts[0], 10),
        column: parseInt(parts[1], 10),
        label: parts[2],
        type: parts[3],
        value,
      };
    });
    setElements(elements);
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  // New function to handle button click for manual update
  const handleUpdateClick = () => {
    parseInput(inputText);
  };

  return (
    <div className="App">
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter grid definition here"
      />
      <button onClick={handleUpdateClick}>Update Grid</button>
      <Grid elements={elements} />
    </div>
  );
}

export default App;
