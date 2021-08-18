import React, {useState} from "react";
import {Link} from "react-router-dom";

export default function Array() {
  const [people, setPeople] = useState([
      {
          name: "Lewis"
      },
      {
          name: "Kegen"
      }
  ]);
  const [userName, setUserName] = useState('')

  return(
    <div>
      <Link to="/">Home</Link>
    <h1>{people[0].name}</h1>
    <ul>{people.map( people => <li>{people.name}</li>)}</ul>
    <input onChange={e => setUserName(e.target.value)}></input>
    <button onClick={() => setPeople(people.concat({name: userName}))}>Add Person</button>
    </div>
  )

};