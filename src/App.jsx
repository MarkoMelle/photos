import React from "react";
import "./App.css";
import PhotoAdd from "./components/PhotoAdd/PhotoAdd";
import PhotoList from "./components/PhotoList/PhotoList";


function App() {
  return (
    <div className="App">
      <PhotoAdd />
      <br />
      <PhotoList />
    </div>
  );
}

export default App;
