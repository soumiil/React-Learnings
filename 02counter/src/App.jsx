import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  /* first one is variable, and the second is function which is responsible for updating the first one */

  const addValue = () => {
    if(counter !== 20)
    setCounter(counter + 1);
  };

  const removeValue = () => {
    if(counter !== 0)
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>{counter}</h1>

      <button onClick={addValue}>Add value: {counter}</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value: {counter}</button>
    </>
  );
}

export default App;