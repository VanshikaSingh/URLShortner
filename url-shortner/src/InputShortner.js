import React from "react";
import { useState } from "react";

function InputShortner({ setInputValue }) {
  const [value, setValue] = useState("");

const handleClick = (e) =>{
  e.preventDefault()
  setInputValue(value);
  setValue('')
}
  return (
    <div className="inputContainer">
      <h1>
        URL
        <span> Shortner</span>
      </h1>
      <div>
        <input
          type="text"
          placeholder="Paste a link here to shorten it"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleClick}>Shorten</button>
      </div>
    </div>
  );
}

export default InputShortner;
