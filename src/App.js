import React, { useContext } from "react";
import "./App.css";
import { ContextLogic } from "./contexts/contextLogic";

function App() {
  const {
    value,
    setValue,
    handleValue,
    addToInput,
    clearInput,
    deleteLastChar,
  } = useContext(ContextLogic);

  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className="display">
            <input type="text" value={value} readOnly />
          </div>
          <div>
            <input type="button" value="AC" onClick={clearInput} />
            <input type="button" value="DE" onClick={deleteLastChar} />
            <input
              type="button"
              value="."
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="/"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              value="7"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="8"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="9"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="*"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              value="4"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="5"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="6"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="+"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              value="1"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="2"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="3"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="-"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div>
            <input
              type="button"
              value="00"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="0"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              type="button"
              value="="
              className="equal"
              onClick={handleValue}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
