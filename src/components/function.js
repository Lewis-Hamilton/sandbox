import React from "react";
import {Link} from "react-router-dom";

export default function Function() {
    const newFunction=(name, age) => {
        return alert(name + ' is ' + age + ' years old.');
    }

    return (
        <div>
            <Link to="/">Home</Link>
            <button onClick={() => newFunction('Bill', 69)}>Bill</button>
        </div>
    )
}