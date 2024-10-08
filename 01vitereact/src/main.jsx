import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import React from "react"

function MyApp() {
  return (
    <>
      <h1>Custom React !</h1>
    </>
  );
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank',
//   },
//   children: 'Click me to visit Google'
// }

const anotherElement = (
  <a href="https://google.com" target="_blank">Visit Google</a>
)

const anotherUser = "Chai aur React"

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to visit google',
  anotherUser
)

createRoot(document.getElementById("root")).render(
    // <App/>
    reactElement
);
