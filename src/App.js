import './App.css';
import React from 'react';

const styledText = {
  fontSize: "25px",
  textAlign: "center",
  margin: "40px",
  border: "1px solid green"
};

function App() {
  return (
    <div className="App" style={styledText}>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
