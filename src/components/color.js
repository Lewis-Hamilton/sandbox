import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Color() {
  const [color, setColor] = useState("");
  const [font, setFont] = useState(32);

  const textStyle = {
    color: color,
    fontSize: font,
  };

  return (
    <div>
      <Link to="/">Home</Link>
      <p style={textStyle}>Hello World</p>
      <button onClick={() => setColor("") + setFont(32)}>Reset</button>
      <p>Enter a color</p>
      <input onChange={(e) => setColor(e.target.value)} />
      <p>Or choose a preset:</p>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("black")}>Black</button>
      <button onClick={() => setColor("purple")}>Purple</button>
      <button onClick={() => setColor("yellow")}>Yellow</button>
      <button onClick={() => setColor("orange")}>Orange</button>
      <button onClick={() => setColor("brown")}>Brown</button>
      <p>Enter a font size:</p>
      <input onChange={(e) => setFont(parseInt(e.target.value))} />
      <p>Or use the buttons below</p>
      <button onClick={() => setFont(font + 1)}>+</button>
      <button onClick={() => setFont(font - 1)}>-</button>
    </div>
  );
}
