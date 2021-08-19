import React, { useState } from "react";
import { Button, Typography } from "@material-ui/core";

export default function Score() {
  const [score, setScore] = useState(0);
  return (
    <div>
      <Typography variant="h1">{score}</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setScore(score + 1)}
      >
        +
      </Button>
      <Button variant="contained" color="secondary" onClick={() => setScore(0)}>
        Reset
      </Button>
    </div>
  );
}
