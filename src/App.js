import "./App.css";
import { useState, useRef, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [counter, setCounter] = useState(0);
  const inputEl = useRef("");
  const prevCounterRef = useRef("");

  useEffect(() => {
    prevCounterRef.current = counter
  }, [counter]);

  console.log(inputEl);
  const resetButton = () => {
    setName("");
    inputEl.current.focus();
  };


  return (
    <div className="App">
      <input
        type="text"
        name="name"
        autoComplete="off"
        value={name}
        ref={inputEl}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={resetButton}>Reset</button>
      <h1>My name is {name}</h1>
      <hr />
      <h1>Random Counter : {counter}</h1>
      {typeof prevCounterRef.current !== "undefined" && (
        <h2>Previous Counter : {prevCounterRef.current}</h2>
        )}
      <button onClick={(e) => setCounter(Math.ceil(Math.random() * 100))}>Generate Number</button>
    </div>
  );
}

export default App;
