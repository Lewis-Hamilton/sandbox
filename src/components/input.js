import React, {useState} from "react";
import {Link} from "react-router-dom";

export default function Input() {
  const [money, setMoney] = useState('');

  const calculateMoney = ()  => {
    console.log(money/2)
  }

  return(
    <div>
      <Link to="/">Home</Link>
      <input onChange={e => setMoney(e.target.value)}/>
      <button onClick={() => calculateMoney()}>Calculate</button>
    </div>
  )

};