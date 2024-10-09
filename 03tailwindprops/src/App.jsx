import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    username: "Soumil",
    age: 21,
  };
  let myArr = [1, 2, 3];

  return (
    <>
      <Card username="Soumil Agarwal" btnText="Visit Here" />
      <Card username="Lorem" btnText="Click Me" />
    </>
  );
}

export default App;
