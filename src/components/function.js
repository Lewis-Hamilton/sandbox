import React from "react";
import {Link} from "react-router-dom";
import Bill from './bill.js';
import Test from './myArray.js';

function newFunction() {
    console.log("testing")
}

function Function() {
    return (
        <div>
        <Link to="/">Home</Link>
        <Bill name="Bill" age="69"></Bill>
        <Test number="8"></Test>
        </div>
    )

}

export default Function;
export default newFunction;