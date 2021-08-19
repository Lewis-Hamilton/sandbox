import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function Array() {
  const [people, setPeople] = useState([
    {
      name: "Lewis",
    },
    {
      name: "Kegen",
    },
  ]);
  const [userName, setUserName] = useState("");

  return (
    <div>
      <Typography variant="h1">{people[0].name}</Typography>
      <List>
        {people.map((people) => (
          <ListItem>
            <ListItemText>{people.name}</ListItemText>
          </ListItem>
        ))}
      </List>
      <TextField
        label="Enter a Name"
        variant="outlined"
        onChange={(e) => setUserName(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => setPeople(people.concat({ name: userName }))}
      >
        Add Person
      </Button>
    </div>
  );
}
