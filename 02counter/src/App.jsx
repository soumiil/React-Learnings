import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let counter = 5;

  const addValue = () => {
    console.log("Clicked", counter);
    counter = counter + 1;
    return counter;
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button>Remove Value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
