import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const incrementValue = () => {
    counter += 1;
    setCounter(counter);
  };

  const decrementValue = () => {
    if (counter) {
      counter -= 1;
    }
    setCounter(counter);
  };
  return (
    <>
      <h1>Hello with Couunter</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={incrementValue}>Increase</button>
      <br />
      <button onClick={decrementValue}>Decrease</button>
    </>
  );
}

export default App;
