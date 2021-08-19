import React, {useState} from "react";
import {Link} from "react-router-dom";

export default function Score() {
    const [score, setScore] = useState(0);
        return (
        <div>
        <Link to="/">Home</Link>
        <h1>{score}</h1>
        <button onClick={() => setScore(score+1)}>+</button>
        <button onClick={() => setScore(0)}>Reset</button>
        </div>
    )
}