import { useState, useCallback, useEffect, useRef } from "react";

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let finalPassword = "";
    let str = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";

    if (numberAllowed) {
      str += "0234895671";
    }
    if (charAllowed) {
      str += "!@$%-+#^~&=";
    }

    for (let i = 0; i < length; i++) {
      finalPassword += str[Math.floor(Math.random() * str.length)];
    }

    setPassword(finalPassword);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-96 mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800 font-mono">
        <h1 className="text-white text-center my-3 font-bold text-3xl">Password Generator</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4 h-12 text-2xl">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />

          <button
          onClick={copyPasswordToClipboard}
          className="text-white bg-blue-600 px-3 py-0.5 outline-none shrink-0 hover:bg-blue-700">
            Copy
          </button>
        </div>

        <div className="flex flex-wrap text-sm gap-x-10 text-2xl">
          <div className="flex flex-wrap items-center gap-x-1">
            <input
              type="range"
              min={1}
              max={30}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <label htmlFor="numberInput">Numbers: </label>
            <input
              type="checkbox"
              id="numberInput"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
          </div>

          <div className="flex items-center gap-x-1">
            <label htmlFor="characterInput">Characters: </label>
            <input
              type="checkbox"
              id="characterInput"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
