import Typography from "@material-ui/core/Typography";
import React from "react";

export default function ObjectPage() {
  const women = {
    name: "Nancy",
    age: 24,
  };

  return (
    <Typography>
      {women.name} is {women.age}
    </Typography>
  );
}
