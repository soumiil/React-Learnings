import { useState, useEffect } from "react";
import "./App.css";
import { sculptureList } from "./data";


function App() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1)
  }

  let sculpture = sculptureList[index]
  return (
    <>
    <button onClick={handleClick}>
      Next
    </button>
    <img src={sculpture.url} alt="" />
    </>
  );
}

export default App;
