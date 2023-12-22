import React, { createContext, useState } from "react";

export const ContextLogic = createContext();

export const ContextProvider = (props) => {
  const [value, setValue] = useState("");

  const handleValue = () => {
    try {
      const lastCharIsNumber = !isNaN(value.slice(-1));

      if (!lastCharIsNumber) {
        setValue(value.slice(0, -1));
        return;
      }

      setValue(eval(value));
    } catch (error) {
      setValue(value);
    }
  };

  const addToInput = (newValue) => {
    setValue((prevValue) => prevValue + newValue);
  };

  const clearInput = () => {
    setValue("");
  };

  const deleteLastChar = () => {
    setValue((prevValue) => prevValue.slice(0, -1));
  };

  return (
    <div>
      <ContextLogic.Provider
        value={{
          value,
          setValue,
          handleValue,
          addToInput,
          clearInput,
          deleteLastChar,
        }}
      >
        {props.children}
      </ContextLogic.Provider>
    </div>
  );
};
