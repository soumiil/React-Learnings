import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [name, setName] = useState("Soumil");

  return (
    <div>
      <h1>Hi, {name}</h1>
      <button
        onClick={() => {
          setName("Soumil Agarwal");
        }}
      >
        Hi, {name}
      </button>
    </div>
  );
}

export default App;
