import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [isNumberallowed, setNumberAllowed] = useState(false);
  const [isCharAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";

    if (isNumberallowed) str += "1234567890";
    if (isCharAllowed) str += "!@#$%&*";

    for (let i = 0; i < length; i++) {
      const randomNum = Math.floor(Math.random() * str.length + 1);
      console.log("🚀 ~ generatePassword ~ randomNum:", randomNum);

      pass += str.charAt(randomNum);
    }
    setPassword(pass);
  };

  const passwordRef = useRef(null);

  const copyToClipboard = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  };

  useEffect(() => {
    generatePassword();
  }, [length, isCharAllowed, isNumberallowed]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div>
        <input
          type="text"
          value={password}
          placeholder="Password"
          ref={passwordRef}
        />
        <button
          id="copyButton"
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          onClick={copyToClipboard}
        >
          Copy
        </button>
      </div>
      <div>
        <div>
          <input
            type="range"
            min={6}
            max={50}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length: {length}</label>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={isNumberallowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label>Numbers</label>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={isCharAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label>Special characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
