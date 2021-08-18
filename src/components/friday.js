import React, {useState} from "react";
import {Link} from "react-router-dom";

export default function Friday () {
    const [startYear, setStartYear] = useState('');
    const [endYear, setEndYear] = useState('');

    return(
        <div>
            <Link to="/">Home</Link>
            <a href="https://www.codewars.com/kata/540954232a3259755d000039/javascript">Challenge info</a>
            <h1>Friday the 13th Calculator</h1>
            <h2>Please enter your start and end years below:</h2>
            <h3>Start Year</h3>
            <input onChange={e => setStartYear(e.target.value)}></input>
            <h3>End Year</h3>
            <input onChange={e => setEndYear(e.target.value)}></input>
            <button onClick={() => console.log(new Date(startYear) + ' ' + new Date(endYear))}>Calculate</button>
        </div>
    )
}