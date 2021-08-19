import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function Input() {
  const [money, setMoney] = useState("");

  const calculateMoney = () => {
    console.log(money / 2);
  };

  return (
    <div>
      <TextField
        label="Enter $ Amount"
        variant="outlined"
        onChange={(e) => setMoney(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => calculateMoney()}
      >
        Calculate
      </Button>
    </div>
  );
}
