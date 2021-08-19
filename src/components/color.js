import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";

export default function Color() {
  const [color, setColor] = useState("");
  const [font, setFont] = useState(32);

  const textStyle = {
    color: color,
    fontSize: font,
  };

  return (
    <div>
      <Typography style={textStyle}>Hello World</Typography>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setColor("") + setFont(32)}
      >
        Reset
      </Button>
      <TextField
        label="Enter a color"
        variant="outlined"
        onChange={(e) => setColor(e.target.value)}
      />
      <Typography variant="h5">Or choose a preset:</Typography>
      <Button variant="contained" onClick={() => setColor("red")}>
        Red
      </Button>
      <Button variant="contained" onClick={() => setColor("green")}>
        Green
      </Button>
      <Button variant="contained" onClick={() => setColor("blue")}>
        Blue
      </Button>
      <Button variant="contained" onClick={() => setColor("black")}>
        Black
      </Button>
      <Button variant="contained" onClick={() => setColor("purple")}>
        Purple
      </Button>
      <Button variant="contained" onClick={() => setColor("yellow")}>
        Yellow
      </Button>
      <Button variant="contained" onClick={() => setColor("orange")}>
        Orange
      </Button>
      <Button variant="contained" onClick={() => setColor("brown")}>
        Brown
      </Button>
      <TextField
        label="Enter a font size"
        variant="outlined"
        onChange={(e) => setFont(parseInt(e.target.value))}
      />
      <Typography variant="h5">Or use the Buttons below</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setFont(font + 1)}
      >
        +
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setFont(font - 1)}
      >
        -
      </Button>
    </div>
  );
}
