import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

export default function Friday() {
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");

  return (
    <div>
      <Typography variant="h3">Friday the 13th Calculator</Typography>
      <Typography>
        <Link
          href="https://www.codewars.com/kata/540954232a3259755d000039/javascript"
          target="_blank"
        >
          Challenge info
        </Link>
      </Typography>
      <Typography variant="h5">
        Please enter your start and end years below:
      </Typography>
      <TextField
        label="Start Year"
        variant="outlined"
        onChange={(e) => setStartYear(e.target.value)}
      ></TextField>
      <TextField
        label="End Year"
        variant="outlined"
        onChange={(e) => setEndYear(e.target.value)}
      ></TextField>
      <Button
        variant="contained"
        color="primary"
        onClick={() =>
          console.log(new Date(startYear) + " " + new Date(endYear))
        }
      >
        Calculate
      </Button>
    </div>
  );
}
