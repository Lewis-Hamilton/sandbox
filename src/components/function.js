import React from "react";
import Button from "@material-ui/core/Button";

export default function Function() {
  const newFunction = (name, age) => {
    return alert(name + " is " + age + " years old.");
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => newFunction("Bill", 69)}
      >
        Bill
      </Button>
    </div>
  );
}
